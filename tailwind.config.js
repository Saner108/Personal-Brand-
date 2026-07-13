/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: '#0B0D10',
        offwhite: '#F5F3EE',
        clay: '#E8785A',
        electric: '#3D8BFF',
      },
      fontFamily: {
        display: ['"General Sans"', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
