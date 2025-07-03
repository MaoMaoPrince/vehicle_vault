import React from 'react'

interface LocationTaglineProps {
  country: string
}

export function LocationTagline({ country }: LocationTaglineProps) {
  const colorMap: Record<string, { blue: string; red: string }> = {
    GB: { blue: 'text-[#4172db]', red: 'text-[#ff5c5c]' },
    IE: { blue: 'text-[#009a44]', red: 'text-[#ff8200]' },
  }
  const { blue, red } = colorMap[country] || colorMap.GB
  return (
    <h2 className="font-bold text-4xl flex flex-wrap gap-x-2">
      <span className={blue}>we</span>
      <span className={red}>pay</span>
      <span className={blue}>what we</span>
      <span className={red}>say</span>
    </h2>
  )
} 