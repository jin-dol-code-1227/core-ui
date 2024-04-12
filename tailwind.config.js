/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-fast': 'spin 0.66s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
