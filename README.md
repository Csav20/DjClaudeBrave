# DjClaudeBrave

Mezclador DJ de YouTube que corre en una sola pestaña de Brave: **dos decks, crossfader, cola y Auto‑DJ**. Buscas la siguiente canción mientras la actual sigue sonando, y la mezclas sin cortes.

## El problema que resuelve

Con YouTube en una pestaña normal, buscar o poner otra canción corta la que suena. DjClaudeBrave separa **lo que suena** (deck en vivo) de **lo que preparas** (el otro deck, la búsqueda y la cola), como en un controlador tipo Reloop o en VirtualDJ, pero sobre YouTube.

## Funciones (v0.1)

- Dos decks con YouTube IFrame API: play/pausa, CUE estilo CDJ, 4 hot cues por deck, saltos de 4 tiempos, barra de posición clicable.
- Tempo por deck en los pasos que permite YouTube (0.5×, 0.75×, 1×, 1.25×, 1.5×), **Tap BPM**, **Sync** y **Nudge ±** para cuadrar golpes sin saltos.
- Crossfader con tres curvas: suave (potencia constante), lineal y corte rápido (scratch).
- Botón **Mezclar** con duración configurable (2–40 s) y pausa automática del deck saliente.
- **Auto‑DJ**: precarga la siguiente pista de la cola en el deck libre y la mezcla sola al final.
- **Búsqueda integrada sin clave**, y además **arrastrar y soltar** enlaces desde otra pestaña de Brave a un deck o a la cola.
- Cola persistente; pega varios enlaces de una vez en Buscar para encolarlos todos.
- Atajos de teclado que siguen funcionando aunque hagas clic sobre el video.

## Usarlo (sin instalar nada)

Todo DjClaudeBrave es **un solo archivo: `index.html`** (HTML + CSS + JavaScript). No usa Node, npm ni dependencias.

**Ábrelo desde GitHub Pages: https://csav20.github.io/DjClaudeBrave/**

> ⚠️ Si haces doble clic en `index.html` se abre como `file://`. La interfaz y la búsqueda funcionan, pero **YouTube bloquea la reproducción en páginas `file://`** (error 153). DjClaudeBrave muestra un aviso con el enlace correcto. Esto es una regla de YouTube, no del proyecto.

### Activar GitHub Pages (una sola vez)

1. Sube el repo a `github.com/Csav20/DjClaudeBrave`.
2. En el repo: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.
3. En 1–2 minutos queda en `https://csav20.github.io/DjClaudeBrave/`. Cada `git push` lo actualiza.

### Editar en VS Code

Abre la carpeta y edita `index.html`. Para probar en local con origen web, usa la extensión **Live Server** (clic derecho → *Open with Live Server*) y copia la dirección en Brave.

### Búsqueda

Funciona **sin clave**: usa instancias públicas de [Piped](https://github.com/TeamPiped/Piped) e [Invidious](https://github.com/iv-org/invidious) (open source), con varias de respaldo. Son servicios comunitarios y a veces alguno cae; DjClaudeBrave prueba el siguiente automáticamente. Para máxima estabilidad puedes agregar tu propia clave de YouTube Data API en «Clave de YouTube».

## Atajos

| Tecla | Acción |
|---|---|
| `Q` / `O` | Play‑pausa deck A / B |
| `W` / `P` | CUE deck A / B |
| `1`–`4` / `7`–`0` | Hot cues A / B (Mayús+clic en el botón borra) |
| `←` `→` | Mover crossfader |
| `Espacio` | Mezclar al otro deck |
| `/` | Ir a Buscar |

## Estructura

`index.html` contiene todo. Dentro del `<script>` las secciones están marcadas por módulo: `ui`, `youtube`, `search`, `deck`, `mixer`, `library` y `app`.

## Límites honestos

- **Sin EQ ni filtros sobre YouTube**: el audio vive en un iframe de otro origen y el navegador no deja procesarlo con Web Audio. La mezcla es por volumen.
- **Tempo**: el reproductor embebido de YouTube solo acepta pasos de 0.25×. No hay pitch fino; para cuadrar golpes usa Nudge. El tempo fino llegará con el deck de archivos locales (v0.2).
- **Videos que no arrancan**: muchos videos oficiales de sellos bloquean la reproducción embebida. DjClaudeBrave lo detecta, marca el deck en rojo y el Auto‑DJ salta a la siguiente pista. Las versiones «lyrics» o «audio» suelen funcionar.
- **Búsqueda sin clave**: depende de servicios comunitarios; si todos fallan, DjClaudeBrave ofrece buscar en otra pestaña y arrastrar.
- **Spotify y Apple Music**: su contenido tiene DRM y sus términos para desarrolladores no permiten mezclarlo, así que no se integran.
- Algunos videos no permiten reproducirse embebidos (error 101/150); DjClaudeBrave lo avisa.

## Hoja de ruta

- **v0.2** — Deck de archivos locales con Web Audio: EQ de 3 bandas, filtro, forma de onda y detección automática de BPM (inspirado en [Mixxx](https://github.com/mixxxdj/mixxx), GPL).
- **v0.3** — Controladores MIDI vía Web MIDI (Reloop, Pioneer DDJ, Numark) con mapeos editables.
- **v0.4** — Grabación de la sesión y exportación de la tracklist.

## Licencia

MIT © Claudio Abarca Vargas
