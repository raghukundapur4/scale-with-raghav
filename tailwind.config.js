/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#FFFFFF',
        'surface-muted': '#F8FAFC',
        'surface-elevated': '#FFFFFF',
        border: '#E2E8F0',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#94A3B8',
        accent: '#059669',
        'accent-dark': '#047857',
        'accent-light': '#ECFDF5',
        ink: '#0F172A',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 16px rgba(15, 23, 42, 0.06)',
        card: '0 8px 32px rgba(15, 23, 42, 0.08)',
        elevated: '0 20px 60px rgba(15, 23, 42, 0.12)',
        glow: '0 0 0 1px rgba(5, 150, 105, 0.08), 0 12px 40px rgba(5, 150, 105, 0.12)',
      },
      backgroundImage: {
        'subtle-grid':
          'linear-gradient(rgba(15, 23, 42, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.04) 1px, transparent 1px)',
        'mesh-hero':
          'radial-gradient(ellipse 80% 60% at 10% 0%, rgba(5, 150, 105, 0.12), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 10%, rgba(16, 185, 129, 0.08), transparent 55%), radial-gradient(ellipse 50% 40% at 50% 100%, rgba(5, 150, 105, 0.06), transparent 50%)',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
