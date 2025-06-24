/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#0051ff', // deep gym blue
          600: '#0046e6',
          700: '#002d99',
          800: '#001f66',
          900: '#001133',
        },
        // Additional gym-themed colors
        energy: {
          400: '#fbbf24', // energetic yellow
          500: '#f59e0b',
          600: '#d97706',
        },
        success: {
          400: '#34d399', // achievement green
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          400: '#fb7185', // rest day red
          500: '#f43f5e',
          600: '#e11d48',
        },
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-subtle': 'bounce 2s ease-in-out infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
