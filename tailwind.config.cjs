/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    'sm': '575px',
    // => @media (min-width: 576px) { ... }

    'md': '959px',
    // => @media (min-width: 960px) { ... }

    'lg': '1439px',
    // => @media (min-width: 1440px) { ... }
    extend: {},
  },
  plugins: [],
}
