// Plugin de ejemplo: Historial de la sesión.
// Anota cada canción que empieza a sonar y permite copiar la lista (tracklist).
// Sirve como plantilla: copia este archivo, cambia el nombre y agrega su <script> en index.html.
(function () {
  const plugin = {
    name: 'historial',
    setup(api) {
      const played = [];
      const body = api.addPanel('Historial de la sesión');
      body.innerHTML = `
        <ol class="tracklist historial-list"><li class="empty">Aquí aparecerá cada canción que suene.</li></ol>
        <button type="button" class="historial-copy">Copiar lista</button>`;
      const list = body.querySelector('ol');

      const render = () => {
        list.innerHTML = '';
        if (!played.length) {
          list.innerHTML = '<li class="empty">Aquí aparecerá cada canción que suene.</li>';
          return;
        }
        played.forEach(t => {
          const li = document.createElement('li');
          li.textContent = `${t.time} · ${t.title}`;
          list.appendChild(li);
        });
      };

      api.on('deck:play', ({ deck, track }) => {
        if (!track) return;
        const last = played.at(-1);
        if (last && last.id === track.id) return; // reanudar no cuenta como nueva
        played.push({
          id: track.id,
          title: track.title || track.id,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          deck,
        });
        render();
      });

      body.querySelector('.historial-copy').addEventListener('click', async () => {
        const text = played.map((t, i) => `${i + 1}. ${t.title} — https://youtu.be/${t.id}`).join('\n');
        if (!text) return api.toast('Todavía no ha sonado ninguna canción');
        try { await navigator.clipboard.writeText(text); api.toast('Lista copiada'); }
        catch { api.toast('No se pudo copiar: tu navegador no lo permitió'); }
      });
    },
  };

  // Funciona aunque el plugin cargue antes o después del núcleo
  if (window.DjClaudeBrave) window.DjClaudeBrave.use(plugin);
  else (window.DjClaudeBravePlugins = window.DjClaudeBravePlugins || []).push(plugin);
})();
