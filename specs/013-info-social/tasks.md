---
description: "Task list for Issue #13 — Secciones informativas y Widget de Instagram"
---

# Tasks: Secciones Informativas y Widget de Instagram

**Input**: Design documents from `specs/013-info-social/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Rama obligatoria**: `feature/013-info-social` — **no implementar en `main`**

**Tests**: No solicitados. Validación manual vía `quickstart.md` y contratos.

**Organization**: Tareas por user story; independientes y verificables.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Paralelizable (archivos distintos, sin dependencias pendientes)
- **[Story]**: US1–US4 según spec.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Rama feature y revisión de artefactos SDD

- [x] T001 Crear y activar rama `feature/013-info-social` con `git checkout -b feature/013-info-social`
- [x] T002 [P] Revisar `specs/013-info-social/plan.md`, `data-model.md` y `contracts/` antes de codificar
- [x] T003 [P] Configurar widget Curator.io o Elfsight: cuenta @ies_gsr, filtro #demeteria (panel proveedor)

**Checkpoint**: Rama correcta; widget configurado o `PUBLIC_SOCIAL_WIDGET_ID` documentado

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Constantes de contenido compartidas — bloquea US1 y US2

- [x] T004 Definir textos OBJ-GENERAL, pilares y fases en frontmatter o `src/data/project-content.ts` per `specs/013-info-social/data-model.md`

**Checkpoint**: Contenido canónico localizado; títulos literales verificados

---

## Phase 3: User Story 1 — Objetivos del proyecto (Priority: P1) 🎯 MVP informativo

**Goal**: Sección semántica con objetivo general y 3 pilares en `<article>`

**Independent Test**: DOM → `section#objetivos` + 3 `<article>` con h3 literales (`quickstart.md` §5)

### Implementation for User Story 1

- [x] T005 [US1] Create `src/components/sections/ProjectObjectives.astro` skeleton with `<section id="objetivos">`, `<h2>`, `<header>` per `specs/013-info-social/plan.md`
- [x] T006 [US1] Add OBJ-GENERAL paragraph and three `<article>` pillars with `<h3>` in `src/components/sections/ProjectObjectives.astro` per `specs/013-info-social/data-model.md`
- [x] T007 [US1] Apply grid `grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8` and Premium Agrotech tokens in `src/components/sections/ProjectObjectives.astro`
- [x] T008 [US1] Verify semantics per `specs/013-info-social/contracts/html-semantics.md` (section, article, h2→h3)

**Checkpoint**: US1 acceptance scenarios 1–3 verificados

---

## Phase 4: User Story 2 — Fases del proyecto (Priority: P1)

**Goal**: Grid 1 col móvil / 3 cols escritorio con tres fases

**Independent Test**: DevTools 320 px → 1 col; 1280 px → 3 cols (`quickstart.md` §4)

### Implementation for User Story 2

- [x] T009 [P] [US2] Create `src/components/sections/ProjectPhases.astro` with `<section id="fases">` and `<h2>` per `specs/013-info-social/plan.md`
- [x] T010 [US2] Add three `<article>` phase cards with literal titles in `src/components/sections/ProjectPhases.astro` per `specs/013-info-social/data-model.md`
- [x] T011 [US2] Apply grid `grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8` per `specs/013-info-social/contracts/phases-grid.md`
- [x] T012 [US2] Validate no horizontal overflow at 320 px in `src/components/sections/ProjectPhases.astro`

**Checkpoint**: SC-003 cumplido; fases legibles en móvil y escritorio

---

## Phase 5: User Story 3 — Feed Instagram filtrado (Priority: P2)

**Goal**: Contenedor aislado con widget @ies_gsr + #demeteria y fallback estático

**Independent Test**: SocialFeed renderiza contenedor + fallback; embed configurado en panel (`quickstart.md` §7)

### Implementation for User Story 3

