# Research: Secciones Informativas y Widget de Instagram

**Feature**: 013-info-social | **Date**: 2026-06-15

## R1 — Proveedor de widget Instagram

**Decision**: **Curator.io** como proveedor preferido; **Elfsight** como alternativa aceptada.

**Rationale**:

| Criterio | Curator.io | Elfsight |
|----------|------------|----------|
| Filtro por hashtag | Sí (feed rules / hashtag source) | Sí (Instagram Feed widget) |
| Embed estático (script/iframe) | Sí | Sí |
| Sin backend propio | Sí | Sí |
| Encapsulación en un componente | Sí | Sí |

**Configuración obligatoria** (ambos proveedores):

- **Cuenta fuente**: `@ies_gsr` (Instagram oficial IES Germán Sánchez Ruipérez)
- **Hashtag filtro**: `#demeteria` — modo estricto; excluir publicaciones sin el hashtag
- **Idioma UI del widget**: español si disponible

**Alternativas rechazadas**:

- **Instagram Basic Display API propia** — requiere backend OAuth; viola simplicidad Zero-JS.
- **Scraping manual** — frágil, incumple ToS de Meta.
- **SnapWidget sin filtro** — no garantiza filtrado estricto por hashtag.

---

## R2 — Excepción Zero-JS (Constitution I)

**Decision**: Permitir **única excepción** documentada: script o iframe del proveedor **solo**
dentro de `SocialFeed.astro`.

**Rationale**: La constitución prohíbe JS en cliente del proyecto; un widget de Instagram no puede
funcionar sin JS del tercero. La encapsulación acota el alcance de la violación.

**Reglas de encapsulación**:

1. Prohibido `client:*`, islands Astro, `<script>` de lógica de aplicación en cualquier archivo.
2. El embed del proveedor MUST vivir en un contenedor con `id="social-feed-widget"` y
   `aria-label="Publicaciones de Instagram del proyecto DemeterIA"`.
3. Cargar embed con `loading="lazy"` en iframe si aplica; script del proveedor al final del
   bloque `SocialFeed.astro` con comentario `<!-- ZERO-JS EXCEPTION: third-party widget -->`.
4. Registrar en `plan.md` → Complexity Tracking.

---

## R3 — Grid de fases (breakpoints)

**Decision**: `grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8`.

**Rationale**: Mobile-first con una columna legible en 320 px; tres columnas desde `lg` (1024 px)
evita tarjetas estrechas en tablet. Alineado con requisito del usuario (1 móvil, 3 escritorio).

**Alternativa rechazada**: `md:grid-cols-3` — en 768 px las tarjetas quedan demasiado estrechas
con padding de página.

---

## R4 — Pilares vs. badges del Hero

**Decision**: Hero conserva badges compactos; `ProjectObjectives` expande cada pilar en `<article>`
con párrafo descriptivo (2–3 frases).

**Rationale**: Hero = impacto visual; Objetivos = profundidad informativa para §5.3 CYL INNOVA FP.

---

## R5 — Contenido de fases (síntesis desde memoria)

| Fase UI | Memoria origen | Contenido sintético |
|---------|----------------|---------------------|
| Diseño e Infraestructura | Fase I — Diseño y preparación | Arquitectura IoT+IA, montaje sensores, especificación app accesible |
| Desarrollo de Software | Fase II — Desarrollo e integración | App Android DAM, panel web IES GSR, Firebase, instalación hidropónica |
| Despliegue y Difusión | Fase III — Pruebas, evaluación y difusión | Pruebas in-situ, evaluación Pronisa, documentación, presentación pública |

---

## R6 — Fallback sin widget

**Decision**: Bloque estático siempre presente debajo del contenedor del widget:

```html
<p class="text-sm text-muted">
  <a href="https://www.instagram.com/ies_gsr/" rel="noopener noreferrer"
     target="_blank">@ies_gsr en Instagram</a>
  — publicaciones con <span class="font-medium">#demeteria</span>
</p>
```

**Rationale**: Accesibilidad, SEO y UX cuando el widget falla o está bloqueado.
