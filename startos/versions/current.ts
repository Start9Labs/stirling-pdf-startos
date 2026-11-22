import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.5.0:0',
  releaseNotes: {
    en_US: `Updated Stirling PDF to 3.5.0.

- New: Office, HTML and ebook files are converted by Stirling PDF's own converter, faster and with better quality
- New: an admin setting to limit how many Office conversions run at once
- Fix: filled form fields shown twice in the viewer, and form values invisible in dark mode
- Fix: thumbnail sidebar stuck on "Loading..." after applying changes
- Removed: PDF to .doc (Word 97-2003) output; use .docx or .odt instead. Automations and pipelines asking for .doc now fail
- Removed: conversion from .wpd, .wps, .lwp, .abw, .hwp and .xps files

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.5.0)`,
    es_ES: `Stirling PDF actualizado a 3.5.0.

- Nuevo: los archivos de Office, HTML y libros electrónicos se convierten con el conversor propio de Stirling PDF, más rápido y con mejor calidad
- Nuevo: un ajuste de administración para limitar cuántas conversiones de Office se ejecutan a la vez
- Corrección: campos de formulario rellenados que aparecían dos veces en el visor y valores de formulario invisibles en modo oscuro
- Corrección: la barra lateral de miniaturas se quedaba en "Cargando..." tras aplicar cambios
- Eliminado: la salida de PDF a .doc (Word 97-2003); usa .docx u .odt. Las automatizaciones y canalizaciones que piden .doc ahora fallan
- Eliminado: la conversión desde archivos .wpd, .wps, .lwp, .abw, .hwp y .xps

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.5.0)`,
    de_DE: `Stirling PDF auf 3.5.0 aktualisiert.

- Neu: Office-, HTML- und E-Book-Dateien werden mit dem eigenen Konverter von Stirling PDF umgewandelt, schneller und in besserer Qualität
- Neu: eine Admin-Einstellung, die begrenzt, wie viele Office-Konvertierungen gleichzeitig laufen
- Behoben: ausgefüllte Formularfelder wurden im Viewer doppelt angezeigt, und Formularwerte waren im Dunkelmodus unsichtbar
- Behoben: die Miniaturansicht-Seitenleiste blieb nach dem Anwenden von Änderungen bei "Wird geladen..." hängen
- Entfernt: die Ausgabe von PDF als .doc (Word 97-2003); verwenden Sie stattdessen .docx oder .odt. Automatisierungen und Pipelines, die .doc anfordern, schlagen nun fehl
- Entfernt: die Konvertierung von .wpd-, .wps-, .lwp-, .abw-, .hwp- und .xps-Dateien

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.5.0)`,
    pl_PL: `Zaktualizowano Stirling PDF do wersji 3.5.0.

- Nowość: pliki Office, HTML i e-booki są konwertowane własnym konwerterem Stirling PDF, szybciej i w lepszej jakości
- Nowość: ustawienie administratora ograniczające liczbę jednoczesnych konwersji Office
- Poprawka: wypełnione pola formularzy wyświetlane podwójnie w przeglądarce oraz niewidoczne wartości formularzy w trybie ciemnym
- Poprawka: pasek miniatur zawieszający się na "Ładowanie..." po zastosowaniu zmian
- Usunięto: eksport PDF do .doc (Word 97-2003); użyj .docx lub .odt. Automatyzacje i potoki żądające .doc kończą się teraz błędem
- Usunięto: konwersję z plików .wpd, .wps, .lwp, .abw, .hwp i .xps

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.5.0)`,
    fr_FR: `Stirling PDF mis à jour vers la version 3.5.0.

- Nouveau : les fichiers Office, HTML et livres numériques sont convertis par le convertisseur propre à Stirling PDF, plus rapide et de meilleure qualité
- Nouveau : un réglage d'administration pour limiter le nombre de conversions Office simultanées
- Correction : champs de formulaire remplis affichés deux fois dans la visionneuse, et valeurs de formulaire invisibles en mode sombre
- Correction : la barre latérale des miniatures restait bloquée sur « Chargement... » après l'application de modifications
- Supprimé : la sortie PDF vers .doc (Word 97-2003) ; utilisez .docx ou .odt. Les automatisations et pipelines qui demandent .doc échouent désormais
- Supprimé : la conversion depuis les fichiers .wpd, .wps, .lwp, .abw, .hwp et .xps

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.5.0)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
