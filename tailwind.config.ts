import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          ...colors.indigo,
          DEFAULT: colors.indigo[600],
          hover: colors.indigo[500],
          passive: colors.indigo[400],
        },
        'gray-light': colors.gray[500],
        'gray-dark': colors.gray[900],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
export default config
