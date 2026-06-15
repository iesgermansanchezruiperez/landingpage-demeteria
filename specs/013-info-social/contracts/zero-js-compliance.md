# Contract: Zero-JS — Issue #13 (con excepción SocialFeed)

**Feature**: 013-info-social

## Política base (Constitution I)

El proyecto MUST entregar HTML estático sin JavaScript de aplicación en cliente.

## Excepción única autorizada

| Ámbito | Archivo | Qué se permite |
|--------|---------|----------------|
| Widget Instagram | `SocialFeed.astro` | Script o iframe de **Curator.io** o **Elfsight** |

Todo JS fuera de ese bloque está **prohibido**.

## Prohibido en toda la feature

```text
client:load | client:idle | client:visible | client:media
<script> con lógica de aplicación
islands de Astro
Alpine.js, React, Vue, etc.
fetch/XHR desde componentes propios
```

## Permitido

```text
HTML estático + Tailwind en ProjectObjectives, ProjectPhases
Embed de terceros SOLO dentro de #social-feed-widget
<noscript> fallback
Enlaces externos (Instagram)
```

## Verificación post-build

```bash
# 1. Sin directivas client en src
rg 'client:' src/ && echo FAIL || echo OK

# 2. Sin script de app en componentes (excepto SocialFeed marcado)
rg '<script' src/components/sections/ProjectObjectives.astro src/components/sections/ProjectPhases.astro && echo FAIL || echo OK

# 3. SocialFeed: comentario obligatorio
rg 'ZERO-JS EXCEPTION' src/components/sections/SocialFeed.astro || echo MISSING EXCEPTION COMMENT
```

## Marcado obligatorio en SocialFeed.astro

```astro
<!-- ZERO-JS EXCEPTION: third-party Instagram widget (Curator.io | Elfsight) -->
```

## Criterio de aceptación

- [ ] ProjectObjectives y ProjectPhases: 0 scripts
- [ ] SocialFeed: máximo 1 bloque de embed de proveedor
- [ ] `npm run build` exitoso
- [ ] Complejidad registrada en `plan.md` → Complexity Tracking
