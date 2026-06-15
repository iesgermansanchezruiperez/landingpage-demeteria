# Contract: Semántica HTML5 — Issue #13

**Feature**: 013-info-social

## Landmarks en `<main>`

Orden obligatorio tras implementación:

```text
main#main
├── section[aria-labelledby="titulo-hero"]     → Hero
├── section#objetivos[aria-labelledby]         → ProjectObjectives
├── section#fases[aria-labelledby]             → ProjectPhases
└── section#redes-sociales[aria-labelledby]    → SocialFeed
```

## Reglas por componente

### ProjectObjectives.astro

| Elemento | Uso |
|----------|-----|
| `<section>` | Contenedor raíz con `id="objetivos"` |
| `<header>` | Intro: `h2` + párrafo objetivo general |
| `<article>` | Uno por pilar (×3) |
| `<h2>` | «Objetivos del proyecto» |
| `<h3>` | Título de cada pilar |

Prohibido: `<div>` como sustituto de `<article>` para pilares.

### ProjectPhases.astro

| Elemento | Uso |
|----------|-----|
| `<section>` | Contenedor raíz con `id="fases"` |
| `<article>` | Uno por fase (×3) |
| `<h2>` | «Fases del proyecto» |
| `<h3>` | Título de cada fase |

### SocialFeed.astro

| Elemento | Uso |
|----------|-----|
| `<section>` | Contenedor raíz con `id="redes-sociales"` |
| `<header>` | `h2` + descripción con enlace a Instagram |
| `<div#social-feed-widget>` | Contenedor del embed (no `<iframe>` directo sin wrapper) |
| `<noscript>` | Fallback accesible |

## Jerarquía de encabezados

- Exactamente **un** `<h1>` en toda la página (Hero).
- Cada sección nueva usa `<h2>`; subelementos usan `<h3>`.
- Prohibido saltar de `h2` a `h4`.

## Listas implícitas

Grids de pilares y fases MAY usar `role="list"` en contenedor y `role="listitem"` en cada
`<article>` para lectores de pantalla.

## Criterios de aceptación

1. Lighthouse Accessibility ≥ 90.
2. axe DevTools sin errores críticos de landmarks o heading-order.
3. Navegación por teclado: foco visible en enlaces de SocialFeed.
