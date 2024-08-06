/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navyBlue": "#032541",
        "darkBlue": "#0C1E25",
        "orange": "#FFB74D",
        "gray": "#413E44",
      }
    },
  },
  plugins: [],
}