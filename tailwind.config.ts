import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.html',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'watchtower-blue': '#0E1929',
        'watchtower-gold': '#E9A664',
        'watchtower-ocean': '#3C4BBB'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("flowbite/plugin"),
    require('preline/plugin'),
  ],
}
export default config
