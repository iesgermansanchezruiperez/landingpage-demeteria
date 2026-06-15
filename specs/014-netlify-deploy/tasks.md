---
description: "Task list for Issue #14 — Despliegue Netlify y Auditoría Lighthouse"
---

# Tasks: Despliegue en Producción (Netlify) y Auditoría Lighthouse

**Input**: Design documents from `specs/014-netlify-deploy/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Rama obligatoria**: `feature/014-netlify-deploy` — **no implementar en `main`**

**Tests**: No solicitados. Validación manual vía `quickstart.md`, contratos y Lighthouse CLI en producción.

**Organization**: Tareas por user story; US5 (config repo) como fundamento antes del panel Netlify.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Paralelizable (archivos distintos, sin dependencias pendientes)
- **[Story]**: US1–US5 según spec.md

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Rama feature y revisión de artefactos SDD

- [x] T001 Crear y activar rama `feature/014-netlify-deploy` con `git checkout -b feature/014-netlify-deploy` desde `main` actualizado
- [x] T002 [P] Revisar `specs/014-netlify-deploy/plan.md`, `research.md`, `data-model.md` y `contracts/` antes de implementar
- [x] T003 [P] Confirmar landing mergeada en `main` (Hero, TopBar, secciones, SocialFeed) con `npm run build` local sin errores

**Checkpoint**: Rama correcta; build local OK; artefactos SDD leídos

---

## Phase 2: Foundational — Configuración versionada (User Story 5 base)

**Purpose**: Archivos de despliegue en repo — **bloquea** conexión Netlify y US1

**Independent Test (US5)**: `netlify.toml` existe con `command`, `publish`, `NODE_VERSION`; coherente con `contracts/netlify-build-config.md`

- [x] T004 [US5] Crear `netlify.toml` en raíz con `command = "npm run build"`, `publish = "dist"`, `NODE_VERSION = "22"` per `specs/014-netlify-deploy/contracts/netlify-build-config.md`
- [x] T005 [P] [US5] Verificar coherencia Node 22 entre `netlify.toml`, `.nvmrc` y `package.json` `engines.node`
- [x] T006 [US5] Añadir `site` en `astro.config.mjs` con URL HTTPS de producción Netlify (tras crear sitio o subdominio asignado) per `specs/014-netlify-deploy/research.md` R5
- [x] T007 [P] [US5] Crear `docs/netlify-deploy.md` con pasos panel Netlify, variables env y checklist DoD (referencia `specs/014-netlify-deploy/quickstart.md` §3)
- [x] T008 [P] [US5] Confirmar `.gitignore` excluye `.env` y no commitea secretos per `specs/014-netlify-deploy/contracts/production-env-vars.md`
- [x] T009 [US5] Ejecutar `npm run build` tras cambios en `astro.config.mjs` y verificar `dist/index.html` generado

**Checkpoint**: Config reproducible en git; build local intacto

---

## Phase 3: User Story 1 — Sitio público en Netlify (Priority: P1) 🎯 MVP

**Goal**: Landing accesible por HTTPS con CI/CD desde `main`

**Independent Test**: URL producción → HTTP 200; log Netlify **Published**; secciones visibles (`quickstart.md` §4)

### Implementation for User Story 1

- [ ] T010 [US1] Conectar repositorio `landingpage-demeteria` en Netlify (Import from GitHub) per `specs/014-netlify-deploy/quickstart.md` §3
- [ ] T011 [US1] Configurar rama de producción `main` y confirmar build `npm run build` / publish `dist` (auto-detectado desde `netlify.toml`)
- [ ] T012 [US1] Lanzar primer deploy y verificar log Netlify en verde (**Published**) per `specs/014-netlify-deploy/spec.md` SC-001
- [ ] T013 [US1] Verificar URL pública responde HTTPS y muestra Hero, Objetivos, Fases, Instagram y Footer per `specs/014-netlify-deploy/spec.md` US1 escenario 2
- [ ] T014 [P] [US1] Registrar URL de producción en `docs/netlify-deploy.md` y actualizar `site` en `astro.config.mjs` si el subdominio difiere del previsto

**Checkpoint**: SC-001 y SC-002 cumplidos; sitio público operativo

---

## Phase 4: User Story 3 — Widget Instagram en producción (Priority: P1)

**Goal**: Feed Elfsight visible en URL pública (no solo fallback)

**Independent Test**: `dist` en Netlify incluye `elfsight-app-<ID>`; sección `#redes-sociales` muestra publicaciones (`quickstart.md` §4)

