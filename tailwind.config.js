/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily:{
        akuya:["Tajawal:wght@200", "consolas"]
      }
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

