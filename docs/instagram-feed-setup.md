# Feed dinámico de Instagram — @ies_gsr (#demeteria)

La landing muestra publicaciones **en vivo** mediante un widget de terceros. Instagram no permite incrustar un feed completo sin este intermediario (o sin backend propio con API de Meta).

## Opción recomendada: Elfsight (gratuito)

### 1. Crear el widget

1. Entra en [Elfsight Instagram Feed](https://elfsight.com/instagram-feed-instashow/).
2. Pulsa **Create widget for free** e inicia sesión.
3. Conecta la cuenta de Instagram **@ies_gsr**.

### 2. Filtrar por hashtag

En la configuración del widget:

- **Source**: cuenta `@ies_gsr`
- **Filter / Hashtag**: `demeteria` (solo publicaciones que incluyan `#demeteria` o `#DEMETERIA`)
- **Layout**: Grid o Slider (recomendado Grid en móvil)
- **Número de posts**: 6–9

### 3. Copiar el ID del widget

En Elfsight, al publicar el widget verás un código como:

```html
<div class="elfsight-app-abc12345-6789-...."></div>
```

El ID es la parte después de `elfsight-app-`: `abc12345-6789-....`

### 4. Configurar el proyecto

Crea un archivo `.env` en la raíz del repositorio:

```env
PUBLIC_SOCIAL_WIDGET_ID=abc12345-6789-....
PUBLIC_SOCIAL_WIDGET_PROVIDER=elfsight
```

Reinicia el servidor:

```bash
npm run dev
```

Las publicaciones de @ies_gsr con #demeteria aparecerán automáticamente y se actualizarán cuando publiques nuevas.

---

## Alternativas

### Curator.io

```env
PUBLIC_SOCIAL_WIDGET_ID=tu-feed-id-curator
PUBLIC_SOCIAL_WIDGET_PROVIDER=curator
```

Configura en [curator.io](https://curator.io): fuente Instagram `@ies_gsr`, regla de filtro hashtag `demeteria`.

### SnapWidget

```env
PUBLIC_SOCIAL_WIDGET_ID=tu-id-numerico-snapwidget
PUBLIC_SOCIAL_WIDGET_PROVIDER=snapwidget
```

Crea el widget en [snapwidget.com](https://snapwidget.com), conecta @ies_gsr y filtra por hashtag si tu plan lo permite.

---

## Despliegue en producción

Añade las mismas variables `PUBLIC_*` en el panel de tu hosting (Vercel, Netlify, GitHub Pages con build, etc.) antes de `npm run build`.

## Notas

- El JS del widget es la **única excepción** Zero-JS del proyecto (encapsulada en `SocialFeed.astro`).
- No subas tokens de Instagram al repositorio; solo el ID público del widget.
- Si el feed no carga, verifica que el widget esté **publicado** en el panel del proveedor.
