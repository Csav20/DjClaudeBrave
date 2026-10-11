# djBrave

Mezclador DJ de YouTube que corre en una sola pestaña de Brave: **dos decks, crossfader, cola y Auto‑DJ**. Buscas la siguiente canción mientras la actual sigue sonando, y la mezclas sin cortes.

## Usarlo (sin instalar nada)

Todo djBrave es **un solo archivo: `index.html`** (HTML + CSS + JavaScript). No usa Node, npm ni dependencias.

**Ábrelo aquí: https://csav20.github.io/djBrave/**

> ⚠️ Si haces doble clic en `index.html` se abre como `file://` y **YouTube bloquea la reproducción (error 153)**. La interfaz y la búsqueda funcionan, pero el video no suena. Úsalo siempre desde el enlace de GitHub Pages.

## Funciones

- Dos decks con YouTube IFrame API: play/pausa, CUE estilo CDJ, 4 hot cues por deck, saltos de 4 tiempos, barra de posición clicable.
- Tempo por deck en los pasos que permite YouTube (0.5×–1.5×), **Tap BPM**, **Sync** y **Nudge ±** para cuadrar golpes sin saltos.
- Crossfader con tres curvas: suave (potencia constante), lineal y corte rápido (scratch).
- Botón **Mezclar** con duración configurable (2–40 s) y pausa automática del deck saliente.
- **Auto‑DJ**: precarga la siguiente pista de la cola en el deck libre y la mezcla sola al final.
- **Búsqueda integrada sin clave** (Piped / Invidious, open source) y **arrastrar y soltar** enlaces desde otra pestaña de Brave.
- Cola persistente; pega varios enlaces de una vez en Buscar para encolarlos todos.
- Atajos de teclado que siguen funcionando aunque hagas clic sobre el video.

## Atajos

| Tecla | Acción |
|---|---|
| `Q` / `O` | Play‑pausa deck A / B |
| `W` / `P` | CUE deck A / B |
| `1`–`4` / `7`–`0` | Hot cues A / B (Mayús+clic en el botón borra) |
| `←` `→` | Mover crossfader |
| `Espacio` | Mezclar al otro deck |
| `/` | Ir a Buscar |

## Editar

Abre la carpeta en VS Code y edita `index.html`. Para probar en local con origen web usa la extensión **Live Server**. Cada `git push` a `main` actualiza GitHub Pages.

## Límites honestos

- **Sin EQ ni filtros sobre YouTube**: el audio vive en un iframe de otro origen; la mezcla es por volumen.
- **Tempo**: el reproductor embebido solo acepta pasos de 0.25×; para cuadrar golpes usa Nudge.
- **Videos que no arrancan**: muchos videos oficiales de sellos bloquean la reproducción embebida (error 101/150). djBrave lo detecta y el Auto‑DJ salta a la siguiente; las versiones «lyrics» o «audio» suelen funcionar.
- **Búsqueda sin clave**: depende de servicios comunitarios; puedes agregar tu clave de YouTube Data API para más estabilidad.
- **Spotify y Apple Music**: DRM y términos de uso impiden mezclarlos.

## Hoja de ruta

- Deck de archivos locales con Web Audio: EQ de 3 bandas, filtro, forma de onda y BPM automático (inspirado en [Mixxx](https://github.com/mixxxdj/mixxx)).
- Controladores MIDI vía Web MIDI (Reloop, Pioneer DDJ, Numark).
- Grabación de la sesión y exportación de la tracklist.

## Licencia

MIT © Claudio Abarca Vargas
