module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,html,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'white':'#ffffff',
        'black':'#0d2b2a',
        'cascade': {
          DEFAULT: '#81A9A2',     
          '500': '#81A9A2',
          '600': '#81A9A2',
          '700': '#56897d',
          '800': '#35605f',
          '900': '#35605f'
        },
       
        'pink': {
          DEFAULT: '#ddc4bf',
          '500': '#ddc4bf',
          '600': '#ddc4bf',
          '700': '#ba9c93',
          '800': '#8e6761'
        },
        'yellow': {
          DEFAULT: '#e5d8c1',
          '500': '#e5d8c1',
          '600': '#c7b99e',
          '700': '#aa9779',
          '800': '#8e6761'
        },
        'coriander': {
          DEFAULT: '#bfd0b6',
          '500': '#bfd0b6',
          '600': '#bfd0b6',
          '700': '#9bb28e',
          '800': '#56897d'
        },
        'aqua': {
          DEFAULT: '#abdbd0',
          '500': '#abdbd0',
          '600': '#abdbd0',
          '700': '#62b19f',
          '800': '#448879'
        },
      },
      fontFamily: {
        sans: ['roboto', 'sans-serif'],
        serif: ['roboto', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
