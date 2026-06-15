# Contract: Netlify Build Configuration

**Feature**: 014-netlify-deploy

## Obligaciones

El repositorio MUST incluir `netlify.toml` en la raíz con al menos:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

## Parámetros

| Parámetro | Valor contractuado | Fuente alternativa |
|-----------|-------------------|-------------------|
| Build command | `npm run build` | `package.json` scripts.build |
| Publish directory | `dist` | `astro.config.mjs` `output: 'static'` |
| Node version | `22` | `.nvmrc`, `engines.node` |

## Comportamiento CI/CD

- **Trigger**: push a rama `main` (configurar en Netlify UI: Production branch = `main`)
- **Install**: Netlify ejecuta `npm install` (o `npm ci` si existe lockfile) antes del build command
- **Output**: contenido de `dist/` servido como sitio estático

## Verificación

```bash
# Local (debe coincidir con Netlify)
nvm use 22
npm ci
npm run build
test -f dist/index.html && echo "OK: dist/index.html"
```

## Anti-patrones (rechazar en review)

- `publish = "build"` o `.astro/` — incorrecto para Astro static
- `command = "astro build"` sin npm script — inconsistente con `package.json`
- Node 18 o inferior — viola `engines`
