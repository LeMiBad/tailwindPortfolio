

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        spinCircle: {
          '0%': {transform: 'rotate(0)'},
          '100%': {transform: 'rotate(360deg)'}
        },
        openLeft: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(-100%)'}
        },
        openRight: {
          '0%': {transform: 'translateX(0)'},
          '100%': {transform: 'translateX(100%)'}
        },
        closeCircle: {
          '0%': {transform: 'scaleX(1)'},
          '100%': {transform: 'scaleX(0)'}
        },
        openLight: {
          '0%': {top: '-10%'},
          '100%': {top: '-0.8%'}
        },
        openTop: {
          '0%': {
            transform: 'translate(translateY(-100%))'
          },
          '100%': {
            top: '-0.8%'
          }
        },
        openBottom: {
          '0%': {top: '-10%'},
          '100%': {top: '-0.8%'}
        },
        rotateBlock: {
          '0%': {transform: 'rotate(0) scale(1)'},
          '100%': {transform: 'rotate(-45deg) scale(3)'},
        },
        star: {
          '0%': {transform: 'scale(2)'},
          '25%': {transform: 'scale(1)'},
          '50%': {transform: 'scale(3)'},
          '54%': {transform: 'scale(1)'},
          '100%': {transform: 'scale(2)'},
        }
      },
      animation: {
        'spinCircle': 'spinCircle 2s infinite linear',
        'openLeft': 'openLeft 1s forwards',
        'openRight': 'openRight 1s forwards',
        'closeCircle': 'closeCircle 0.3s forwards',
        'openLight': 'openLight 0.7s forwards',
        'rotateBlock': 'rotateBlock 1.5s forwards',
        'star': 'star 3s infinite linear',
      },
    },
    
  },
  plugins: [],
}