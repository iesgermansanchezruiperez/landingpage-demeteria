# Feature Specification: Despliegue en Producción (Netlify) y Auditoría Lighthouse

**Feature Branch**: `feature/014-netlify-deploy`

**Created**: 2026-06-15

**Status**: Draft

**Input**: Issue #14 — Publicar la landing Astro estática en Netlify con CI/CD desde `main`,
configurar entorno Node compatible, variables de entorno del widget Instagram y validar
Lighthouse en la URL de producción (Performance ≥ 90, Accessibility ≥ 90).

**Issue**: [#14 — Despliegue en Producción (Netlify) y Auditoría Lighthouse](https://github.com/iesgermansanchezruiperez/landingpage-demeteria/issues/14)

**Rama de trabajo**: `feature/014-netlify-deploy` — **no implementar directamente en `main`**.

**Dependencias**: Features #11–#13 completadas y mergeadas en `main` (landing funcional con TopBar,
secciones informativas y `SocialFeed` con widget Elfsight).

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Sitio público en Netlify (Priority: P1)

Como visitante externo, necesito acceder a la landing DemeterIA mediante una URL pública HTTPS,
para consultar el proyecto sin ejecutar el entorno de desarrollo local.

**Why this priority**: Objetivo principal del issue; sin despliegue no hay difusión real.

**Independent Test**: Abrir la URL de producción en navegador; la página carga con código 200 y
muestra Hero, Objetivos, Fases, Instagram y Footer.

**Acceptance Scenarios**:

1. **Given** el repositorio conectado a Netlify, **When** se hace push a `main`, **Then** Netlify
   ejecuta build automático y el estado final es **Published** (log en verde).
2. **Given** la URL de producción, **When** un visitante la abre, **Then** ve el contenido completo
   sin errores visibles en consola críticos.
3. **Given** el despliegue, **When** se inspecciona la respuesta HTTP, **Then** el sitio se sirve
   por **HTTPS**.

---

### User Story 2 - Assets institucionales sin rutas rotas (Priority: P1)

Como auditor de cumplimiento CYL INNOVA FP, necesito que los cuatro logotipos institucionales y el
resto de imágenes carguen correctamente en producción, para validar el bloque de financiación.

**Why this priority**: Criterio explícito del Definition of Done del issue #14.

**Independent Test**: En producción, verificar que `/logos/logo-ue.jpg`, `logo-mefpd.jpg`,
`logo-fondos.jpg` y `logo-jcyl.jpg` responden 200 y se renderizan en TopBar.

**Acceptance Scenarios**:

1. **Given** la URL de producción, **When** se cargan los recursos en `public/logos/`, **Then**
   todas las imágenes institucionales responden sin 404.
2. **Given** TopBar en producción, **When** un visitante visualiza la cabecera, **Then** los cuatro
   logotipos son visibles en móvil y escritorio.

---

### User Story 3 - Widget Instagram operativo en producción (Priority: P1)

Como comunidad educativa, necesito ver el feed de Instagram en la URL pública, no solo en local,
para seguir la difusión del proyecto con hashtag `#demeteria`.

**Why this priority**: El widget depende de variables `PUBLIC_*` inyectadas en build time; sin
configurarlas en Netlify, la sección social muestra solo el fallback.

**Independent Test**: En producción, el contenedor Elfsight renderiza publicaciones; variables
`PUBLIC_SOCIAL_WIDGET_ID` y `PUBLIC_SOCIAL_WIDGET_PROVIDER` definidas en Netlify.

**Acceptance Scenarios**:

1. **Given** variables de entorno configuradas en Netlify, **When** se despliega `main`, **Then**
   el HTML incluye `elfsight-app-<WIDGET_ID>` y el script de Elfsight.
2. **Given** el feed en producción, **When** un visitante llega a `#redes-sociales`, **Then** ve
   publicaciones del widget (no solo el mensaje de fallback).

---

### User Story 4 - Auditoría Lighthouse en producción (Priority: P1)

Como responsable de calidad web, necesito confirmar que la URL de producción supera los umbrales
de Lighthouse definidos en la constitución y el issue, para cerrar el ciclo de entrega.

**Why this priority**: Definition of Done del issue #14; validación objetiva post-despliegue.

