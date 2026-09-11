export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#011A42',
          light: '#0A2A5E',
        },
        teal: {
          DEFAULT: '#098581',
          dark: '#076B68',
          light: '#12A8A3',
        },
        mist: '#EAF7F6',
        cloud: '#F5F7FA',
        ink: '#162033',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px rgba(1, 26, 66, 0.05), 0 12px 32px -12px rgba(1, 26, 66, 0.12)',
        lift: '0 8px 20px rgba(1, 26, 66, 0.08), 0 24px 48px -16px rgba(1, 26, 66, 0.18)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
