---
description: "Task list for Issue #11 — Astro + Tailwind bootstrap"
---

# Tasks: Inicialización Astro + Tailwind CSS + Estructura base

**Input**: Design documents from `specs/001-astro-tailwind-init/`

**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, contracts/, quickstart.md

**Tests**: No solicitados en la spec. Validación manual vía quickstart.md y contratos Zero-JS/HTML.

**Organization**: Tareas agrupadas por user story para implementación y prueba independiente.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Puede ejecutarse en paralelo (archivos distintos, sin dependencias pendientes)
- **[Story]**: User story de spec.md (US1–US4)
- Rutas relativas a la **raíz del repositorio** (`landingpage-demeteria/`)

## Path Conventions

- **Astro landing**: `src/components/`, `src/layouts/`, `src/pages/`, `src/styles/`, `public/`
- **Config**: `astro.config.mjs`, `tailwind.config.mjs`, `.gitignore`
- **Contratos**: `specs/001-astro-tailwind-init/contracts/`

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Inicializar Astro + Tailwind en la raíz del repo existente

- [x] T001 Initialize Astro project in repo root with `npm create astro@latest . -- --template minimal --install --no-git --typescript strict --yes`
- [x] T002 Install Tailwind CSS integration via `npx astro add tailwind --yes`
- [x] T003 [P] Complement root `.gitignore` with `node_modules/`, `dist/`, `.env`, `.astro/`, `.DS_Store` per `specs/001-astro-tailwind-init/plan.md`

**Checkpoint**: `package.json` y `astro.config.mjs` existen; sin `@astrojs/react`, `@astrojs/vue` ni `@astrojs/svelte`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Configuración Zero-JS, tokens Tailwind y estructura de carpetas — **bloquea todas las user stories**

**⚠️ CRITICAL**: No iniciar user stories hasta completar esta fase

- [x] T004 Configure `astro.config.mjs` with `output: 'static'`, `integrations: []` and `@tailwindcss/vite` plugin per `specs/001-astro-tailwind-init/plan.md`
- [x] T005 [P] Configure `tailwind.config.mjs` with 7 DemeterIA color tokens (`demeter-green`, `hydro-teal`, `agro-earth`, `tech-slate`, `mist`, `surface`, `muted`) per `specs/001-astro-tailwind-init/data-model.md`
- [x] T006 [P] Create `src/styles/global.css` with `@import "tailwindcss"`, `@config "../../tailwind.config.mjs"` and `:focus-visible` styles per `specs/001-astro-tailwind-init/plan.md`
- [x] T007 [P] Create directory placeholders `src/components/sections/.gitkeep` and `src/components/ui/.gitkeep`
- [x] T008 [P] Add placeholder asset `public/favicon.svg`

**Checkpoint**: Config lista; carpetas modulares creadas; listo para componentes

---

## Phase 3: User Story 1 — Arranque del entorno de desarrollo (Priority: P1) 🎯 MVP

**Goal**: El alumno puede ejecutar `npm run dev` y ver la landing base en el navegador

**Independent Test**: `npm install && npm run dev` → URL local sin errores; página renderizada (quickstart.md §2)

### Implementation for User Story 1

- [x] T009 [US1] Create minimal `src/pages/index.astro` importing `src/styles/global.css` with placeholder content
- [x] T010 [US1] Validate `npm run dev` launches without compilation errors per `specs/001-astro-tailwind-init/quickstart.md` §2

**Checkpoint**: Servidor de desarrollo operativo — criterio DoD Issue #11 (1/3)

---

## Phase 4: User Story 2 — Identidad visual corporativa aplicada (Priority: P1)

**Goal**: La página index muestra tokens Premium Agrotech desde configuración central

**Independent Test**: Inspeccionar `index` y verificar ≥ 3 tokens corporativos visibles (`demeter-green`, `hydro-teal`, `tech-slate`, `muted`, `agro-earth`) — no hex hardcodeados

### Implementation for User Story 2

- [x] T011 [US2] Update `src/pages/index.astro` with corporate Tailwind classes per `specs/001-astro-tailwind-init/plan.md` blueprint (eyebrow, h1, badges con tokens de marca)

**Checkpoint**: Tailwind corporativo visible en index — criterio DoD Issue #11 (2/3)

---

## Phase 5: User Story 3 — Estructura base reutilizable (Priority: P2)

**Goal**: Layout semántico HTML5 con Header y Footer aislados, reutilizable por secciones futuras

**Independent Test**: Inspeccionar DOM → `html[lang="es"]`, `<header>`, `<main id="contenido-principal">`, `<footer>`, un solo `<h1>` (quickstart.md §4)

### Implementation for User Story 3

- [x] T012 [P] [US3] Create `src/layouts/Layout.astro` with HTML5 shell, skip link, `global.css` import and Header/Footer composition per `specs/001-astro-tailwind-init/plan.md`
- [x] T013 [P] [US3] Create `src/components/Header.astro` with `<header>`, `<nav aria-label="Navegación principal">` and static anchor links per `specs/001-astro-tailwind-init/plan.md`
- [x] T014 [P] [US3] Create `src/components/Footer.astro` with institutional credits (CYL INNOVA FP, centros) per `specs/001-astro-tailwind-init/plan.md`
- [x] T015 [US3] Refactor `src/pages/index.astro` to compose content via `src/layouts/Layout.astro` per `specs/001-astro-tailwind-init/contracts/html-semantics.md`

