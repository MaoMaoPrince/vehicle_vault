import { cn } from '@/app/components/ui/styles'
import { theme } from '@/app/styles/theme'

interface HeroHeadlineProps {
  textStart: string
  textHighlight: string
  textEnd: string
  textHighlight2?: string
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
    theme.typography.heading.h3, 
    'md:' + theme.typography.heading.h2, 
    'lg:text-hero',
    theme.typography.fontFamily.primary, 
    theme.colors.brand.blue, 
    'font-bold leading-tight md:whitespace-nowrap mb-3 text-center'
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