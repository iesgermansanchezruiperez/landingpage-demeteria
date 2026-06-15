# Quickstart: Secciones Informativas y Widget de Instagram

**Feature**: 013-info-social | **Rama**: `feature/013-info-social`

## 1. Preparación

```bash
git checkout -b feature/013-info-social
nvm use 22
npm install
```

## 2. Composición de página

Tras implementar, verificar en `src/pages/index.astro`:

```text
Hero → ProjectObjectives → ProjectPhases → SocialFeed
```

Build y preview:

```bash
npm run build
npm run preview
```

## 3. Semántica HTML5

Inspeccionar DOM en http://localhost:4321/:

- [ ] Un solo `<h1>` (Hero)
- [ ] `section#objetivos` con tres `<article>` (pilares)
- [ ] `section#fases` con tres `<article>` (fases)
- [ ] `section#redes-sociales` con contenedor `#social-feed-widget`
- [ ] Jerarquía h2 → h3 sin saltos

## 4. Grid responsive — Fases

| Viewport | Esperado |
|----------|----------|
| 320 px | `grid-cols-1` — fases apiladas |
| 1024 px (`lg`) | `grid-cols-3` — tres columnas |

## 5. Pilares — textos literales

- [ ] Hidroponía sostenible
- [ ] IoT + Inteligencia Artificial
- [ ] Inclusión social

## 6. Fases — textos literales

- [ ] Diseño e Infraestructura
- [ ] Desarrollo de Software
- [ ] Despliegue y Difusión

## 7. Widget Instagram

Panel del proveedor (Curator.io o Elfsight):

- [ ] Fuente: cuenta **@ies_gsr**
- [ ] Filtro hashtag: **#demeteria** (estricto)

## 8. Zero-JS

```bash
rg 'client:' src/
rg '<script' src/components/sections/ProjectObjectives.astro src/components/sections/ProjectPhases.astro
```

## 9. Lighthouse

Umbrales: **A11y ≥ 90**, **Performance ≥ 90**.

## 10. PR

```bash
git push -u origin feature/013-info-social
gh pr create --base main --head feature/013-info-social
```
