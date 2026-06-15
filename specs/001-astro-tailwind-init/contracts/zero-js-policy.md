# Contract: Zero-JS Policy

**Feature**: 001-astro-tailwind-init | **Version**: 1.0.0 | **Date**: 2026-06-15

## Policy statement

La landing DemeterIA MUST entregar **cero bytes de JavaScript ejecutable** al navegador
del visitante. Todo el comportamiento interactivo permitido se resuelve con HTML nativo
y CSS.

## Configuración obligatoria

### `astro.config.mjs`

```javascript
export default defineConfig({
  output: 'static',
  integrations: [],  // sin frameworks UI
});
```

## Prohibiciones en código fuente

| ID | Prohibición | Ejemplo a rechazar |
|----|-------------|-------------------|
| ZJS-001 | Directivas `client:*` | `<Component client:load />` |
| ZJS-002 | `<script>` sin `is:inline` en `.astro` de página/componente | `<script>alert(1)</script>` |
| ZJS-003 | Islands framework | `import React from 'react'` |
| ZJS-004 | Integraciones Astro UI | `@astrojs/react`, `@astrojs/vue`, `@astrojs/svelte` |
| ZJS-005 | Atributos de evento inline | `onclick="..."`, `onload="..."` |
| ZJS-006 | Librerías cliente | Alpine.js, jQuery, GSAP con JS runtime |
| ZJS-007 | `hydrate` o componentes interactivos | Cualquier patrón de hidratación |

## Permitido

| ID | Permiso | Notas |
|----|---------|-------|
| ZJS-P01 | Frontmatter TypeScript en `.astro` | Se ejecuta en build time, no en cliente |
| ZJS-P02 | `new Date()` en frontmatter | Evaluado en SSR/build, no genera JS cliente |
| ZJS-P03 | CSS puro y Tailwind | Incluye `:hover`, `:focus-visible`, `@media` |
| ZJS-P04 | HTML nativo | `<a href>`, `<form action>`, `<details>/<summary>` |
| ZJS-P05 | `<script is:inline>` para analytics | **No usar en v1**; reservado para excepción futura documentada |

## Verificación automatizable

### Post-build (obligatorio en CI/PR)

```bash
# 1. Build limpio
npm run build

# 2. Cero archivos JS en artefacto
JS_COUNT=$(find dist -name '*.js' -type f | wc -l | tr -d ' ')
test "$JS_COUNT" -eq 0 || { echo "FAIL: $JS_COUNT archivos JS en dist/"; exit 1; }

# 3. Sin dependencias prohibidas
! npm ls @astrojs/react @astrojs/vue @astrojs/svelte 2>/dev/null
```

### Inspección manual (DevTools)

1. Abrir `npm run preview` en Chrome.
2. Network → filtrar JS → excluir extensiones del navegador.
3. **Resultado**: ningún `.js` servido desde el origen del sitio.

### Inspección de código (PR review)

```bash
# Buscar violaciones en fuente
rg 'client:(load|idle|visible|media|only)' src/
rg '<script(?![^>]*is:inline)' src/
rg '@astrojs/(react|vue|svelte)' package.json astro.config.mjs
```

**Resultado esperado**: sin coincidencias.

## Excepciones

Cualquier excepción MUST documentarse en `Complexity Tracking` del plan activo con:

1. Justificación de negocio.
2. Alternativa Zero-JS evaluada y rechazada.
3. Aprobación explícita del responsable del proyecto.

Sin excepciones aprobadas para Issue #11.

## Cumplimiento constitucional

Este contrato implementa el **Principio I** (Sitio Estático Sin JavaScript en Cliente) de
`.specify/memory/constitution.md` y el criterio **CC-003** de la spec.
