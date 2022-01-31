module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors:{
      'green-1': '#DFEEEA',
      'green-2': '#A7C4BC',
      'green-3': '#5E8B7E',
      'green-4': '#2F5D62',
      'green-5': '#02242D',
      'grey': '#6F6F6F',
      'white': '#FFFFFF',
      'black': '#000000',
    },
    fontSize: {
      'heading': '144px',
      'mobile-heading': '72px',
      'subheading': '72px',
      'mobile-subheading': '48px',
      'paragraph': '48px',
      'mobile-paragraph': '32px',
      'standard': '24px',
      'mobile-standard': '19px'
    },
    fontFamily:{
      'sans': ['"Ibarra Real Nova"'],
    },
    extend: {},
  },
  plugins: [],
}
