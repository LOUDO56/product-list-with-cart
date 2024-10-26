/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'red': '#c73a0f',
        'red-dark': '#852609',
        'green': '#1ea475',
        'pink': {
          50: '#fcf9f7',
          100: '#f4edeb',
          300: '#c9aea6',
          400: '#ad8985',
          500: '#87635a',
          900: '#260f08'
        }
      },
      animation: {
        'modal-appear': 'modalAppear 200ms ease'
      },
      keyframes: {
        modalAppear: {
          '0%': { transform: 'translateY(400px)' },
          '100%': { transform: 'translateY(0px)' }
        }
      }
    },
  },
  plugins: [],
}