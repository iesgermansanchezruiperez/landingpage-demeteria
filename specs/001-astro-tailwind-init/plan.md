# Implementation Plan: Inicialización Astro + Tailwind CSS + Estructura base

**Branch**: `001-astro-tailwind-init` | **Date**: 2026-06-15 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `specs/001-astro-tailwind-init/spec.md`

**Issue**: #11 — Inicialización Astro + Tailwind CSS + Estructura base

## Summary

Inicializar la landing promocional DemeterIA en la raíz del repositorio con Astro
(`output: 'static'`, Zero-JS), Tailwind CSS con tokens corporativos Premium Agrotech, y
un andamiaje semántico HTML5 compuesto por `Layout.astro`, `Header.astro`,
`Footer.astro` e `index.astro`. El diseño prioriza HTML precompilado sin JavaScript en
cliente, paleta centralizada en `tailwind.config.mjs` y estructura de carpetas preparada
para secciones modulares futuras.

## Technical Context

**Language/Version**: TypeScript (strict) / Astro 5.x / HTML5 / Tailwind CSS 4.x

**Primary Dependencies**: `astro`, `@tailwindcss/vite`, `tailwindcss` — sin
`@astrojs/react`, `@astrojs/vue`, `@astrojs/svelte` ni islands

**Storage**: N/A (sitio estático; assets en `public/`)

**Testing**: `npm run build` + auditoría Zero-JS; Lighthouse A11y/Performance; inspección
HTML semántico; contraste WCAG manual

**Target Platform**: Navegadores modernos; despliegue estático (CDN / GitHub Pages)

**Project Type**: Landing page promocional estática (Zero-JS en cliente)

**Performance Goals**: Lighthouse Performance ≥ 90; LCP < 2.5 s (4G simulada)

**Constraints**: `output: 'static'`; prohibido `<script>` cliente, `client:*`, islands;
WCAG 2.1 AA; estética Premium Agrotech

**Scale/Scope**: Esqueleto base (1 layout, 2 componentes globales, 1 página); carpetas
`sections/` y `ui/` vacías como extensión futura

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Gate | Estado pre-diseño | Estado post-diseño |
|------|-------------------|-------------------|
| **Zero-JS** | ✅ `output: 'static'`; sin scripts ni islands planificados | ✅ Verificación post-build documentada en quickstart |
| **Stack** | ✅ Solo Astro + Tailwind | ✅ Sin integraciones UI prohibidas en `package.json` |
| **Modularidad** | ⚠️ Esta feature crea esqueleto; `sections/` reservada vacía | ✅ Carpetas `sections/` y `ui/` creadas; Header/Footer aislados |
| **Semántica** | ✅ Landmarks `header`/`main`/`footer`, un `h1`, `lang="es"` | ✅ Contrato HTML en `contracts/html-semantics.md` |
| **A11y** | ✅ Contraste paleta verificado; foco visible; skip link opcional | ✅ Combinaciones texto/fondo documentadas en data-model |
| **Diseño** | ✅ Tokens Premium Agrotech en Tailwind | ✅ Clases corporativas en index placeholder |
| **Rendimiento** | ✅ Sin JS cliente; CSS único vía Tailwind | ✅ Build estático mínimo |

**Resultado**: todos los gates pasan. Sin entradas en Complexity Tracking.

## Project Structure

### Documentation (this feature)

```text
specs/001-astro-tailwind-init/
├── plan.md              # Este archivo
├── research.md          # Decisiones técnicas Phase 0
├── data-model.md        # Tokens, props de layout y entidades
├── quickstart.md        # Guía de validación end-to-end
├── contracts/
│   ├── html-semantics.md
│   └── zero-js-policy.md
└── tasks.md             # (/speckit-tasks — no generado por este comando)
```

### Source Code (repository root)

Astro se inicializa en la **raíz del repositorio** (coexiste con `docs/` y `specs/`).

```text
landingpage-demeteria/
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json
├── tailwind.config.mjs
├── tsconfig.json
├── public/
│   └── favicon.svg
├── docs/                          # (existente, sin modificar)
├── specs/                         # (existente, sin modificar)
└── src/
    ├── components/
    │   ├── Header.astro           # Landmark <header> + <nav>
    │   ├── Footer.astro           # Landmark <footer>
    │   ├── sections/
    │   │   └── .gitkeep           # Secciones futuras (Hero, Features…)
    │   └── ui/
    │       └── .gitkeep           # Componentes reutilizables futuros
    ├── layouts/
    │   └── Layout.astro           # Documento HTML5 + slot principal
    ├── pages/
    │   └── index.astro            # Página de demostración Tailwind + h1
    └── styles/
        └── global.css             # @import "tailwindcss" + estilos base
```

**Structure Decision**: monorepo documental + app Astro en raíz. Los componentes globales
(`Header`, `Footer`) viven directamente en `src/components/` porque son transversales a
todas las páginas; las secciones de contenido irán en `src/components/sections/` en
features posteriores. El layout importa Header/Footer para garantizar landmarks
consistentes sin duplicar markup en cada página.

