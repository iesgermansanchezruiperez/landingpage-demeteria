# Contract: Zero-JS Compliance (Issue #12)

**Feature**: 002-topbar-compliance | **Extends**: `001-astro-tailwind-init/contracts/zero-js-policy.md`

## Alcance de esta feature

TopBar, Hero refactor y Footer legal MUST NOT introducir JavaScript en cliente.

## Técnicas aprobadas en Issue #12

| Técnica | Archivo | Genera JS |
|---------|---------|-----------|
| SVG inline estático | `TopBar.astro` | No |
| Tailwind responsive (`hidden`, `sm:`, `md:`) | Todos | No |
| Migración markup a `.astro` | `Hero.astro` | No |
| Texto legal en frontmatter/HTML estático | `Footer.astro` | No |
| `<details>`/`<summary>` nativo | Opcional Footer | No |

## Técnicas explícitamente rechazadas

| Técnica | Motivo |
|---------|--------|
| Slider/carousel de logos | Requiere JS o animación compleja |
| `client:visible` para lazy logos | Island hydration |
| `onload` / `onclick` en logos | Event handlers inline |
| Import React para TopBar | Framework prohibido |
| CSS-in-JS runtime | Dependencia cliente |

## Checklist pre-merge (obligatorio)

```bash
# 1. Build estático
npm run build

# 2. Cero JS en artefacto
test "$(find dist -name '*.js' -type f | wc -l | tr -d ' ')" -eq 0

# 3. Sin islands
! rg -q 'client:(load|idle|visible|media|only)' src/

# 4. Sin scripts
! rg -q '<script' src/

# 5. Sin frameworks UI nuevos
! rg -q '@astrojs/(react|vue|svelte)' package.json
```

## Evidencia de cumplimiento

Registrar en PR #12:

- Salida de `find dist -name '*.js'`
- Captura DevTools Network (0 JS del origen)
- Confirmación de que responsive usa solo clases Tailwind, no `matchMedia` JS
