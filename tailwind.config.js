export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderWidth: {
      DEFAULT: '0.1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend:{
      colors:{
        'white': '#ffffff',
        'mainGrey':'#848D97',
        "borderGrey":'#8B949E'
      }
    }
  },
  plugins: [],
}