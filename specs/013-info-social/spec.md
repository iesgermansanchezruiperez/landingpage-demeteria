# Feature Specification: Secciones Informativas y Widget de Instagram

**Feature Branch**: `feature/013-info-social`

**Created**: 2026-06-15

**Status**: Draft

**Input**: Issue #13 — Tres secciones modulares informativas (`ProjectObjectives`, `ProjectPhases`,
`SocialFeed`) insertadas en `index.astro` entre `<Hero />` y el `<Footer />` (vía `<Layout>`).
Widget de Instagram de @ies_gsr filtrado por hashtag `#demeteria`. Política Zero-JS con excepción
documentada para JS de terceros encapsulado en `SocialFeed.astro`.

**Issue**: [#13 — Secciones informativas y Widget de Instagram](https://github.com/iesgermansanchezruiperez/landingpage-demeteria/issues/13)

**Rama de trabajo**: `feature/013-info-social` — **no implementar directamente en `main`**.

**Fuentes de contenido**: `docs/Memorias DemeterIA.md` (objetivo general, fases I–III);
`src/components/sections/Hero.astro` (pilares visuales existentes).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Objetivos del proyecto claros (Priority: P1)

Como visitante de la landing DemeterIA, necesito entender el objetivo general del proyecto y sus
tres pilares estratégicos en una sección dedicada, para comprender la propuesta de valor sin
depender solo del Hero.

**Why this priority**: Contenido obligatorio según plan de difusión CYL INNOVA FP (§5.3: descripción
de objetivos y resultados); base informativa de la landing.

**Independent Test**: Inspeccionar `ProjectObjectives.astro` renderizado; verificar `<section>` con
un `<h2>`, un párrafo de objetivo general y tres `<article>` con pilares nombrados literalmente.

**Acceptance Scenarios**:

1. **Given** la página cargada, **When** un visitante llega a la sección Objetivos, **Then** lee
   el objetivo general sobre cultivo hidropónico monitorizado con IoT e IA.
2. **Given** la sección Objetivos, **When** se inspecciona el DOM, **Then** existen tres
   `<article>` titulados «Hidroponía sostenible», «IoT + Inteligencia Artificial» e
   «Inclusión social».
3. **Given** la jerarquía de encabezados, **When** se audita la página, **Then** Objetivos usa
   `<h2>` (no `h1`); pilares usan `<h3>` dentro de cada `<article>`.

---

### User Story 2 - Fases del proyecto visibles (Priority: P1)

Como responsable del proyecto, necesito que las tres fases del plan de trabajo aparezcan en un
grid responsive legible, para comunicar el cronograma a evaluadores y visitantes.

**Why this priority**: Requisito de difusión web; complementa la memoria técnica con visión
sintética del proyecto.

**Independent Test**: Viewport 320 px → una columna; viewport ≥ 1024 px → tres columnas; cada fase
es un `<article>` con título y descripción.

**Acceptance Scenarios**:

1. **Given** viewport móvil (320 px), **When** se renderiza `ProjectPhases.astro`, **Then** las
   tres fases se apilan en **1 columna** (`grid-cols-1`).
2. **Given** viewport escritorio (≥ `lg`), **When** se renderiza la sección, **Then** las tres
   fases aparecen en **3 columnas** (`lg:grid-cols-3`).
3. **Given** las fases, **When** un visitante las lee, **Then** ve «Diseño e Infraestructura»,
   «Desarrollo de Software» y «Despliegue y Difusión» con contenido descriptivo.

---

### User Story 3 - Feed social filtrado por hashtag (Priority: P2)

Como comunidad educativa, necesito ver publicaciones de Instagram del IES GSR relacionadas con
DemeterIA, sin ruido de otras publicaciones del centro, para seguir la difusión del proyecto en
redes.

**Why this priority**: Cumple plan de difusión (§5.4 redes sociales, hashtag #CYL_INNOVA_FP /
#demeteria); aporta dinamismo sin abandonar Zero-JS en el resto del sitio.

**Independent Test**: `SocialFeed.astro` contiene contenedor de embed configurado para cuenta
`@ies_gsr` y filtro `#demeteria`; sin `<script>` propio del proyecto fuera del bloque del widget.

**Acceptance Scenarios**:

1. **Given** `SocialFeed.astro`, **When** se configura el widget (Curator.io o Elfsight), **Then**
   la fuente es la cuenta oficial **@ies_gsr** y el filtro de hashtag es estrictamente **#demeteria**.
2. **Given** el feed renderizado, **When** un visitante lo observa, **Then** solo aparecen
   publicaciones que incluyen el hashtag (comportamiento del proveedor; validar en panel del widget).
3. **Given** la política Zero-JS del proyecto, **When** se audita el código Astro, **Then** no hay
   `client:*`, islands ni `<script>` de aplicación; el único JS tolerado es el del proveedor
   encapsulado en `SocialFeed.astro`.

---

### User Story 4 - Composición modular en index (Priority: P1)

Como desarrollador DAW, necesito que `index.astro` componga las secciones en orden secuencial
sin lógica embebida, para mantener la arquitectura modular de la constitución.

**Why this priority**: Integración estructural; bloquea la entrega visible de la feature.

**Independent Test**: `index.astro` importa Hero + 3 secciones nuevas; orden DOM correcto dentro
de `<main>`.

**Acceptance Scenarios**:

1. **Given** `src/pages/index.astro`, **When** se renderiza, **Then** el orden es:
   `Hero` → `ProjectObjectives` → `ProjectPhases` → `SocialFeed`.
2. **Given** `Layout.astro`, **When** se compone la página, **Then** las secciones viven dentro
   de `<main>` y el `<Footer />` permanece en el layout (después de las secciones).
3. **Given** la página completa, **When** se cuenta `<h1>`, **Then** sigue existiendo exactamente
   uno (en Hero).

---

### Edge Cases

- ¿Qué ocurre si el widget de terceros no carga (bloqueador, sin red)? → `SocialFeed` MUST incluir
  fallback estático: enlace a `https://www.instagram.com/ies_gsr/` y texto «Síguenos en Instagram
  con #demeteria»; `<noscript>` con el mismo enlace.
- ¿Qué ocurre si no hay publicaciones con #demeteria? → El widget puede mostrar estado vacío del
  proveedor; el fallback MUST permanecer visible.
- ¿Qué ocurre en viewport intermedio (tablet)? → Fases en 1 columna hasta `lg:`; Objetivos en
  grid de pilares `1 col` móvil, `3 cols` desde `md:`.
- ¿Qué ocurre con Lighthouse Performance tras el widget? → Objetivo ≥ 90 en secciones estáticas;
  el widget es carga diferida; documentar en Complexity Tracking.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: MUST existir `src/components/sections/ProjectObjectives.astro` con `<section>`,
  `<h2>`, párrafo de objetivo general y tres `<article>` para los pilares.
- **FR-002**: Los pilares MUST titularse literalmente: «Hidroponía sostenible»,
  «IoT + Inteligencia Artificial», «Inclusión social».
- **FR-003**: MUST existir `src/components/sections/ProjectPhases.astro` con grid
  `grid-cols-1 lg:grid-cols-3` y tres `<article>` de fase.
- **FR-004**: Las fases MUST titularse: «Diseño e Infraestructura», «Desarrollo de Software»,
  «Despliegue y Difusión».
- **FR-005**: MUST existir `src/components/sections/SocialFeed.astro` como contenedor aislado del
  widget de terceros.
- **FR-006**: El widget MUST configurarse para cuenta Instagram **@ies_gsr** y filtro hashtag
  **#demeteria** (sin variaciones de mayúsculas en la configuración del proveedor).
- **FR-007**: `index.astro` MUST importar y renderizar las tres secciones en orden secuencial
  tras `<Hero />`.
- **FR-008**: MUST mantenerse un único `<h1>` en la página (Hero).

### Non-Functional Requirements

- **NFR-001**: Zero-JS en componentes propios; excepción única: script/embed del widget en
  `SocialFeed.astro` (documentada en Complexity Tracking).
- **NFR-002**: WCAG 2.1 AA; contraste ≥ 4.5:1 en textos de sección; Lighthouse A11y ≥ 90 global.
- **NFR-003**: Mobile-first; sin overflow horizontal en ≥ 320 px.
- **NFR-004**: Estética Premium Agrotech: tokens `demeter-green`, `hydro-teal`, `agro-earth`,
  `tech-slate`, `mist`, `surface`, `muted`.
- **NFR-005**: Rama `feature/013-info-social`; merge vía PR a `main`.

## Key Entities

| ID | Tipo | Descripción |
|----|------|-------------|
| OBJ-GENERAL | Texto | Objetivo general DemeterIA (memoria §B) |
| PILLAR-1 | Article | Hidroponía sostenible |
| PILLAR-2 | Article | IoT + Inteligencia Artificial |
| PILLAR-3 | Article | Inclusión social |
| PHASE-1 | Article | Diseño e Infraestructura |
| PHASE-2 | Article | Desarrollo de Software |
| PHASE-3 | Article | Despliegue y Difusión |
| SOCIAL-ACCOUNT | Config | Instagram @ies_gsr |
| SOCIAL-HASHTAG | Config | #demeteria (filtro estricto) |
| SOCIAL-PROVIDER | Config | Curator.io o Elfsight (decisión en research.md) |

## Success Criteria

- **SC-001**: Las tres secciones renderizan en `index.astro` en el orden especificado.
- **SC-002**: Semántica HTML5 validada: `section` + `article`; jerarquía h2 → h3 sin saltos.
- **SC-003**: Grid de fases: 1 col móvil, 3 cols en `lg`.
- **SC-004**: Widget configurado con @ies_gsr + #demeteria; fallback estático presente.
- **SC-005**: `find dist -name '*.js'` sin bundles de aplicación; JS de widget aceptado como excepción.
- **SC-006**: Lighthouse A11y ≥ 90; Performance ≥ 90 en build sin widget activo o con carga diferida.

## Assumptions

- El equipo dispone o creará cuenta/widget en Curator.io o Elfsight antes de la implementación.
- Existen o existirán publicaciones en @ies_gsr con hashtag `#demeteria`.
- Los textos de fases se sintetizan desde la memoria; no se requiere CMS.
- El Hero conserva los badges de pilares; Objetivos los expande narrativamente (no duplicación
  conflictiva).

## Out of Scope

- Galería fotográfica propia (solo widget Instagram).
- Formularios de contacto o comentarios.
- Hidratación Astro / islands en secciones informativas.
- Moderación manual del feed (responsabilidad del panel del proveedor).
