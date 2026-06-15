/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'demeter-green': '#2D6A4F',
        'hydro-teal': '#0D9488',
        'hydro-teal-dark': '#0A5F58',
        'agro-earth': '#92702A',
        'agro-earth-dark': '#6B5420',
        'tech-slate': '#1E293B',
        mist: '#F0F7F4',
        surface: '#FFFFFF',
        muted: '#55657A',
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
