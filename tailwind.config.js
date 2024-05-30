/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "image-1": "url(/src/images/image-1.jpg)",
        "image-2": "url(/src/images/image-2.jpg)",
        "image-3": "url(/src/images/image-3.jpg)",
      }
    },
  },
  plugins: [],
}