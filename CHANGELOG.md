# Historial de versiones

Formato basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y [versionado semántico](https://semver.org/lang/es/).

## [0.6.0] — 2026-10-14

### Agregado
- Decks con look de cassette translúcido: etiqueta manuscrita con el tema y el lado (A/B), tornillos, ventana con el video y carretes que giran según el tempo; la cinta pasa de un carrete al otro según avanza la canción.
- Lista de reproducción persistente (antes «Cola»): no se borra al sonar, marca con ✓ lo que sonó en cualquier deck, resalta la siguiente y muestra qué suena en A o B.
- «Repetir lista», «Volver al inicio», «Guardar archivo» y «Abrir archivo» (JSON) para respaldar o llevar la lista a otro equipo.
- «Vaciar lista» pide confirmación con un segundo clic.

### Cambiado
- El título de cada deck ahora va escrito en la etiqueta del cassette.
- En celular, cada canción de la lista muestra el título completo y los botones en una segunda línea.

## [0.5.1] — 2026-10-11

### Cambiado
- Nueva identidad visual con la ilustración elegida por el autor: imagen principal del README, logo circular de la app, favicon y tarjeta para compartir (`assets/social.jpg`).
- El logo de la app late con un anillo ámbar → azul mientras suena un deck.

### Eliminado
- Banner SVG y logo dibujado anteriores.

## [0.5.0] — 2026-10-11

### Agregado
- Versiones alternativas automáticas: si el dueño de un video solo lo permite en youtube.com, la app busca el mismo tema en versión lyrics, letra o audio, prueba cada candidato en un reproductor oculto y silenciado, y carga el primero que funciona.
- Si no se conoce el nombre del video bloqueado, el deck lo pregunta.
- Botones «Buscar otra versión» y «Abrir en YouTube» en el aviso del deck.
- Interruptor «Buscar otra versión si un video está bloqueado» (activo por defecto).
- Evento `deck:alternative` para plugins y `djBrave.probe(id)` en la consola.

### Corregido
- Si se pide mezclar hacia un deck con un video bloqueado, la mezcla espera la versión reproducible y se lanza sola.
- Un deck que tuvo un error ahora vuelve a reproducir correctamente la siguiente pista.
- Los videos sin título disponible muestran su ID en lugar de «Cargando…».

## [0.4.1] — 2026-10-11

### Agregado
- README bilingüe: español (`README.md`) e inglés (`README.en.md`) con selector de idioma.
- Historia del proyecto: cómo nació, el prompt de ~20 minutos y la construcción en una tarde.
- Línea de tiempo «De Winamp a DjClaudeBrave» y tabla de proyectos open source relacionados.
- Banner animado (`assets/banner.svg`), imagen para compartir (`assets/social.png`) y botones para compartir en redes.
- Etiquetas Open Graph en `index.html`: el enlace muestra una tarjeta al compartirlo.

## [0.4.0] — 2026-10-11

### Agregado
- API de plugins plug and play (`DjClaudeBrave.use`) con bus de eventos: `track:load`, `deck:play`, `deck:pause`, `deck:end`, `deck:error`, `mix:start`, `mix:end`.
- Plugin de ejemplo **Historial de la sesión**, con botón para copiar la lista de temas.
- Botón **Reportar un problema**: abre un issue en GitHub con diagnóstico automático.
- `DjClaudeBrave.diagnostics()` en la consola del navegador.
- Enlace directo a PayPal para invitar un café.
- Documentación: ARCHITECTURE.md, CLAUDE.md, CONTRIBUTING.md y plantillas de issues.

## [0.3.0] — 2026-10-11

### Agregado
- Logo original: DJ con audífonos tras una tornamesa animada.
- Barra fija inferior en celular con crossfader y botón Mezclar.
- Sección Family Open, autoría, créditos e «invítame un café» en la app y el README.

### Cambiado
- Botones de BPM en 2×2 en pantallas angostas; atajos de teclado ocultos en pantallas táctiles.

## [0.2.0] — 2026-10-11

### Agregado
- Todo el núcleo en un solo `index.html`, publicado en GitHub Pages.
- Búsqueda sin clave mediante Piped e Invidious.
- Aviso al abrir como `file://` (error 153 de YouTube).

### Cambiado
- Proyecto renombrado de djBrave a DjClaudeBrave.

## [0.1.0] — 2026-10-11

### Agregado
- Dos decks de YouTube, crossfader con tres curvas, cola, Auto‑DJ, Tap BPM, Sync, Nudge, hot cues y atajos de teclado.
