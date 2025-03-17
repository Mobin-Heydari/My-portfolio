import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      Base: '#222831',
      Primary: '#76ABAE',
      Secondary: '#31363F',
      MainText: '#EEEEEE',
      HighlightText: '#DDDDDD',
    },
    extend: {
    },
  },
  plugins: [],
}
export default config