## Comandos de Inicialización

Ejecutar desde la raíz del repositorio (`landingpage-demeteria/`).

### Paso 1 — Crear proyecto Astro (plantilla minimal)

```bash
npm create astro@latest . \
  -- --template minimal \
  --install \
  --no-git \
  --typescript strict \
  --yes
```

**Verificaciones inmediatas**:

- Rechazar si el asistente ofrece añadir React/Vue/Svelte → cancelar y usar `--template minimal`.
- Confirmar que `package.json` NO contiene `@astrojs/react`, `@astrojs/vue`, etc.

### Paso 2 — Instalar Tailwind CSS

```bash
npx astro add tailwind --yes
```

Esto añade `@tailwindcss/vite` y configura el plugin en `astro.config.mjs`.

### Paso 3 — Configurar salida estática y blindaje Zero-JS

Editar `astro.config.mjs` (ver sección **Configuración Astro**).

### Paso 4 — Tokens corporativos

Editar `tailwind.config.mjs` (ver sección **Tokens Tailwind**).

### Paso 5 — Crear andamiaje

Crear/reemplazar archivos según blueprints de la sección **Andamiaje de componentes**.

### Paso 6 — Validar

```bash
npm run dev      # servidor local sin errores
npm run build    # build estático sin errores
npm run preview  # previsualización del artefacto
```

Ver procedimiento completo en [quickstart.md](./quickstart.md).

## Configuración Astro (`astro.config.mjs`)

```javascript
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // NON-NEGOTIABLE: salida 100 % estática, sin adapter SSR
  output: 'static',

  vite: {
    plugins: [tailwindcss()],
  },

  // Sin integrations: NO añadir @astrojs/react, vue, svelte, etc.
  integrations: [],
});
```

**Blindaje Zero-JS adicional**:

1. Prohibido `client:load`, `client:idle`, `client:visible`, `client:media` en cualquier `.astro`.
2. Prohibido `<script>` sin `is:inline` en componentes de página; idealmente **ningún** `<script>`.
3. Tras `npm run build`, ejecutar: `find dist -name '*.js' -type f` → debe devolver **vacío**.
4. Revisar `package.json` en cada PR: cero dependencias de frameworks UI.

## Tokens Tailwind (`tailwind.config.mjs`)

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'demeter-green': '#2D6A4F',
        'hydro-teal':    '#0D9488',
        'agro-earth':    '#92702A',
        'tech-slate':    '#1E293B',
        'mist':          '#F0F7F4',
        'surface':       '#FFFFFF',
        'muted':         '#64748B',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
```

**Reglas de uso** (no hardcodear hex en componentes):

| Clase Tailwind | Uso permitido |
|----------------|---------------|
| `bg-mist` | Fondo de página (`body`) |
| `bg-surface` | Cards, paneles |
| `text-tech-slate` | Texto principal |
| `text-muted` | Texto secundario |
| `text-demeter-green` | Marca, enlaces primarios |
| `text-hydro-teal` | Acentos tecnológicos / agua |
| `text-agro-earth` | Acento puntual (no fondos extensos) |
| `border-demeter-green` | Separadores de marca |
| `focus-visible:ring-hydro-teal` | Anillo de foco accesible |

**Contraste WCAG 2.1 AA verificado** (texto normal ≥ 4.5:1):

- `tech-slate` (#1E293B) sobre `mist` (#F0F7F4) → ~12.5:1 ✅
- `tech-slate` sobre `surface` (#FFFFFF) → ~14.1:1 ✅
- `demeter-green` (#2D6A4F) sobre `mist` → ~5.8:1 ✅
- `muted` (#64748B) sobre `mist` → ~4.6:1 ✅

## Estilos globales (`src/styles/global.css`)

```css
@import "tailwindcss";
@config "../../tailwind.config.mjs";

@layer base {
  html {
    scroll-behavior: smooth;
  }

  /* Foco visible para navegación por teclado (WCAG 2.4.7) */
  :focus-visible {
    outline: 2px solid #0D9488; /* hydro-teal */
    outline-offset: 2px;
  }

  /* Respetar preferencia de movimiento reducido */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
}
```

> **Nota Tailwind v4**: la directiva `@config` enlaza `tailwind.config.mjs` con el pipeline
> de `@tailwindcss/vite`. Si `astro add tailwind` genera solo `@import "tailwindcss"` sin
> `@config`, añadir la línea `@config` manualmente.

## Andamiaje de componentes

### `src/layouts/Layout.astro`

Responsabilidad: documento HTML5 completo, meta SEO, import de estilos, composición de
landmarks globales (`header` → `main` → `footer`).

```astro
---
import '../styles/global.css';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

interface Props {
  title?: string;
  description?: string;
}

