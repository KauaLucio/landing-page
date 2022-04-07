module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      xxxs: '279px',
      xxs: '420px',
      xs: '548px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px'
    },
    colors: {
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      'gray-light': '#d3dce6'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        1: '8px',
        2: '12px',
        3: '16px',
        3.8: '22px',
        4: '24px',
        4.5: '28px',
        5: '32px',
        5.5: '40px',
        6: '48px',
        7: '56px',
        8: '62px',
        9: '70px',
        10: '78px',
        11: '100px',
        12: '144px',
        13: '3.25rem',
        15: '3.75rem',
        19: '6.8rem',
        20: '7.5rem',
        25: '11rem',
        26: '12.5rem',
        100: '15rem',
        128: '32rem',
        144: '36rem',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      },
      borderRadius: {
        '4xl': '2rem',
        full: '9999px'
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.5)'
      }
    }
  },
  plugins: []
}
