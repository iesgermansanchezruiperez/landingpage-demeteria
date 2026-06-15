# Research: Inicialización Astro + Tailwind CSS + Estructura base

**Feature**: 001-astro-tailwind-init | **Date**: 2026-06-15

## R1 — Plantilla Astro para Zero-JS

**Decision**: Usar plantilla `minimal` con `--no-git` (el repo ya existe).

**Rationale**: La plantilla minimal no incluye React, Vue ni Svelte. Genera solo
`src/pages/index.astro` y configuración base, minimizando archivos a eliminar.
`basics` añade componentes de ejemplo innecesarios.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| `basics` | Incluye componentes demo que hay que limpiar |
| `docs` / `blog` | Estructura orientada a contenido dinámico, fuera de scope |
| `starlight` | Framework de documentación, no landing promocional |

## R2 — Integración Tailwind con Astro

**Decision**: `npx astro add tailwind --yes` → pipeline `@tailwindcss/vite` (Tailwind v4).

**Rationale**: Es el método oficial y mantenido por Astro. Integra Vite sin configuración
manual adicional. Compatible con `tailwind.config.mjs` vía directiva `@config` en CSS.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| PostCSS manual | Más pasos, más superficie de error para alumnos |
| CDN Tailwind | Prohibido por rendimiento y tokens personalizados |
| CSS puro sin Tailwind | Viola Issue #11 y constitución |

## R3 — Ubicación de Header/Footer

**Decision**: `Layout.astro` importa `Header.astro` y `Footer.astro`; el slot recibe solo
contenido de `<main>`.

**Rationale**: Garantiza landmarks `header`/`main`/`footer` en todas las páginas sin que
cada `pages/*.astro` repita imports. Las páginas futuras solo componen secciones dentro
del slot. Header y Footer siguen siendo componentes aislados editables independientemente
(cumple US3 de la spec).

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Header/Footer en cada página | Duplicación y riesgo de romper semántica |
| Footer como sección en `sections/` | Footer es transversal, no sección de contenido |
| Layout sin Header/Footer | Obliga a repetir landmarks en cada página |

## R4 — Blindaje Zero-JS

**Decision**: Triple verificación: config (`output: 'static'`), código (sin `client:*` ni
`<script>`), artefacto (`find dist -name '*.js'` vacío).

**Rationale**: Astro puede emitir JS si se añaden islands o scripts por error. La
verificación del artefacto `dist/` es la prueba definitiva para CC-003.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Confiar solo en `output: 'static'` | No detecta islands añadidos por error |
| ESLint plugin custom | Overhead para feature de bootstrap; documentar en contrato |
| `inlineScripts: 'never'` | Opción válida como refuerzo futuro, no requerida en v1 |

## R5 — Paleta corporativa sin hex en Memorias

**Decision**: Adoptar tokens de `spec.md` (`demeter-green`, `hydro-teal`, etc.) como
fuente única de verdad en `tailwind.config.mjs`.

**Rationale**: Las memorias definen esencia temática (agricultura, agua, tecnología,
institucional) pero no códigos hex. La paleta derivada cumple contraste WCAG AA y
estética Premium Agrotech.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Colores Material de la app Android | No documentados con hex en repo; otro medio |
| Paleta genérica Tailwind (`green-700`) | No transmite identidad DemeterIA |
| Variables CSS sueltas sin Tailwind | Viola FR-004 y constitución (tokens en config) |

## R6 — Tipografía

**Decision**: Stack `system-ui` via `fontFamily.sans` en Tailwind; sin Google Fonts en v1.

**Rationale**: Cero solicitudes externas → mejor Performance y LCP. Coherente con
Premium Agrotech corporativo. Fuentes custom pueden añadirse en feature futura
auto-hospedadas.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Google Fonts CDN | Solicitud externa, impacto LCP |
| `@font-face` custom | Fuera de scope Issue #11 |
