/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{html,js,jsx}", "./src/*.{html,js,jsx}", "./public/*.{html,js,jsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors : {
        dark : '#101116',
        pink : '#de5d83',
        grey : '#bebebe',
        lightGrey : '#d9d9d9'
      }
    },
  },
  plugins: [],
};
