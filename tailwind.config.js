/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'

const appColors = {
  'dark-blue':'#262E38',
  'light-grey':'#969FAD',
  'orange':'#FC7614',
  'pure-white':'#FFFFFF',
  'very-dark-blue':'#131518',
}

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [{
      'app-dark': {
        ...themes.dark,
      }
    }]
  }
}

