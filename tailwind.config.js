/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'buttonColor': "#E9C46B",
        'navColor' : "#1D1B19",
        'quote': "#13395B",

        

      },
      keyframes : {
        fading: {
          '0%' : {
            opacity: 0
          },
          '100%' : {
            opacity: 1
          }
        }
      },
      animation: {
        fade: 'fading 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}