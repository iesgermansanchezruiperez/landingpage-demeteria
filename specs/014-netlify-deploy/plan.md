# Implementation Plan: Despliegue en Producción (Netlify) y Auditoría Lighthouse

**Branch**: `feature/014-netlify-deploy` | **Date**: 2026-06-15 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/014-netlify-deploy/spec.md`

**Issue**: #14 — Despliegue en Producción (Netlify) y Auditoría Lighthouse

## Summary

Publicar la landing Astro estática en **Netlify** con CI/CD desde `main`: `netlify.toml` con
`npm run build` → `dist/`, Node 22, variables `PUBLIC_SOCIAL_WIDGET_*` en el panel Netlify,
`site` en `astro.config.mjs` con URL de producción, verificación de assets institucionales y
auditoría **Lighthouse** (Performance ≥ 90, Accessibility ≥ 90) contra la URL HTTPS pública.

## Technical Context

**Language/Version**: TypeScript (strict) / Astro 6.x / HTML5 estático / Tailwind CSS 4.x

**Primary Dependencies**: `astro`, `tailwindcss`, `@tailwindcss/vite`; Elfsight CDN (runtime en
producción, excepción Zero-JS documentada)

**Storage**: N/A — artefacto estático en `dist/`; configuración en `netlify.toml` y panel Netlify

**Testing**: Build local; despliegue Netlify (log Published); curl/200 en assets; Lighthouse CLI
en URL producción; inspección manual TopBar + SocialFeed

**Target Platform**: Netlify CDN (HTTPS); visitantes en navegadores modernos ≥ 320 px

**Project Type**: Landing estática con excepción JS terceros en `SocialFeed.astro`

**Performance Goals**: Lighthouse Performance ≥ 90 y Accessibility ≥ 90 en **producción**;
LCP < 2.5 s según constitución

**Constraints**: Sin servidor Node en runtime; `.env` no en git; rama feature para implementación;
umbrales Lighthouse del issue son obligatorios

**Scale/Scope**: 1 archivo config (`netlify.toml`), ajuste `astro.config.mjs`, documentación
despliegue, validación operativa en Netlify (panel + CLI Lighthouse)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Estado pre-diseño | Estado post-diseño |
|------|-------------------|-------------------|
| **Zero-JS** | ✅ Sin cambios en cliente | ✅ Despliegue no añade JS propio |
| **Stack** | ✅ Astro + Tailwind | ✅ Sin nuevas dependencias npm |
| **Modularidad** | ✅ Sin cambios de secciones | ✅ Solo config + URL canónica |
| **Semántica** | ✅ Ya cumplida | ✅ Sin cambios de markup |
| **A11y** | ✅ Local A11y 100 | ✅ Validar ≥ 90 en producción post-Elfsight |
| **Diseño** | ✅ Sin cambios visuales | ✅ N/A |
| **Rendimiento** | ⚠️ Widget en CDN producción | ✅ Lazy Elfsight; audit en URL real |

**Resultado**: pasa; la excepción Elfsight ya está documentada en `specs/013-info-social/`.
Este feature **valida** que los umbrales se mantienen en producción.

### Complexity Tracking

> Sin nuevas violaciones. Reutiliza excepción widget de feature 013.

| Violación | Por qué necesaria | Alternativa rechazada |
|-----------|-------------------|----------------------|
| (heredada) JS Elfsight en producción | Feed Instagram dinámico | Galería estática sin actualización |

## Project Structure

### Documentation (this feature)

```text
specs/014-netlify-deploy/
├── spec.md
├── plan.md                    # Este archivo
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── netlify-build-config.md
│   ├── production-env-vars.md
│   └── lighthouse-thresholds.md
├── checklists/
│   └── requirements.md
└── tasks.md                   # /speckit-tasks (siguiente fase)
```

### Source Code (cambios previstos en implementación)

```text
netlify.toml                   # NUEVO — build, publish, NODE_VERSION
astro.config.mjs               # MOD — site: URL producción Netlify
.env.example                   # (existente) referencia variables PUBLIC_*
docs/netlify-deploy.md         # NUEVO — guía operativa para el equipo (opcional en tasks)
```

**Structure Decision**: Configuración de despliegue en raíz (`netlify.toml`) siguiendo convención
Netlify. Sin carpetas `src/` nuevas; el artefacto sigue siendo `dist/` de Astro static.

## Fases de implementación (vista previa para tasks)

### Fase A — Configuración en repositorio

1. Crear `netlify.toml` con `command`, `publish`, `NODE_VERSION`
2. Actualizar `astro.config.mjs` con `site` (URL Netlify asignada tras crear sitio)
3. Verificar `.gitignore` excluye `.env` y reportes Lighthouse locales opcionales

### Fase B — Netlify (panel, operación manual)

1. Importar repo `landingpage-demeteria` desde GitHub
2. Rama de producción: `main`
3. Confirmar build: `npm run build`, publish: `dist`
4. Añadir variables de entorno `PUBLIC_SOCIAL_WIDGET_ID`, `PUBLIC_SOCIAL_WIDGET_PROVIDER`
5. Trigger deploy → estado **Published**

### Fase C — Validación post-despliegue

1. Comprobar HTTPS y carga de página completa
2. Verificar 4 logos en `/logos/*.jpg` (200)
3. Verificar widget Instagram en `#redes-sociales`
4. Ejecutar Lighthouse CLI → Performance ≥ 90, A11y ≥ 90
5. Archivar resultado y cerrar Issue #14

## Contratos

| Contrato | Propósito |
|----------|-----------|
| [netlify-build-config.md](./contracts/netlify-build-config.md) | Parámetros build/publish/Node |
| [production-env-vars.md](./contracts/production-env-vars.md) | Variables PUBLIC_* en Netlify |
| [lighthouse-thresholds.md](./contracts/lighthouse-thresholds.md) | Umbrales y comando de audit |

## Referencias

- [research.md](./research.md) — decisiones Netlify, Node 22, Lighthouse
- [data-model.md](./data-model.md) — entidades de configuración y audit
- [quickstart.md](./quickstart.md) — guía paso a paso de validación
- `specs/013-info-social/contracts/social-feed-widget.md` — widget Instagram
- `.env.example` — plantilla variables locales/producción

## Phase 0 / Phase 1 Status

- [x] **Phase 0**: `research.md` — sin NEEDS CLARIFICATION pendientes
- [x] **Phase 1**: `data-model.md`, `contracts/`, `quickstart.md` generados
- [ ] **Phase 2**: `tasks.md` — ejecutar `/speckit-tasks`
