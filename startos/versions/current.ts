import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.0:0',
  releaseNotes: {
    en_US: `Updated Stirling PDF to 3.3.0.

- New: a Page Editor replacing the multi-tool, a Text Editor with table editing, and a Files Library
- New: Stirling Sign for collecting signatures from several people
- New: PDF Processor for automated batch runs
- Change: tool calls authenticated with an API key, and Processor runs, are limited to 1,000 per month unless the instance is linked to a Stirling PDF account; using the tools in the web interface stays unlimited
- Change: PDF owner-password permissions are honoured by default

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    es_ES: `Stirling PDF actualizado a 3.3.0.

- Nuevo: un Editor de páginas que sustituye a la multiherramienta, un Editor de texto con edición de tablas y una Biblioteca de archivos
- Nuevo: Stirling Sign para recoger firmas de varias personas
- Nuevo: PDF Processor para procesamiento automático por lotes
- Cambio: las llamadas a herramientas autenticadas con una clave de API, y las ejecuciones del Processor, se limitan a 1.000 al mes salvo que la instancia esté vinculada a una cuenta de Stirling PDF; usar las herramientas desde la interfaz web sigue siendo ilimitado
- Cambio: los permisos de contraseña de propietario de los PDF se respetan por defecto

[Notas completas](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    de_DE: `Stirling PDF auf 3.3.0 aktualisiert.

- Neu: ein Seiteneditor anstelle des Multi-Tools, ein Texteditor mit Tabellenbearbeitung und eine Dateibibliothek
- Neu: Stirling Sign zum Einholen von Unterschriften mehrerer Personen
- Neu: PDF Processor für automatische Stapelverarbeitung
- Änderung: Werkzeugaufrufe mit API-Schlüssel und Processor-Läufe sind auf 1.000 pro Monat begrenzt, sofern die Instanz nicht mit einem Stirling-PDF-Konto verknüpft ist; die Nutzung der Werkzeuge in der Weboberfläche bleibt unbegrenzt
- Änderung: Berechtigungen aus dem Besitzerpasswort einer PDF werden standardmäßig beachtet

[Vollständige Versionshinweise](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    pl_PL: `Zaktualizowano Stirling PDF do 3.3.0.

- Nowość: Edytor stron zastępujący multinarzędzie, Edytor tekstu z edycją tabel oraz Biblioteka plików
- Nowość: Stirling Sign do zbierania podpisów od wielu osób
- Nowość: PDF Processor do automatycznego przetwarzania wsadowego
- Zmiana: wywołania narzędzi uwierzytelnione kluczem API oraz uruchomienia Processora są ograniczone do 1000 miesięcznie, chyba że instancja jest połączona z kontem Stirling PDF; korzystanie z narzędzi w interfejsie webowym pozostaje nieograniczone
- Zmiana: uprawnienia z hasła właściciela PDF są domyślnie respektowane

[Pełne informacje o wydaniu](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    fr_FR: `Stirling PDF mis à jour vers 3.3.0.

- Nouveau : un éditeur de pages qui remplace le multi-outil, un éditeur de texte avec édition des tableaux et une bibliothèque de fichiers
- Nouveau : Stirling Sign pour recueillir les signatures de plusieurs personnes
- Nouveau : PDF Processor pour le traitement automatique par lots
- Changement : les appels d'outils authentifiés par une clé d'API et les exécutions du Processor sont limités à 1 000 par mois, sauf si l'instance est liée à un compte Stirling PDF ; l'utilisation des outils dans l'interface web reste illimitée
- Changement : les permissions définies par le mot de passe propriétaire d'un PDF sont respectées par défaut

[Notes de version complètes](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
