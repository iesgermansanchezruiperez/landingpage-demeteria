# Data Model: TopBar Compliance Institucional

**Feature**: 002-topbar-compliance | **Date**: 2026-06-15

## Entidades

### LegalText

Textos normativos con identificador y ubicación en UI.

| ID | Contenido literal | Ubicación UI | Above-the-fold móvil |
|----|-------------------|--------------|----------------------|
| LEG-UE-LEMA | Cofinanciado por la Unión Europea | TopBar fila 2 | Sí |
| LEG-MENCION | Actuación financiada por el Ministerio… (ÉFESO). | Footer `<section>` | No (accesible sin JS) |
| LEG-ABREV | Primera frase truncada (~120 chars) | TopBar `sm:`+ | No en móvil |

**Validación**: textos MUST coincidir carácter a carácter con `docs/Instrucciones CYL INNOVA FP .md` §5.1.

---

### LogoPlaceholder

Slot de logotipo institucional v1.

| ID | role/listitem label | max-w móvil | h móvil | h sm+ |
|----|---------------------|-------------|---------|-------|
| LOGO-UE | Unión Europea | `max-w-14` (3.5rem) | `h-6` | `h-8` |
| LOGO-MEFPD | Ministerio Educación FP y Deportes | `max-w-14` | `h-6` | `h-8` |
| LOGO-JCYL | Junta de Castilla y León | `max-w-14` | `h-6` | `h-8` |
| LOGO-CYLINNOVA | CYL INNOVA FP | `max-w-14` | `h-6` | `h-8` |
| LOGO-FSE | Fondo Social Europeo Plus | `max-w-14` | `h-6` | `h-8` |

**Reglas**:

- SVG `aria-hidden="true"` + `sr-only` en v1; `alt` en `<img>` cuando haya assets reales.
- `object-contain` / `shrink-0` obligatorios.

---

### TopBarLayout

Configuración de layout responsive.

| Breakpoint | Contenedor logos | Contenedor lema | Altura máx |
|------------|------------------|-----------------|------------|
| default (<640) | `grid grid-cols-5 gap-0.5` | `text-[10px] text-center` | 56 px |
| sm (≥640) | `grid grid-cols-5 gap-1` | `text-xs` | 64 px |
| md (≥768) | `hidden md:flex` row | inline derecha | 48 px |

**Tokens Tailwind TopBar** (neutros, sin marca DemeterIA):

- Fondo: `bg-surface`
- Borde: `border-gray-200`
- Texto: `text-muted`, `text-muted/80`
- Prohibido: `demeter-green`, `hydro-teal` como fondos dominantes en TopBar

---

### HeroSection

Sección promocional (migrada desde index).

| Campo | Valor |
|-------|-------|
| `element` | `<section>` |
| `aria-labelledby` | `titulo-hero` |
| `h1` id | `titulo-hero` |
| `h1` text | DemeterIA |
| eyebrow | CYL INNOVA FP · Agricultura de Precisión |
| tokens | `hydro-teal`, `tech-slate`, `muted`, `demeter-green`, `agro-earth` |
| padding | `py-12 sm:py-16 lg:py-24` |

---

### PageComposition

Orden de landmarks tras esta feature.

```text
body
├── a[href="#contenido-principal"]     skip link
├── aside (TopBar)                     aria-label="Financiación..."
├── header (Header)                    marca DemeterIA
├── main#main
│   └── section (Hero)                 h1 único
└── footer (Footer)                    LEG-MENCION + créditos
```

## Diagrama de alturas (viewport 320×568)

```text
┌───────────────────────────── 320 px ─────────────────────────────┐
│ TopBar (~54 px) — 5 logos + lema UE          ← ABOVE THE FOLD   │
├─────────────────────────────────────────────────────────────────┤
│ Header (~64 px) — puede quedar parcialmente visible              │
├─────────────────────────────────────────────────────────────────┤
│ Hero (parcial) — promocional, below-fold OK                      │
│ ...                                                              │
└─────────────────────────────────────────────────────────────────┘
  ↑ 568 px fold line
```

## Relaciones

- `Layout` → importa `TopBar`, `Header`, `Footer`; slot → `Hero`
- `TopBar` → contiene 5 × `LogoPlaceholder` + `LegalText` (LEG-UE-LEMA)
- `Footer` → contiene `LegalText` (LEG-MENCION)
- `index.astro` → importa `Hero` únicamente
