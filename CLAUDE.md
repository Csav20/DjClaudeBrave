# CLAUDE.md — Guía para Claude en DjClaudeBrave

Este archivo le da a Claude (Claude Code o Claude en claude.ai) el contexto para trabajar en este repositorio. Léelo completo antes de cambiar algo.

## Qué es

DjClaudeBrave es un mezclador DJ de YouTube que corre en el navegador: dos decks con look de cassette, crossfader, lista de reproducción persistente y Auto‑DJ. Se publica en GitHub Pages: https://csav20.github.io/DjClaudeBrave/

Autor: Dr. Claudio Abarca Vargas ([@Csav20](https://github.com/Csav20)). Proyecto **Family Open**: nació pensando en Sofía, Iván y Máximo, para que cualquier familia tenga a mano herramientas así.

## Reglas que no se rompen

1. **Plug and play.** Sin build, sin npm, sin frameworks, sin dependencias. El núcleo es un solo `index.html`.
2. **El núcleo funciona solo.** Las funciones nuevas que no sean esenciales van como plugin en `plugins/`. Un plugin roto nunca debe romper la app.
3. **Family Open.** Gratis, sin anuncios, sin rastreo, sin analítica, sin cuentas. No agregues scripts de terceros que recolecten datos. Lo que se guarda, se guarda solo en el navegador (`localStorage` envuelto en `try/catch`).
4. **Interfaz en español** (la presentación es bilingüe: si cambias `README.md`, actualiza también `README.en.md`), con textos simples que un niño o un abuelo entiendan. Botones con verbos claros («Mezclar», «Cargar», «Copiar lista»).
5. **Responsivo.** Debe funcionar desde 320 px de ancho, con pantallas táctiles y con teclado. En celular, el crossfader y «Mezclar» están en la barra fija inferior.
6. **Identidad visual definida por el autor.** La ilustración del proyecto (`assets/djclaudebrave.jpg`, `logo.png`, `favicon.png`, `social.jpg`) la eligió el autor; no la reemplaces ni la modifiques sin que él lo pida. No agregues otros logos de marcas. Mantén en el README la aclaración de que el proyecto no está afiliado a las marcas que menciona.
7. **Respeta los bloqueos de los dueños de derechos.** Si un video solo se permite en youtube.com, no extraigas su audio por otra vía (proxys, descargas, Piped/Invidious como fuente de audio). Usa la búsqueda de versiones alternativas o «Abrir en YouTube».
8. **Nunca subas claves.** La clave opcional de YouTube vive solo en el navegador de cada persona.

## Cómo está organizado

Lee [ARCHITECTURE.md](ARCHITECTURE.md). Resumen: dentro del `<script>` de `index.html` hay secciones `ui`, `youtube`, `search`, `deck`, `mixer`, `library` y `app`. El núcleo emite eventos (`track:load`, `deck:play`, `deck:pause`, `deck:end`, `deck:error`, `mix:start`, `mix:end`) y expone `window.DjClaudeBrave.use(plugin)`.

## Cómo resolver un reporte

Los reportes llegan como issues con la etiqueta `reporte` y un **diagnóstico automático** (versión, navegador, pantalla, estado de los decks, errores recientes).

1. Lee el diagnóstico. Antes de tocar código, revisa la tabla «Restricciones técnicas» de ARCHITECTURE.md: varios síntomas (error 153, videos bloqueados, tempo en pasos de 0.25×) son límites de YouTube, no errores.
2. Reproduce el problema en local (ver «Probar»), al ancho de pantalla del reporte.
3. Haz el cambio más pequeño que lo resuelva. Respeta las reglas de arriba.
4. Prueba de nuevo, incluyendo 320 px y 1440 px de ancho.
5. Sube `VERSION` en `index.html` (parche: 0.4.0 → 0.4.1) y anota el cambio en [CHANGELOG.md](CHANGELOG.md).
6. En el commit o PR, cita el número del issue (`Resuelve #12`).

## Probar

```bash
python3 -m http.server 5173     # desde la carpeta del repo
# abre http://localhost:5173 en el navegador
```

No abras `index.html` con doble clic: como `file://`, YouTube no reproduce (error 153). Checklist mínimo:

- La consola del navegador no muestra errores.
- Cargar una pista en A y otra en B, reproducir A y presionar «Mezclar»: el crossfader llega a B y A se pausa.
- Buscar una canción devuelve resultados.
- A 320 px de ancho no hay desplazamiento horizontal.
- La app funciona aunque `plugins/historial.js` no exista.
- `DjClaudeBrave.diagnostics()` en la consola devuelve el diagnóstico.

## Estilo de código

- JavaScript moderno sin transpilar (clases, `async/await`, `?.`), compatible con Brave, Chrome, Safari y Firefox actuales.
- Comentarios breves en español que expliquen el porqué.
- Colores y medidas como variables CSS en `:root`. Deck A en ámbar (`--a`), deck B en azul (`--b`).
- Respeta `prefers-reduced-motion`.

## Publicar

GitHub Pages publica la rama `main` desde la raíz. Cada push a `main` queda en línea en uno o dos minutos.
