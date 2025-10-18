/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
       // Colores “semánticos” globales usando variables CSS
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        fg: "rgb(var(--color-fg) / <alpha-value>)",
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",

        // Paleta Fruit-Salad expandida
        'joarod': {
          50: "hsl(131 84% 90%)",
          100: "hsl(135 87% 72%)",
          200: "hsl(135 57% 62%)",
          300: "hsl(135 41% 54%)",
          400: "hsl(135 36% 46%)",
          500: "hsl(135 37% 41%)",
          600: "hsl(134 37% 34%)",
          700: "hsl(134 38% 25%)",
          800: "hsl(135 43% 17%)",
          900: "hsl(136 51% 9%)",
          950: "hsl(132 60% 5%)",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
