/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro}",
    "./node_modules/flowbite/**/*.js", // <- esto es importante para Flowbite
  ],
  theme: {
    extend: {
        colors: {
          darkBrown: "#603F34",
          mediumBrown: "#8C6239",
          yellowLight: "#FAE17A",
          cream: "#FCF4D5",
          white: "#FFFFFF",
        },
    },
  },
  plugins: [],
};
