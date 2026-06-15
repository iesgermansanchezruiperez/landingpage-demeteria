# Requirements Checklist: Despliegue Netlify y Lighthouse

**Feature**: 014-netlify-deploy | **Issue**: #14

## Configuración

- [x] CHK-001 `netlify.toml` con `npm run build` y `publish = "dist"`
- [x] CHK-002 `NODE_VERSION` = 22 (toml o panel)
- [ ] CHK-003 Rama producción Netlify = `main`
- [x] CHK-004 `astro.config.mjs` con `site` HTTPS de producción

## Variables de entorno

- [ ] CHK-005 `PUBLIC_SOCIAL_WIDGET_ID` en Netlify (builds)
- [ ] CHK-006 `PUBLIC_SOCIAL_WIDGET_PROVIDER` = `elfsight`
- [x] CHK-007 `.env` NO commiteado

## Despliegue

- [ ] CHK-008 Log Netlify verde (Published)
- [ ] CHK-009 URL pública HTTPS accesible
- [ ] CHK-010 CI/CD: push `main` dispara nuevo deploy

## Assets

- [ ] CHK-011 `/logos/logo-ue.jpg` → 200
- [ ] CHK-012 `/logos/logo-mefpd.jpg` → 200
- [ ] CHK-013 `/logos/logo-fondos.jpg` → 200
- [ ] CHK-014 `/logos/logo-jcyl.jpg` → 200

## Instagram

- [ ] CHK-015 Widget visible en producción (no solo fallback)
- [x] CHK-016 Mención @ies_gsr y @elalonsodemadrigal en sección social

## Lighthouse (producción)

- [ ] CHK-017 Performance ≥ 90
- [ ] CHK-018 Accessibility ≥ 90
- [ ] CHK-019 Informe archivado o documentado en cierre de issue
