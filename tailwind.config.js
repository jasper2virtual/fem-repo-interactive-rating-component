/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
import themes from 'daisyui/src/theming/themes'
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
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

