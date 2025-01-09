/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include JSX/TSX files
  ],
  theme: {
    extend: {
      animation: {
        border: 'border-animation 3s linear infinite', // Define the custom animation
      },
      keyframes: {
        'border-animation': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      colors: {
        'gradient-start': '#ff80bf',
        'gradient-middle': '#8a4fff',
        'gradient-end': '#ffccf9',
      },
    },
  },
  plugins: [],
};

