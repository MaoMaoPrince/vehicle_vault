import React from 'react'

interface LocationHeadlineProps {
  country: string
}

export function LocationHeadline({ country }: LocationHeadlineProps) {
  const colorMap: Record<string, { text_color: string; highlight_color: string }> = {
    GB: { text_color: 'text-[#4172db]', highlight_color: 'text-[#ff5c5c]' },
    IE: { text_color: 'text-[#009a44]', highlight_color: 'text-[#ff8200]' },
  }

  const { text_color: text_color, highlight_color } = colorMap[country] || colorMap.GB

  if (country === 'IE') {
    return (
      <h1 className="font-bold text-5xl flex flex-wrap gap-x-2">
        <span className={text_color}>we buy</span>
        <span className={highlight_color}>Ireland</span>
        <span className={text_color}>cars</span>
      </h1>
    )
  }

  return (
    <h1 className="font-bold text-5xl flex flex-wrap gap-x-2">
      <span className={text_color}>we buy</span>
      <span className={highlight_color}>north east</span>
      <span className={text_color}>cars</span>
    </h1>
  )
}
// No static content needed for this component. 