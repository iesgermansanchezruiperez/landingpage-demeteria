# Contract: HTML5 Semantics

**Feature**: 001-astro-tailwind-init | **Version**: 1.0.0 | **Date**: 2026-06-15

## Scope

Aplica a todas las páginas que usen `Layout.astro` y a componentes futuros en
`src/components/sections/`.

## Document skeleton (obligatorio)

Toda página renderizada MUST producir esta estructura:

```html
<!doctype html>
<html lang="es">
  <head><!-- meta, title, link --></head>
  <body>
    <a href="#contenido-principal"><!-- skip link --></a>
    <header><!-- Header.astro --></header>
    <main id="contenido-principal">
      <!-- slot: secciones de contenido -->
    </main>
    <footer><!-- Footer.astro --></footer>
  </body>
</html>
```

## Landmarks

| Rol | Elemento | Componente | Regla |
|-----|----------|------------|-------|
| Banner | `<header>` | `Header.astro` | Exactamente uno por página |
| Navigation | `<nav>` | dentro de Header | `aria-label` descriptivo en español |
| Main | `<main>` | `Layout.astro` | `id="contenido-principal"`; uno por página |
| Contentinfo | `<footer>` | `Footer.astro` | Exactamente uno por página |
| Region | `<section>` | secciones de contenido | `aria-labelledby` apuntando al `h*` de la sección |

## Jerarquía de encabezados

| Regla | Descripción |
|-------|-------------|
| H-001 | Un único `<h1>` por documento |
| H-002 | El `<h1>` vive en la sección principal (hero o equivalente) |
| H-003 | Secciones usan `<h2>`; subsecciones `<h3>`; sin saltos de nivel |
| H-004 | Todo `aria-labelledby` en `<section>` referencia un `id` de encabezado existente |

## Enlaces y navegación

| Regla | Descripción |
|-------|-------------|
| NAV-001 | Todo `<a>` tiene texto discernible o `aria-label` |
| NAV-002 | Navegación interna usa anclas `#id` (sin JS) |
| NAV-003 | Enlaces de salto (`skip link`) como primer elemento focuseable del `<body>` |
| NAV-004 | Listas de navegación usan `<ul role="list">` > `<li>` > `<a>` |

## Accesibilidad (WCAG 2.1 AA mínimo)

| Regla | Criterio WCAG | Implementación |
|-------|---------------|----------------|
| A11Y-001 | 3.1.1 Language of Page | `lang="es"` en `<html>` |
| A11Y-002 | 1.4.3 Contrast (Minimum) | Pares texto/fondo de data-model |
| A11Y-003 | 2.4.1 Bypass Blocks | Skip link a `#contenido-principal` |
| A11Y-004 | 2.4.7 Focus Visible | `:focus-visible` con `hydro-teal` en global.css |
| A11Y-005 | 4.1.2 Name, Role, Value | `aria-label` en `<nav>` y marca |

## Prohibiciones

- `<div>` como sustituto de landmarks cuando existe elemento semántico equivalente.
- Múltiples `<main>`, `<header>` de página o `<footer>` de página.
- `role="button"` en `<div>` sin JS (usar `<a>` o `<button>` nativos).
- Encabezados usados solo para estilo visual (usar clases Tailwind en su lugar).

## Verificación

1. Inspección DOM según [quickstart.md](../quickstart.md) §4.
2. axe DevTools: 0 violaciones críticas.
3. Lighthouse Accessibility ≥ 90.
