/** @type {import('tailwindcss').Config} */



export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 
 
  theme: {
    extend: {
      textUnderlineOffset:{
        3:'3px'
      },
      fontFamily:{
        title:["Pacifico","sans-serif"],
        mono:["Caveat","mono"]

       
        
      },
      
    },
    screens:{
      
      'sm':'400px',
      'md':'716px',
      'lg':'1024px',
      'xl':'1280px'
     
  
    },
  },


  
  plugins: [],
}