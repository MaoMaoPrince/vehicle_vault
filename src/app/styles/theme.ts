/**
 * Theme tokens for the application
 * These match the values defined in tailwind.config.js
 */

export const theme = {
  colors: {
    primary: {
      DEFAULT: 'bg-primary text-white',
      hover: 'hover:bg-primary/90',
      focus: 'focus:ring-2 focus:ring-primary/50 focus:ring-offset-2',
    },
    secondary: {
      DEFAULT: 'bg-secondary text-white',
      hover: 'hover:bg-secondary/90',
      focus: 'focus:ring-2 focus:ring-secondary/50 focus:ring-offset-2',
    },
    brand: {
      blue: 'text-brand-blue',
      red: 'text-brand-red',
      cta: 'text-brand-cta',
    },
    neutral: {
      background: 'bg-background',
      surface: 'bg-surface',
      text: 'text-text',
      muted: 'text-muted',
      border: 'border-border',
    },
    state: {
      success: 'text-success',
      warning: 'text-warning',
      error: 'text-error',
    },
  },
  typography: {
    fontFamily: {
      primary: 'font-lexend',
      secondary: 'font-grotesk',
    },
    heading: {
      h1: 'text-h1',
      h2: 'text-h2',
      h3: 'text-h3',
      h4: 'text-h4',
    },
    body: {
      lead: 'text-lead',
      base: 'text-body',
      small: 'text-small',
      caption: 'text-caption',
    },
  },
  spacing: {
    container: 'max-w-3xl mx-auto',
    section: 'pt-12 md:pt-20 space-y-8 md:space-y-10',
    stack: 'space-y-4 md:space-y-6',
    formControls: 'space-y-6',
  },
  components: {
    card: {
      base: 'bg-white rounded-xl border border-gray-200',
      primary: 'p-6 md:p-8 shadow-lg',
      secondary: 'p-4 shadow-sm',
    },
    input: {
      base: 'w-full py-6 px-16 text-xl text-center focus:ring-2 focus:outline-none placeholder-gray-400 bg-white rounded-xl shadow-sm border border-gray-300',
      focus: 'focus:ring-primary/50',
    },
    button: {
      base: 'w-full py-5 px-8 rounded-xl text-lg font-semibold transition-colors focus:outline-none',
      primary: 'bg-blue-600 text-white hover:bg-blue-700 shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-sm border border-gray-300',
    },
  },
} 