/** @type {import('tailwindcss').Config} */

/**
 * Config
 */
const config = {
  colors: {
    primary: '#84cc16',
    primaryHover: '#a3e635',
  }
}

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '10rem',
      },
      colors: {
        'primary': config.colors.primary,
        'primaryHover': config.colors.primaryHover,
      }
    },
  },
  plugins: [
    require("tailwindcss-inner-border"),
  ],
}
