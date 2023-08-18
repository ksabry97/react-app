/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        inActive: '#666666',
        active: '#333333',
        global: '#FAFAFA',
        mianRed: '#ED3237',
        lightRed: '#FFAFAF',
        screen: '#FFFFFF',
        boxShadow: '#AFADB533',
        searchText: '#AFADB5',
        glow: '#fe48481a',
        baleblack: '#2F2F2F',
        categoryBg: '#ECECEC',
        glass: '#F4F2ED80',
        glassBorder: '#FFFFFF70',
        wood: '#BCAA98',
        choco: '#837062',
        black: '#231D19',
        maroon: '#5A0808',
        baleGray: '#999999',
        grey: '#F4F2F2',
        footerText: '#4E4E4E',
        copyrightText: '#494949',
        testimonialBg: '#F4F3F1',
        barInActive: '#D8D8DA',
        arrow: '#FF9393'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
    screens: {
      xs: '280px',
      ss: '425px',
      sm: '768px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
    },
  },
  plugins: [],
};
