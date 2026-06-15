<!--
Sync Impact Report
==================
Version change: (none) → 1.0.0
Modified principles: N/A (initial ratification)
Added sections:
  - Core Principles (5 principles)
  - Restricciones Técnicas
  - Flujo de Desarrollo y Calidad
  - Governance
Removed sections: N/A
Templates requiring updates:
  - .specify/templates/plan-template.md ✅ updated
  - .specify/templates/spec-template.md ✅ updated
  - .specify/templates/tasks-template.md ✅ updated
  - .specify/templates/constitution-template.md ⚠ pending (reference template; no sync required)
  - README.md ⚠ pending (file does not exist yet)
Follow-up TODOs: None
-->

# DemeterIA Landing Page Constitution

## Core Principles

### I. Sitio Estático Sin JavaScript en Cliente (NON-NEGOTIABLE)

La landing page MUST entregarse como HTML estático precompilado sin JavaScript ejecutable
en el navegador del visitante. Astro MUST configurarse para generar salida estática
(`output: 'static'`). Queda prohibido incluir `<script>` en el cliente, islands de
hidratación, `client:*` directives, o cualquier dependencia que inyecte JS en el bundle
del cliente. Las interacciones MUST resolverse con HTML nativo (enlaces, formularios
`action` externos, `mailto:`) o CSS puro. **Rationale**: máxima velocidad de carga,
SEO óptimo, superficie de ataque mínima y coherencia con el propósito promocional
estático.

### II. Stack Tecnológico Restringido

El proyecto MUST construirse exclusivamente con **Astro** (framework de sitio) y
**Tailwind CSS** (estilos). Queda **estrictamente prohibido** integrar React, Vue,
Svelte, Preact, Solid, Alpine.js, jQuery o cualquier otro framework o librería
interactiva en el cliente. Las integraciones de Astro para frameworks de UI MUST
permanecer deshabilitadas. Dependencias adicionales MUST justificarse en Complexity
Tracking y MUST NOT introducir JS en el cliente. **Rationale**: coherencia
arquitectónica, mantenibilidad predecible y cumplimiento del contrato zero-JS.

### III. Arquitectura Modular por Secciones

Cada sección visible de la landing (hero, features, testimonios, CTA, footer, etc.)
MUST implementarse como un componente `.astro` aislado en `src/components/sections/`
(o subdirectorio equivalente documentado en el plan). Los componentes MUST ser
autocontenidos: props tipadas, markup semántico propio y estilos Tailwind locales o
importados desde utilidades compartidas. La página principal (`src/pages/index.astro`)
MUST componer secciones mediante imports, sin lógica de negocio embebida. Los
componentes reutilizables (botones, tarjetas, iconos) MUST vivir en
`src/components/ui/`. **Rationale**: iteración independiente por sección, revisiones
acotadas y escalabilidad del diseño modular.

### IV. Semántica HTML5 y Accesibilidad Total (NON-NEGOTIABLE)

Todo markup MUST usar elementos HTML5 semánticos (`header`, `nav`, `main`, `section`,
`article`, `aside`, `footer`, `figure`, etc.) con jerarquía de encabezados correcta
(un solo `h1` por página, sin saltos de nivel). MUST cumplir WCAG 2.1 nivel AA como
mínimo: contraste de color ≥ 4.5:1 para texto normal y ≥ 3:1 para texto grande,
texto alternativo en imágenes informativas, etiquetas en formularios, navegación por
teclado completa, estados de foco visibles, y `lang` declarado en `<html>`. Los
enlaces y botones MUST tener texto discernible; los iconos decorativos MUST llevar
`aria-hidden="true"`. Las pruebas de accesibilidad (axe, Lighthouse A11y ≥ 90) MUST
ejecutarse antes de considerar una sección completa. **Rationale**: inclusión legal
y ética, audiencia corporativa diversa y credibilidad de marca premium.

### V. Estética Premium Agrotech

El diseño visual MUST transmitir una identidad **Premium Agrotech**: fondos sutiles
(degradados suaves, texturas ligeras o tonos tierra/tecnología), espaciado generoso,
tipografía limpia y jerarquía visual clara. La interfaz MUST proyectar limpieza
absoluta — sin clutter, sin animaciones distractoras, sin elementos decorativos
superfluos — y aspecto corporativo moderno acorde a soluciones agrícolas de alto
valor. La paleta MUST definirse en tokens Tailwind (`tailwind.config`) y reutilizarse
de forma consistente. Las imágenes MUST ser optimizadas (formatos modernos, tamaños
responsivos). **Rationale**: posicionamiento de marca frente a decisores del sector
agrotech y diferenciación frente a landings genéricas.

## Restricciones Técnicas

- **Rendimiento**: Lighthouse Performance ≥ 90 en build de producción; LCP < 2.5 s
  en conexión 4G simulada; sin dependencias que bloqueen el renderizado.
- **Responsividad**: diseño mobile-first; breakpoints Tailwind estándar; contenido
  legible sin zoom horizontal en viewports ≥ 320 px.
- **SEO**: meta tags (`title`, `description`, Open Graph), `robots.txt` y
  `sitemap.xml` generados o estáticos; URLs canónicas cuando aplique.
- **Assets**: imágenes en `public/` o importadas vía Astro; favicon y manifest
  básico; fuentes auto-hospedadas o con `font-display: swap`.
- **Despliegue**: artefacto estático servible desde CDN o hosting estático; sin
  servidor Node en producción salvo justificación documentada.

## Flujo de Desarrollo y Calidad

- Toda feature MUST pasar el **Constitution Check** del plan antes de implementación.
- Cada PR o revisión MUST verificar: zero-JS en cliente, ausencia de frameworks
  prohibidos, semántica HTML5, contraste A11y y coherencia visual Premium Agrotech.
- Las violaciones MUST documentarse en Complexity Tracking con alternativa más simple
  rechazada y aprobación explícita.
- El agente y desarrolladores MUST consultar `.specify/memory/constitution.md` y el
  plan activo en `specs/` para decisiones de arquitectura y diseño.
- Validación mínima por sección: build Astro sin errores, revisión manual de teclado,
  Lighthouse A11y ≥ 90, contraste verificado en estados normal y foco.

## Governance

Esta constitución supersede cualquier práctica, plantilla o convención contradictoria
del repositorio. Las enmiendas requieren: (1) actualización de este documento,
(2) incremento de versión semántica según impacto, (3) propagación a plantillas en
`.specify/templates/` y (4) registro en Sync Impact Report del encabezado HTML.

- **MAJOR**: eliminación o redefinición incompatible de un principio (p. ej. permitir
  React en cliente).
- **MINOR**: nuevo principio, sección o ampliación material de restricciones.
- **PATCH**: clarificaciones, correcciones de redacción sin cambio de obligación.

El cumplimiento MUST revisarse en cada `/speckit-plan`, `/speckit-specify` y antes de
merge. La complejidad añadida que contradiga un principio MUST justificarse o
rechazarse.

**Version**: 1.0.0 | **Ratified**: 2026-06-15 | **Last Amended**: 2026-06-15
