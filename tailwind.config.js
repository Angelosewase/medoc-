/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3182CE",
      },
    },
  },
  plugins: [],
}

