# Data Model: Secciones Informativas y Widget de Instagram

**Feature**: 013-info-social | **Date**: 2026-06-15

## Entidades de contenido

### ObjectiveGeneral (OBJ-GENERAL)

| Campo | Valor |
|-------|-------|
| `id` | OBJ-GENERAL |
| `element` | `<p>` dentro de `<header>` de ProjectObjectives |
| `text` | Desarrollar e implementar un sistema integrado de cultivo vertical hidropónico monitorizado mediante sensores IoT y gestionado por IA, que sirva como entorno real de aprendizaje para el alumnado de FP y demuestre que la tecnología puede hacer el mantenimiento agrícola accesible a cualquier persona. |
| `source` | `docs/Memorias DemeterIA.md` §B |

---

### Pillar (PILLAR-1 … PILLAR-3)

| ID | `h3` literal | Token acento | Descripción (síntesis) |
|----|--------------|--------------|------------------------|
| PILLAR-1 | Hidroponía sostenible | `demeter-green` | Cultivo vertical de bajo consumo hídrico; reutilización de agua; ODS 6 y 12. |
| PILLAR-2 | IoT + Inteligencia Artificial | `hydro-teal` | Sensores Raspberry Pi, Firebase, modelos IA; monitorización en tiempo real. |
| PILLAR-3 | Inclusión social | `agro-earth` | Interfaz accesible validada con Pronisa; tecnología al servicio de personas. |

**Reglas**:

- Cada pilar MUST ser un `<article>` con `h3` + párrafo descriptivo (≥ 2 frases).
- Títulos MUST coincidir literalmente con FR-002.

---

### Phase (PHASE-1 … PHASE-3)

| ID | Etiqueta | `h3` literal | Periodo ref. | Descripción (síntesis) |
|----|----------|--------------|--------------|------------------------|
| PHASE-1 | Fase 1 | Diseño e Infraestructura | Abr 2026 | Arquitectura IoT+IA, roles, montaje sensores, especificación app accesible. |
| PHASE-2 | Fase 2 | Desarrollo de Software | Abr–May 2026 | App Android DAM, panel web IES GSR, API Firebase, instalación hidropónica. |
| PHASE-3 | Fase 3 | Despliegue y Difusión | May–Jun 2026 | Pruebas in-situ, evaluación Pronisa, documentación técnica, presentación pública. |

**Reglas**:

- Cada fase MUST ser un `<article>` dentro del grid `grid-cols-1 lg:grid-cols-3`.
- Títulos MUST coincidir literalmente con FR-004.

---

### SocialFeedConfig

| Campo | Valor | Notas |
|-------|-------|-------|
| `account` | `ies_gsr` | URL: `https://www.instagram.com/ies_gsr/` |
| `hashtag` | `demeteria` | Filtro estricto; mostrar solo posts con `#demeteria` |
| `provider` | `curator` \| `elfsight` | Ver research.md R1 |
| `widgetId` | `PUBLIC_SOCIAL_WIDGET_ID` | Variable entorno Astro (opcional en build) |
| `maxPosts` | 6–9 | Rendimiento |
| `fallbackText` | Enlace @ies_gsr + mención #demeteria | Siempre presente |

---

## Entidades de layout

### SectionObjectives

| Campo | Valor |
|-------|-------|
| `file` | `src/components/sections/ProjectObjectives.astro` |
| `id` | `objetivos` |
| `h2` | Objetivos del proyecto |
| `grid pilares` | `grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8` |

### SectionPhases

| Campo | Valor |
|-------|-------|
| `file` | `src/components/sections/ProjectPhases.astro` |
| `id` | `fases` |
| `h2` | Fases del proyecto |
| `grid fases` | `grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8` |
| `bg` | `bg-mist/50` (alternancia visual) |

### SectionSocialFeed

| Campo | Valor |
|-------|-------|
| `file` | `src/components/sections/SocialFeed.astro` |
| `id` | `redes-sociales` |
| `h2` | DemeterIA en Instagram |
| `containerId` | `social-feed-widget` |
| `zeroJsException` | true |

---

### PageComposition (actualizada)

```text
body
├── aside (TopBar)
├── header (Header)
├── main#main
│   ├── section (Hero)              h1 único
│   ├── section#objetivos           h2 + 3 article (pilares)
│   ├── section#fases               h2 + 3 article (fases)
│   └── section#redes-sociales      h2 + widget + fallback
└── footer (Footer)
```

## Jerarquía de encabezados

```text
h1  → Hero (DemeterIA)
h2  → Objetivos del proyecto
h3  → [Pillar titles × 3]
h2  → Fases del proyecto
h3  → [Phase titles × 3]
h2  → DemeterIA en Instagram
```

**Validación**: sin saltos de nivel; un solo `h1`.

## Relaciones

- `index.astro` → importa Hero, ProjectObjectives, ProjectPhases, SocialFeed
- `ProjectObjectives` → 1 × OBJ-GENERAL + 3 × Pillar
- `ProjectPhases` → 3 × Phase
- `SocialFeed` → SocialFeedConfig + embed proveedor
