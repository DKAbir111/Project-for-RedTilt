/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkRed1: '#2F0C0C',
        darkRed2: '#1A0203',
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

