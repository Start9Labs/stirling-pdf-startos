import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '3.4.0:0',
  releaseNotes: {
    en_US: `Updated Stirling PDF to 3.4.0.

- New: edit text directly in the viewer, with better font matching on scanned documents and smaller saved files
- New: Check PDF accessibility tool, reporting against PDF/UA-1 or PDF/UA-2
- New: custom page size in Scale Pages, odd-even merge in Reorganize Pages, and pixel comparison in Compare
- Fix: page numbers placed wrongly on rotated or cropped pages
- Removed: conversion between PDF and PostScript, EPS, PCL or XPS

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.4.0)`,
    es_ES: `Stirling PDF actualizado a 3.4.0.

- Nuevo: edición de texto directamente en el visor, con mejor coincidencia de fuentes en documentos escaneados y archivos guardados más pequeños
- Nuevo: herramienta Comprobar accesibilidad del PDF, con informes según PDF/UA-1 o PDF/UA-2
- Nuevo: tamaño de página personalizado en Escalar páginas, combinación de pares e impares en Reorganizar páginas y comparación por píxeles en Comparar
- Corrección: números de página mal colocados en páginas giradas o recortadas
- Eliminado: la conversión entre PDF y PostScript, EPS, PCL o XPS

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.4.0)`,
    de_DE: `Stirling PDF auf 3.4.0 aktualisiert.

- Neu: Text direkt im Viewer bearbeiten, mit besserer Schriftzuordnung bei gescannten Dokumenten und kleineren gespeicherten Dateien
- Neu: Werkzeug zur Barrierefreiheitsprüfung von PDFs mit Berichten nach PDF/UA-1 oder PDF/UA-2
- Neu: benutzerdefinierte Seitengröße beim Skalieren von Seiten, Gerade-Ungerade-Zusammenführung beim Neuordnen von Seiten und pixelgenauer Vergleich
- Behoben: falsch platzierte Seitenzahlen auf gedrehten oder zugeschnittenen Seiten
- Entfernt: die Konvertierung zwischen PDF und PostScript, EPS, PCL oder XPS

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.4.0)`,
    pl_PL: `Zaktualizowano Stirling PDF do wersji 3.4.0.

- Nowość: edycja tekstu bezpośrednio w przeglądarce dokumentu, z lepszym dopasowaniem czcionek w zeskanowanych dokumentach i mniejszymi zapisanymi plikami
- Nowość: narzędzie do sprawdzania dostępności PDF z raportami według PDF/UA-1 lub PDF/UA-2
- Nowość: własny rozmiar strony przy skalowaniu stron, scalanie stron parzystych i nieparzystych przy reorganizacji oraz porównywanie pikselowe
- Poprawka: numery stron umieszczane w złym miejscu na obróconych lub przyciętych stronach
- Usunięto: konwersję między PDF a PostScript, EPS, PCL lub XPS

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.4.0)`,
    fr_FR: `Stirling PDF mis à jour vers la version 3.4.0.

- Nouveau : modification du texte directement dans la visionneuse, avec une meilleure correspondance des polices sur les documents numérisés et des fichiers enregistrés plus légers
- Nouveau : outil de vérification de l'accessibilité des PDF, avec rapports selon PDF/UA-1 ou PDF/UA-2
- Nouveau : taille de page personnalisée pour la mise à l'échelle des pages, fusion pair-impair pour la réorganisation des pages et comparaison au pixel près
- Correction : numéros de page mal placés sur les pages pivotées ou rognées
- Supprimé : la conversion entre PDF et PostScript, EPS, PCL ou XPS

[Full release notes](https://github.com/Stirling-Tools/Stirling-PDF/releases/tag/v3.4.0)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
