import { theme } from '@/app/styles/theme'

/**
 * Joins classNames together, filtering out undefined values
 */
export function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Predefined style patterns for common UI elements
 */
export const styles = {
  heading: {
    h1: cn(theme.typography.heading.h1, theme.typography.fontFamily.primary, theme.colors.neutral.text, 'mb-3'),
    h2: cn(theme.typography.heading.h2, theme.typography.fontFamily.primary, theme.colors.neutral.text, 'mb-3'),
    h3: cn(theme.typography.heading.h3, theme.typography.fontFamily.primary, theme.colors.neutral.text, 'mb-3'),
    page: cn(
      'text-3xl font-semibold text-center text-gray-700 mb-4 md:mb-6',
      theme.typography.fontFamily.primary
    )
  },
  text: {
    body: cn(theme.typography.body.base, theme.colors.neutral.text),
    lead: cn(theme.typography.body.lead, theme.colors.neutral.muted),
    small: cn(theme.typography.body.small, theme.colors.neutral.muted),
  },
  container: {
    section: theme.spacing.section,
    page: cn(theme.spacing.container, 'w-full'),
    form: cn('w-full max-w-xl mx-auto'),
    formControls: theme.spacing.formControls,
  },
  card: {
    primary: cn(theme.components.card.base, theme.components.card.primary),
    secondary: cn(theme.components.card.base, theme.components.card.secondary),
    status: {
      default: cn(theme.components.card.base, 'p-4', 'shadow-sm'),
      success: 'text-green-600',
      error: 'text-red-600',
    }
  },
  input: {
    base: cn(theme.components.input.base, theme.components.input.focus),
  },
  button: {
    primary: cn(
      theme.components.button.base,
      theme.components.button.primary,
    ),
    secondary: cn(
      theme.components.button.base,
      theme.components.button.secondary,
    ),
  },
  states: {
    success: cn(theme.colors.state.success),
    warning: cn(theme.colors.state.warning),
    error: cn(theme.colors.state.error),
  }
} 