**Checkpoint**: Landmarks semánticos presentes; Header/Footer editables de forma independiente

---

## Phase 6: User Story 4 — Repositorio limpio en main (Priority: P2)

**Goal**: Rama `main` sin artefactos de build ni dependencias versionadas

**Independent Test**: Tras `npm run build`, `git status` no lista `dist/`, `node_modules/` ni `.env` (quickstart.md §6)

### Implementation for User Story 4

- [x] T016 [P] [US4] Audit root `.gitignore` against FR-009 and `specs/001-astro-tailwind-init/plan.md` — add any missing exclusions
- [x] T017 [US4] Run `npm run build` and confirm `git status` excludes `dist/`, `node_modules/` and `.astro/` per `specs/001-astro-tailwind-init/quickstart.md` §6

**Checkpoint**: Repositorio limpio — criterio DoD Issue #11 (3/3)

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Validación constitución, contratos y calidad pre-merge

- [x] T018 [P] Run Zero-JS audit: `find dist -name '*.js' -type f | wc -l` must equal 0 per `specs/001-astro-tailwind-init/contracts/zero-js-policy.md`
- [x] T019 [P] Scan `package.json` and `src/` for prohibited patterns (`client:`, `@astrojs/react`, `<script>`) per `specs/001-astro-tailwind-init/contracts/zero-js-policy.md`
- [x] T020 [P] Validate HTML5 semantic structure (skip link, landmarks, single h1, `lang="es"`) per `specs/001-astro-tailwind-init/quickstart.md` §4
- [x] T021 Run `npm run build` and `npm run preview` without errors per `specs/001-astro-tailwind-init/quickstart.md` §5
- [x] T022 [P] Run Lighthouse Accessibility audit ≥ 90 on production preview per `specs/001-astro-tailwind-init/quickstart.md` §7
- [x] T023 Commit all source files and push to `main` branch (exclude `node_modules/`, `dist/`, `.astro/`)

---

## Dependencies & Execution Order

### Phase Dependencies

```text
Phase 1 (Setup)
    └── Phase 2 (Foundational) — BLOCKS all user stories
            ├── Phase 3 (US1) ──┐
            ├── Phase 4 (US2) ──┤ P1 stories (secuenciales: US1 → US2)
            ├── Phase 5 (US3) ──┤ P2 (depende de US2 para index con clases)
            └── Phase 6 (US4) ──┘ (puede iniciar tras Phase 2; validación final tras build)
                    └── Phase 7 (Polish) — requiere US1–US4 completas
```

### User Story Dependencies

| Story | Depends on | Independently testable when |
|-------|------------|----------------------------|
| **US1** (P1) | Phase 2 | `npm run dev` OK con index mínimo |
| **US2** (P1) | US1 (index existe) | Tokens visibles en index |
| **US3** (P2) | US2 (index con clases) | Landmarks en DOM tras refactor |
| **US4** (P2) | Phase 1 (.gitignore) | `git status` limpio tras build |

### Within Each User Story

- Configuración (Phase 2) antes de componentes
- Componentes `[P]` (T012–T014) en paralelo antes de refactor (T015)
- Validación (T010, T017) al final de cada story

### Parallel Opportunities

- **Phase 1**: T003 en paralelo tras T001–T002
- **Phase 2**: T005, T006, T007, T008 todos en paralelo tras T004
- **Phase 5**: T012, T013, T014 en paralelo; T015 después
- **Phase 6**: T016 en paralelo con Phase 5 si .gitignore ya existe desde T003
- **Phase 7**: T018, T019, T020, T022 en paralelo tras T021

---

## Parallel Example: User Story 3

```bash
# Lanzar componentes en paralelo (archivos independientes):
Task T012: "Create src/layouts/Layout.astro per plan.md"
Task T013: "Create src/components/Header.astro per plan.md"
Task T014: "Create src/components/Footer.astro per plan.md"

# Después, secuencial:
Task T015: "Refactor src/pages/index.astro to use Layout.astro"
```

---

## Implementation Strategy

### MVP First (User Story 1)

1. Completar Phase 1: Setup (T001–T003)
2. Completar Phase 2: Foundational (T004–T008)
3. Completar Phase 3: User Story 1 (T009–T010)
4. **STOP y VALIDAR**: `npm run dev` sin errores

### Entrega Issue #11 (Definition of Done completo)

1. Setup + Foundational
2. US1 → US2 (servidor + Tailwind visible)
3. US3 (estructura semántica)
4. US4 (repo limpio)
5. Polish (Zero-JS, A11y, push a `main`)

### Parallel Team Strategy

Un solo desarrollador secuencial es lo esperado para Issue #11. Si hay dos:

- Dev A: T001–T010 (Setup + US1)
- Dev B (tras Phase 2): T012–T014 en paralelo (componentes US3)

---

## Notes

- Todos los blueprints de código están en `specs/001-astro-tailwind-init/plan.md` — copiar literalmente salvo ajustes de contraste A11y
- `new Date().getFullYear()` en `Footer.astro` es build-time; no viola Zero-JS
- No añadir `<script>`, `client:*` ni dependencias UI en ninguna tarea
- Commit recomendado tras cada fase o checkpoint
