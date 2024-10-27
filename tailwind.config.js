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
        'modal-appear-mobile': 'modalAppearMobile 200ms ease',
        'modal-appear-desktop': 'modalAppearDesktop 200ms ease',
        'bg-appear': 'backgroundAppear 200ms ease',
      },
      keyframes: {
        modalAppearMobile: {
          '0%': { transform: 'translateY(400px)' },
          '100%': { transform: 'translateY(0px)' }
        },
        modalAppearDesktop: {
          '0%': { transform: 'translateY(-20px)', opacity: '0%' },
          '100%': { transform: 'translateY(0px)', opacity: '100%' }
        },
        backgroundAppear: {
          '0%': { opacity: '0%' },
          '100%': { opacity: '100%' }
        }
      }
    },
  },
  plugins: [],
}