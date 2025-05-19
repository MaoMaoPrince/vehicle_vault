'use client'

import React, { useState, useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { RegInput } from './RegInput'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ReactCanvasConfetti from 'react-canvas-confetti'
import { Gauge, User, Mail, Phone, MapPin } from 'lucide-react'

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
const DVLA_API_KEY = 'OiQulXE0N92t1hVsGrVeP95TZzIUpeihy3Fs0NPc'

export function VehicleForm() {
  const [step, setStep] = useState(1)
  const [step1Data, setStep1Data] = useState<Step1Data>({ registration: '', mileage: '' })
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)
  const { register, handleSubmit, watch, setValue, reset } = useForm<FormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const confettiRef = useRef<((opts: any) => void) | null>(null)

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
    makeShot(0.25, {
      spread: 26,
      startVelocity: 55
    })

    makeShot(0.2, {
      spread: 60
    })

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    })

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45
    })
  }, [makeShot])
  
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
    if (step === 1) {
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
      
      const finalData = {
        ...step1Data,
        ...vehicleDetails,
        name: data.name,
        email: data.email,
        phone: data.phone,
        postcode: data.postcode,
        submissionDate: new Date().toISOString()
      }

      try {
        const formData = new URLSearchParams()
        Object.entries(finalData).forEach(([key, value]) => {
          formData.append(key, String(value))
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
        setStep(4) // Move to thank you step
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

  const fadeVariants = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  }

  return (
    <div className="flex flex-col w-full max-w-3xl mx-auto p-8">
      <div className="flex-1 px-4 md:px-20">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            {step === 1 ? (
              <motion.div
                key="step1"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-center">Enter some details to get a quote today</h2>
                <div className="space-y-10">
                  <RegInput 
                    value={watch('registration')} 
                    onChange={(value) => setValue('registration', value)} 
                  />
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                      <Gauge className="text-blue-900 w-7 h-7" aria-label="Mileage" />
                    </div>
                    <input
                      type="text"
                      placeholder="Mileage"
                      {...register('mileage', { required: true })}
                      className="w-full py-6 px-16 text-xl text-center focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 bg-white rounded-xl shadow-sm border border-gray-300"
                      style={{ minWidth: 0 }}
                    />
                  </div>
                  {apiError && (
                    <div className="text-red-500 text-sm">{apiError}</div>
                  )}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full bg-blue-500 text-white py-5 px-8 rounded-xl text-lg font-semibold transition-colors shadow-sm mt-2
                      ${isLoading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Searching...
                      </div>
                    ) : (
                      'Get Started →'
                    )}
                  </button>
                </div>
              </motion.div>
            ) : step === 2 ? (
              <motion.div
                key="step2"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-center">Is this your vehicle?</h2>
                {vehicleDetails && (
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="font-semibold">Registration:</div>
                      <div className="font-mono">{vehicleDetails.registrationNumber}</div>
                      
                      <div className="font-semibold">Make:</div>
                      <div>{vehicleDetails.make}</div>
                      
                      <div className="font-semibold">Colour:</div>
                      <div>{vehicleDetails.colour}</div>
                      
                      <div className="font-semibold">Year:</div>
                      <div>{vehicleDetails.yearOfManufacture}</div>
                      
                      <div className="font-semibold">Fuel Type:</div>
                      <div>{vehicleDetails.fuelType}</div>
                      
                      <div className="font-semibold">Engine Size:</div>
                      <div>{vehicleDetails.engineCapacity}cc</div>
                      
                      <div className="font-semibold">CO2 Emissions:</div>
                      <div>{vehicleDetails.co2Emissions}g/km</div>
                      
                      <div className="font-semibold">First Registered:</div>
                      <div>{new Date(vehicleDetails.monthOfFirstRegistration).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}</div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="font-semibold text-sm text-gray-600">MOT Status</div>
                        <div className={`text-lg font-bold ${vehicleDetails.motStatus === 'Valid' ? 'text-green-600' : 'text-red-600'}`}>
                          {vehicleDetails.motStatus}
                        </div>
                        {vehicleDetails.motExpiryDate && (
                          <div className="text-sm text-gray-500">
                            Expires: {new Date(vehicleDetails.motExpiryDate).toLocaleDateString('en-GB')}
                          </div>
                        )}
                      </div>

                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="font-semibold text-sm text-gray-600">Tax Status</div>
                        <div className={`text-lg font-bold ${vehicleDetails.taxStatus === 'Taxed' ? 'text-green-600' : 'text-red-600'}`}>
                          {vehicleDetails.taxStatus}
                        </div>
                        {vehicleDetails.taxDueDate && (
                          <div className="text-sm text-gray-500">
                            Due: {new Date(vehicleDetails.taxDueDate).toLocaleDateString('en-GB')}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-800 py-6 px-8 rounded-xl text-xl font-semibold hover:bg-gray-300 transition-colors shadow-sm"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white py-6 px-8 rounded-xl text-xl font-semibold hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    Yes, Continue →
                  </button>
                </div>
              </motion.div>
            ) : step === 3 ? (
              <motion.div
                key="step3"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold text-center">Enter some details about yourself</h2>
                <div className="space-y-6">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                      <User className="text-blue-900 w-7 h-7" aria-label="Name" />
                    </div>
                    <input
                      type="text"
                      placeholder="Name"
                      {...register('name', { required: true })}
                      className="w-full py-6 px-16 text-xl text-center focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 bg-white rounded-xl shadow-sm border border-gray-300"
                    />
                  </div>

                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                      <Mail className="text-blue-900 w-7 h-7" aria-label="Email" />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      {...register('email', { required: true })}
                      className="w-full py-6 px-16 text-xl text-center focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 bg-white rounded-xl shadow-sm border border-gray-300"
                    />
                  </div>

                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                      <Phone className="text-blue-900 w-7 h-7" aria-label="Phone Number" />
                    </div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      {...register('phone', { required: true })}
                      className="w-full py-6 px-16 text-xl text-center focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 bg-white rounded-xl shadow-sm border border-gray-300"
                    />
                  </div>

                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                      <MapPin className="text-blue-900 w-7 h-7" aria-label="Post Code" />
                    </div>
                    <input
                      type="text"
                      placeholder="Post Code"
                      {...register('postcode', { required: true })}
                      className="w-full py-6 px-16 text-xl text-center focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 bg-white rounded-xl shadow-sm border border-gray-300"
                    />
                  </div>
                  {submitError && (
                    <div className="text-red-500 text-sm">{submitError}</div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-blue-500 text-white py-6 px-8 rounded-xl text-xl font-semibold transition-colors shadow-sm
                      ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-600'}`}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit →'}
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step4"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-8 text-center"
              >
                <h2 className="text-3xl font-bold">Thank you for your enquiry!</h2>
                <p className="text-xl text-gray-600">
                  We will contact you shortly with more information about your vehicle.
                </p>
                <div className="pt-8">
                  <div className="inline-block bg-green-100 text-green-800 px-6 py-4 rounded-xl">
                    <p className="font-semibold">Your reference number:</p>
                    <p className="text-2xl font-mono">{step1Data.registration}</p>
                  </div>
                </div>
              </motion.div>
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