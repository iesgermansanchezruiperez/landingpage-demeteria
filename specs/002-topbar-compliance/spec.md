# Feature Specification: Cabecera y Compliance Institucional (Bloqueante)

**Feature Branch**: `feature/012-topbar-compliance`

**Created**: 2026-06-15

**Status**: Draft

**Input**: Issue #12 — Cabecera y Compliance Institucional. TopBar institucional separada del
contenido promocional, placeholders de logotipos CYL INNOVA FP, Hero.astro como primera sección
promocional. Textos legales extraídos de `docs/Instrucciones CYL INNOVA FP .md` §5.1 y §5.3.

**Issue**: [#12 — Cabecera y Compliance Institucional (Bloqueante)](https://github.com/iesgermansanchezruiperez/landingpage-demeteria/issues/12)

**Rama de trabajo**: `feature/012-topbar-compliance` — **no implementar directamente en `main`**.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Cumplimiento legal visible al cargar (Priority: P1)

Como responsable del proyecto CYL INNOVA FP, necesito que los logotipos y textos institucionales
obligatorios aparezcan en la parte superior de la landing sin que el visitante tenga que hacer scroll,
para cumplir la normativa de visibilidad en página web (Instrucciones §5.3).

**Why this priority**: Issue bloqueante a nivel legal; sin TopBar above-the-fold el proyecto no
puede justificar correctamente la difusión web ante la Consejería.

**Independent Test**: Abrir la landing en viewport móvil 320×568 px; verificar que los cinco
placeholders de logotipo y el lema UE son visibles sin desplazamiento vertical.

**Acceptance Scenarios**:

1. **Given** un dispositivo móvil con viewport ≥ 320 px de ancho, **When** el visitante carga
   la URL raíz, **Then** la TopBar institucional (logos + lema UE) es visible sin scroll.
2. **Given** la TopBar renderizada, **When** se inspecciona el DOM, **Then** contiene placeholders
   para UE, Ministerio de Educación FP y Deportes, Junta de Castilla y León y CYL INNOVA FP.
3. **Given** el emblema UE, **When** se muestra junto al lema, **Then** el texto exacto es
   «Cofinanciado por la Unión Europea» (Instrucciones §5.1.a).

---

### User Story 2 - Separación institucional vs. promocional (Priority: P1)

Como visitante de la landing DemeterIA, necesito distinguir claramente la franja de cumplimiento
legal (TopBar neutra) del contenido promocional de marca (Header + Hero), para que la identidad
Premium Agrotech no quede comprometida por los elementos institucionales.

**Why this priority**: Requisito pedagógico y de diseño del Issue #12; la separación TopBar /
Header / Hero es la solución acordada.

**Independent Test**: Verificar orden DOM: TopBar → Header → main (Hero como primera sección);
TopBar con fondo `surface`/`mist` neutro; Hero con tokens corporativos DemeterIA.

**Acceptance Scenarios**:

1. **Given** `Layout.astro`, **When** se renderiza la página, **Then** `TopBar.astro` aparece
   como primer elemento visible del `<body>`, por encima de `Header.astro`.
2. **Given** la TopBar, **When** un visitante la observa, **Then** el fondo es blanco/neutro
   (`bg-surface` o equivalente) sin colores corporativos DemeterIA dominantes.
3. **Given** el Hero, **When** un visitante lo compara con la TopBar, **Then** percibe estética
   Premium Agrotech (tokens `demeter-green`, `hydro-teal`, `mist`) independiente de la franja legal.

---

### User Story 3 - Hero como primera sección promocional (Priority: P2)

Como alumno de DAW, necesito extraer el contenido hero actual de `index.astro` a un componente
`Hero.astro` reutilizable en `src/components/sections/`, para seguir la arquitectura modular
de la constitución y facilitar iteraciones futuras.

**Why this priority**: Refactor estructural que completa el Issue; no bloquea legalmente pero
consolida la arquitectura de secciones.

**Independent Test**: `index.astro` importa `Hero.astro`; el Hero contiene un único `h1` con
contenido DemeterIA; eliminar duplicación de markup hero en index.

**Acceptance Scenarios**:

1. **Given** `src/components/sections/Hero.astro`, **When** se importa en `index.astro`,
   **Then** el contenido promocional principal se renderiza dentro de `<main>`.
2. **Given** la página completa, **When** se cuenta la jerarquía de encabezados, **Then** existe
   exactamente un `<h1>` (en Hero) y no hay saltos de nivel.
3. **Given** el Hero en viewport desktop y móvil, **When** se redimensiona el navegador,
   **Then** el layout se adapta sin overflow horizontal (mobile-first Tailwind).

---

### User Story 4 - Mención legal accesible (Priority: P2)

Como auditor de cumplimiento CYL INNOVA FP, necesito que la mención legal completa del programa
esté presente en la página (visible o accesible sin JS), para alinearse con Instrucciones §5.1
y facilitar la memoria técnica de difusión.

**Why this priority**: Complementa los logotipos; la mención textual es obligatoria en documentos
de comunicación según §5.1.

**Independent Test**: Buscar en HTML el texto legal canónico (completo o versión abreviada
documentada); verificar contraste WCAG AA del texto legal.

**Acceptance Scenarios**:

1. **Given** la landing renderizada, **When** se busca la mención institucional, **Then** aparece
   el texto legal definido en Key Entities (completo o abreviatura aprobada con enlace a texto íntegro).
2. **Given** el texto legal sobre fondo neutro, **When** se verifica contraste, **Then** cumple
   WCAG 2.1 AA (≥ 4.5:1).

---

### Edge Cases

- ¿Qué ocurre en pantallas muy estrechas (< 360 px)? → Logos en fila flexible (`flex-wrap`)
  manteniendo above-the-fold; priorizar UE + lema si el espacio es crítico.
- ¿Qué ocurre si los logos oficiales del Portal FP JCyL difieren en proporción? → Placeholders
  v1 usan contenedores con `aspect-ratio` fijo; sustitución por assets oficiales en iteración posterior.
- ¿Qué ocurre si TopBar + Header superan el viewport móvil? → TopBar MUST permanecer ultra-compacta
  (altura máxima ~48–64 px en móvil); Header puede quedar parcialmente below-fold sin violar §5.3
  (el requisito legal aplica a los logotipos del punto 5.1, no al Header de marca).
- ¿Qué ocurre sin JavaScript? → Toda la composición MUST ser HTML estático; sin acordeones ni toggles
  para mostrar logos.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: MUST existir `src/components/TopBar.astro` como componente ultra-compacto con fondo
  neutro (`bg-surface` o `bg-white`), situado en `Layout.astro` como primer hijo del `<body>`,
  **por encima** de `Header.astro`.
- **FR-002**: TopBar MUST incluir placeholders de imagen (SVG gris o contenedor con texto) para
  los cinco logotipos: (1) Unión Europea, (2) Ministerio de Educación Formación Profesional y Deportes,
  (3) Junta de Castilla y León, (4) CYL INNOVA FP, (5) coherencia visual con modelos del Portal FP JCyL.
- **FR-003**: Junto al emblema UE, TopBar MUST mostrar el lema exacto: **«Cofinanciado por la
  Unión Europea»** (Instrucciones §5.1.a).
- **FR-004**: TopBar MUST incluir la mención legal canónica de Instrucciones §5.1 (texto completo
  en Key Entities) o una versión abreviada visible con el texto íntegro en `<footer>` o región
  `aria-label="Financiación del proyecto"` accesible sin scroll adicional en desktop.
- **FR-005**: En viewport móvil 320×568 px, los cinco placeholders de logotipo y el lema UE MUST
  ser visibles **sin scroll** (above the fold) — criterio estricto Instrucciones §5.3.
- **FR-006**: MUST existir `src/components/sections/Hero.astro` con la primera sección promocional,
  estética Premium Agrotech y tokens Tailwind del proyecto (`demeter-green`, `hydro-teal`, `tech-slate`,
  `muted`, `mist`).
- **FR-007**: `src/pages/index.astro` MUST componer `Hero.astro` dentro de `Layout`; el markup
  hero actual MUST migrarse desde index al componente Hero.
- **FR-008**: TopBar y Hero MUST ser 100 % responsive (mobile-first, breakpoints `sm`/`md`/`lg`
  de Tailwind) sin overflow horizontal en viewports ≥ 320 px.
- **FR-009**: Cada placeholder de logo MUST llevar `alt` descriptivo en español para accesibilidad
  (p. ej. `alt="Logotipo Unión Europea — Cofinanciado por la Unión Europea"`).
- **FR-010**: La implementación MUST realizarse en la rama `feature/012-topbar-compliance`;
  merge a `main` solo tras PR revisado y DoD verificado.
- **FR-011**: MUST mantener política Zero-JS: sin `<script>`, sin `client:*`, sin frameworks UI.
- **FR-012**: TopBar MUST usar elemento semántico apropiado (`<aside>` con `aria-label` o `<div
  role="region">`) separado del `<header>` de marca; no anidar `<header>` dentro de `<header>`.

### Key Entities

- **Textos legales canónicos** (extraídos de `docs/Instrucciones CYL INNOVA FP .md`):

  | ID | Tipo | Texto exacto / obligatorio | Fuente |
  |----|------|---------------------------|--------|
  | LEG-UE-LEMA | Lema UE | `Cofinanciado por la Unión Europea` | §5.1.a |
  | LEG-MENCION | Mención completa | `Actuación financiada por el Ministerio de Educación, Formación Profesional y Deportes y cofinanciada por la Unión Europea (FSE+), línea de actuación 6.4 «Implementación de proyectos en Formación Profesional» (medidas 3.e.10, 3.e.11 y 3.e.14), incluida en la Línea principal de actuación 6- Impulso y Calidad de la Formación Profesional, en el marco financiero plurianual 2021-2027, dentro del Programa de Empleo, Educación, Formación y Economía Social (ÉFESO).` | §5.1 |
  | LEG-PORTADA | Encabezado documento | `ACTUACIÓN FINANCIADA POR EL MINISTERIO DE EDUCACIÓN, FORMACIÓN PROFESIONAL Y DEPORTES Y COFINANCIADO POR LA UNIÓN EUROPEA (FSE+, MARCO DEL PROGRAMA OPERATIVO EFESO, 2021-2027)` | Portada instrucciones |

- **Logotipos obligatorios** (§5.1 + Issue #12):

  | ID | Entidad | Placeholder v1 | Asset definitivo (iteración futura) |
  |----|---------|----------------|-------------------------------------|
  | LOGO-UE | Emblema UE + lema | SVG gris + texto lema | Modelo Portal FP JCyL |
  | LOGO-MEFPD | Ministerio de Educación, Formación Profesional y Deportes | Placeholder etiquetado | Modelo Portal FP JCyL |
  | LOGO-JCYL | Junta de Castilla y León | Placeholder etiquetado | Modelo Portal FP JCyL |
  | LOGO-CYLINNOVA | Programa CYL INNOVA FP | Placeholder etiquetado | Branding programa / Portal FP JCyL |

- **TopBar**: Franja institucional; atributos: altura compacta, fondo neutro, logos en fila/grid
  responsive, mención legal.
- **Hero**: Sección promocional; atributos: `h1` único, eyebrow CYL INNOVA FP, badges de valor,
  tokens Premium Agrotech.

- **Jerarquía de composición en Layout**:

  ```text
  body
  ├── skip link
  ├── TopBar.astro          ← compliance (above the fold)
  ├── Header.astro          ← marca DemeterIA
  ├── main
  │   └── slot → Hero.astro ← promocional
  └── Footer.astro
  ```

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: En viewport 320×568 px, el 100 % de los placeholders de logotipo y el lema UE
  son visibles sin scroll vertical (verificación manual o captura DevTools).
- **SC-002**: Los cinco logotipos institucionales requeridos están presentes como placeholders
  identificables en el HTML generado.
- **SC-003**: El texto «Cofinanciado por la Unión Europea» aparece literalmente en el output HTML.
- **SC-004**: `Hero.astro` renderiza con ≥ 3 tokens corporativos visibles y un único `h1`.
- **SC-005**: `npm run build` completa sin errores en la rama `feature/012-topbar-compliance`.
- **SC-006**: Cero archivos `.js` en `dist/` tras build (política Zero-JS mantenida).

### Constitution Compliance (mandatory for this project)

- **CC-001**: Lighthouse A11y ≥ 90 (placeholders con `alt`; contraste texto legal).
- **CC-002**: Lighthouse Performance ≥ 90; TopBar no debe incrementar LCP > 2.5 s (assets ligeros).
- **CC-003**: Cero JavaScript en cliente.
- **CC-004**: Contraste WCAG 2.1 AA en textos de TopBar y Hero.

## Assumptions

- **Iteración v1 (Issue #12)**: se usan placeholders SVG/grises con texto, no logos oficiales
  descargados; los assets definitivos se obtendrán del [Portal de Formación Profesional JCyL](https://www.educa.jcyl.es/formacionprofesional/innova) en una iteración posterior.
- La mención legal completa (LEG-MENCION) puede ubicarse en TopBar abreviada (1–2 líneas) con
  texto íntegro en Footer o región colapsable **solo con HTML/CSS** (`<details>`/`<summary>` nativo
  permitido sin JS) si la altura above-the-fold lo requiere.
- El requisito §5.3 de visibilidad sin desplazamiento aplica a los **elementos del punto 5.1**
  (logotipos institucionales), no exige que el Hero completo sea above-the-fold.
- El expediente del proyecto DemeterIA es **INN-PUB-2026-XXX** (número definitivo según resolución).
- Trabajo en rama `feature/012-topbar-compliance`; PR obligatorio antes de merge a `main`.

## Referencias normativas

- `docs/Instrucciones CYL INNOVA FP .md` — §5.1 Logos, §5.3 Página web
- `docs/Memorias DemeterIA.md` — Plan de difusión (logos UE + Ministerio + JCyL visibles sin desplazamiento)
- `.specify/memory/constitution.md` — Zero-JS, modularidad `sections/`, Premium Agrotech
