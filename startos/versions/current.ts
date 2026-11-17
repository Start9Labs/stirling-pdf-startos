import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.3.0:0',
  releaseNotes: {
    en_US: `Updated Stirling PDF to 3.3.0.

- New: a Page Editor replacing the multi-tool, a Text Editor with table editing, and a Files Library
- New: Stirling Sign for collecting signatures from several people
- New: PDF Processor for automated batch runs
- Change: automated processing through API-key tools, Processor and AI shares a monthly allowance of 1,000 processing units on an instance not linked to a Stirling PDF account. Large documents or multi-file requests can consume multiple units; manual web tools stay unlimited
- Change: PDF owner-password permissions are honoured by default

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    es_ES: `Stirling PDF actualizado a 3.3.0.

- Nuevo: un Editor de páginas que sustituye a la multiherramienta, un Editor de texto con edición de tablas y una Biblioteca de archivos
- Nuevo: Stirling Sign para recoger firmas de varias personas
- Nuevo: PDF Processor para procesamiento automático por lotes
- Cambio: el procesamiento automático mediante herramientas con clave de API, Processor e IA comparte una asignación mensual de 1.000 unidades de procesamiento en una instancia no vinculada a una cuenta de Stirling PDF. Los documentos grandes o las solicitudes con varios archivos pueden consumir varias unidades; las herramientas web manuales siguen siendo ilimitadas
- Cambio: los permisos de contraseña de propietario de los PDF se respetan por defecto

[Notas completas](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    de_DE: `Stirling PDF auf 3.3.0 aktualisiert.

- Neu: ein Seiteneditor anstelle des Multi-Tools, ein Texteditor mit Tabellenbearbeitung und eine Dateibibliothek
- Neu: Stirling Sign zum Einholen von Unterschriften mehrerer Personen
- Neu: PDF Processor für automatische Stapelverarbeitung
- Änderung: die automatische Verarbeitung über Werkzeuge mit API-Schlüssel, Processor und KI teilt sich auf einer nicht mit einem Stirling-PDF-Konto verknüpften Instanz ein monatliches Kontingent von 1.000 Verarbeitungseinheiten. Große Dokumente oder Anfragen mit mehreren Dateien können mehrere Einheiten verbrauchen; manuelle Web-Werkzeuge bleiben unbegrenzt
- Änderung: Berechtigungen aus dem Besitzerpasswort einer PDF werden standardmäßig beachtet

[Vollständige Versionshinweise](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    pl_PL: `Zaktualizowano Stirling PDF do 3.3.0.

- Nowość: Edytor stron zastępujący multinarzędzie, Edytor tekstu z edycją tabel oraz Biblioteka plików
- Nowość: Stirling Sign do zbierania podpisów od wielu osób
- Nowość: PDF Processor do automatycznego przetwarzania wsadowego
- Zmiana: automatyczne przetwarzanie przez narzędzia z kluczem API, Processor i AI korzysta ze wspólnego miesięcznego limitu 1000 jednostek przetwarzania na instancji niepołączonej z kontem Stirling PDF. Duże dokumenty lub żądania z wieloma plikami mogą zużywać wiele jednostek; ręczne narzędzia webowe pozostają bez limitu
- Zmiana: uprawnienia z hasła właściciela PDF są domyślnie respektowane

[Pełne informacje o wydaniu](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
    fr_FR: `Stirling PDF mis à jour vers 3.3.0.

- Nouveau : un éditeur de pages qui remplace le multi-outil, un éditeur de texte avec édition des tableaux et une bibliothèque de fichiers
- Nouveau : Stirling Sign pour recueillir les signatures de plusieurs personnes
- Nouveau : PDF Processor pour le traitement automatique par lots
- Changement : le traitement automatique via les outils avec clé d'API, Processor et l'IA partage une allocation mensuelle de 1 000 unités de traitement sur une instance non liée à un compte Stirling PDF. Les documents volumineux ou les requêtes contenant plusieurs fichiers peuvent consommer plusieurs unités ; les outils web manuels restent illimités
- Changement : les permissions définies par le mot de passe propriétaire d'un PDF sont respectées par défaut

[Notes de version complètes](https://github.com/Stirling-Tools/Stirling-PDF/releases)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
