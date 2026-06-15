# Contract: Widget Instagram — SocialFeed.astro

**Feature**: 013-info-social

## Configuración obligatoria del proveedor

Estos valores MUST configurarse en el panel de Curator.io o Elfsight **antes** del embed:

| Parámetro | Valor exacto | Obligatorio |
|-----------|--------------|-------------|
| Red social | Instagram | Sí |
| Cuenta | `@ies_gsr` | Sí |
| URL perfil | `https://www.instagram.com/ies_gsr/` | Sí |
| Hashtag filtro | `#demeteria` | Sí — **estricto** |
| Modo filtro | Solo publicaciones que contengan el hashtag | Sí |

### Comportamiento esperado

- Publicación de @ies_gsr **con** `#demeteria` → **visible**
- Publicación de @ies_gsr **sin** `#demeteria` → **oculta**
- Publicación de otra cuenta con `#demeteria` → **oculta** (fuente = @ies_gsr únicamente)

## Proveedores soportados

### Opción A — Curator.io (preferida)

1. Crear feed «Instagram Hashtag» o «Instagram User + filter».
2. Source: `@ies_gsr`.
3. Filter rule: hashtag equals `demeteria` (case-insensitive en Instagram, configurar como `#demeteria`).
4. Copiar embed code (script + div) al bloque `SocialFeed.astro`.

### Opción B — Elfsight (alternativa)

1. Widget «Instagram Feed».
2. Connect account: `@ies_gsr`.
3. Filter by hashtag: `demeteria`.
4. Copiar embed script.

## Encapsulación en Astro

```text
src/components/sections/SocialFeed.astro
└── section#redes-sociales
    ├── header (h2 + descripción)
    ├── div#social-feed-widget
    │   └── [EMBED DEL PROVEEDOR — única zona con JS externo]
    ├── fallback estático (enlace @ies_gsr)
    └── noscript
```

## Variable de entorno (opcional)

```env
PUBLIC_SOCIAL_WIDGET_ID=<id-del-widget>
```

Permite desactivar embed en desarrollo local sin ID configurado.

## Fallback estático (obligatorio)

Siempre renderizar debajo o dentro del contenedor:

```html
<p>
  <a href="https://www.instagram.com/ies_gsr/" rel="noopener noreferrer" target="_blank">
    @ies_gsr en Instagram
  </a>
  — publicaciones con <strong>#demeteria</strong>
</p>
```

## Accesibilidad

- `aria-label="Publicaciones de Instagram del proyecto DemeterIA"` en `#social-feed-widget`
- `aria-live="polite"` para actualizaciones del widget
- Enlaces con texto discernible (no solo icono)

## Privacidad y rendimiento

- `rel="noopener noreferrer"` en enlaces externos
- Cargar script del proveedor de forma diferida si el panel lo permite
- No almacenar tokens de Instagram en el repositorio

## Checklist de validación

- [ ] Panel: cuenta @ies_gsr conectada
- [ ] Panel: filtro #demeteria activo
- [ ] Preview del proveedor muestra solo posts filtrados
- [ ] Página: fallback visible sin JS
- [ ] Comentario `ZERO-JS EXCEPTION` presente en el archivo
