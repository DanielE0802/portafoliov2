# Previews de Certificados

Este directorio contiene las imágenes de preview (thumbnails) de los certificados PDF.

## Cómo agregar previews

1. Abre cada PDF de certificado
2. Toma un screenshot o exporta la primera página como imagen
3. Guarda cada imagen con el mismo nombre base que el PDF, pero con extensión `.jpg` o `.png`

### Nombres de archivo esperados:

- `diploma-javascript-practico-2021.jpg` (o `.png`)
- `diploma-react-avanzado.jpg`
- `diploma-angular-avanzado.jpg`
- `diploma-nestjs.jpg`
- `diploma-docker.jpg`
- `diploma-intro-nube.jpg`
- `UC-beeceb5f-13ab-4bca-82e1-88f0e6e9a327.jpg`

## Recomendaciones de formato

- **Dimensiones**: 800x600px o proporción ~4:3
- **Formato**: JPG (mejor compresión) o PNG (mejor calidad)
- **Peso**: Mantener bajo 200KB por imagen para mejor rendimiento

## Actualizar la data

Una vez agregadas las imágenes, actualiza el archivo `src/data/certificaciones.js`:

```javascript
{
  // ... otros campos
  previewImage: "/certificaciones/previews/diploma-javascript-practico-2021.jpg",
}
```

## Alternativa rápida con herramientas

### macOS:
```bash
# Convertir PDF a imagen (requiere ImageMagick)
brew install imagemagick
magick convert -density 150 "diploma-javascript-practico-2021.pdf[0]" -quality 90 diploma-javascript-practico-2021.jpg
```

### Online:
- https://www.ilovepdf.com/pdf_to_jpg
- https://www.adobe.com/acrobat/online/pdf-to-jpg.html
