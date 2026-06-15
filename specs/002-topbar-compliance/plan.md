# Implementation Plan: Cabecera y Compliance Institucional (Bloqueante)

**Branch**: `feature/012-topbar-compliance` | **Date**: 2026-06-15 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/002-topbar-compliance/spec.md`

**Issue**: #12 — Cabecera y Compliance Institucional (Bloqueante)

## Summary

Añadir `TopBar.astro` ultra-compacta con cinco placeholders SVG institucionales y lema UE
above-the-fold en móvil; integrarla en `Layout.astro` por encima de `Header.astro`; extraer el
contenido promocional a `sections/Hero.astro`; ubicar la mención legal completa en `Footer.astro`.
Todo sin JavaScript en cliente, manteniendo estética Premium Agrotech en Hero/Header.

## Technical Context

**Language/Version**: TypeScript (strict) / Astro 6.x / HTML5 / Tailwind CSS 4.x

**Primary Dependencies**: `astro`, `tailwindcss`, `@tailwindcss/vite` — sin frameworks UI

**Storage**: Placeholders SVG inline en `TopBar.astro`; assets definitivos futuros en `public/logos/`

**Testing**: Verificación viewport 320×568 DevTools; `find dist -name '*.js'`; build estático;
contraste WCAG manual; inspección DOM semántico

**Target Platform**: Navegadores modernos; mobile-first (≥ 320 px)

**Project Type**: Landing estática Zero-JS con franja de compliance legal

**Performance Goals**: TopBar añade < 5 KB al HTML; LCP < 2.5 s; Lighthouse Performance ≥ 90

**Constraints**: Above-the-fold logos en móvil; textos legales literales; Zero-JS; rama feature

**Scale/Scope**: 1 componente nuevo (TopBar), 1 sección nueva (Hero), cambios en Layout/Footer/index

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Estado pre-diseño | Estado post-diseño |
|------|-------------------|-------------------|
| **Zero-JS** | ✅ Sin scripts ni islands planificados | ✅ SVG inline + `<details>` nativo; verificación post-build |
| **Stack** | ✅ Solo Astro + Tailwind | ✅ Sin nuevas dependencias |
| **Modularidad** | ✅ Hero en `sections/` | ✅ TopBar global en `components/`; Hero aislado |
| **Semántica** | ✅ TopBar como `<aside>`; un `h1` en Hero | ✅ Contrato actualizado en `contracts/` |
| **A11y** | ✅ `alt` en logos; contraste `text-muted` sobre `surface` | ✅ Lema legible ≥ 4.5:1 |
| **Diseño** | ✅ TopBar neutra; Hero Premium Agrotech | ✅ Separación visual documentada |
| **Rendimiento** | ✅ SVG inline ligeros | ✅ Sin imágenes raster en TopBar v1 |

**Resultado**: todos los gates pasan. Sin Complexity Tracking.

## Project Structure

### Documentation (this feature)

```text
specs/002-topbar-compliance/
├── plan.md
├── research.md
├── data-model.md
├── quickstart.md
├── contracts/
│   ├── topbar-layout.md
│   ├── html-semantics.md
│   └── zero-js-compliance.md
└── tasks.md             # (/speckit-tasks)
```

### Source Code (cambios en esta feature)

```text
src/
├── components/
│   ├── TopBar.astro              # NUEVO — compliance institucional
│   ├── Header.astro              # sin cambios estructurales
│   ├── Footer.astro              # MOD — bloque LEG-MENCION completo
│   └── sections/
│       └── Hero.astro            # NUEVO — extraído de index.astro
├── layouts/
│   └── Layout.astro              # MOD — import TopBar antes de Header
└── pages/
    └── index.astro               # MOD — solo importa Hero
