/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    extend: {
      minWidth: {
        '60': '60px',
        '80': '80px',
        '100': '100px',
        '150': '150px',
        '200': '180px',
      }
    },
  },
  plugins: [],
}