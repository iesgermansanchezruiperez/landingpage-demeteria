# Implementation Plan: Secciones Informativas y Widget de Instagram

**Branch**: `feature/013-info-social` | **Date**: 2026-06-15 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/013-info-social/spec.md`

**Issue**: #13 — Secciones informativas y Widget de Instagram

## Summary

Añadir tres componentes modulares en `src/components/sections/`: `ProjectObjectives.astro`
(objetivo general + 3 pilares en `<article>`), `ProjectPhases.astro` (grid 1→3 columnas),
`SocialFeed.astro` (contenedor aislado para widget Curator.io/Elfsight de @ies_gsr filtrado por
#demeteria). Integrar secuencialmente en `index.astro` entre `<Hero />` y el footer del Layout.
Zero-JS estricto salvo excepción documentada del widget.

## Technical Context

**Language/Version**: TypeScript (strict) / Astro 6.x / HTML5 / Tailwind CSS 4.x

**Primary Dependencies**: `astro`, `tailwindcss`, `@tailwindcss/vite`; widget externo Curator.io o
Elfsight (sin npm package)

**Storage**: Contenido estático en frontmatter de componentes `.astro`; ID de widget en variable
de entorno o constante documentada (`SOCIAL_WIDGET_ID`)

**Testing**: Build estático; inspección DOM semántica; viewport 320 / 1024 px; Lighthouse A11y;
validación manual del filtro #demeteria en panel del proveedor

**Target Platform**: Navegadores modernos; mobile-first (≥ 320 px)

**Project Type**: Landing estática Zero-JS con excepción encapsulada en SocialFeed

**Performance Goals**: Secciones estáticas sin regresión LCP; widget con carga diferida;
Lighthouse Performance ≥ 90 (secciones propias)

**Constraints**: Un `h1` (Hero); sin `client:*`; rama feature; hashtag estricto #demeteria

**Scale/Scope**: 3 componentes nuevos, 1 página modificada (`index.astro`)

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Estado pre-diseño | Estado post-diseño |
|------|-------------------|-------------------|
| **Zero-JS** | ⚠️ Excepción widget | ✅ JS solo en `SocialFeed.astro`; Complexity Tracking |
| **Stack** | ✅ Solo Astro + Tailwind | ✅ Sin React/Vue/Svelte |
| **Modularidad** | ✅ Secciones en `sections/` | ✅ index solo compone imports |
| **Semántica** | ✅ section/article/h2/h3 | ✅ Contrato `contracts/html-semantics.md` |
| **A11y** | ✅ Contraste tokens; fallback enlace | ✅ aria-label en contenedor widget |
| **Diseño** | ✅ Premium Agrotech | ✅ Tokens consistentes con Hero |
| **Rendimiento** | ⚠️ Widget terceros | ✅ Lazy embed + fallback estático |

**Resultado**: pasa con **excepción documentada** en Complexity Tracking (widget Instagram).

### Complexity Tracking

| Violación | Por qué necesaria | Alternativa rechazada |
|-----------|-------------------|----------------------|
| JS de terceros en cliente (Curator/Elfsight) | Feed Instagram dinámico filtrado por #demeteria sin backend | API propia Instagram (requiere servidor OAuth); galería estática manual (no actualizable) |

## Project Structure

### Documentation (this feature)

```text
specs/013-info-social/
├── spec.md
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── html-semantics.md
│   ├── zero-js-compliance.md
│   ├── phases-grid.md
│   └── social-feed-widget.md
├── checklists/
│   └── requirements.md
└── tasks.md
```

### Source Code (cambios en esta feature)

```text
src/
├── components/
│   └── sections/
│       ├── Hero.astro                 # sin cambios
│       ├── ProjectObjectives.astro    # NUEVO
│       ├── ProjectPhases.astro        # NUEVO
│       └── SocialFeed.astro           # NUEVO — excepción Zero-JS
└── pages/
    └── index.astro                    # MOD — composición secuencial
```

**Structure Decision**: Las tres secciones viven en `sections/` según constitución III.
`SocialFeed.astro` encapsula toda interacción con terceros; el resto es HTML+Tailwind puro.

## Composición de página (`index.astro`)

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/sections/Hero.astro';
import ProjectObjectives from '../components/sections/ProjectObjectives.astro';
import ProjectPhases from '../components/sections/ProjectPhases.astro';
import SocialFeed from '../components/sections/SocialFeed.astro';
---

<Layout>
  <Hero />
  <ProjectObjectives />
  <ProjectPhases />
  <SocialFeed />
</Layout>
```

**Orden DOM en `<main>`**: Hero → Objetivos → Fases → SocialFeed → (Footer en Layout).

## Blueprint: `ProjectObjectives.astro`

### Estructura DOM

