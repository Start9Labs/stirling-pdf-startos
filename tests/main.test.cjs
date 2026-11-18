const assert = require('node:assert/strict')
const { execFileSync } = require('node:child_process')
const { readFileSync } = require('node:fs')
const { test } = require('node:test')
const { runInNewContext } = require('node:vm')
const ts = require('typescript')

async function launch(memory) {
  const daemons = {}
  const chain = {
    addOneshot() {
      return this
    },
    addDaemon(name, config) {
      daemons[name] = config
      return this
    },
  }
  const mounts = {
    mountVolume() {
      return this
    },
  }
  const dependencies = {
    '@start9labs/start-sdk': {},
    'node:os': { totalmem: () => memory },
    './fileModels/store.json': {
      storeJson: {
        read: () => ({
          const: async () => ({
            adminUsername: 'admin',
            adminPassword: 'test-password',
            serverFileStorage: false,
          }),
        }),
      },
    },
    './i18n': { i18n: (value) => value },
    './sdk': {
      sdk: {
        setupMain: (fn) => fn,
        SubContainer: { of: () => ({}) },
        Mounts: { of: () => mounts },
        Daemons: { of: () => chain },
      },
    },
    './utils': {
      tessdataDir: '/usr/share/tesseract-ocr/5/tessdata',
      uiPort: 8080,
    },
  }
  const exports = {}
  const { outputText } = ts.transpileModule(
    readFileSync('startos/main.ts', 'utf8'),
    {
      compilerOptions: { module: ts.ModuleKind.CommonJS },
    },
  )
  runInNewContext(outputText, {
    exports,
    require: (name) => {
      assert.ok(name in dependencies, `Unexpected dependency: ${name}`)
      return dependencies[name]
    },
  })
  await exports.main({ effects: {} })
  return daemons.primary.exec
}

test('primary launch disables Base64 intrinsics without replacing managed heap or base options', async () => {
  for (const [gib, xms, xmx] of [
    [1, 256, 512],
    [4, 512, 2048],
    [16, 512, 3072],
  ]) {
    const exec = await launch(gib * 1024 ** 3)
    assert.deepEqual(Array.from(exec.command), [
      'tini',
      '--',
      '/scripts/init.sh',
    ])
    assert.equal(
      exec.env.JAVA_CUSTOM_OPTS,
      `-Xms${xms}m -Xmx${xmx}m -XX:-UseBASE64Intrinsics`,
    )
    assert.equal(exec.env.JAVA_TOOL_OPTIONS, undefined)
    assert.equal(exec.env._JVM_OPTS, undefined)
    assert.equal(exec.env.STIRLING_AOT_ENABLE, undefined)
    assert.equal(exec.env.SECURITY_ENABLELOGIN, 'true')
    assert.equal(exec.env.SECURITY_INITIALLOGIN_PASSWORD, 'test-password')
    assert.equal(exec.env.TINI_SUBREAPER, '1')
  }
})

test(
  'upstream init passes managed options to the actual JVM',
  {
    skip: !process.env.STIRLING_TEST_IMAGE,
  },
  async () => {
    const exec = await launch(1024 ** 3)
    let output
    try {
      output = execFileSync(
        'docker',
        [
          'run',
          '--rm',
          '--entrypoint',
          'timeout',
          ...Object.entries(exec.env).flatMap(([key, value]) => [
            '-e',
            `${key}=${value}`,
          ]),
          '-e',
          `JAVA_CUSTOM_OPTS=${exec.env.JAVA_CUSTOM_OPTS} -XX:+PrintFlagsFinal`,
          process.env.STIRLING_TEST_IMAGE,
          '-k',
          '5',
          '25',
          ...exec.command,
        ],
        { encoding: 'utf8', timeout: 45000, maxBuffer: 8 * 1024 ** 2 },
      )
    } catch (error) {
      assert.equal(error.status, 124, error.stderr?.toString())
      output = error.stdout.toString()
    }
    assert.match(output, /UseBASE64Intrinsics\s*=\s*false/)
    assert.match(output, /InitialHeapSize\s*=\s*268435456/)
    assert.match(output, /MaxHeapSize\s*=\s*536870912/)
    assert.match(output, /ExitOnOutOfMemoryError\s*=\s*true/)
    console.log(
      'Verified actual upstream JVM: Base64 intrinsics disabled; Xms=256m, Xmx=512m; upstream OOM exit retained',
    )
  },
)