```

**Structure Decision**: TopBar vive en `components/` (transversal a todas las páginas, como
Header/Footer). Hero migra a `sections/` según constitución III. La mención legal larga
(LEG-MENCION) va al Footer para no comprometer la altura above-the-fold de la TopBar.

## Estrategia Above-the-Fold (móvil 320×568)

### Problema

Cinco logotipos + lema UE deben ser visibles **sin scroll** en viewports de 320 px de ancho.
El Header de marca (h-16 = 64 px) y el Hero **no** están sujetos a above-the-fold (§5.3 aplica
solo a elementos §5.1).

### Solución: TopBar de dos filas, altura fija ≤ 56 px en móvil

| Fila | Layout Tailwind | Altura objetivo |
|------|-----------------|-----------------|
| **1 — Logos** | `grid grid-cols-5 gap-0.5` | `max-h-8` (32 px) |
| **2 — Lema UE** | `text-center text-[10px] leading-tight` | ~14 px |
| **Padding** | `py-1 px-2` | 8 px total |

**Altura total estimada**: 32 + 14 + 8 = **~54 px** → cabe en 568 px con margen amplio.

### Breakpoints

| Viewport | Grid logos | Altura logo | Lema | Mención abreviada |
|----------|------------|-------------|------|------------------|
| `< 640px` | `grid-cols-5` | `h-6` (24 px) | `text-[10px]` | Oculta (`hidden`) — full en Footer |
| `sm:` (≥640) | `grid-cols-5` | `h-8` (32 px) | `text-xs` | Visible 1 línea `sm:block` |
| `md:` (≥768) | `flex` row logos + lema inline | `h-10` | `text-xs` | Junto a logos |

### Reglas CSS críticas

```text
overflow-x-hidden     → en TopBar wrapper; prohibido scroll horizontal
shrink-0              → en cada celda de logo; evita compresión ilegible
object-contain        → en SVG/img placeholders
max-w-[4.5rem]        → ancho máximo por logo en móvil (72 px → 5 × 72 = 360 > 320 con gap)
                      → usar max-w-[3.5rem] (56 px) en móvil: 5 × 56 + gaps ≈ 296 px ✓
```

## Andamiaje: `src/components/TopBar.astro`

### Estructura DOM

```astro
<aside
  aria-label="Financiación del proyecto CYL INNOVA FP"
  class="bg-surface border-b border-gray-200 overflow-x-hidden"
>
  <div class="mx-auto max-w-6xl px-2 sm:px-4 py-1 sm:py-1.5">
    <!-- Fila 1: 5 placeholders -->
    <div
      class="grid grid-cols-5 gap-0.5 sm:gap-1 items-center justify-items-center"
      role="list"
      aria-label="Logotipos institucionales"
    >
      <!-- LOGO-UE, LOGO-MEFPD, LOGO-JCYL, LOGO-CYLINNOVA, LOGO-FSE -->
    </div>
    <!-- Fila 2: lema UE (obligatorio above-the-fold) -->
    <p class="mt-0.5 text-center text-[10px] sm:text-xs text-muted leading-tight">
      Cofinanciado por la Unión Europea
    </p>
    <!-- Mención abreviada: solo sm+ (full en Footer) -->
    <p class="hidden sm:block mt-1 text-center text-[10px] text-muted/80 leading-snug">
      Actuación financiada por el Ministerio de Educación, Formación Profesional y Deportes…
    </p>
  </div>
</aside>
```

### Placeholder SVG (patrón reutilizable)

Cada logo usa un contenedor + SVG inline gris (Zero-JS, sin fetch externo):

```astro
---
// Ejemplo LOGO-UE — repetir patrón para los 5 slots
---
<div class="w-full max-w-14 h-6 sm:h-8 flex items-center justify-center shrink-0" role="listitem">
  <svg
    class="h-full w-auto text-gray-300"
    viewBox="0 0 48 32"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="32" rx="2" fill="currentColor" opacity="0.35" />
    <circle cx="24" cy="16" r="8" fill="currentColor" opacity="0.5" />
  </svg>
  <span class="sr-only">Logotipo Unión Europea</span>
</div>
```

> **Nota accesibilidad**: `aria-hidden` en SVG decorativo + `sr-only` con nombre; cuando se
> sustituyan por `<img>`, usar `alt` descriptivo y eliminar `aria-hidden`.

### Catálogo de placeholders (v1)

| Slot | Etiqueta sr-only / futuro alt | SVG distintivo |
|------|------------------------------|----------------|
| LOGO-UE | Logotipo Unión Europea | Círculo de estrellas (simplificado) |
| LOGO-MEFPD | Ministerio de Educación, Formación Profesional y Deportes | Rectángulo horizontal |
| LOGO-JCYL | Junta de Castilla y León | Escudo cuadrado |
| LOGO-CYLINNOVA | Programa CYL INNOVA FP | Badge texto «INNOVA» |
| LOGO-FSE | Fondo Social Europeo Plus | Rectángulo «FSE+» |

### Variante desktop (`md:`)

```html
<div class="hidden md:flex md:items-center md:justify-between md:gap-4">
  <div class="flex items-center gap-3"><!-- 5 logos inline --></div>
  <p class="text-xs text-muted max-w-xl text-right">Cofinanciado por la Unión Europea</p>
</div>
```

La variante móvil (`grid grid-cols-5`) se oculta en `md:` con `md:hidden`; la fila desktop
usa `hidden md:flex`.

## Modificación: `src/layouts/Layout.astro`

```astro
---
import '../styles/global.css';
import TopBar from '../components/TopBar.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
// ... props sin cambios
---
<body class="min-h-screen flex flex-col bg-mist text-tech-slate font-sans antialiased">
  <a href="#contenido-principal" class="sr-only focus:not-sr-only ...">...</a>
  <TopBar />
  <Header />
  <main id="contenido-principal" class="flex-1 w-full">
    <slot />
  </main>
  <Footer />
