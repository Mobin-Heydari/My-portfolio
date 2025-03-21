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
        Base: '#222831',
        Primary: '#76ABAE',
        Secondary: '#31363F',
        MainText: '#EEEEEE',
        HighlightText: '#DDDDDD',
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
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
}
export default config
