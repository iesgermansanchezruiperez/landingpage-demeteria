export const objectiveGeneral =
  'Desarrollar e implementar un sistema integrado de cultivo vertical hidropónico monitorizado mediante sensores IoT y gestionado por IA, que sirva como entorno real de aprendizaje para el alumnado de FP y demuestre que la tecnología puede hacer el mantenimiento agrícola accesible a cualquier persona.';

export const pillars = [
  {
    title: 'Hidroponía sostenible',
    accentClass: 'text-demeter-green',
    description:
      'Cultivo vertical de bajo consumo hídrico con reutilización del agua del manantial del centro. El sistema hidropónico reduce el desperdicio y contribuye a los ODS 6 y 12.',
  },
  {
    title: 'IoT + Inteligencia Artificial',
    accentClass: 'text-hydro-teal',
    description:
      'Sensores en Raspberry Pi envían datos a Firebase para monitorización en tiempo real. Modelos de IA analizan temperatura y humedad para optimizar el cultivo de forma automática.',
  },
  {
    title: 'Inclusión social',
    accentClass: 'text-agro-earth',
    description:
      'Interfaz accesible validada con usuarios reales de Pronisa en sesiones presenciales. La tecnología está al servicio de las personas, haciendo el mantenimiento agrícola comprensible para cualquiera.',
  },
] as const;

export const phases = [
  {
    label: 'Fase 1',
    title: 'Diseño e Infraestructura',
    period: 'Abril 2026',
    borderClass: 'border-demeter-green',
    description:
      'Definición de la arquitectura IoT e IA, asignación de roles entre centros y empresas, montaje de sensores en Raspberry Pi y especificación de la aplicación Android accesible.',
  },
  {
    label: 'Fase 2',
    title: 'Desarrollo de Software',
    period: 'Abril–Mayo 2026',
    borderClass: 'border-hydro-teal',
    description:
      'Desarrollo de la app Android nativa por el alumnado DAM, panel web en el IES GSR, API y base de datos Firebase, e instalación del sistema hidropónico en el centro.',
  },
  {
    label: 'Fase 3',
    title: 'Despliegue y Difusión',
    period: 'Mayo–Junio 2026',
    borderClass: 'border-agro-earth',
    description:
      'Pruebas in-situ y calibración final, evaluación de impacto social con Pronisa, documentación técnica y guía didáctica, y presentación pública del proyecto.',
  },
] as const;

export const socialFeedConfig = {
  account: 'ies_gsr',
  hashtag: 'demeteria',
  instagramUrl: 'https://www.instagram.com/ies_gsr/',
} as const;

/** Enlaces a publicaciones concretas (embed nativo Instagram). Opcional si usas widget. */
export const instagramPosts: { permalink: string; label?: string }[] = [];
