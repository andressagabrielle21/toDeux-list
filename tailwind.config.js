/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fromTop: {
          '0%': { 
            opacity: 0,
            transform: 'translateY(100%)' 
          },
          '50%': { 
            opacity: 0,
            transform: 'translate(50)' 
          },
          '100%': { 
            opacity: 1,
            transform: 'translateY(0)' 
          },
        },
      },
      animation: {
        'animateFromTop': 'fromTop 1.2s',
      },
    },
  },
  plugins: [],
}

