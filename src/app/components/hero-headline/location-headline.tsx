import React from 'react'

interface LocationHeadlineProps {
  country: string
}

export function LocationHeadline({ country }: LocationHeadlineProps) {
  const colorMap: Record<string, { blue: string; red: string }> = {
    GB: { blue: 'text-[#4172db]', red: 'text-[#ff5c5c]' },
    IE: { blue: 'text-[#009a44]', red: 'text-[#ff8200]' },
  }

  const { blue, red } = colorMap[country] || colorMap.GB

  return (
    <h1 className="font-bold text-5xl flex flex-wrap gap-x-2">
      <span className={blue}>we buy</span>
      <span className={red}>north east</span>
      <span className={blue}>cars</span>
    </h1>
  )
}
// No static content needed for this component. 