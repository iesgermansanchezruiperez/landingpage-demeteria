# Data Model: Inicialización Astro + Tailwind CSS + Estructura base

**Feature**: 001-astro-tailwind-init | **Date**: 2026-06-15

Este feature no tiene persistencia ni API. El modelo describe entidades de configuración,
tokens de diseño y contratos de props de componentes.

## Entidades

### ColorToken

Token de color corporativo DemeterIA mapeado en Tailwind.

| Campo | Tipo | Descripción |
|-------|------|-------------|
| `name` | string | Clave Tailwind (kebab-case): `demeter-green`, `hydro-teal`… |
| `hex` | string | Valor hexadecimal `#RRGGBB` |
| `role` | enum | `primary` \| `secondary` \| `accent` \| `text` \| `background` \| `surface` \| `muted` |
| `minContrastOn` | string[] | Fondos sobre los que cumple WCAG AA como texto |

**Instancias**:

| name | hex | role | minContrastOn |
|------|-----|------|---------------|
| `demeter-green` | `#2D6A4F` | primary | `mist`, `surface` |
| `hydro-teal` | `#0D9488` | secondary | `mist`, `surface` |
| `agro-earth` | `#92702A` | accent | `mist`, `surface` |
| `tech-slate` | `#1E293B` | text | `mist`, `surface` |
| `mist` | `#F0F7F4` | background | — (fondo, no texto) |
| `surface` | `#FFFFFF` | surface | — (fondo, no texto) |
| `muted` | `#64748B` | muted | `mist`, `surface` |

**Reglas de validación**:

- Prohibido usar valores hex literales en `.astro`; solo clases `text-*`, `bg-*`, `border-*`.
- `agro-earth` no puede usarse como `bg-*` en contenedores > 20 % del viewport.
- Combinaciones texto/fondo deben cumplir ≥ 4.5:1 (texto normal) o ≥ 3:1 (texto grande ≥ 18px).

---

### LayoutProps

Props del componente `Layout.astro`.

| Campo | Tipo | Requerido | Default | Validación |
|-------|------|-----------|---------|------------|
| `title` | string | No | `'DemeterIA — Agricultura Inteligente de Precisión'` | 10–70 caracteres recomendado |
| `description` | string | No | Descripción del proyecto CYL INNOVA | 50–160 caracteres (SEO) |

**Relaciones**: `Layout` compone `Header`, `Footer` y renderiza `<slot />` dentro de `<main>`.

---

### HeaderNavItem

Elemento de navegación estática del header.

| Campo | Tipo | Requerido | Validación |
|-------|------|-----------|------------|
| `href` | string | Sí | Ancla (`#id`) o ruta interna (`/`); sin URLs externas en v1 |
| `label` | string | Sí | Texto discernible, no vacío |

**Estado actual**: array de 1 ítem (`Inicio`). Se expandirá en features de secciones.

---

### FooterMetadata

Datos institucionales renderizados en build time.

| Campo | Tipo | Fuente | Notas |
|-------|------|--------|-------|
| `projectName` | string | constante | `"DemeterIA"` |
| `tagline` | string | constante | Subtítulo del proyecto |
| `program` | string | constante | `"CYL INNOVA FP 2025-2026"` |
| `centers` | string[] | constante | IES AM + IES GSR |
| `year` | number | `new Date().getFullYear()` en frontmatter | Evaluado en build, no en cliente |

---

### PageDocument (index)

Estructura semántica de la página principal.

| Landmark | Elemento HTML | ID/atributo | Contenido v1 |
|----------|---------------|-------------|--------------|
| Banner | `<header>` | — | Via `Header.astro` |
| Contenido | `<main>` | `id="contenido-principal"` | Slot de Layout |
| Sección hero | `<section>` | `aria-labelledby="titulo-hero"` | Placeholder |
| Título | `<h1>` | `id="titulo-hero"` | `"DemeterIA"` |
| Pie | `<footer>` | — | Via `Footer.astro` |

**Reglas**:

- Exactamente **un** `<h1>` por página.
- Jerarquía sin saltos: `h1` → futuros `h2` en secciones.
- `lang="es"` en `<html>` (Layout).

---

### ProjectConfig (archivos de configuración)

| Archivo | Claves críticas | Valor obligatorio |
|---------|-----------------|-------------------|
| `astro.config.mjs` | `output` | `'static'` |
| `astro.config.mjs` | `integrations` | `[]` (vacío) |
| `package.json` | `dependencies` | Sin `@astrojs/react`, `vue`, `svelte` |
| `tailwind.config.mjs` | `theme.extend.colors` | 7 tokens DemeterIA |
| `.gitignore` | exclusiones | `node_modules/`, `dist/`, `.env` |

## Diagrama de composición

```text
index.astro
  └── Layout.astro (props: title?, description?)
        ├── global.css (Tailwind)
        ├── Header.astro
        │     └── <header> > <nav> > <ul> > <a>
        ├── <main id="contenido-principal">
        │     └── <slot /> ← section + h1 + contenido
        └── Footer.astro
              └── <footer> > créditos institucionales
```

## Transiciones de estado

No aplica (sitio estático sin estado de aplicación). El único "estado" es el artefacto
de build en `dist/` generado idénticamente en cada `npm run build`.
