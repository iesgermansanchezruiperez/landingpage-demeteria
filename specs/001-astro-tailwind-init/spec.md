# Feature Specification: Inicialización Astro + Tailwind CSS + Estructura base

**Feature Branch**: `001-astro-tailwind-init`

**Created**: 2026-06-15

**Status**: Draft

**Input**: User description: "Issue #11: Inicialización Astro + Tailwind CSS + Estructura base. Landing page promocional estática Zero-JS con Astro y Tailwind CSS. Configurar colores corporativos derivados de Memorias DemeterIA.md y estética Premium Agrotech. Crear Layout.astro, Header.astro y Footer.astro."

**Issue**: [#11 — Inicialización Astro + Tailwind CSS + Estructura base](https://github.com/)

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Arranque del entorno de desarrollo (Priority: P1)

Como alumno del proyecto DemeterIA, necesito clonar el repositorio y levantar el servidor
de desarrollo local para ver la landing page base en el navegador, de modo que pueda
comenzar a desarrollar secciones sin configurar manualmente el stack.

**Why this priority**: Sin un proyecto Astro funcional no es posible ningún trabajo posterior.
Es el bloqueante absoluto de la landing.

**Independent Test**: Ejecutar `npm install` seguido de `npm run dev`, abrir la URL local
y confirmar que la página carga sin errores en consola ni terminal.

**Acceptance Scenarios**:

1. **Given** un repositorio recién clonado con dependencias instaladas, **When** el alumno
   ejecuta `npm run dev`, **Then** el servidor inicia sin errores y muestra la URL de acceso.
2. **Given** el servidor en ejecución, **When** el alumno abre la página principal en el
   navegador, **Then** ve contenido renderizado (no página en blanco ni error 500).

---

### User Story 2 - Identidad visual corporativa aplicada (Priority: P1)

Como visitante de la landing promocional, necesito percibir de inmediato la identidad
DemeterIA — agricultura inteligente, sostenibilidad hidropónica y tecnología corporativa —
a través de una paleta de colores coherente aplicada desde el primer render.

**Why this priority**: La configuración de tokens de color en Tailwind es requisito explícito
del Issue #11 y fundamento de la estética Premium Agrotech definida en la constitución.

**Independent Test**: Abrir `index` y verificar que al menos un elemento usa tokens
corporativos (`demeter-green`, `hydro-teal` o equivalentes) definidos en configuración
central, no colores hardcodeados arbitrarios.

**Acceptance Scenarios**:

1. **Given** la página index con clases Tailwind de marca, **When** un visitante carga la
   página, **Then** observa fondos sutiles y colores verde-agro/teal-agua acordes a la
   esencia del proyecto (agricultura + hidroponía + tecnología).
2. **Given** texto principal sobre fondo de marca, **When** se verifica contraste,
   **Then** cumple WCAG 2.1 AA (≥ 4.5:1 texto normal).

---

### User Story 3 - Estructura base reutilizable (Priority: P2)

Como desarrollador de secciones futuras, necesito un layout base con cabecera y pie de
página ya creados para componer nuevas secciones sin duplicar estructura HTML ni
romper la semántica del documento.

**Why this priority**: Header y Footer son el esqueleto modular sobre el que se apoyarán
todas las secciones posteriores; no bloquea el arranque pero acelera el desarrollo.

**Independent Test**: Inspeccionar el HTML generado y confirmar presencia de
`header`, `main` y `footer` semánticos dentro de un layout reutilizable.

**Acceptance Scenarios**:

1. **Given** `Layout.astro` importado en `index.astro`, **When** se renderiza la página,
   **Then** el documento contiene `<header>`, `<main>` y `<footer>` en orden lógico.
2. **Given** `Header.astro` y `Footer.astro` como componentes aislados, **When** se
   modifica solo el Header, **Then** el cambio se refleja en index sin tocar Footer ni Layout
   interno de main.

---

### User Story 4 - Repositorio limpio en main (Priority: P2)

Como responsable del repositorio, necesito que la rama `main` contenga únicamente
archivos del proyecto, con `.gitignore` correcto, para que nuevos colaboradores no
reciban artefactos de build ni dependencias versionadas.

**Why this priority**: Criterio explícito del Definition of Done del Issue #11; evita deuda
técnica desde el primer commit de código.

**Independent Test**: Revisar `git status` tras build local y confirmar que `node_modules/`,
`dist/` y archivos de entorno no aparecen como untracked ni staged.

**Acceptance Scenarios**:

1. **Given** un build de producción ejecutado localmente, **When** se consulta `git status`,
   **Then** `dist/`, `node_modules/` y `.env` no están rastreados ni pendientes de commit.
2. **Given** el proyecto en `main`, **When** un colaborador clona y ejecuta setup,
   **Then** obtiene únicamente fuentes y configuración, sin archivos basura del autor.

---

### Edge Cases

- ¿Qué ocurre si `npm create astro` genera archivos de plantilla no alineados con la
  constitución (p. ej. ejemplo con React)? → Deben eliminarse; solo permanece plantilla
  vacía/básica sin integraciones de UI prohibidas.
- ¿Qué ocurre si Tailwind no está wired al layout? → Los estilos no se aplican; se
  considera no cumplido el DoD hasta que `index` demuestre clases Tailwind activas.
- ¿Qué ocurre si los colores corporativos no alcanzan contraste AA? → Ajustar tonos en
  `tailwind.config.mjs` priorizando accesibilidad sobre fidelidad cromática exacta.
- ¿Qué ocurre si el alumno ejecuta en Windows/macOS/Linux? → Scripts `npm` deben
  funcionar en los tres entornos sin pasos adicionales no documentados.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El proyecto MUST inicializarse con Astro usando plantilla básica/vacía
  (`npm create astro@latest`) sin integraciones de React, Vue, Svelte ni otros frameworks
  interactivos.
- **FR-002**: Astro MUST configurarse con `output: 'static'` para cumplir el contrato
  Zero-JS de la constitución.
- **FR-003**: Tailwind CSS MUST instalarse e integrarse vía `npx astro add tailwind` y
  aplicarse globalmente en el layout base.
- **FR-004**: `tailwind.config.mjs` MUST definir tokens de color corporativos DemeterIA
  bajo `theme.extend.colors` usando la paleta derivada de Memorias (ver Key Entities).
- **FR-005**: MUST existir `src/layouts/Layout.astro` como envoltorio HTML5 semántico con
  `lang="es"`, slot de contenido y estilos Tailwind importados.
- **FR-006**: MUST existir `src/components/Header.astro` con elemento `<header>` y
  navegación mínima (logo/nombre DemeterIA).
- **FR-007**: MUST existir `src/components/Footer.astro` con elemento `<footer>` e
  información institucional mínima (proyecto CYL INNOVA FP / centros participantes).
- **FR-008**: `src/pages/index.astro` MUST usar `Layout.astro` y demostrar clases
  Tailwind corporativas visibles (fondo, tipografía o acentos de marca).
- **FR-009**: `.gitignore` MUST excluir como mínimo `node_modules/`, `dist/`, `.env`,
  `.DS_Store` y cachés de editor comunes.
- **FR-010**: El servidor de desarrollo (`npm run dev`) MUST arrancar sin errores de
  compilación ni dependencias faltantes.
- **FR-011**: El build de producción (`npm run build`) MUST completarse sin errores y
  MUST NOT generar JavaScript de cliente en el output (verificación Zero-JS).
- **FR-012**: El código MUST subirse a la rama `main` sin archivos basura ni artefactos
  de build versionados.

### Key Entities

- **Paleta Corporativa DemeterIA** (derivada de esencia visual en `docs/Memorias DemeterIA.md`):
  Las memorias no especifican códigos hex explícitos; la paleta se infiere de los ejes del
  proyecto — agricultura de precisión, hidroponía sostenible, gestión del agua (manantial /
  ODS 6), tecnología IoT+IA y difusión institucional corporativa — bajo la estética Premium
  Agrotech de la constitución:

  | Token Tailwind   | Hex       | Rol semántico                                      |
  | ---------------- | --------- | -------------------------------------------------- |
  | `demeter-green`  | `#2D6A4F` | Primario: agricultura, sostenibilidad, confianza   |
  | `hydro-teal`     | `#0D9488` | Secundario: agua, hidroponía, tecnología limpia    |
  | `agro-earth`     | `#92702A` | Acento tierra: sector agrario, calidez premium     |
  | `tech-slate`     | `#1E293B` | Texto principal: corporativo moderno               |
  | `mist`           | `#F0F7F4` | Fondo sutil: limpieza, amplitud, premium           |
  | `surface`        | `#FFFFFF` | Superficies/cards: contraste sobre fondos sutiles  |
  | `muted`          | `#64748B` | Texto secundario: jerarquía sin ruido visual       |

  Combinaciones obligatorias: texto `tech-slate` sobre `mist` o `surface`; acentos
  `demeter-green` / `hydro-teal` en enlaces y elementos de marca; `agro-earth` solo
  como acento puntual (no fondos extensos).

- **Layout Base**: Plantilla HTML reutilizable; atributos: título de página, descripción meta,
  slot de contenido principal.
- **Header**: Cabecera de marca; atributos: nombre/logo DemeterIA, navegación estática
  (anclas HTML, sin JS).
- **Footer**: Pie institucional; atributos: créditos del proyecto, centros (IES Alonso de
  Madrigal, IES Germán Sánchez Ruipérez), referencia CYL INNOVA FP 2025-2026.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Un desarrollador puede clonar, instalar y ver la landing en el navegador en
  menos de 5 minutos siguiendo README o scripts estándar.
- **SC-002**: El 100% de los criterios del Definition of Done del Issue #11 se cumplen
  (`npm run dev` sin errores, Tailwind visible en index, `main` limpio).
- **SC-003**: La estructura HTML generada contiene exactamente un `h1` por página y
  los landmarks semánticos `header`, `main` y `footer` presentes.
- **SC-004**: Al menos 3 tokens de la paleta corporativa están aplicados en la página
  index de forma visible y verificable.

### Constitution Compliance (mandatory for this project)

- **CC-001**: Lighthouse A11y score ≥ 90 en build de producción (aplicable al esqueleto
  base; validar tras implementación).
- **CC-002**: Lighthouse Performance score ≥ 90; LCP < 2.5 s (4G simulada).
- **CC-003**: Cero bytes de JavaScript ejecutable en el cliente (verificar en build output).
- **CC-004**: Contraste de color WCAG 2.1 AA verificado en combinaciones texto/fondo
  de la paleta corporativa.

## Assumptions

- Las memorias del proyecto (`docs/Memorias DemeterIA.md`) no incluyen códigos de
  color hex; la paleta propuesta deriva de su esencia temática (agricultura inteligente,
  hidroponía, agua, sostenibilidad, tecnología e imagen institucional) y puede refinarse
  cuando exista una guía de marca gráfica oficial con valores exactos.
- La plantilla Astro seleccionada será "Empty" o "Basics" sin dependencias de UI
  adicionales.
- El alumno dispone de Node.js ≥ 18 y npm instalados en su entorno local.
- El contenido de Header y Footer en esta fase es placeholder mínimo; el copy definitivo
  llegará en features de secciones posteriores.
- La verificación de subida a `main` es responsabilidad del flujo de trabajo del alumno
  (commit + push); la spec define el estado esperado del repositorio, no ejecuta el push.
