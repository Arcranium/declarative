/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "src/**/*.{js,ts,jsx,tsx,mdx,vue}",
  ],
  theme: {
    extend: {
      zIndex: {
        'max': '2147483647'
      }
    },
  },
  plugins: [],
}