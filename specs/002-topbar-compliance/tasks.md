---
description: "Task list for Issue #12 — TopBar compliance + Hero"
---

# Tasks: Cabecera y Compliance Institucional (Bloqueante)

**Input**: Design documents from `specs/002-topbar-compliance/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Rama obligatoria**: `feature/012-topbar-compliance` — **no implementar en `main`**

**Tests**: No solicitados. Validación manual vía `quickstart.md` y contratos.

**Organization**: Tareas por user story; independientes y verificables.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Paralelizable (archivos distintos, sin dependencias pendientes)
- **[Story]**: US1–US4 según spec.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Confirmar rama y contexto legal antes de codificar

- [x] T001 Confirmar rama activa `feature/012-topbar-compliance` con `git branch --show-current`
- [x] T002 [P] Revisar textos legales en `docs/Instrucciones CYL INNOVA FP .md` §5.1 y §5.3 y blueprints en `specs/002-topbar-compliance/plan.md`

**Checkpoint**: Rama feature correcta; textos LEG-UE-LEMA y LEG-MENCION localizados

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Esqueleto TopBar — bloquea US1 y US2

**⚠️ CRITICAL**: US1/US2 no pueden validarse sin TopBar base

- [x] T003 Create `src/components/TopBar.astro` skeleton with `<aside aria-label="Financiación del proyecto CYL INNOVA FP">`, `bg-surface`, `overflow-x-hidden` per `specs/002-topbar-compliance/plan.md`
- [x] T004 [P] Add mobile logo grid `grid grid-cols-5 gap-0.5` container with `role="list"` in `src/components/TopBar.astro` per `specs/002-topbar-compliance/contracts/topbar-layout.md`

**Checkpoint**: TopBar renderizable (aunque logos vacíos); importable desde Layout

---

## Phase 3: User Story 1 — Cumplimiento legal visible al cargar (Priority: P1) 🎯 MVP legal

**Goal**: 5 placeholders + lema UE visibles sin scroll en viewport 320×568 px

**Independent Test**: DevTools 320×568 → logos + «Cofinanciado por la Unión Europea» sin scroll (`quickstart.md` §2)

### Implementation for User Story 1

- [x] T005 [P] [US1] Add 5 inline SVG placeholders (LOGO-UE, LOGO-MEFPD, LOGO-JCYL, LOGO-CYLINNOVA, LOGO-FSE) in `src/components/TopBar.astro` per `specs/002-topbar-compliance/plan.md`
- [x] T006 [US1] Add literal lema `Cofinanciado por la Unión Europea` in `src/components/TopBar.astro` with `text-[10px] sm:text-xs text-muted` classes
- [x] T007 [US1] Apply per-logo classes `max-w-14 h-6 sm:h-8 shrink-0` and `sr-only` labels in `src/components/TopBar.astro` per `specs/002-topbar-compliance/data-model.md`
- [x] T008 [US1] Validate TopBar height ≤ 72 px and above-the-fold at 320×568 per `specs/002-topbar-compliance/quickstart.md` §2

**Checkpoint**: SC-001, SC-002, SC-003 cumplidos

---

## Phase 4: User Story 2 — Separación institucional vs. promocional (Priority: P1)

**Goal**: TopBar neutra encima de Header de marca; orden DOM correcto

**Independent Test**: Inspeccionar DOM → `aside` → `header` → `main`; TopBar `bg-surface` sin tokens DemeterIA dominantes

### Implementation for User Story 2

- [x] T009 [US2] Import and render `TopBar` in `src/layouts/Layout.astro` before `Header` per `specs/002-topbar-compliance/plan.md`
- [x] T010 [US2] Verify `src/components/TopBar.astro` uses only neutral tokens (`bg-surface`, `text-muted`, `border-gray-200`) — no `demeter-green`/`hydro-teal` backgrounds
- [x] T011 [US2] Verify landmark order `aside → header → main → footer` in built HTML per `specs/002-topbar-compliance/contracts/html-semantics.md`

**Checkpoint**: US2 acceptance scenarios 1–3 verificados

---

## Phase 5: User Story 3 — Hero como primera sección promocional (Priority: P2)

**Goal**: Contenido hero modular en `sections/Hero.astro`; index mínimo

**Independent Test**: `index.astro` solo importa Hero; un `h1` en `src/components/sections/Hero.astro`

### Implementation for User Story 3

- [x] T012 [P] [US3] Create `src/components/sections/Hero.astro` migrating hero `<section>` from `src/pages/index.astro` per `specs/002-topbar-compliance/plan.md` blueprint
- [x] T013 [US3] Refactor `src/pages/index.astro` to `import Hero` and render `<Layout><Hero /></Layout>` only
- [x] T014 [US3] Apply responsive padding `py-12 sm:py-16 lg:py-24` and Premium Agrotech tokens in `src/components/sections/Hero.astro`
- [x] T015 [US3] Verify single `h1` and no horizontal overflow at 320 px per `specs/002-topbar-compliance/quickstart.md` §4

**Checkpoint**: SC-004 cumplido; constitución III (sección modular) satisfecha

---

## Phase 6: User Story 4 — Mención legal accesible (Priority: P2)

**Goal**: LEG-MENCION completa en Footer; variante desktop TopBar opcional

**Independent Test**: Texto §5.1 completo presente en `Footer.astro`; contraste WCAG AA

### Implementation for User Story 4

- [x] T016 [US4] Add LEG-MENCION full text block in `src/components/Footer.astro` inside `<section aria-label="Financiación del proyecto">` per `specs/002-topbar-compliance/plan.md`
- [x] T017 [P] [US4] Add `md:flex` desktop layout variant and `sm:block` abbreviated mention in `src/components/TopBar.astro` per `specs/002-topbar-compliance/plan.md`
- [x] T018 [US4] Verify legal text contrast ≥ 4.5:1 (`text-mist/70` on `bg-tech-slate` in Footer) per `specs/002-topbar-compliance/quickstart.md` §5

**Checkpoint**: FR-004 satisfecho; mención accesible sin JS

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Zero-JS, build, PR — pre-merge a `main`

- [x] T019 [P] Run Zero-JS checklist in `specs/002-topbar-compliance/contracts/zero-js-compliance.md` (`find dist -name '*.js'`, no `client:*`, no `<script>`)
- [x] T020 [P] Scan `src/` for prohibited patterns per `specs/002-topbar-compliance/contracts/zero-js-compliance.md`
- [x] T021 Run `npm run build` and `npm run preview` without errors on `feature/012-topbar-compliance`
- [x] T022 [P] Validate full quickstart.md checklist (§2–§7)
- [x] T023 Open Pull Request from `feature/012-topbar-compliance` → `main` (Issue #12); **no push directo a main**

---

## Dependencies & Execution Order

### Phase Dependencies

```text
Phase 1 (Setup)
    └── Phase 2 (Foundational TopBar skeleton)
            ├── Phase 3 (US1) ── logos + lema + above-the-fold
            ├── Phase 4 (US2) ── Layout integration (tras US1 logos)
            ├── Phase 5 (US3) ── Hero refactor (paralelo tras T009)
            └── Phase 6 (US4) ── Footer legal (paralelo tras T003)
                    └── Phase 7 (Polish)
