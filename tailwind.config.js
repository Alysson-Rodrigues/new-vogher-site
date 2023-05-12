/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily : {
        'base-neue' : ['var(--base-neue)'],
        'base-neue-thin' : ['var(--base-neue-thin)'],
        'base-neue-light' : ['var(--base-neue-light)'],
        'base-neue-regular' : ['var(--base-neue-regular)'],
        'base-neue-medium' : ['var(--base-neue-medium)'],
        'base-neue-bold' : ['var(--base-neue-bold)'],
        'base-neue-black' : ['var(--base-neue-black)'],
        'base-neue-black-oblique' : ['var(--base-neue-black-oblique'],
        'base-neue-bold-oblique' : ['var(--base-neue-bold-oblique)'],
        'base-neue-light-oblique' : ['var(--base-neue-light-oblique)'],
        'base-neue-medium-oblique' : ['var(--base-neue-medium-oblique)'],
      }
    },
  },
  plugins: [],
}
