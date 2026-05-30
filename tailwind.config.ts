const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './lib/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#08112c',
        brandLight: '#102244',
        gold: '#d4af37',
        emerald: '#0f8b72',
        panel: '#0b1a3a',
        surface: '#f5f7fb',
        muted: '#64748b',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(8, 17, 44, 0.12)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
