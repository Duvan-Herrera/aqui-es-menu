# Publicar gratis el menú de Bar y Restaurante Aquí Es

Esta carta está preparada como un sitio estático responsive y puede publicarse sin pagar usando **GitHub Pages**. GitHub Pages publica archivos HTML, CSS y JavaScript directamente desde un repositorio.

## Publicación con GitHub Pages

1. Cree una cuenta gratuita en [GitHub](https://github.com/signup), si aún no tiene una.
2. Cree un repositorio nuevo llamado, por ejemplo, `aqui-es-menu` y déjelo como **Public**.
3. Desde esta carpeta del proyecto ejecute, cambiando `TU_USUARIO` por su usuario:

   ```bash
   git remote add origin https://github.com/TU_USUARIO/aqui-es-menu.git
   git branch -M main
   git push -u origin main
   ```

4. En el repositorio vaya a **Settings → Pages**.
5. En **Build and deployment**, seleccione **GitHub Actions**.
6. Espere a que termine la acción automática. El enlace público será parecido a:

   ```text
   https://TU_USUARIO.github.io/aqui-es-menu/
   ```

## Crear el código QR

Copie el enlace público y úselo en [QR Code Monkey](https://www.qrcode-monkey.com/) o en [Canva QR Code Generator](https://www.canva.com/qr-code-generator/). Descargue PNG para redes sociales o SVG para imprimir. Pruebe el código con más de un teléfono antes de imprimirlo.

## Actualizar precios o platillos

Edite el archivo `client/src/pages/Home.tsx`, guarde los cambios y ejecute:

```bash
git add .
git commit -m "Actualizar menú"
git push
```

La acción de GitHub Pages volverá a construir y publicar el sitio. El teléfono de contacto configurado es **6154-9266** y el costo de empaque para llevar es **₡200**.
