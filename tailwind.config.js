/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: '#03387E', 
        customBgInput:'#F0F7FC'
      },
    },
  },
  plugins: [],
};
