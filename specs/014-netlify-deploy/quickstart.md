# Quickstart: Despliegue Netlify y Auditoría Lighthouse

**Feature**: 014-netlify-deploy | **Rama**: `feature/014-netlify-deploy`

## 1. Preparación local

```bash
git checkout main
git pull
git checkout -b feature/014-netlify-deploy
nvm use 22
npm ci
npm run build
```

Verificar artefacto:

```bash
test -f dist/index.html && ls -la dist/
```

## 2. Implementar configuración (rama feature)

Tras aplicar tasks de implementación:

- [ ] `netlify.toml` presente con `command`, `publish`, `NODE_VERSION`
- [ ] `astro.config.mjs` incluye `site` vía `process.env.URL` (Netlify) o fallback local

Build local tras cambios:

```bash
npm run build
```

## 3. Conectar Netlify (operación en panel)

1. [Netlify](https://app.netlify.com) → **Add new site** → **Import an existing project**
2. Seleccionar GitHub → repo `landingpage-demeteria`
3. Confirmar:
   - **Branch to deploy**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. **Environment variables** (Site settings → Environment variables):

   | Key | Value |
   |-----|-------|
   | `PUBLIC_SOCIAL_WIDGET_ID` | *(ID Elfsight)* |
   | `PUBLIC_SOCIAL_WIDGET_PROVIDER` | `elfsight` |

5. **Deploy site** → esperar log **Published** (verde)

> **Nota**: El primer despliegue puede hacerse desde `main` tras merge del PR de esta feature.
> Para probar antes, usar **Deploy previews** del PR o branch deploy temporal.

## 4. Verificación funcional en producción

Sustituir `<URL>` por la URL Netlify (ej. `https://demeteria-xyz.netlify.app`).

### Página principal

```bash
curl -sI "<URL>/" | head -5
```

- [ ] HTTP 200
- [ ] HTTPS activo

### Logotipos institucionales

```bash
for f in logo-ue logo-mefpd logo-fondos logo-jcyl; do
  curl -sI "<URL>/logos/${f}.jpg" | head -1
done
```

- [ ] Cuatro respuestas `200`

### Instagram widget

Abrir `<URL>/#redes-sociales` en navegador:

- [ ] Feed Elfsight visible (no solo fallback)
- [ ] Enlaces @ies_gsr y @elalonsodemadrigal funcionan

## 5. Auditoría Lighthouse

```bash
npx lighthouse <URL> \
  --only-categories=performance,accessibility \
  --output=json \
  --output-path=./lighthouse-report-production.json \
  --chrome-flags="--headless"
```

- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 90

## 6. Definition of Done (Issue #14)

- [ ] Log Netlify **Published** (verde)
- [ ] Web accesible públicamente por HTTPS
- [ ] Logotipos y imágenes sin rutas rotas
- [ ] Lighthouse Performance ≥ 90 y Accessibility ≥ 90 en producción
- [ ] Variables `PUBLIC_SOCIAL_WIDGET_*` configuradas en Netlify

## 7. Cierre

- Merge PR `feature/014-netlify-deploy` → `main`
- Redeploy automático Netlify
- Re-ejecutar pasos 4–5 si es el primer deploy con `netlify.toml`
- Cerrar Issue #14 con URL de producción y puntuaciones Lighthouse

## Referencias

- [netlify-build-config.md](./contracts/netlify-build-config.md)
- [production-env-vars.md](./contracts/production-env-vars.md)
- [lighthouse-thresholds.md](./contracts/lighthouse-thresholds.md)
- `docs/instagram-feed-setup.md` — configuración widget Elfsight
