# Data Model: Despliegue Netlify y Auditoría Lighthouse

**Feature**: 014-netlify-deploy | **Date**: 2026-06-15

## Entidades

### NetlifySiteConfig

Configuración del sitio conectado al repositorio GitHub.

| Campo | Tipo | Obligatorio | Validación / Notas |
|-------|------|-------------|-------------------|
| `repository` | string | Sí | `iesgermansanchezruiperez/landingpage-demeteria` |
| `productionBranch` | string | Sí | `main` |
| `buildCommand` | string | Sí | `npm run build` |
| `publishDirectory` | string | Sí | `dist` |
| `nodeVersion` | string | Sí | `22` (coherente con `.nvmrc`) |
| `productionUrl` | string | Sí tras 1er deploy | HTTPS; usado en `astro.config.mjs` `site` |

**Fuente de verdad**: `netlify.toml` + panel Netlify (deben coincidir).

---

### ProductionEnvVar

Variables inyectadas en **build time** por Astro (`import.meta.env.PUBLIC_*`).

| Variable | Obligatoria | Ejemplo | Scope Netlify |
|----------|-------------|---------|---------------|
| `PUBLIC_SOCIAL_WIDGET_ID` | Sí (feed activo) | `dde513e0-b012-480b-957e-bfe4acb82acf` | Builds |
| `PUBLIC_SOCIAL_WIDGET_PROVIDER` | Sí | `elfsight` | Builds |
| `NODE_VERSION` | Sí (o en toml) | `22` | Builds (o `[build.environment]`) |

**Reglas**:

- MUST NOT commitearse en `.env` al repositorio (gitignored).
- SHOULD documentarse en `.env.example` sin valores reales de producción si son rotativos.
- Valores `PUBLIC_*` son visibles en HTML compilado (no son secretos).

---

### StaticAssetManifest (verificación)

Assets críticos que MUST responder 200 en producción.

| Ruta | Uso |
|------|-----|
| `/logos/logo-ue.jpg` | TopBar — UE |
| `/logos/logo-mefpd.jpg` | TopBar — MEFPD |
| `/logos/logo-fondos.jpg` | TopBar — FSE+ |
| `/logos/logo-jcyl.jpg` | TopBar — JCyL |
| `/favicon.svg` | Layout `<link rel="icon">` |
| `/` | Página principal index.html |

---

### LighthouseAuditResult

Resultado de auditoría contra URL de producción.

| Campo | Tipo | Umbral issue #14 |
|-------|------|------------------|
| `url` | string (HTTPS) | URL Netlify publicada |
| `performanceScore` | number 0–100 | **≥ 90** |
| `accessibilityScore` | number 0–100 | **≥ 90** |
| `auditedAt` | ISO datetime | Fecha del cierre del issue |
| `mode` | enum | `mobile` (default Lighthouse) |

**Auditorías críticas a revisar si score < umbral**:

- `color-contrast`
- `is-on-https`
- `render-blocking-resources`
- `uses-text-compression` (Netlify gzip/brotli automático)

---

### DeployStatus

Estado del último despliegue en Netlify.

| Estado | Significado | DoD issue #14 |
|--------|-------------|---------------|
| `building` | En curso | Pendiente |
| `published` | Éxito | ✅ Log verde |
| `failed` | Error build | ❌ Bloqueante |

---

## Relaciones

```text
NetlifySiteConfig
  ├── has many → ProductionEnvVar
  ├── produces → StaticAssetManifest (en CDN tras build)
  └── validated by → LighthouseAuditResult (post-publish)

DeployStatus
  └── gates → LighthouseAuditResult (solo auditar si published)
```

## State Transitions (despliegue)

```text
[push main] → building → published | failed
published → LighthouseAuditResult recorded → issue #14 closable
failed → fix config/code → push main → building
```

## Validación de datos

| Regla | Error si falla |
|-------|----------------|
| `publishDirectory` ≠ `dist` | Build Astro no encontrado en Netlify |
| Sin `PUBLIC_SOCIAL_WIDGET_ID` | Fallback Instagram en producción |
| `site` en astro sin HTTPS | Canonical incorrecto |
| Lighthouse Performance < 90 | No cumple SC-005 / DoD |
