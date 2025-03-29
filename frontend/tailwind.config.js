/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  colorPalette: {
    gray: {
      900: '#111827',
      800: '#1f2937',
      700: '#374151',
      600: '#4b5563',
      400: '#9ca3af',
      300: '#d1d5db',
    },
    white: '#ffffff',
    black: '#000000',
    indigo: {
      700: '#4338ca',
      600: '#4f46e5',
      500: '#6366f1',
      400: '#818cf8',
    },
    purple: {
      900: '#581c87',
      700: '#7e22ce',
      600: '#9333ea',
      500: '#a855f7',
      400: '#c084fc',
    },
    pink: {
      600: '#db2777',
      500: '#ec4899',
    },
    cyan: {
      400: '#22d3ee',
    },
    red: {
      500: '#ef4444',
      200: '#fecaca',
    },
    yellow: {
      500: '#eab308',
    },
    green: {
      500: '#22c55e',
    },
  },
  theme: {
    extend: {
      opacity: {
        '20': '0.2',
        '30': '0.3',
        '50': '0.5',
        '70': '0.7',
        '80': '0.8',
        '90': '0.9',
      },
    },
  },
} 