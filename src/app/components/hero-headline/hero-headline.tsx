import { cn } from '@/app/components/ui/styles'
import { theme } from '@/app/styles/theme'
import type { ReactNode } from 'react'

interface HeroHeadlineProps {
  textStart: ReactNode
  textHighlight: ReactNode
  textEnd: ReactNode
  textHighlight2?: ReactNode
  subtext?: string
  textClassName?: string
  subtextClassName?: string
  highlightColor?: string
}

export function HeroHeadline({
  textStart,
  textHighlight,
  textEnd,
  textHighlight2,
  subtext,
  textClassName = cn(
    'text-3xl md:text-5xl lg:text-6xl',
    'font-lexend',
    'text-center',
    theme.colors.brand.blue, 
    'font-bold leading-tight md:whitespace-nowrap mb-3'
  ),
  subtextClassName = cn(
    theme.typography.body.lead, 
    theme.typography.fontFamily.secondary, 
    theme.colors.neutral.muted, 
    'mb-6 text-center'
  ),
  highlightColor = theme.colors.brand.red
}: HeroHeadlineProps) {
  return (
    <>
      <h1 className={textClassName}>
        {textStart}
        <span className={highlightColor}>{textHighlight}</span>
        {textEnd}
        {textHighlight2 && <span className={highlightColor}>{textHighlight2}</span>}
      </h1>
      {subtext && (
        <p className={subtextClassName}>
          {subtext}
        </p>
      )}
    </>
  )
} 