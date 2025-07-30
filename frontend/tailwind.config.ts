import type { Config } from 'tailwindcss'

 

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    // Classes from the `className` field
    "lg:col-span-3",
    "md:col-span-6",
    "md:row-span-4",
    "lg:min-h-[60vh]",
    "lg:col-span-2",
    "md:col-span-3",
    "md:row-span-2",
    "md:row-span-1",

    // Classes from the `imgClassName` field
    "w-full",
    "h-full",
    "absolute",
    "right-0",
    "bottom-0",
    "md:w-96",
    "w-60",

    // Classes from the `titleClassName` field
    "justify-end",
    "justify-start",
    "justify-center",
    "md:justify-start",
    "lg:justify-center",
    "md:max-w-full",
    "max-w-60",
    "text-center",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        'base-dark': '#031525',
        'primary-dark': '#0794B0',
        'secondary-dark': '#20CCC7',
        'main-text-dark': '#DAEBE7',
        'highlight-text-dark': '#E1F0F7',
        'success-dark': '#16610E',
        'success-text-dark': '#B0DB9C',
        'error-dark': '#8E1616',
        'error-text-dark': '#F7374F',
        'selected-dark': '#9ECAD6',
        'hover-dark': '#113F67',

        // Light theme colors
        'base-light': '#EAF1F0',
        'primary-light': '#63C9DD',
        'secondary-light': '#AAE4E2',
        'main-text-light': '#04364C',
        'highlight-text-light': '#DAEBE7',
        'success-light': '#1DCD9F',
        'success-text-light': '#169976',
        'error-light': '#F15A59',
        'error-text-light': '#8E1616',
        'selected-light': '#3D74B6',
        'hover-light': '#63C8FF',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        scroll: 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      boxShadow: {
        input: `0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28,33,0.08)`,
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
  'darkMode': 'class',
}
export default config
