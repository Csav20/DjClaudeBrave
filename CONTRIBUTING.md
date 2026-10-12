# Cómo contribuir a DjClaudeBrave

¡Gracias por querer hacer crecer DjClaudeBrave! Es un proyecto **Family Open**: cualquiera puede usarlo, reportar, proponer y mejorar.

## 🐞 Reportar un problema

La forma más fácil: en la app, presiona **Reportar un problema** (arriba a la derecha). Se abre un reporte en GitHub con el diagnóstico ya completado. Solo cuenta qué hiciste, qué esperabas y qué pasó.

También puedes abrir un reporte a mano en [Issues](https://github.com/Csav20/DjClaudeBrave/issues/new/choose).

> Antes de enviar, revisa el texto: los reportes son públicos. El diagnóstico nunca incluye tu clave de YouTube.

## 💡 Proponer una idea

Abre un issue con la plantilla **Idea o mejora**. Cuenta para qué la usarías: eso ayuda más que una descripción técnica.

## 🤖 Crecer con Claude

El repositorio incluye [CLAUDE.md](CLAUDE.md), con las reglas y el contexto que Claude necesita para trabajar aquí. Con Claude Code (o Claude en claude.ai con el repo conectado) puedes pedir, por ejemplo:

> «Lee el issue #12 de Csav20/DjClaudeBrave y resuélvelo siguiendo CLAUDE.md.»

Claude reproduce el problema, hace el cambio más pequeño posible, lo prueba y actualiza el CHANGELOG. Revisa siempre el resultado antes de publicarlo.

## 🧩 Escribir un plugin

Las funciones nuevas que no son esenciales van como plugin, para que el núcleo siga simple. Guía y ejemplo en [plugins/README.md](plugins/README.md).

## ✅ Reglas Family Open

Toda contribución debe respetar estas reglas:

- **Gratis siempre:** nada de funciones de pago ni bloqueadas.
- **Sin rastreo:** nada de analítica, cookies de seguimiento ni scripts que recolecten datos.
- **Sin anuncios.**
- **Plug and play:** sin instalación, sin build, sin cuentas.
- **Para toda la familia:** textos simples en español y contenido apropiado.
- **Sin marcas de terceros** en logos o diseño.

## 🔧 Cambios en el código

1. Haz un fork y crea una rama.
2. Sigue [ARCHITECTURE.md](ARCHITECTURE.md) y el checklist de pruebas de [CLAUDE.md](CLAUDE.md).
3. Sube la versión en `index.html` y anota el cambio en [CHANGELOG.md](CHANGELOG.md).
4. Abre un Pull Request explicando qué cambia y cómo lo probaste.

Al contribuir, aceptas que tu aporte se publique bajo la licencia [MIT](LICENSE).
