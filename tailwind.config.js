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
        primary: '#2D3891',
        secondary: '#E9232A',
        dark: '#231F20',
        brand: {
          blue: '#3F69DB',
          red: '#FF5858',
          cta: '#3F69DB',
        },
        background: '#F9FAFB',
        surface: '#FFFFFF',
        text: '#22223B',
        muted: '#6B7280',
        border: '#E5E7EB',
        success: '#22C55E',
        warning: '#FACC15',
        error: '#EF4444',
      },
      fontFamily: {
        lexend: ['var(--font-lexend)', 'sans-serif'],
        grotesk: ['var(--font-space-grotesk)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 