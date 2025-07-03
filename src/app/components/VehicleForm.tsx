'use client'

import React, { useState, useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { AnimatePresence } from 'framer-motion'
import ReactCanvasConfetti from 'react-canvas-confetti'
import { Step1Form } from './form-steps/step1-form'
import { Step2Confirmation } from './form-steps/step2-confirmation'
import { Step3UserDetails } from './form-steps/step3-user-details'
import { Step4ThankYou } from './form-steps/step4-thank-you'
import { gtagEvent } from '../../utils/gtag'
import { plateConfigs } from '../../config/plate-config'

function generateId() {
  const charset = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
  let id = ''
  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    id += charset[randomIndex]
  }
  return id
}

type FormData = {
  registration: string
  mileage: string
  name: string
  email: string
  phone: string
  postcode: string
}

type Step1Data = {
  registration: string
  mileage: string
}

type VehicleDetails = {
  registrationNumber: string
  make: string
  model: string
  colour: string
  yearOfManufacture: number
  fuelType: string
  motStatus: string
  motExpiryDate?: string
  taxStatus: string
  taxDueDate?: string
  engineCapacity: number
  co2Emissions: number
  monthOfFirstRegistration: string
}

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyi6grgsTSwfRyBmCZvWV89i1H4ov38fbycP8CbNeCh7_RvoHxnH-VRdEGIm7luWykz/exec'

interface VehicleFormProps {
  country: string
}

export function VehicleForm({ country }: VehicleFormProps) {
  const [localCountry, setLocalCountry] = useState(country)
  const [step, setStep] = useState(1)
  const [step1Data, setStep1Data] = useState<Step1Data>({ registration: '', mileage: '' })
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(null)
  const [referenceId, setReferenceId] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const { register, handleSubmit, watch, setValue, reset } = useForm<FormData>({
    defaultValues: { registration: '', mileage: '' }
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const confettiRef = useRef<((opts: any) => void) | null>(null)

  // Temporary dropdown for developer override (non-production only)
  const isDev = process.env.NODE_ENV !== 'production'

  const config = plateConfigs[localCountry] || plateConfigs['GB']

  const getInstance = useCallback((confetti: { confetti: (opts: any) => void }) => {
    confettiRef.current = confetti.confetti
  }, [])

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    confettiRef.current?.({
      ...opts,
      origin: { x: 0.5, y: 1.0 },
      particleCount: Math.floor(200 * particleRatio)
    })
  }, [])

  const fireConfetti = useCallback(() => {
    const colors = config.confettiColors
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55,
      colors
    })
    makeShot(0.2, {
      spread: 60,
      colors
    })
    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors
    })
    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors
    })
    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      colors
    })
  }, [makeShot, config.confettiColors])
  
  const lookupVehicle = async (registration: string) => {
    setIsLoading(true)
    setApiError(null)
    try {
      const response = await fetch('/api/vehicle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registrationNumber: registration }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to fetch vehicle details')
      }

      const data = await response.json()
      setVehicleDetails(data)
      setStep(2) // Move to confirmation step
    } catch (error) {
      console.error('Vehicle lookup error:', error)
      setApiError(error instanceof Error ? error.message : 'Failed to find vehicle details. Please check the registration number and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (data: FormData) => {
    gtagEvent({
      action: 'form_submit',
      category: 'UX',
      label: `Step ${step}`
    })
    if (step === 1) {
      if (localCountry === 'IE') {
        setStep1Data({
          registration: data.registration || '',
          mileage: data.mileage || ''
        })
        setStep(3) // Go directly to user details for IE
        return
      }
      await lookupVehicle(data.registration || '')
      setStep1Data({
        registration: data.registration || '',
        mileage: data.mileage || ''
      })
    } else if (step === 2) {
      setStep(3)
    } else if (step === 3) {
      setIsSubmitting(true)
      setSubmitError(null)
      
      const generatedId = generateId()
      setReferenceId(generatedId)
      
      const finalData = {
        ...step1Data,
        ...vehicleDetails,
        name: data.name,
        email: data.email,
        phone: data.phone,
        postcode: data.postcode,
        submissionDate: new Date().toISOString(),
        referenceId: generatedId
      }

      try {
        const formData = new URLSearchParams()
        Object.entries(finalData).forEach(([key, value]) => {
          const stringValue = value === null || value === undefined ? '' : String(value);
          formData.append(key, stringValue)
        })

        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString()
        })

        fireConfetti()
        setStep(4)
      } catch (error) {
        console.error('Submission error:', error)
        setSubmitError('There was an error submitting your form. Please try again.')
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  React.useEffect(() => {
    if (step === 1) {
      setValue('registration', step1Data.registration)
      setValue('mileage', step1Data.mileage)
    }
  }, [step, setValue, step1Data])

  // Track country override
  React.useEffect(() => {
    gtagEvent({
      action: 'country_override',
      category: 'UX',
      label: localCountry
    })
  }, [localCountry])

  // Track step changes
  React.useEffect(() => {
    gtagEvent({
      action: 'form_step',
      category: 'UX',
      label: `Step ${step}`
    })
  }, [step])

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto pb-8">
      {isDev && (
        <div className="mb-2 flex justify-center">
          <label htmlFor="country-override" className="mr-2 font-medium">Country override:</label>
          <select
            id="country-override"
            value={localCountry}
            onChange={e => setLocalCountry(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="GB">UK</option>
            <option value="IE">Ireland</option>
          </select>
        </div>
      )}
      <div className={`mb-4 text-center font-bold text-xl ${config.accentTextColor}`}>
        {localCountry === 'IE' ? 'Irish Plate Flow' : 'UK Plate Flow'}
      </div>
      <div className="flex flex-col items-center w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1Form
                register={register}
                watch={watch}
                setValue={setValue}
                isLoading={isLoading}
                apiError={apiError}
                onSubmit={handleSubmit(onSubmit)}
                country={localCountry}
              />
            )}
            {step === 2 && localCountry !== 'IE' && vehicleDetails && (
              <Step2Confirmation
                vehicleDetails={vehicleDetails}
                onBack={() => setStep(1)}
                onContinue={() => handleSubmit(() => setStep(3))()}
              />
            )}
            {step === 3 && (
              <Step3UserDetails
                register={register}
                isSubmitting={isSubmitting}
                submitError={submitError}
              />
            )}
            {step === 4 && (
              <Step4ThankYou
                referenceId={referenceId}
              />
            )}
          </AnimatePresence>
        </form>
      </div>

      <ReactCanvasConfetti
        onInit={getInstance}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
        }}
      />
    </div>
  )
} 