/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        color:{
          white:"#fff",
          black:"#000",
          blue:"#1d4ed8",
        }
      },
      backdropBlur: {
        md: '10px', 
      },
      fontFamily: {
        popins: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        cursive: ['Lobster', 'cursive'],
        modern: ['Montserrat', 'sans-serif'],
        handwriting: ['Pacifico', 'cursive'],
        elegant: ['Raleway', 'sans-serif'],
        rounded: ['Quicksand', 'sans-serif'],
        classic: ['Cinzel', 'serif'],
        readable: ['Merriweather', 'serif'],
        display: ['Righteous', 'cursive'],
    },    
    },
  },
  plugins: [],
}