> **Nota**: US3 antes que US2 en ejecución porque las env vars son prerequisito del build en Netlify y el redeploy afecta la página completa.

### Implementation for User Story 3

- [ ] T015 [US3] Añadir en Netlify → Environment variables: `PUBLIC_SOCIAL_WIDGET_ID`, `PUBLIC_SOCIAL_WIDGET_PROVIDER=elfsight` per `specs/014-netlify-deploy/contracts/production-env-vars.md`
- [ ] T016 [US3] Trigger redeploy en Netlify tras configurar variables (build scope)
- [ ] T017 [US3] Verificar HTML producción contiene `elfsight-app-<WIDGET_ID>` y script `elfsightcdn.com/platform.js` per `contracts/production-env-vars.md`
- [ ] T018 [US3] Abrir `<URL>/#redes-sociales` y confirmar feed visible (no solo fallback) per `specs/014-netlify-deploy/spec.md` SC-004

**Checkpoint**: Widget Instagram operativo en producción

---

## Phase 5: User Story 2 — Assets institucionales sin rutas rotas (Priority: P1)

**Goal**: Cuatro logotipos CYL INNOVA FP cargan en producción

**Independent Test**: `curl -sI` → 200 en `/logos/logo-*.jpg`; TopBar muestra 4 logos (`quickstart.md` §4)

### Implementation for User Story 2

- [ ] T019 [P] [US2] Verificar HTTP 200 en `public/logos/logo-ue.jpg`, `logo-mefpd.jpg`, `logo-fondos.jpg`, `logo-jcyl.jpg` vía URL producción per `specs/014-netlify-deploy/data-model.md` StaticAssetManifest
- [ ] T020 [US2] Inspeccionar TopBar en móvil (320 px) y escritorio: cuatro logotipos visibles sin roturas per `specs/014-netlify-deploy/spec.md` US2 escenario 2
- [ ] T021 [P] [US2] Verificar `favicon.svg` y recursos `public/` críticos responden 200 en producción

**Checkpoint**: SC-003 cumplido; compliance visual institucional OK

---

## Phase 6: User Story 4 — Auditoría Lighthouse en producción (Priority: P1)

**Goal**: Performance ≥ 90 y Accessibility ≥ 90 en URL HTTPS pública

**Independent Test**: Lighthouse CLI contra `<URL>`; scores documentados (`quickstart.md` §5)

### Implementation for User Story 4

- [ ] T022 [US4] Ejecutar Lighthouse CLI contra URL producción per `specs/014-netlify-deploy/contracts/lighthouse-thresholds.md`
- [ ] T023 [US4] Confirmar **Performance ≥ 90** y **Accessibility ≥ 90** en informe generado
- [ ] T024 [P] [US4] Revisar auditorías críticas (`color-contrast`, `is-on-https`); corregir regresiones en código si fallan per `specs/014-netlify-deploy/spec.md` US4 escenario 2
- [ ] T025 [P] [US4] Guardar informe local como `lighthouse-report-production.json` (no commitear si transitorio) per `spec.md` NFR-003
- [ ] T026 [US4] Si Performance < 90: aplicar mitigaciones de `research.md` R7 y re-auditar antes de cerrar issue

**Checkpoint**: SC-005 cumplido; DoD Lighthouse del issue #14 satisfecho

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Checklist final, PR y cierre Issue #14

