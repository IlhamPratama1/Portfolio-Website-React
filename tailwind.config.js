module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'made': ['"MADE Soulmaze"'],
      'zefani': ['"Zefani_Demo"'],
      'geo': ['"Geomanist"'],
    },
    textColor: {
      'black': '#08090a',
      'black-s': '#222823',
      'gray': '#575a5e',
      'white': '#f4f7fa',
      'purple':'#a7a2a9',
      'orange': '#FF9F1C',
      'red': '#E71D36',
      'green': '#2EC4B6',
    },
    backgroundColor: theme => ({
      'black': '#08090a',
      'black-s': '#222823',
      'gray': '#575a5e',
      'white': '#f4f7fa',
      'purple':'#a7a2a9',
    }),
    extend: {
      width: {
        '81': '16rem',
        '82': '23rem',
        '108': '54rem',
        '102': '40rem',
        '100': '26rem'
      },
      height: {
        100: '44rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
