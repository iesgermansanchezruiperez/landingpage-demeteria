# Contract: Production Environment Variables

**Feature**: 014-netlify-deploy

## Variables obligatorias (Netlify → Site configuration → Environment variables)

| Variable | Valor | Notas |
|----------|-------|-------|
| `PUBLIC_SOCIAL_WIDGET_ID` | UUID Elfsight del widget | Visible en HTML; configurar en panel Netlify |
| `PUBLIC_SOCIAL_WIDGET_PROVIDER` | `elfsight` | Default en código si omitida |

## Variables recomendadas

| Variable | Valor | Notas |
|----------|-------|-------|
| `NODE_VERSION` | `22` | Redundante si ya en `netlify.toml`; útil si solo se usa UI |

## Scope en Netlify

- **Builds**: todas las variables `PUBLIC_*` MUST tener scope que incluya el paso de build
  (Astro las resuelve en compile time).
- **Runtime**: N/A — sitio estático sin functions.

## Mapeo en código

| Variable | Consumidor |
|----------|------------|
| `PUBLIC_SOCIAL_WIDGET_ID` | `src/components/sections/SocialFeed.astro` |
| `PUBLIC_SOCIAL_WIDGET_PROVIDER` | `src/components/sections/SocialFeed.astro` |

## Verificación post-build

En `dist/index.html` MUST aparecer (con ID configurado):

```html
<div class="elfsight-app-<WIDGET_ID>" data-elfsight-app-lazy></div>
<script src="https://elfsightcdn.com/platform.js" async></script>
```

Si aparece el bloque de fallback (botones @ies_gsr sin widget), la variable no se inyectó en build.

## Seguridad

- MUST NOT commitear `.env` con valores de producción.
- `.env.example` MAY dejar valores vacíos como plantilla.
- Rotación de widget: actualizar solo en panel Netlify + redeploy.
