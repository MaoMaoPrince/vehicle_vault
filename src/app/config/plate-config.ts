export interface PlateConfig {
  badge: string
  badgeBg: string
  validate: (reg: string) => boolean
  plateStyle: string // Tailwind or CSS class
  textColor: string
  placeholder: string
  validationMsg: string
  confettiColors: string[]
  accentTextColor: string
  plateBorder: string
  highlightColor: string
}

const isValidUKReg = (reg: string) =>
  /^[A-Z]{1,3}[0-9]{1,4}[A-Z]{0,3}$/.test(reg.replace(/\s+/g, '').toUpperCase())

const isValidIEReg = (reg: string) =>
  /^\d{1,3}-[A-Z]{1,2}-\d{1,6}$/i.test(reg.trim())

export const plateConfigs: Record<string, PlateConfig> = {
  GB: {
    badge: 'GB',
    badgeBg: 'bg-[#1e2b87]',
    validate: isValidUKReg,
    plateStyle: 'bg-yellow-300',
    textColor: 'text-black',
    placeholder: 'ENTER REG',
    validationMsg: 'Please enter a valid UK registration',
    confettiColors: ['#00247D', '#CF142B', '#FFFFFF'], // UK flag colors
    accentTextColor: 'text-blue-900',
    plateBorder: '', // No border for UK
    highlightColor: 'text-blue-700'
  },
  IE: {
    badge: 'IRL',
    badgeBg: 'bg-[#0077D8]',
    validate: isValidIEReg,
    plateStyle: 'bg-white',
    textColor: 'text-gray-700',
    placeholder: '231-D-12345',
    validationMsg: 'Please enter a valid Irish registration (e.g. 231-D-12345)',
    confettiColors: ['#169B62', '#FF883E', '#FFFFFF'], // Irish flag colors
    accentTextColor: 'text-[#169B62]',
    plateBorder: 'border-gray-700',
    highlightColor: 'text-[#169B62]'
  }
  // Add more countries here...
} 