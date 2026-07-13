# Tu portafolio — guía rápida

## 1. Qué editar antes de publicar

Abre `index.html` con cualquier editor de texto y busca estos puntos:

- **Nombre y foto**: en la sección `<header class="hero">`, cambia `Tu Nombre` por el tuyo. Si quieres foto de perfil, dímelo y te agrego el espacio.
- **Logros Microsoft**: hay 2 tarjetas marcadas como "próximo" (`is-empty`). Pásame el link de cada módulo/insignia y las completo, o edítalas tú copiando el bloque de la primera tarjeta (Power BI) y cambiando título, descripción y `href`.
- **Enlace a tu perfil de Microsoft Learn**: el botón "Ver perfil completo" apunta a `learn.microsoft.com/es-es/users/me/transcript`, que solo funciona cuando TÚ has iniciado sesión. Si tienes un link público de transcript, reemplázalo ahí.
- **Power BI**: la imagen `assets/powerbi-dashboard.png` es tu captura. Si más adelante activas "Publicar en la Web" (necesita cuenta Pro/Premium), dímelo y cambio esa tarjeta por un iframe en vivo.
- **Avances del curso**: reemplaza `assets/avance-1.png` y `assets/avance-2.png` por tus propias capturas cuando quieras, o pásamelas y las agrego yo, ampliando la cuadrícula.

## 2. Publicar gratis en GitHub Pages

1. Crea un repositorio nuevo en GitHub (puede llamarse, por ejemplo, `mi-portafolio`).
2. Sube estos 4 archivos y la carpeta `assets/` completa, manteniendo la misma estructura.
3. Entra a **Settings → Pages** del repositorio.
4. En "Branch", elige `main` y la carpeta `/ (root)` → **Save**.
5. En 1–2 minutos tu página estará en:
   `https://TU-USUARIO.github.io/mi-portafolio/`

No necesitas nada más: no hay backend, no hay build, es HTML/CSS/JS puro.

## 3. Estructura de archivos

```
portafolio/
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── favicon.svg
    ├── avance-1.webp
    ├── avance-2.webp
    └── powerbi-dashboard.webp
```

## 4. Mejoras ya incluidas

- **Imágenes optimizadas en WebP**: tu captura de Power BI pasó de 1.3 MB a ~103 KB sin pérdida visible — la página carga mucho más rápido en celular.
- **Favicon** propio con los colores de la marca (`assets/favicon.svg`).
- **Meta tags para compartir** (SEO + vista previa en WhatsApp/LinkedIn). Importante: una vez publicada la página, cambia esta línea en el `<head>` del `index.html` por la URL absoluta real, o la vista previa social no cargará la imagen:
  ```html
  <meta property="og:image" content="assets/powerbi-dashboard.webp">
  ```
  reemplázalo por, por ejemplo:
  ```html
  <meta property="og:image" content="https://TU-USUARIO.github.io/mi-portafolio/assets/powerbi-dashboard.webp">
  ```
- **Animación de aparición al hacer scroll** en cada sección (se desactiva sola si el usuario tiene activado "reducir movimiento" en su sistema).
- **Botón "volver arriba"** flotante que aparece después de bajar un poco.

## 5. Ideas para seguir mejorando (opcional, cuando quieras)

- Formulario de contacto gratuito con [Formspree](https://formspree.io) (sin backend propio).
- Analítica de visitas gratuita con [Plausible](https://plausible.io) o Google Analytics.
- Dominio propio gratis o barato (ej. `.me`, `.dev`) apuntado a GitHub Pages.
- Modo claro/oscuro si en algún momento quieres esa opción.