- [ ] T027 [P] Completar checklist `specs/014-netlify-deploy/checklists/requirements.md` (CHK-001 a CHK-019)
- [ ] T028 [P] Ejecutar `specs/014-netlify-deploy/quickstart.md` completo (§1–§7) y marcar ítems verificados
- [ ] T029 Verificar push a `main` dispara redeploy automático Netlify (CI/CD) per `spec.md` FR-002
- [ ] T030 Abrir Pull Request `feature/014-netlify-deploy` → `main` (Issue #14); **no push directo a main** sin PR
- [ ] T031 Tras merge: confirmar redeploy producción y re-ejecutar Lighthouse si `astro.config.mjs` `site` cambió en PR
- [ ] T032 Cerrar Issue #14 en GitHub con URL producción y puntuaciones Lighthouse en comentario de cierre

**Checkpoint**: Issue #14 cerrado; landing en producción validada

---

## Dependencies & Execution Order

### Phase Dependencies

```text
Phase 1 (Setup)
    ↓
Phase 2 (Foundational / US5) — netlify.toml, astro site, docs
    ↓
Phase 3 (US1) — Netlify connect + primer deploy
    ↓
Phase 4 (US3) — env vars + redeploy (widget)
    ↓
Phase 5 (US2) — verificación assets (paralelizable con T022 tras deploy estable)
    ↓
Phase 6 (US4) — Lighthouse producción
    ↓
Phase 7 (Polish) — PR + cierre
```

### User Story Dependencies

| Story | Depende de | Independiente cuando |
|-------|------------|-------------------|
| **US5** | Phase 1 | `netlify.toml` verificado localmente |
| **US1** | US5 (config en repo) | URL HTTPS responde 200 |
| **US3** | US1 (sitio creado) | Widget visible en producción |
| **US2** | US1 (deploy activo) | Logos 200 en CDN |
| **US4** | US1 + US3 (página real con widget) | Scores Lighthouse registrados |

### Parallel Opportunities

- **Phase 1**: T002 ∥ T003
- **Phase 2**: T005 ∥ T007 ∥ T008 (tras T004)
- **Phase 3**: T014 ∥ verificaciones manuales tras T013
- **Phase 5**: T019 ∥ T021
- **Phase 6**: T024 ∥ T025 (tras T023)
- **Phase 7**: T027 ∥ T028

### Parallel Example: Phase 2

```bash
# Tras T004 (netlify.toml):
T005 — coherencia Node 22
T007 — docs/netlify-deploy.md
T008 — .gitignore
```

### Parallel Example: Post-deploy verification

```bash
# Tras US1 deploy publicado:
T019 — curl logos (US2)
T015 — env vars Netlify (US3)  # secuencial antes de T022
```

---

## Implementation Strategy

### MVP First (US5 + US1)

1. Phase 1: Setup
2. Phase 2: `netlify.toml` + `astro.config.mjs` `site`
3. Phase 3: Conectar Netlify → URL pública HTTPS
4. **STOP and VALIDATE**: página carga completa

### Incremental Delivery

1. US5 + US1 → sitio público (MVP difusión)
2. US3 → Instagram en producción
3. US2 → compliance logotipos verificado
4. US4 → Lighthouse ≥ 90 / ≥ 90
5. Polish → PR, merge, cierre #14

### Secuencia recomendada (un desarrollador)

```text
T001–T009 → T010–T014 → T015–T018 → T019–T021 → T022–T026 → T027–T032
```

---

## Notes

- Variables `PUBLIC_*` MUST configurarse en panel Netlify; el `.env` local no se despliega
- La URL `site` en Astro puede requerir actualización tras conocer el subdominio Netlify real
- Lighthouse MUST ejecutarse contra producción HTTPS, no `localhost`
- El widget Elfsight puede afectar Performance; lazy load ya aplicado en `SocialFeed.astro`
- Commit sugerido tras Phase 2 (config repo) y tras Phase 7 (PR)
- **Total tareas**: 32 | **US1**: 5 | **US2**: 3 | **US3**: 4 | **US4**: 5 | **US5**: 6 | **Setup/Polish**: 9
