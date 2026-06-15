# Despliegue en Netlify — DemeterIA Landing

Guía operativa para el Issue #14. Configuración versionada en `netlify.toml`.

## Parámetros de build (automáticos)

| Parámetro | Valor |
|-----------|-------|
| Build command | `npm run build` |
| Publish directory | `dist` |
| Node.js | `22` (`.nvmrc`, `package.json`, `netlify.toml`) |
| Rama producción | `main` |

## 1. Conectar el repositorio

1. Entra en [app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Import an existing project** → **GitHub**
3. Selecciona `iesgermansanchezruiperez/landingpage-demeteria`
4. Netlify detectará `netlify.toml` — confirma:
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

## 2. Variables de entorno (obligatorias para Instagram)

**Site configuration → Environment variables** (scope: **Builds**):

| Variable | Valor | ¿Secreto? |
|----------|-------|-----------|
| `PUBLIC_SOCIAL_WIDGET_ID` | ID del widget Elfsight | **No** — va en el HTML público |
| `PUBLIC_SOCIAL_WIDGET_PROVIDER` | `elfsight` | **No** — nombre del proveedor, aparece en el código |

> **Importante:** NO marques estas variables con «Contains secret values» en Netlify.
> Si las marcas como secretas, el escáner de secretos falla el build porque `elfsight` y el widget ID
> aparecen a propósito en `.env.example`, `SocialFeed.astro` y el HTML generado.

El `netlify.toml` incluye `SECRETS_SCAN_OMIT_KEYS` por si alguna quedó marcada como secreta.

> Sin estas variables, la sección Instagram muestra solo el fallback (botones a perfiles).

## 3. URL de producción

Tras el primer deploy, Netlify asigna una URL HTTPS (ej. `https://demeteria-xyz.netlify.app`).

`astro.config.mjs` usa `process.env.URL`, que Netlify inyecta automáticamente en cada build.
No hace falta hardcodear la URL en el código.

**Registra aquí la URL de producción cuando la tengas:**

```
URL producción: _______________________________________________
```

## 4. Verificación post-deploy

### Página principal

```bash
curl -sI "https://TU-SITIO.netlify.app/" | head -5
```

- HTTP **200**
- HTTPS activo

### Logotipos institucionales

```bash
URL="https://TU-SITIO.netlify.app"
for f in logo-ue logo-mefpd logo-fondos logo-jcyl; do
  curl -sI "$URL/logos/${f}.jpg" | head -1
done
```

### Instagram

Abrir `https://TU-SITIO.netlify.app/#redes-sociales` — debe verse el feed Elfsight.

## 5. Auditoría Lighthouse (producción)

```bash
npx lighthouse https://TU-SITIO.netlify.app \
  --only-categories=performance,accessibility \
  --output=json \
  --output-path=./lighthouse-report-production.json \
  --chrome-flags="--headless"
```

Umbrales obligatorios (Issue #14):

- **Performance ≥ 90**
- **Accessibility ≥ 90**

## 6. Definition of Done

- [ ] Log Netlify **Published** (verde)
- [ ] URL pública HTTPS accesible
- [ ] Cuatro logotipos en TopBar sin 404
- [ ] Widget Instagram visible
- [ ] Lighthouse Performance ≥ 90 y Accessibility ≥ 90

## Referencias

- `specs/014-netlify-deploy/quickstart.md`
- `specs/014-netlify-deploy/contracts/`
- `docs/instagram-feed-setup.md`