- [x] T013 [US3] Create `src/components/sections/SocialFeed.astro` with `<section id="redes-sociales">`, `#social-feed-widget`, `ZERO-JS EXCEPTION` comment per `specs/013-info-social/plan.md`
- [x] T014 [US3] Embed Curator.io or Elfsight script in `src/components/sections/SocialFeed.astro` per `specs/013-info-social/contracts/social-feed-widget.md`
- [x] T015 [US3] Add static fallback link to @ies_gsr and `<noscript>` block in `src/components/sections/SocialFeed.astro`
- [x] T016 [US3] Verify widget panel: only #demeteria posts from @ies_gsr visible

**Checkpoint**: FR-006 satisfecho; excepción Zero-JS documentada

---

## Phase 6: User Story 4 — Composición en index (Priority: P1)

**Goal**: Orden secuencial Hero → Objetivos → Fases → SocialFeed

**Independent Test**: `index.astro` imports only; un `h1` en Hero (`quickstart.md` §2–§3)

### Implementation for User Story 4

- [x] T017 [US4] Refactor `src/pages/index.astro` to import and render Hero, ProjectObjectives, ProjectPhases, SocialFeed in order per `specs/013-info-social/plan.md`
- [x] T018 [US4] Verify single `h1` and landmark order inside `<main>` per `specs/013-info-social/contracts/html-semantics.md`

**Checkpoint**: SC-001 cumplido; página compuesta modularmente

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Zero-JS audit, build, Lighthouse, PR

- [x] T019 [P] Run Zero-JS checklist in `specs/013-info-social/contracts/zero-js-compliance.md`
- [x] T020 [P] Run full `specs/013-info-social/quickstart.md` checklist (§3–§9)
- [x] T021 Run `npm run build` and `npm run preview` without errors on `feature/013-info-social`
- [x] T022 [P] Run Lighthouse A11y ≥ 90 and Performance ≥ 90 per `specs/013-info-social/spec.md` SC-006
- [x] T023 Open Pull Request from `feature/013-info-social` → `main` (Issue #13); **no push directo a main**

---

## Dependencies & Execution Order

### Phase Dependencies

```text
Phase 1 (Setup)
    └── Phase 2 (Content constants)
            ├── Phase 3 (US1) ProjectObjectives
            ├── Phase 4 (US2) ProjectPhases      ← paralelo tras T004
            ├── Phase 5 (US3) SocialFeed         ← paralelo tras T003
            └── Phase 6 (US4) index integration  ← tras T005–T013 mínimo
                    └── Phase 7 (Polish)
```

### User Story Dependencies

| Story | Depends on | Independently testable when |
|-------|------------|----------------------------|
| **US1** (P1) | T004 | ProjectObjectives aislado o en index |
| **US2** (P1) | T004 | ProjectPhases aislado o en index |
| **US3** (P2) | T003 | SocialFeed con widget ID configurado |
| **US4** (P1) | US1–US3 componentes | index.astro compuesto |

### Parallel Opportunities

- **Phase 1**: T002, T003 en paralelo
- **Phase 4–5**: T009 (Phases) y T013 (SocialFeed) en paralelo tras T004
- **Phase 7**: T019, T020, T022 en paralelo tras T021

---

## Parallel Example: Post-content constants

```bash
# Tras T004, en paralelo:
Task T005: "Create ProjectObjectives.astro"
Task T009: "Create ProjectPhases.astro"
Task T013: "Create SocialFeed.astro"
```

---

## Implementation Strategy

### MVP informativo (US1 + US2 + US4)

1. Phase 1–2: Setup + contenido
2. Phase 3–4: Objetivos + Fases
3. Phase 6: Integrar en index (sin widget aún)
4. **STOP y VALIDAR**: quickstart §3–§6

### Entrega completa Issue #13

1. MVP informativo
2. US3 — SocialFeed con widget
3. Polish — Zero-JS + Lighthouse + PR

### Flujo Git

```bash
git checkout feature/013-info-social
# ... implementar tareas ...
git push -u origin feature/013-info-social
gh pr create --base main --head feature/013-info-social
```

---

## Notes

- Blueprints completos en `specs/013-info-social/plan.md`
- Widget: cuenta @ies_gsr, hashtag #demeteria estricto — ver `contracts/social-feed-widget.md`
- Hero.astro no requiere cambios salvo evitar duplicar h1
- Commit recomendado tras cada fase; merge solo vía PR aprobado