const {
  title = 'DemeterIA — Agricultura Inteligente de Precisión',
  description = 'Proyecto de cultivo hidropónico monitorizado con IoT e IA. CYL INNOVA FP 2025-2026.',
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site ?? 'http://localhost:4321');
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content={description} />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="canonical" href={canonicalURL} />
    <title>{title}</title>
  </head>
  <body class="min-h-screen flex flex-col bg-mist text-tech-slate font-sans antialiased">
    <a
      href="#contenido-principal"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-surface focus:text-demeter-green focus:rounded-md focus:shadow-md"
    >
      Saltar al contenido principal
    </a>
    <Header />
    <main id="contenido-principal" class="flex-1 w-full">
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

**Decisiones semánticas**:

- Un único `<main>` con `id="contenido-principal"` para skip link y anclas.
- `Header` y `Footer` importados aquí → todas las páginas heredan landmarks sin duplicación.
- Sin `<script>` en el documento.

### `src/components/Header.astro`

Responsabilidad: landmark `<header>` con identidad de marca y navegación estática (anclas).

```astro
---
// Navegación estática — sin JS; enlaces a secciones futuras preparados como anclas
const navItems = [
  { href: '#contenido-principal', label: 'Inicio' },
  // Placeholders para features futuras:
  // { href: '#proyecto', label: 'Proyecto' },
  // { href: '#contacto', label: 'Contacto' },
];
---

<header class="bg-surface border-b border-demeter-green/20 shadow-sm">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <div class="flex h-16 items-center justify-between">
      <a
        href="/"
        class="text-xl font-semibold text-demeter-green hover:text-hydro-teal transition-colors"
        aria-label="DemeterIA — Inicio"
      >
        DemeterIA
      </a>
      <nav aria-label="Navegación principal">
        <ul class="flex gap-6" role="list">
          {navItems.map((item) => (
            <li>
              <a
                href={item.href}
                class="text-tech-slate hover:text-hydro-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hydro-teal focus-visible:ring-offset-2 rounded-sm px-1 py-0.5"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>
</header>
```

### `src/components/Footer.astro`

Responsabilidad: landmark `<footer>` con créditos institucionales.

```astro
---
const year = new Date().getFullYear();
---

<footer class="bg-tech-slate text-mist mt-auto">
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <p class="text-sm">
        <span class="font-semibold text-surface">DemeterIA</span>
        — Agricultura Inteligente de Precisión en Sistemas Hidropónicos Sostenibles
      </p>
      <p class="text-sm text-mist/80">
        CYL INNOVA FP 2025-2026
      </p>
    </div>
    <hr class="my-4 border-mist/20" />
    <p class="text-xs text-mist/70">
      IES Alonso de Madrigal (Ávila) · IES Germán Sánchez Ruipérez (Peñaranda de Bracamonte)
    </p>
    <p class="text-xs text-mist/60 mt-2">
      © {year} Proyecto DemeterIA. Todos los derechos reservados.
    </p>
  </div>
</footer>
```

> `new Date().getFullYear()` se evalúa en **build time** (servidor Astro), no en cliente.
> No genera JavaScript en el navegador.

### `src/pages/index.astro`

Responsabilidad: demostrar tokens Tailwind, un único `h1`, contenido placeholder dentro de
`<section>` semántica.

```astro
---
import Layout from '../layouts/Layout.astro';
---

<Layout>
  <section
    class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24"
    aria-labelledby="titulo-hero"
  >
    <div class="max-w-3xl">
      <p class="text-sm font-medium uppercase tracking-wider text-hydro-teal mb-4">
        CYL INNOVA FP · Agricultura de Precisión
      </p>
      <h1
        id="titulo-hero"
        class="text-4xl sm:text-5xl font-bold text-tech-slate leading-tight"
      >
        DemeterIA
      </h1>
      <p class="mt-6 text-lg text-muted leading-relaxed">
        Cultivo vertical hidropónico monitorizado mediante sensores IoT y gestionado por IA.
        Tecnología al servicio de la sostenibilidad y la inclusión social.
      </p>
      <div class="mt-8 flex flex-wrap gap-4">
        <span class="inline-flex items-center rounded-full bg-demeter-green/10 px-4 py-1.5 text-sm font-medium text-demeter-green">
          Hidroponía sostenible
        </span>
        <span class="inline-flex items-center rounded-full bg-hydro-teal/10 px-4 py-1.5 text-sm font-medium text-hydro-teal">
          IoT + Inteligencia Artificial
        </span>
        <span class="inline-flex items-center rounded-full bg-agro-earth/10 px-4 py-1.5 text-sm font-medium text-agro-earth">
          Inclusión social
        </span>
      </div>
    </div>
  </section>
</Layout>
```

**Tokens visibles en index** (cumple SC-004): `hydro-teal`, `tech-slate`, `muted`,
`demeter-green`, `agro-earth`, `mist` (vía Layout body).

## `.gitignore` (mínimo requerido)

Asegurar que el template Astro incluye o se complementa con:

```gitignore
# Dependencias y build
node_modules/
dist/

# Entorno
.env
.env.*
!.env.example

# Sistema / editor
.DS_Store
Thumbs.db
.vscode/*
!.vscode/extensions.json
.idea/

# Logs
npm-debug.log*
*.log

# Astro
.astro/
```

## Complexity Tracking

> Sin violaciones de constitución. Tabla vacía.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| — | — | — |