**Independent Test**: Ejecutar Lighthouse (CLI o DevTools) contra la URL de producción en modo
móvil; registrar puntuaciones Performance y Accessibility.

**Acceptance Scenarios**:

1. **Given** la URL de producción estable, **When** se audita con Lighthouse, **Then**
   **Performance ≥ 90** y **Accessibility ≥ 90**.
2. **Given** el informe Lighthouse, **When** se revisan auditorías críticas, **Then** no hay
   fallos bloqueantes de contraste o recursos rotos en la página principal.

---

### User Story 5 - Configuración reproducible en repositorio (Priority: P2)

Como desarrollador DAW, necesito que los parámetros de build de Netlify estén documentados y
versionados en el repositorio, para que cualquier miembro del equipo reproduzca el despliegue.

**Why this priority**: Reduce errores de configuración manual y facilita auditoría del proyecto.

**Independent Test**: Existe `netlify.toml` (o equivalente documentado) con `build command`,
`publish directory` y referencia a `NODE_VERSION`.

**Acceptance Scenarios**:

1. **Given** un clon limpio del repo, **When** se conecta a Netlify, **Then** los valores por
   defecto coinciden con `npm run build` y carpeta `dist`.
2. **Given** `package.json` con `engines.node >= 22.12`, **When** Netlify construye, **Then** usa
   Node.js 22.x (variable `NODE_VERSION` o archivo `.nvmrc`).

---

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El sitio MUST desplegarse como artefacto estático desde `dist/` tras `npm run build`.
- **FR-002**: Netlify MUST construir automáticamente en cada push a `main`.
- **FR-003**: El entorno de build MUST usar Node.js ≥ 22.12 (coherente con `.nvmrc` y `engines`).
- **FR-004**: Variables `PUBLIC_SOCIAL_WIDGET_ID` y `PUBLIC_SOCIAL_WIDGET_PROVIDER` MUST
  configurarse en Netlify (no commitear `.env` con secretos).
- **FR-005**: La URL de producción MUST servir assets de `public/` sin rutas rotas.
- **FR-006**: Lighthouse en producción MUST reportar Performance ≥ 90 y Accessibility ≥ 90.
- **FR-007**: SHOULD añadirse `site` en `astro.config.mjs` con la URL canónica de producción cuando
  esté disponible (mejora SEO y enlaces canónicos).

### Non-Functional Requirements

- **NFR-001**: Tiempo de build en Netlify SHOULD ser < 3 min en plan gratuito.
- **NFR-002**: El despliegue MUST NOT requerir servidor Node en runtime (solo hosting estático).
- **NFR-003**: Informe Lighthouse SHOULD archivarse en `lighthouse-report-production.json` (opcional,
  no commitear si contiene datos transitorios).

### Key Entities

| ID | Entidad | Descripción |
|----|---------|-------------|
| NETLIFY-SITE | Configuración del sitio Netlify | Repo, rama `main`, build, publish |
| ENV-PUBLIC | Variables `PUBLIC_*` | Widget Instagram inyectadas en build |
| LH-AUDIT | Resultado Lighthouse | Scores Performance y A11y en producción |

## Success Criteria

- **SC-001**: Log Netlify en verde (**Published**).
- **SC-002**: URL pública accesible por HTTPS.
- **SC-003**: Logotipos institucionales visibles sin 404.
- **SC-004**: Widget Instagram visible en producción (con env vars).
- **SC-005**: Lighthouse Performance ≥ 90 y Accessibility ≥ 90 en URL de producción.

## Assumptions

- El equipo dispone de cuenta Netlify con permisos para conectar el repositorio GitHub.
- El widget Elfsight ya está creado y el ID es conocido (ver `.env.example`).
- La auditoría Lighthouse se ejecuta contra la URL final de Netlify (subdominio `*.netlify.app`
  o dominio personalizado si se configura después).
- El script de Elfsight en producción puede afectar levemente Performance; los umbrales del issue
  siguen siendo ≥ 90 (validado en local con A11y 100 antes del widget completo en red).

## Out of Scope

- Dominio personalizado institucional (puede añadirse después sin bloquear el issue).
- Pipeline CI adicional en GitHub Actions (Netlify CI/CD es suficiente para este issue).
- Optimización avanzada del widget de terceros más allá de `data-elfsight-app-lazy` ya aplicado.
