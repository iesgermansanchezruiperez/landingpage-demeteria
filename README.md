# DemeterIA — Landing Page Promocional

**Agricultura Inteligente de Precisión en Sistemas Hidropónicos Sostenibles para la Inclusión Social**

Landing page promocional estática del proyecto **DemeterIA**, desarrollada por el alumnado de
**Desarrollo de Aplicaciones Web (DAW)** del [IES Germán Sánchez Ruipérez](https://www.educa.jcyl.es/centros/penaranda-de-bracamonte/ies-german-sanchez-ruiperez)
(Peñaranda de Bracamonte, Salamanca) en el marco del programa **CYL INNOVA FP** (curso 2025-2026).

---

## ¿Qué es este repositorio?

Este repositorio contiene la **landing page pública** del proyecto DemeterIA: un sitio web
promocional de una sola página, optimizado para difusión institucional, presentaciones y
captación de interés sobre el sistema de cultivo hidropónico monitorizado con IoT e IA.

DemeterIA es un proyecto intercentros que integra agricultura de precisión, sensores IoT,
Inteligencia Artificial y accesibilidad social. Mientras el IES Alonso de Madrigal (Ávila)
coordina la app Android y la integración del motor de IA, el **IES Germán Sánchez Ruipérez**
desarrolla el panel web y **esta landing page** como escaparate promocional del ecosistema.

### Objetivo de la landing

- Presentar el proyecto DemeterIA a la comunidad educativa, empresas colaboradoras y público general.
- Comunicar la propuesta de valor: hidroponía sostenible, tecnología IoT+IA e inclusión social.
- Servir como artefacto de aprendizaje real para el alumnado de DAW (HTML semántico, CSS moderno, rendimiento web).
- Generar un sitio estático desplegable en cualquier hosting sin servidor de aplicaciones.

---

## Stack tecnológico

| Tecnología | Versión | Rol en el proyecto |
|------------|---------|-------------------|
| [Astro](https://astro.build) | ^6.4 | Generador de sitios estáticos; compila `.astro` a HTML puro |
| [Tailwind CSS](https://tailwindcss.com) | ^4.3 | Sistema de estilos utility-first con tokens de marca |
| [@tailwindcss/vite](https://tailwindcss.com) | ^4.3 | Integración de Tailwind con el bundler Vite de Astro |
| Node.js | ≥ 22.12 | Entorno de ejecución (ver `.nvmrc`) |

### ¿Por qué Astro?

Astro está diseñado para sitios orientados al contenido. En build time convierte cada
componente `.astro` en HTML estático, sin enviar JavaScript al navegador del visitante.
Para una landing promocional esto implica:

- **Carga ultrarrápida** — solo HTML y CSS; sin bundles JS que bloqueen el renderizado.
- **SEO óptimo** — contenido indexable desde el primer byte.
- **Menor consumo de recursos** — ideal para dispositivos modestos y redes lentas.
- **Superficie de ataque mínima** — sin código ejecutable en cliente.

### ¿Por qué Tailwind CSS?

Tailwind permite definir la identidad visual **Premium Agrotech** de DemeterIA mediante
tokens centralizados en `tailwind.config.mjs` (colores corporativos, tipografía, espaciado).
El alumnado trabaja con clases utilitarias coherentes sin escribir hojas de estilo extensas
ni duplicar reglas CSS.

### Enfoque Zero-JS (obligatorio)

Este proyecto adopta una política **Zero-JS en cliente**:

- `output: 'static'` en `astro.config.mjs`.
- Prohibido: React, Vue, Svelte, Alpine.js, islands (`client:*`) y etiquetas `<script>`.
- Las interacciones se resuelven con HTML nativo (`<a>`, anclas, formularios) y CSS puro.

Esta restricción no es una limitación arbitraria: responde a los requisitos de rendimiento,
accesibilidad y simplicidad de despliegue definidos en la constitución del proyecto
(`.specify/memory/constitution.md`).

---

## Requisitos previos

Antes de clonar e instalar, asegúrate de tener:

| Herramienta | Versión mínima | Comprobación |
|-------------|----------------|--------------|
| **Node.js** | 22.12.0 | `node -v` |
| **npm** | 9.x | `npm -v` |
| **Git** | 2.x | `git --version` |

> **Recomendación**: si usas [nvm](https://github.com/nvm-sh/nvm), ejecuta `nvm use` en la
> raíz del proyecto. El archivo `.nvmrc` fija Node 22 automáticamente.

---

## Instalación y arranque en local

Sigue estos pasos en orden la primera vez que trabajes con el repositorio.

### 1. Clonar el repositorio

```bash
git clone https://github.com/iesgermansanchezruiperez/landingpage-demeteria.git
cd landingpage-demeteria
```

### 2. Activar la versión correcta de Node.js

```bash
nvm use
# o, si no tienes nvm:
# nvm install 22 && nvm use 22
```

### 3. Instalar dependencias

```bash
npm install
```

### 4. Arrancar el servidor de desarrollo

```bash
npm run dev
```

Abre el navegador en la URL que muestra la terminal (por defecto `http://localhost:4321/`).
Los cambios en archivos `.astro` y `.css` se recargan automáticamente.

### 5. Generar build de producción (opcional)

```bash
npm run build    # Genera el sitio estático en dist/
npm run preview  # Previsualiza el build en local
```

### Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Compila el sitio estático en `dist/` |
| `npm run preview` | Sirve el contenido de `dist/` para pruebas pre-despliegue |

---

## Estructura del proyecto

```text
landingpage-demeteria/
├── public/                  # Assets estáticos (favicon, imágenes futuras)
├── src/
│   ├── components/
│   │   ├── Header.astro     # Cabecera y navegación
│   │   ├── Footer.astro     # Pie institucional
│   │   ├── sections/        # Secciones de contenido (Hero, Features, CTA…)
│   │   └── ui/              # Componentes reutilizables (botones, tarjetas…)
│   ├── layouts/
│   │   └── Layout.astro     # Plantilla HTML5 base (lang, meta, landmarks)
│   ├── pages/
│   │   └── index.astro      # Página principal — composición de secciones
│   └── styles/
│       └── global.css       # Directivas Tailwind y estilos base
├── docs/                    # Documentación del proyecto CYL INNOVA FP
├── specs/                   # Especificaciones técnicas (Spec Kit)
├── astro.config.mjs         # Configuración Astro (output: static)
├── tailwind.config.mjs      # Tokens de color corporativos DemeterIA
├── package.json
└── .nvmrc                   # Versión de Node.js del proyecto
```

### Convenciones para el alumnado DAW

- Cada **sección nueva** de la landing debe crearse como componente aislado en
  `src/components/sections/` (por ejemplo, `Hero.astro`, `Features.astro`).
- La página `index.astro` solo **compone** secciones; no debe contener lógica de negocio.
- Usa siempre los **tokens de color** de `tailwind.config.mjs` (`demeter-green`, `hydro-teal`,
  `tech-slate`, etc.); no hardcodees valores hex en los componentes.
- Respeta la **semántica HTML5**: un solo `<h1>` por página, landmarks (`header`, `main`,
  `footer`) y `lang="es"` en el documento.

---

## Estrategia de ramas (Git)

Este repositorio sigue un flujo de trabajo sencillo y seguro para el alumnado:

| Rama | Propósito | Quién trabaja aquí |
|------|-----------|-------------------|
| `main` | **Producción** — código estable, desplegable y revisado | Solo tras merge de PR aprobado |
| `feature/*` | **Desarrollo** — cada funcionalidad o issue en su rama | Alumnado durante el desarrollo |

### Flujo de trabajo recomendado

```bash
# 1. Partir siempre de main actualizado
git checkout main
git pull origin main

# 2. Crear rama para tu tarea (ejemplo: Issue #12)
git checkout -b feature/012-seccion-hero

# 3. Desarrollar, commitear y subir
git add .
git commit -m "feat: añadir sección Hero con tokens corporativos"
git push -u origin feature/012-seccion-hero

# 4. Abrir Pull Request hacia main en GitHub
# 5. Tras revisión y aprobación del profesor → merge a main
```

**Reglas importantes:**

- **Nunca** hagas push directo a `main` con trabajo en progreso.
- **Nunca** subas `node_modules/`, `dist/` ni `.env` — están en `.gitignore`.
- Cada PR debe poder ejecutar `npm run build` sin errores y respetar la política Zero-JS.

---

## Identidad visual (tokens de color)

Paleta **Premium Agrotech** definida en `tailwind.config.mjs`:

| Token Tailwind | Hex | Uso |
|----------------|-----|-----|
| `demeter-green` | `#2D6A4F` | Primario — agricultura, sostenibilidad |
| `hydro-teal` | `#0D9488` | Secundario — agua, hidroponía, tecnología |
| `agro-earth` | `#92702A` | Acento tierra — sector agrario |
| `tech-slate` | `#1E293B` | Texto principal |
| `mist` | `#F0F7F4` | Fondo de página |
| `surface` | `#FFFFFF` | Superficies y cards |
| `muted` | `#64748B` | Texto secundario |

---

## Programa CYL INNOVA FP

Este proyecto se enmarca en el programa **[CYL INNOVA FP](https://www.educa.jcyl.es/formacionprofesional/innova)** de la
Consejería de Educación de Castilla y León, convocatoria **2025-2026**, con el objetivo de
impulsar proyectos innovadores en Formación Profesional que conecten el aula con el tejido
productivo y social de la región.

### Centros participantes

| Rol | Centro | Localidad | Responsable |
|-----|--------|-----------|-------------|
| **Coordinador** | [IES Alonso de Madrigal](https://www.educa.jcyl.es/centros/avila/ies-alonso-de-madrigal) | Ávila | José María Pérez Ramos |
| **Colaborador** | [IES Germán Sánchez Ruipérez](https://www.educa.jcyl.es/centros/penaranda-de-bracamonte/ies-german-sanchez-ruiperez) | Peñaranda de Bracamonte (Salamanca) | Luis González Gómez |

### Empresas colaboradoras

- **Kerbest** — soporte agronómico e IoT
- **ABNet System** — IA y ciberseguridad
- **Pronisa** — validación de accesibilidad con usuarios reales
- **Real Tech Solutions** — consultoría tecnológica transversal

### Documentación del proyecto

La memoria técnica completa está disponible en [`docs/Memorias DemeterIA.md`](docs/Memorias%20DemeterIA.md).

---

## Resolución de problemas frecuentes

| Problema | Solución |
|----------|----------|
| `Node.js v18 is out-of-date` | Ejecuta `nvm use 22` o instala Node ≥ 22.12 |
| Los estilos Tailwind no se aplican | Verifica que `Layout.astro` importa `../styles/global.css` |
| `npm run build` genera archivos `.js` en `dist/` | Revisa que no hay `<script>` ni `client:*` en componentes |
| Puerto 4321 ocupado | Astro usará el siguiente disponible; mira la URL en la terminal |

---

## Licencia y difusión

Proyecto educativo abierto desarrollado en el marco de CYL INNOVA FP 2025-2026.
El código fuente se publica para fomentar la replicabilidad en otros centros de la red FP
de Castilla y León.

---

**DemeterIA** · CYL INNOVA FP 2025-2026 · IES Alonso de Madrigal · IES Germán Sánchez Ruipérez
