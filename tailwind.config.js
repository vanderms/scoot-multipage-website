/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      sm: '22rem',
      md: '45rem',
      xl: '74rem'
    },

    colors: {
      "primary": "var(--clr-primary)",
      "primary-300": "var(--clr-primary-300)",
      "neutral": "var(--clr-neutral)",
      "neutral-200": "var(--clr-neutral-200)",
      "neutral-300": "var(--clr-neutral-300)",
      "neutral-500": "var(--clr-neutral-500)",
      "neutral-800": "var(--clr-neutral-800)",
      "transparent": "transparent"
    },

    fontFamily: {
      mono: '"Space Mono", monospace',
      sans: '"Lexend Deca", sans-serif'
    },

    extend: {},
  },
  plugins: [],
}