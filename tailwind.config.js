/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        figtree:[ "Figtree", "sans-serif"],
        albert:["Albert Sans", "sans-serif"],
      },
      colors:{
         backgroundcolor:'#024963',
         secondarycolor:'#F7B141',
         boxbackground:'#F4F4F4',
      },
    },
  },
  plugins: [],
}

