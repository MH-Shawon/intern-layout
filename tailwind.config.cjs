/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [ require('flowbite/plugin')],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  
}


