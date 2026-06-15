# Quickstart: Validación Issue #11

**Feature**: 001-astro-tailwind-init | **Prerequisitos**: Node.js ≥ 18, npm ≥ 9

## 1. Inicialización (una sola vez)

```bash
cd landingpage-demeteria

# Astro minimal en directorio actual
npm create astro@latest . \
  -- --template minimal \
  --install \
  --no-git \
  --typescript strict \
  --yes

# Tailwind
npx astro add tailwind --yes
```

Luego aplicar los archivos de configuración y andamiaje definidos en [plan.md](./plan.md).

## 2. Desarrollo local

```bash
npm install    # si no se instaló en el paso anterior
npm run dev
```

**Resultado esperado**:

- Terminal muestra `Local http://localhost:4321/` sin errores.
- Navegador renderiza página con fondo `mist`, título "DemeterIA" en verde corporativo.
- DevTools → Network: **0** solicitudes de archivos `.js` propios del sitio (solo CSS).

## 3. Verificación Tailwind en index

Abrir `http://localhost:4321/` e inspeccionar:

| Elemento | Clase esperada | Token visible |
|----------|----------------|---------------|
| `<body>` | `bg-mist text-tech-slate` | Fondo + texto |
| Eyebrow | `text-hydro-teal` | Secundario |
| `<h1>` | `text-tech-slate` | Texto principal |
| Párrafo | `text-muted` | Texto secundario |
| Badge 1 | `text-demeter-green` | Primario |
| Header marca | `text-demeter-green` | Primario |

## 4. Verificación HTML5 semántico

Inspeccionar DOM (DevTools → Elements):

```text
html[lang="es"]
└── body
    ├── a (skip link)
    ├── header
    │   └── nav[aria-label="Navegación principal"]
    ├── main#main
    │   └── section[aria-labelledby="titulo-hero"]
    │       └── h1#titulo-hero
    └── footer
```

**Checklist rápido**:

- [ ] Un solo `<h1>` en la página
- [ ] `lang="es"` en `<html>`
- [ ] Landmarks `header`, `main`, `footer` presentes
- [ ] Skip link funcional (Tab → aparece "Saltar al contenido principal")

## 5. Build de producción + Zero-JS

```bash
npm run build
npm run preview
```

### 5.1 Sin errores de compilación

Exit code `0` en ambos comandos.

### 5.2 Auditoría Zero-JS (CC-003)

```bash
find dist -name '*.js' -type f | wc -l
```

**Resultado esperado**: `0`

Si devuelve archivos, investigar islands o `<script>` accidentales.

### 5.3 Dependencias prohibidas

```bash
npm ls @astrojs/react @astrojs/vue @astrojs/svelte 2>/dev/null || true
```

**Resultado esperado**: `(empty)` o error "not found".

## 6. Verificación repositorio limpio

```bash
npm run build
git status
```

**Resultado esperado**:

- `node_modules/` → no listado (en .gitignore)
- `dist/` → no listado (en .gitignore)
- `.astro/` → no listado (en .gitignore)
- Solo archivos fuente y configuración como cambios pendientes

## 7. Lighthouse (post-implementación)

Con `npm run preview` activo:

1. Chrome DevTools → Lighthouse → modo Navigation.
2. Categorías: Performance + Accessibility.
3. **Umbrales**: Performance ≥ 90, Accessibility ≥ 90.

Documentar resultados en el PR del Issue #11.

## 8. Navegación por teclado (A11y manual)

1. Tab desde carga de página → skip link visible.
2. Enter en skip link → foco salta a `#contenido-principal`.
3. Tab recorre enlaces del header con anillo de foco `hydro-teal` visible.
4. Sin trampas de foco.

## Resolución de problemas

| Síntoma | Causa probable | Solución |
|---------|----------------|----------|
| Estilos no aplican | Falta `@import "tailwindcss"` o `@config` en `global.css` | Revisar `src/styles/global.css` |
| Error al crear en `.` | Directorio no vacío | Usar flags `--yes`; fusionar manualmente |
| JS en `dist/` | `<script>` o island añadido | Eliminar; rebuild |
| Contraste insuficiente | Combinación texto/fondo incorrecta | Usar pares documentados en data-model |

## Referencias

- [plan.md](./plan.md) — blueprints de archivos
- [contracts/html-semantics.md](./contracts/html-semantics.md) — contrato semántico
- [contracts/zero-js-policy.md](./contracts/zero-js-policy.md) — política Zero-JS
- [data-model.md](./data-model.md) — tokens y props
