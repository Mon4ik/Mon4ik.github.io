/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'black': "#040811",
        'gray': '#464A53',
        'red': '#FF4D22',
        'wheat': "#FAEAD9"
      }
    },
  },
  plugins: [],
}

