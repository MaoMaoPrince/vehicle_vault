'use client'

import React, { useState } from 'react'

interface RegInputProps {
  value?: string
  onChange?: (value: string) => void
}

// UK reg format validation
// Covers formats like:
// AB12 ABC
// A123 ABC
// ABC 123A
// MOSSY 9
// etc.
const isValidUKReg = (reg: string) => {
  const ukRegexes = [
    /^[A-Z]{1,3}[0-9]{1,4}[A-Z]{0,3}$/, // Standard format
    /^[A-Z]{4,6}\s?[0-9]{1}$/ // MOSSY 9 style format
  ]
  const cleanReg = reg.replace(/\s+/g, ' ').trim().toUpperCase()
  return ukRegexes.some(regex => regex.test(cleanReg))
}

export function RegInput({ value, onChange }: RegInputProps) {
  const [isValid, setIsValid] = useState(true)
  const [isFocused, setIsFocused] = useState(false)

  const handleRegChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value.toUpperCase()
    onChange?.(newValue)
    if (newValue) {
      setIsValid(isValidUKReg(newValue))
    } else {
      setIsValid(true)
    }
  }

  const handleFocus = () => {
    setIsFocused(true)
    onChange?.('')
  }

  const handleBlur = () => {
    setIsFocused(false)
    if (!value) {
      onChange?.('')
    }
  }

  return (
    <div className="relative">
      <div className="flex rounded-xl overflow-hidden shadow-lg">
        {/* GB Badge */}
        <div className="bg-[#1e2b87] text-white px-6 flex items-center justify-center">
          <span className="text-2xl font-bold">GB</span>
        </div>
        {/* Registration Input */}
        <input
          type="text"
          value={value || ''}
          onChange={handleRegChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={!isFocused && !value ? "ENTER REG" : ""}
          maxLength={8}
          className={`w-full p-8 text-3xl font-bold text-center bg-yellow-300 placeholder-gray-600
            focus:outline-none focus:ring-2 ${isValid ? 'focus:ring-primary/50' : 'focus:ring-red-500'}
            font-number-plate tracking-widest uppercase`}
          style={{
            fontFamily: 'UKNumberPlate, sans-serif',
          }}
        />
      </div>
      {!isValid && value && (
        <p className="absolute -bottom-6 left-0 text-red-500 text-sm">
          Please enter a valid UK registration
        </p>
      )}
    </div>
  )
} 