```

### User Story Dependencies

| Story | Depends on | Independently testable when |
|-------|------------|----------------------------|
| **US1** (P1) | Phase 2 | TopBar con 5 logos + lema en aislamiento o Layout |
| **US2** (P1) | US1 + T009 | Layout integrado; orden DOM verificado |
| **US3** (P2) | Ninguna crítica | Tras T009 o en paralelo si Layout ya tiene TopBar |
| **US4** (P2) | T003 | Footer legal independiente del Hero |

### Parallel Opportunities

- **Phase 1**: T002 en paralelo con T001
- **Phase 2**: T004 en paralelo tras T003
- **Phase 3**: T005 en paralelo (SVGs son markup independiente dentro del mismo archivo — mejor secuencial)
- **Phase 5–6**: T012 (Hero) y T016 (Footer) en paralelo tras T009
- **Phase 7**: T019, T020, T022 en paralelo tras T021

---

## Parallel Example: Post-Layout integration

```bash
# Tras T009 (Layout con TopBar), en paralelo:
Task T012: "Create src/components/sections/Hero.astro"
Task T016: "Add LEG-MENCION in src/components/Footer.astro"
Task T017: "Add md:flex desktop variant in TopBar.astro"
```

---

## Implementation Strategy

### MVP legal (US1 + US2)

1. Phase 1–2: Setup + TopBar skeleton
2. Phase 3: US1 — logos + lema above-the-fold
3. Phase 4: US2 — integrar en Layout
4. **STOP y VALIDAR**: quickstart §2 + §7

### Entrega completa Issue #12

1. MVP legal (US1 + US2)
2. US3 — Hero modular
3. US4 — Footer legal + desktop TopBar
4. Polish — Zero-JS + PR

### Flujo Git

```bash
git checkout feature/012-topbar-compliance
# ... implementar tareas ...
git push -u origin feature/012-topbar-compliance
gh pr create --base main --head feature/012-topbar-compliance
```

---

## Notes

- Blueprints completos en `specs/002-topbar-compliance/plan.md`
- Quinto logo = LOGO-FSE (badge FSE+); ver `research.md` R3
- Header.astro no requiere cambios en esta feature
- Commit recomendado tras cada fase; merge solo vía PR aprobado
