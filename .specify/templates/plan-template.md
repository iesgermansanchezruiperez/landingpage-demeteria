# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]

**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit-plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript (Astro) / HTML5 / CSS (Tailwind)

**Primary Dependencies**: Astro, Tailwind CSS (NO React, Vue, Svelte ni frameworks interactivos)

**Storage**: N/A (sitio estático; assets en `public/` o imports Astro)

**Testing**: Lighthouse (Performance ≥ 90, A11y ≥ 90), axe DevTools, revisión manual teclado/contraste

**Target Platform**: Navegadores modernos; hosting estático / CDN

**Project Type**: Landing page promocional estática (zero-JS en cliente)

**Performance Goals**: LCP < 2.5 s (4G simulada); Lighthouse Performance ≥ 90

**Constraints**: `output: 'static'`; sin `<script>` cliente; WCAG 2.1 AA; estética Premium Agrotech

**Scale/Scope**: Página única modular por secciones `.astro`; componentes en `src/components/`

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

Verificar cumplimiento de `.specify/memory/constitution.md` antes de continuar:

- [ ] **Zero-JS**: sin scripts cliente, islands ni `client:*` directives
- [ ] **Stack**: solo Astro + Tailwind; sin React/Vue/Svelte/Alpine/jQuery
- [ ] **Modularidad**: cada sección en componente `.astro` aislado bajo `src/components/sections/`
- [ ] **Semántica**: HTML5 estricto (`header`, `main`, `section`, jerarquía `h1`–`h6` correcta)
- [ ] **A11y**: WCAG 2.1 AA, contraste ≥ 4.5:1, foco visible, `lang` en `<html>`
- [ ] **Diseño**: coherencia Premium Agrotech (fondos sutiles, limpieza, aspecto corporativo)
- [ ] **Rendimiento**: meta Lighthouse Performance ≥ 90 y LCP < 2.5 s planificados

Si algún gate falla, documentar en Complexity Tracking con justificación y alternativa rechazada.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit-plan command output)
├── research.md          # Phase 0 output (/speckit-plan command)
├── data-model.md        # Phase 1 output (/speckit-plan command)
├── quickstart.md        # Phase 1 output (/speckit-plan command)
├── contracts/           # Phase 1 output (/speckit-plan command)
└── tasks.md             # Phase 2 output (/speckit-tasks command - NOT created by /speckit-plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
src/
├── components/
│   ├── sections/       # Un .astro por sección (Hero, Features, CTA, Footer…)
│   └── ui/             # Componentes reutilizables (Button, Card, Icon…)
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   └── index.astro     # Composición de secciones
└── styles/
    └── global.css      # Directivas Tailwind y tokens globales

public/
├── images/
├── favicon.ico
└── robots.txt

astro.config.mjs
tailwind.config.mjs
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., 4th project] | [current need] | [why 3 projects insufficient] |
| [e.g., Repository pattern] | [specific problem] | [why direct DB access insufficient] |
