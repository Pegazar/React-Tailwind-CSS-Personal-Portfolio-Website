/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
      },
      screens: {
        sm: '100%',
        md: '768px',
        lg: '992px', 
        xl: '1200px',
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
}

