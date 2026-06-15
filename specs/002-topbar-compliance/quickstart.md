# Quickstart: Validación Issue #12

**Feature**: 002-topbar-compliance | **Rama**: `feature/012-topbar-compliance`

## Prerrequisitos

```bash
git checkout feature/012-topbar-compliance
nvm use 22
npm install
```

## 1. Desarrollo local

```bash
npm run dev
```

Abrir `http://localhost:4321/`.

## 2. Above-the-fold (SC-001) — crítico

1. Chrome DevTools → Toggle device toolbar.
2. Viewport: **320 × 568** (o iPhone SE 375×667).
3. Recargar sin scroll.
4. Verificar:
   - [ ] 5 placeholders de logo visibles
   - [ ] Texto «Cofinanciado por la Unión Europea» visible
   - [ ] Sin barra de scroll horizontal
   - [ ] Altura TopBar ≤ 72 px (medir en Elements)

## 3. Separación visual (US2)

- [ ] TopBar fondo blanco/neutro (`bg-surface`)
- [ ] Header DemeterIA verde corporativo debajo
- [ ] Hero con badges `demeter-green` / `hydro-teal`

## 4. Hero modular (US3)

```bash
# index solo importa Hero
rg "Hero" src/pages/index.astro
rg "titulo-hero" src/components/sections/Hero.astro
```

- [ ] Un solo `<h1>` en página (en Hero)
- [ ] `index.astro` sin markup `<section>` inline

## 5. Mención legal (US4)

```bash
rg "Actuación financiada por el Ministerio" src/components/Footer.astro
```

- [ ] Texto LEG-MENCION completo en Footer
- [ ] Contraste `text-mist/70` sobre `bg-tech-slate` ≥ 4.5:1

## 6. Build + Zero-JS

```bash
npm run build
find dist -name '*.js' -type f | wc -l    # → 0
npm run preview
```

## 7. Orden DOM

Inspeccionar `dist/index.html`:

```text
aside (TopBar) → header → main → footer
```

## Referencias

- [plan.md](./plan.md) — blueprints TopBar/Hero
- [contracts/topbar-layout.md](./contracts/topbar-layout.md)
- [contracts/zero-js-compliance.md](./contracts/zero-js-compliance.md)

## Merge a main

Solo tras:

1. Todos los checks anteriores ✅
2. PR revisado
3. `npm run build` en CI sin errores
