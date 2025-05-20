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
      fontSize: {
        'hero': ['72px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['64px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['40px', { lineHeight: '1.2', fontWeight: '700' }],
        'h4': ['30px', { lineHeight: '1.3', fontWeight: '700' }],
        'lead': ['24px', { lineHeight: '1.4', fontWeight: '700' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
      },
    },
  },
  plugins: [],
} 