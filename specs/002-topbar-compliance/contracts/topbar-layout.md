# Contract: TopBar Layout

**Feature**: 002-topbar-compliance | **Version**: 1.0.0

## Dimensiones obligatorias (móvil)

| Propiedad | Valor | Verificación |
|-----------|-------|--------------|
| Viewport mínimo | 320 × 568 px | DevTools device mode |
| Altura máxima TopBar | 72 px | Medir `<aside>` con inspector |
| Logos visibles sin scroll | 5/5 | Inspección visual |
| Lema UE visible sin scroll | Sí | Texto literal presente |
| Overflow horizontal | Prohibido | `overflow-x-hidden` en aside |

## Clases Tailwind canónicas

### Wrapper

```text
bg-surface border-b border-gray-200 overflow-x-hidden
```

### Grid logos (móvil / sm)

```text
grid grid-cols-5 gap-0.5 sm:gap-1 items-center justify-items-center
```

### Celda logo

```text
w-full max-w-14 h-6 sm:h-8 flex items-center justify-center shrink-0
```

### Lema UE

```text
mt-0.5 text-center text-[10px] sm:text-xs text-muted leading-tight
```

### Desktop (`md:`)

```text
hidden md:flex md:items-center md:justify-between md:gap-4
```

## Orden de slots (izquierda → derecha)

1. LOGO-UE
2. LOGO-MEFPD
3. LOGO-JCYL
4. LOGO-CYLINNOVA
5. LOGO-FSE

## Texto lema (literal)

```text
Cofinanciado por la Unión Europea
```

Carácter a carácter según Instrucciones §5.1.a — sin traducción ni abreviatura.
