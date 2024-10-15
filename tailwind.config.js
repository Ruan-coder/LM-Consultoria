/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    './src/index.html',
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      spacing: {
        '100': '500px'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

