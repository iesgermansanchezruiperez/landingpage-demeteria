# Contract: Lighthouse Thresholds (Producción)

**Feature**: 014-netlify-deploy | **Issue**: #14

## Umbrales obligatorios

Auditoría ejecutada contra la **URL HTTPS de producción** (no localhost).

| Categoría | Mínimo | Peso issue |
|-----------|--------|------------|
| **Performance** | **90** | Definition of Done |
| **Accessibility** | **90** | Definition of Done |

Modo de medición: **Mobile** (default Lighthouse CLI / DevTools).

## Comando de auditoría

Sustituir `<PRODUCTION_URL>` por la URL Netlify publicada:

```bash
npx lighthouse <PRODUCTION_URL> \
  --only-categories=performance,accessibility \
  --output=json \
  --output-path=./lighthouse-report-production.json \
  --chrome-flags="--headless"
```

Extraer puntuaciones:

```bash
node -e "
const r=require('./lighthouse-report-production.json');
console.log('Performance:', Math.round(r.categories.performance.score*100));
console.log('Accessibility:', Math.round(r.categories.accessibility.score*100));
"
```

## Criterios de aceptación

- [ ] `categories.performance.score >= 0.90`
- [ ] `categories.accessibility.score >= 0.90`
- [ ] `audits['is-on-https'].score === 1` (solo aplicable en producción HTTPS)
- [ ] Sin auditorías `score: 0` críticas en `color-contrast` o recursos rotos de la página propia

## Exclusiones

- Puntuaciones de scripts de terceros (Elfsight, Instagram) se miden como parte de la página real;
  no se excluyen del audit salvo imposibilidad técnica documentada.
- Best Practices y SEO: informativos; no bloquean cierre del issue #14.

## Si Performance < 90

Orden de mitigación (sin violar Zero-JS salvo excepción documentada):

1. Confirmar `data-elfsight-app-lazy` en widget
2. Verificar imágenes en `public/logos/` optimizadas (dimensiones ya en markup)
3. Re-auditar tras cache CDN caliente (segundo run)
4. Documentar en PR si el widget impide umbral y proponer alternativa (solo con aprobación)

## Referencia local (baseline)

Desarrollo local sin widget de red completo alcanzó **A11y 100** tras pulido de contraste
(rama `main` post-#13). Producción es la fuente de verdad para el cierre del issue.
