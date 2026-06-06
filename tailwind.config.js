/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        primaryDark: '#047857',
        dark: '#050505',
        darker: '#000000',
        light: '#F8FAFC',
        grayCustom: '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, rgba(5, 5, 5, 0) 50%)',
      }
    },
  },
  plugins: [],
}
