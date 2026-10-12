# Plugins de DjClaudeBrave

Un plugin agrega una función sin tocar el núcleo (`index.html`). Si falla o falta, la app sigue funcionando.

## Crear un plugin en 3 pasos

1. Copia [`historial.js`](historial.js) con un nombre nuevo, por ejemplo `plugins/aplausos.js`.
2. Cambia `name` y escribe tu lógica en `setup(api)`.
3. Agrega una línea al final de `index.html`, junto a las demás:

   ```html
   <script src="plugins/aplausos.js"></script>
   ```

## Plantilla mínima

```js
(function () {
  const plugin = {
    name: 'mi-plugin',
    setup(api) {
      const panel = api.addPanel('Mi plugin');
      panel.textContent = 'Hola desde mi plugin';
      api.on('mix:end', ({ to }) => api.toast(`Ahora suena el deck ${to}`));
    },
  };
  if (window.DjClaudeBrave) window.DjClaudeBrave.use(plugin);
  else (window.DjClaudeBravePlugins = window.DjClaudeBravePlugins || []).push(plugin);
})();
```

## Qué ofrece `api`

| Miembro | Uso |
|---|---|
| `api.on(evento, fn)` | Escucha `track:load`, `deck:play`, `deck:pause`, `deck:end`, `deck:error`, `mix:start`, `mix:end` |
| `api.addPanel(título)` | Crea un panel en la página y devuelve su contenedor |
| `api.toast(texto)` | Muestra un aviso |
| `api.load('A' \| 'B', { id })` | Carga un video de YouTube en un deck |
| `api.enqueue({ id, title })` | Agrega a la cola |
| `api.mix()` | Mezcla al otro deck |
| `api.version` | Versión del núcleo |

Referencia completa en [ARCHITECTURE.md](../ARCHITECTURE.md).

## Ideas para empezar

- 🎉 **Aplausos:** un botón con efectos de sonido para fiestas.
- 🎂 **Modo cumpleaños:** cola temática y un mensaje en pantalla.
- 📊 **Contador de mezclas:** cuántas transiciones hiciste en la sesión.
- 🧒 **Modo niños:** botones más grandes y solo lo esencial.

Recuerda las reglas Family Open de [CONTRIBUTING.md](../CONTRIBUTING.md): sin rastreo, sin anuncios, gratis y para toda la familia.
