/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Great Vibes"', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
      colors: {
        sage: {
          50: '#f1f7f2',
          100: '#e0efe2',
          200: '#c3e0c7',
          300: '#a3d0a9',
          400: '#83ba8c',
          500: '#68a771',
          600: '#52885b',
          700: '#426e49',
          800: '#35573b',
          900: '#2b4530',
        },
        gold: {
          50: '#fbf8e6',
          100: '#f7f0c7',
          200: '#f0e296',
          300: '#e8ce5e',
          400: '#e2be33',
          500: '#D4AF37',
          600: '#bb8e2a',
          700: '#9b6d25',
          800: '#805625',
          900: '#6c4724',
        },
      },
      perspective: {
        '1000': '1000px',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      scale: {
        '101': '1.01',
      },
      rotate: {
        '0.5': '0.5deg',
      },
    },
  },
  plugins: [],
};