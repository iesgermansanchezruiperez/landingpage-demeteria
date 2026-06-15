# Research: TopBar Compliance Institucional

**Feature**: 002-topbar-compliance | **Date**: 2026-06-15

## R1 — Ubicación de la mención legal larga

**Decision**: Lema UE en TopBar (above-the-fold); LEG-MENCION completa en Footer.

**Rationale**: La mención §5.1 tiene ~400 caracteres; incluirla en TopBar móvil superaría
72 px y comprometería SC-001. El lema UE corto es el texto crítico junto al emblema. La
mención completa sigue siendo obligatoria en la página (FR-004) y el Footer es región
semántica válida sin scroll en desktop.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Mención completa en TopBar | Rompe above-the-fold en móvil |
| Solo Footer sin lema en TopBar | Viola §5.1.a (lema junto a emblema UE) |
| Modal JS con mención | Viola Zero-JS |

## R2 — Layout móvil: grid vs flex

**Decision**: `grid grid-cols-5` en móvil; `flex` en `md:`.

**Rationale**: Grid garantiza distribución equitativa de 5 logos en 320 px sin cálculos
manuales de `flex-basis`. Cada columna recibe 20 % del ancho (~64 px en 320 px menos
padding). Flex con `wrap` podría saltar a segunda fila de forma impredecible.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| `flex flex-wrap` | Altura variable; logos pueden saltar a fila 2 |
| `overflow-x-auto` | Scroll horizontal prohibido por UX y §5.3 |
| Carrusel CSS puro | Complejidad innecesaria; animación distractora |

## R3 — Quinto placeholder (LOGO-FSE)

**Decision**: Quinto slot = badge FSE+ (Fondo Social Europeo Plus).

**Rationale**: Spec exige 5 placeholders; los cuatro logos institucionales + badge FSE+
alinean con el texto legal que menciona «cofinanciada por la Unión Europea (FSE+)».

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Duplicar UE | Redundante |
| Omitir quinto slot | Viola FR-002 / SC-002 (cinco placeholders) |

## R4 — SVG inline vs archivos en public/

**Decision**: SVG inline en `TopBar.astro` para v1.

**Rationale**: Cero peticiones HTTP adicionales; mejor LCP; placeholders simples. Assets
oficiales del Portal FP JCyL irán a `public/logos/` en iteración posterior como `<img>`.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| PNG raster | Mayor peso; pixelación en retina |
| Icon font | Dependencia externa; accesibilidad inferior |

## R5 — Elemento semántico TopBar

**Decision**: `<aside aria-label="Financiación del proyecto CYL INNOVA FP">`.

**Rationale**: Contenido tangencial al flujo principal (compliance); no es `<header>` de
página (eso es Header.astro de marca). Cumple FR-012 y evita doble `<header>`.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| `<header>` | Conflicto con Header.astro; landmark duplicado |
| `<div>` sin role | Pierde semántica para lectores de pantalla |

## R6 — Reducción padding Hero

**Decision**: `py-12 sm:py-16 lg:py-24` (antes `py-16 sm:py-24`).

**Rationale**: Compensa ~54 px de TopBar; Hero no requiere above-the-fold. Mantiene
espaciado Premium Agrotech en desktop.

**Alternatives considered**:

| Alternativa | Descartada porque |
|-------------|-------------------|
| Sin cambio padding | Hero demasiado bajo en móvil tras TopBar |
| Eliminar TopBar altura | Viola compliance legal |
