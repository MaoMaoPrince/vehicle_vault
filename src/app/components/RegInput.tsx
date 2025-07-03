'use client'

import React, { useState } from 'react'
import { plateConfigs } from '../config/plate-config'

interface RegInputProps {
  value?: string
  onChange?: (value: string) => void
  country: string
}

export function RegInput({ value, onChange, country }: RegInputProps) {
  const config = plateConfigs[country] || plateConfigs['GB']
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toUpperCase()
    onChange?.(newValue)
    setIsValid(config.validate(newValue))
  }

  const handleFocus = () => {
    setIsFocused(true)
    onChange?.('')
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (!value) onChange?.('')
  }

  return (
    <div className="relative">
      <div className="flex shadow-lg rounded-xl overflow-hidden">
        {/* Country Badge */}
        <div className={`${config.badgeBg} text-white px-6 flex items-center justify-center rounded-l-xl`}>
          <span className="text-2xl font-bold">{config.badge}</span>
        </div>
        {/* Registration Input */}
        <input
          type="text"
          value={value || ''}
          onChange={handleRegChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={!isFocused && !value ? config.placeholder : ''}
          maxLength={12}
          className={`w-full p-8 text-3xl font-bold text-center placeholder-gray-600
            focus:outline-none focus:ring-2 ${isValid ? 'focus:ring-primary/50' : 'focus:ring-red-500'}
            tracking-widest uppercase ${config.textColor} ${config.plateStyle} rounded-r-xl
            ${config.plateBorder ? `border-4 ${config.plateBorder} border-l-0` : ''}`}
          style={{
            fontFamily: 'CharlesWright, sans-serif',
            letterSpacing: '0.1em',
            fontSize: '2.5rem',
            lineHeight: '1.2'
          }}
        />
      </div>
      { !isValid && value && (
        <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
          {config.validationMsg}
        </p>
      )}
    </div>
  )
} 