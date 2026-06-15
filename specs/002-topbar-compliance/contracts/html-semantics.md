# Contract: HTML Semantics (Issue #12 delta)

**Feature**: 002-topbar-compliance | **Extends**: `001-astro-tailwind-init/contracts/html-semantics.md`

## Document skeleton actualizado

```html
<body>
  <a href="#contenido-principal"><!-- skip link --></a>
  <aside aria-label="Financiación del proyecto CYL INNOVA FP"><!-- TopBar --></aside>
  <header><!-- Header.astro — marca --></header>
  <main id="contenido-principal">
    <section aria-labelledby="titulo-hero"><!-- Hero.astro --></section>
  </main>
  <footer><!-- Footer + LEG-MENCION --></footer>
</body>
```

## Reglas nuevas

| ID | Regla |
|----|-------|
| SEM-012-001 | Exactamente un `<aside>` TopBar antes del `<header>` de marca |
| SEM-012-002 | TopBar MUST NOT usar `<header>` ni anidarse dentro de `<header>` |
| SEM-012-003 | Grid de logos usa `role="list"`; cada logo `role="listitem"` |
| SEM-012-004 | Un único `<h1>` permanece en `Hero.astro` |
| SEM-012-005 | LEG-MENCION en `<footer>` dentro de `<section aria-label="Financiación del proyecto">` |
| SEM-012-006 | `index.astro` MUST NOT contener `<section>` hero directamente |

## Jerarquía de encabezados (sin cambios)

- `h1` solo en Hero
- Futuros `h2` en secciones bajo `main`