</body>
```

**Orden obligatorio**: skip link → **TopBar** → Header → main → Footer.

## Andamiaje: `src/components/sections/Hero.astro`

Extraer literalmente el `<section>` actual de `index.astro` (sin cambios visuales):

```astro
<section
  class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24"
  aria-labelledby="titulo-hero"
>
  <div class="max-w-3xl">
    <p class="text-sm font-medium uppercase tracking-wider text-hydro-teal mb-4">
      CYL INNOVA FP · Agricultura de Precisión
    </p>
    <h1 id="titulo-hero" class="text-4xl sm:text-5xl font-bold text-tech-slate leading-tight">
      DemeterIA
    </h1>
    <p class="mt-6 text-lg text-muted leading-relaxed">...</p>
    <div class="mt-8 flex flex-wrap gap-4"><!-- badges --></div>
  </div>
</section>
```

**Ajuste responsive**: `py-16` → `py-12 sm:py-16 lg:py-24` para compensar altura TopBar
sin empujar contenido crítico; Hero puede quedar parcialmente below-fold (permitido).

## Refactorización: `src/pages/index.astro`

**Antes** (monolítico):

```astro
---
import Layout from '../layouts/Layout.astro';
---
<Layout>
  <section>...</section>
</Layout>
```

**Después** (composición modular):

```astro
---
import Layout from '../layouts/Layout.astro';
import Hero from '../components/sections/Hero.astro';
---
<Layout>
  <Hero />
</Layout>
```

## Modificación: `src/components/Footer.astro`

Añadir bloque LEG-MENCION completo antes del `<hr>`:

```astro
<section aria-label="Financiación del proyecto" class="mt-4 pt-4 border-t border-mist/20">
  <p class="text-[10px] sm:text-xs text-mist/70 leading-relaxed">
    Actuación financiada por el Ministerio de Educación, Formación Profesional y Deportes
    y cofinanciada por la Unión Europea (FSE+), línea de actuación 6.4 «Implementación de
    proyectos en Formación Profesional» (medidas 3.e.10, 3.e.11 y 3.e.14), incluida en la
    Línea principal de actuación 6- Impulso y Calidad de la Formación Profesional, en el
    marco financiero plurianual 2021-2027, dentro del Programa de Empleo, Educación,
    Formación y Economía Social (ÉFESO).
  </p>
</section>
```

Texto literal de Instrucciones §5.1 — sin parafrasear.

## Política Zero-JS — Cumplimiento estricto

### Qué se usa (permitido)

| Técnica | Uso en esta feature | ¿Genera JS cliente? |
|---------|---------------------|---------------------|
| SVG inline en `.astro` | Placeholders TopBar | No |
| Tailwind utility classes | Layout grid/flex | No (compila a CSS) |
| `<details>`/`<summary>` | Opcional para mención | No (HTML nativo) |
| Frontmatter TypeScript | Constantes de texto legal | No (build time) |
| `hidden` / `sm:block` | Responsive sin JS | No (CSS media queries) |

### Qué está prohibido

| Prohibido | Motivo |
|-----------|--------|
| `client:load` / islands | Hidrata JS en cliente |
| Carousel de logos | Requiere JS o CSS animado complejo |
| Lazy-load JS (`loading="lazy"` está OK en img) | N/A en v1 (SVG inline) |
| Acordeón con JS | Usar `<details>` si necesario |
| `onclick`, Alpine, React | Viola constitución II |

### Verificación obligatoria (pre-merge)

```bash
npm run build
find dist -name '*.js' -type f | wc -l    # → 0
rg 'client:(load|idle|visible)' src/      # → sin coincidencias
rg '<script' src/                         # → sin coincidencias
```

Documentación completa en [contracts/zero-js-compliance.md](./contracts/zero-js-compliance.md).

## Verificación Above-the-Fold

### Procedimiento DevTools

1. Abrir `npm run dev` → Chrome DevTools → Toggle device toolbar.
2. Seleccionar **iPhone SE** (375×667) o custom **320×568**.
3. Recargar sin scroll.
4. Confirmar visualmente: 5 logos + lema «Cofinanciado por la Unión Europea» visibles.
5. Opcional: captura con `element.scrollHeight` de `<aside>` ≤ 60 px.

### Criterio de fallo

- Cualquier logo cortado por `overflow: hidden` sin alternativa visible.
- Scroll horizontal en TopBar.
- Lema UE ausente o texto alterado.
- Altura TopBar > 72 px en móvil (riesgo de empujar contenido legal fuera de fold).

## Complexity Tracking

> Sin violaciones. Tabla vacía.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
