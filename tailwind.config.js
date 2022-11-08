/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //  App directory is an experimental feature in Next.js now! you can uncomment it later.
    // "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
