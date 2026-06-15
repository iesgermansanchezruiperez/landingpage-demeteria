# Requirements Checklist: Issue #13

**Feature**: 013-info-social | **Date**: 2026-06-15

## Functional

- [ ] CHK-001 `ProjectObjectives.astro` existe en `src/components/sections/`
- [ ] CHK-002 Objetivo general presente (OBJ-GENERAL)
- [ ] CHK-003 Tres pilares como `<article>` con títulos literales
- [ ] CHK-004 `ProjectPhases.astro` con grid `grid-cols-1 lg:grid-cols-3`
- [ ] CHK-005 Tres fases con títulos literales
- [ ] CHK-006 `SocialFeed.astro` con contenedor `#social-feed-widget`
- [ ] CHK-007 Widget configurado: @ies_gsr + #demeteria
- [ ] CHK-008 `index.astro` orden: Hero → Objetivos → Fases → SocialFeed

## Non-functional

- [ ] CHK-009 Zero-JS en secciones estáticas; excepción solo en SocialFeed
- [ ] CHK-010 Un único `<h1>` en la página
- [ ] CHK-011 Contraste WCAG AA en textos de sección
- [ ] CHK-012 Mobile-first sin overflow en 320 px
- [ ] CHK-013 Lighthouse A11y ≥ 90
- [ ] CHK-014 Lighthouse Performance ≥ 90
- [ ] CHK-015 Rama `feature/013-info-social`; PR a `main`

## Documentation

- [ ] CHK-016 spec.md completo
- [ ] CHK-017 plan.md con blueprints y Complexity Tracking
- [ ] CHK-018 data-model.md con entidades
- [ ] CHK-019 contracts/ publicados
- [ ] CHK-020 tasks.md generado
