# Contract: Grid de Fases — ProjectPhases.astro

**Feature**: 013-info-social

## Clases Tailwind obligatorias

```text
Contenedor:  grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8
Items:       article (×3) con shrink-0 implícito en contenido
```

## Breakpoints

| Viewport | Columnas | Comportamiento |
|----------|----------|----------------|
| < 1024 px | 1 | Fases apiladas verticalmente |
| ≥ 1024 px (`lg`) | 3 | Tres fases en fila |

**Prohibido** usar `md:grid-cols-3` — tarjetas demasiado estrechas en tablet.

## Estructura de cada `<article>`

```html
<article role="listitem" class="...">
  <p class="text-sm uppercase ...">Fase N</p>
  <h3>Título fase</h3>
  <p class="text-muted">Descripción</p>
</article>
```

## Títulos literales (h3)

1. Diseño e Infraestructura
2. Desarrollo de Software
3. Despliegue y Difusión

## Validación visual

- [ ] 320 px: una columna, sin overflow horizontal
- [ ] 1280 px: tres columnas equilibradas
- [ ] Altura de tarjetas: natural (sin `h-fixed` que recorte texto)

## Grid de pilares (referencia — ProjectObjectives)

Grid distinto, documentado en plan.md:

```text
grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8
```

Pilares pueden pasar a 3 columnas desde `md` (768 px) por menor densidad de texto.