```astro
<section
  id="objetivos"
  class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
  aria-labelledby="titulo-objetivos"
>
  <header class="max-w-3xl mb-10">
    <h2 id="titulo-objetivos" class="text-3xl sm:text-4xl font-bold text-tech-slate">
      Objetivos del proyecto
    </h2>
    <p class="mt-4 text-lg text-muted leading-relaxed">
      {OBJ-GENERAL — texto literal desde data-model.md}
    </p>
  </header>

  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" role="list">
    <article role="listitem" class="rounded-xl bg-surface border border-gray-200/80 p-6 shadow-sm">
      <h3 class="text-xl font-semibold text-demeter-green">Hidroponía sostenible</h3>
      <p class="mt-3 text-muted leading-relaxed">...</p>
    </article>
    <!-- PILLAR-2: IoT + Inteligencia Artificial — hydro-teal -->
    <!-- PILLAR-3: Inclusión social — agro-earth -->
  </div>
</section>
```

**Reglas semánticas**:

- Un `<section>` raíz con `aria-labelledby` apuntando al `h2`.
- Tres `<article>` independientes (no `<div>` genéricos).
- `header` interno opcional para intro (objetivo general); pilares en grid de articles.

## Blueprint: `ProjectPhases.astro`

### Estructura DOM

```astro
<section
  id="fases"
  class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-mist/50"
  aria-labelledby="titulo-fases"
>
  <h2 id="titulo-fases" class="text-3xl sm:text-4xl font-bold text-tech-slate mb-10">
    Fases del proyecto
  </h2>

  <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8" role="list">
    <article role="listitem" class="relative rounded-xl bg-surface p-6 border-l-4 border-demeter-green shadow-sm">
      <p class="text-sm font-medium uppercase tracking-wider text-hydro-teal">Fase 1</p>
      <h3 class="mt-2 text-xl font-semibold text-tech-slate">Diseño e Infraestructura</h3>
      <p class="mt-3 text-muted leading-relaxed">...</p>
    </article>
    <!-- Fase 2: Desarrollo de Software — border-hydro-teal -->
    <!-- Fase 3: Despliegue y Difusión — border-agro-earth -->
  </div>
</section>
```

**Grid obligatorio**: `grid-cols-1 lg:grid-cols-3` — ver `contracts/phases-grid.md`.

## Blueprint: `SocialFeed.astro`

### Contenedor aislado

```astro
---
// ZERO-JS EXCEPTION: third-party Instagram widget
// Provider: Curator.io (preferred) | Elfsight (fallback)
// Account: @ies_gsr | Hashtag filter: #demeteria (strict)
const WIDGET_ID = import.meta.env.PUBLIC_SOCIAL_WIDGET_ID ?? '';
const INSTAGRAM_URL = 'https://www.instagram.com/ies_gsr/';
---

<section
  id="redes-sociales"
  class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
  aria-labelledby="titulo-social"
>
  <header class="mb-8">
    <h2 id="titulo-social" class="text-3xl sm:text-4xl font-bold text-tech-slate">
      DemeterIA en Instagram
    </h2>
    <p class="mt-3 text-muted">
      Publicaciones de <a href={INSTAGRAM_URL} class="text-hydro-teal hover:underline"
        rel="noopener noreferrer" target="_blank">@ies_gsr</a> con
      <span class="font-medium text-tech-slate">#demeteria</span>
    </p>
  </header>

  <div
    id="social-feed-widget"
    class="min-h-[200px] rounded-xl bg-surface border border-gray-200/80 overflow-hidden"
    aria-label="Publicaciones de Instagram del proyecto DemeterIA"
    aria-live="polite"
  >
    {WIDGET_ID ? (
      <!-- Embed Curator.io o Elfsight según contracts/social-feed-widget.md -->
    ) : (
      <p class="p-8 text-center text-muted">Feed en configuración.</p>
    )}
  </div>

  <noscript>
    <p class="mt-4 text-sm text-muted">
      <a href={INSTAGRAM_URL}>Ver @ies_gsr en Instagram</a> — busca #demeteria
    </p>
  </noscript>
</section>
```

**Configuración del proveedor** (panel web, no código):

| Parámetro | Valor |
|-----------|-------|
| Fuente | Instagram @ies_gsr |
| Filtro hashtag | `#demeteria` (strict / only posts with hashtag) |
| Posts máx. | 6–9 (recomendado para rendimiento) |
| Tema | Claro, acorde a `surface`/`mist` |

## Tokens y estética

Reutilizar paleta existente en `tailwind.config.mjs`:

- Títulos: `text-tech-slate`
- Cuerpo: `text-muted`
- Acentos por pilar/fase: `demeter-green`, `hydro-teal`, `agro-earth`
- Fondos tarjetas: `bg-surface`; sección alterna fases: `bg-mist/50`
- Espaciado sección: `py-12 sm:py-16` (coherente con Hero)

## Validación post-implementación

1. `npm run build` sin errores.
2. Inspeccionar DOM: orden de secciones y landmarks.
3. Viewport 320 px y 1280 px: grids correctos.
4. Verificar widget en panel: solo posts #demeteria de @ies_gsr.
5. Lighthouse A11y ≥ 90.
6. PR `feature/013-info-social` → `main`.
