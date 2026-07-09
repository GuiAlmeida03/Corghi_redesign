/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bgDark: '#1F1F21',
        bgDarkAlt: '#29292B',
        surface: '#FFFFFF',
        surfaceAlt: '#F2F2F2',
        brandRed: '#D30F10',
        brandRedDark: '#A60A0B',
        accentYellow: '#FFED00',
        textMuted: '#A0A0A2',
      },
      fontFamily: {
        title: ['"Titillium Web"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
