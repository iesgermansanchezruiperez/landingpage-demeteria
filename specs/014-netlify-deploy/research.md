# Research: Despliegue Netlify y Auditoría Lighthouse

**Feature**: 014-netlify-deploy | **Date**: 2026-06-15

## R1 — Plataforma de hosting estático

**Decision**: Netlify con despliegue continuo desde rama `main`.

**Rationale**: El issue #14 lo exige explícitamente. Astro `output: 'static'` genera `dist/` listo
para CDN. Netlify detecta automáticamente proyectos Node y permite variables de entorno en build
time (necesarias para `PUBLIC_SOCIAL_WIDGET_ID`).

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Vercel | No solicitado en el issue; equivalencia técnica pero cambia el alcance |
| GitHub Pages | Sin variables de entorno nativas en build para `import.meta.env.PUBLIC_*` sin Actions |
| Servidor propio | Contradice restricción de hosting estático simple del proyecto |

---

## R2 — Archivo `netlify.toml` vs solo UI

**Decision**: Añadir `netlify.toml` en la raíz del repositorio.

**Rationale**: Versiona build command, publish directory y contexto de producción. Evita drift entre
desarrolladores y facilita revisión en PR. Netlify fusiona UI + archivo (archivo tiene prioridad).

**Contenido mínimo**:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Solo panel Netlify | No reproducible en git; error humano al reconfigurar |
| `netlify.toml` + plugins Astro | No necesario; build npm estándar es suficiente para Astro 6 static |

---

## R3 — Versión de Node.js en Netlify

**Decision**: `NODE_VERSION = "22"` en `[build.environment]` y coherencia con `.nvmrc` (`22`) y
`package.json` (`engines.node >= 22.12.0`).

**Rationale**: Astro 6 requiere Node moderno; el proyecto ya documenta Node 22 en README y `.nvmrc`.
Netlify lee `NODE_VERSION` o `.nvmrc` automáticamente; duplicar en `netlify.toml` es defensa en
profundidad.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Node 18 LTS | Por debajo de `engines` del proyecto |
| Sin fijar versión | Riesgo de build fallido si Netlify usa Node 20 por defecto en algún momento |

---

## R4 — Variables de entorno `PUBLIC_*` (Astro)

**Decision**: Configurar en Netlify → Site settings → Environment variables (scope: Builds):

- `PUBLIC_SOCIAL_WIDGET_ID` = ID Elfsight (público, no secreto)
- `PUBLIC_SOCIAL_WIDGET_PROVIDER` = `elfsight`

**Rationale**: Astro inyecta variables con prefijo `PUBLIC_` en build time al HTML estático. Sin
ellas, `SocialFeed.astro` renderiza fallback. El `.env` local NO se sube a git (`.gitignore`).

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Hardcodear widget ID en código | Acopla entornos; dificulta rotación del widget |
| Netlify Functions | Innecesario para sitio 100% estático |

---

## R5 — URL canónica (`site` en Astro)

**Decision**: Añadir `site` en `astro.config.mjs` con la URL de producción Netlify una vez creado
el sitio (p. ej. `https://demeteria-landing.netlify.app` o dominio asignado).

**Rationale**: `Layout.astro` genera `<link rel="canonical">` vía `Astro.site`. Sin `site`,
fallback es `localhost` en algunos contextos. En producción mejora SEO y comportamiento de enlaces
de terceros (Instagram/Elfsight pueden usar origen de página).

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Dejar sin `site` | Canonical incorrecto; peor experiencia en embeds de terceros |
| Variable `URL` de Netlify | Netlify expone `URL` en runtime de build; usable como `site` si se configura en astro via env — opcional en tasks |

---

## R6 — Auditoría Lighthouse en producción

**Decision**: Ejecutar Lighthouse CLI contra URL HTTPS de producción, modo móvil por defecto,
categorías Performance y Accessibility.

**Comando de referencia**:

```bash
npx lighthouse https://<sitio>.netlify.app \
  --only-categories=performance,accessibility \
  --output=json \
  --output-path=./lighthouse-report-production.json \
  --chrome-flags="--headless"
```

**Rationale**: El issue exige ≥ 90 en ambas métricas en **URL de producción**, no solo local.
Local ya alcanzó A11y 100 (sin widget de red completo); producción incluye Elfsight CDN y puede
variar ligeramente.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Solo Lighthouse local | No cumple Definition of Done del issue |
| PageSpeed Insights API | Válido alternativo; CLI es reproducible en quickstart |

---

## R7 — Impacto del widget Elfsight en Performance

**Decision**: Aceptar excepción Zero-JS existente; medir Lighthouse **con widget cargado** en
producción. Si Performance cae bajo 90, mitigar con lazy load ya aplicado (`data-elfsight-app-lazy`)
y documentar en Complexity Tracking solo si hace falta acción adicional.

**Rationale**: Issue #13 documentó la excepción. El widget es requisito de negocio. Lazy loading
reduce impacto en LCP inicial.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Excluir widget del audit | No refleja experiencia real del visitante |
| Quitar widget para pasar Lighthouse | Contradice features mergeadas |

---

## R8 — HTTPS y cabeceras

**Decision**: Confiar en HTTPS automático de Netlify; sin configuración extra para este issue.

**Rationale**: Netlify provisiona certificado Let's Encrypt. Lighthouse `is-on-https` pasa en
producción (en local puede ser HTTP).

**Alternatives considered**: HSTS personalizado — out of scope para landing educativa inicial.
