'use client'

import React, { useState, useCallback, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { RegInput } from './RegInput'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ReactCanvasConfetti from 'react-canvas-confetti'

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

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyi6grgsTSwfRyBmCZvWV89i1H4ov38fbycP8CbNeCh7_RvoHxnH-VRdEGIm7luWykz/exec'

export function VehicleForm() {
  const [step, setStep] = useState(1)
  const [step1Data, setStep1Data] = useState<Step1Data>({ registration: '', mileage: '' })
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
  
  const onSubmit = async (data: FormData) => {
    if (step === 1) {
      setStep1Data({
        registration: data.registration || '',
        mileage: data.mileage || ''
      })
      reset()
      setStep(2)
    } else {
      setIsSubmitting(true)
      setSubmitError(null)
      
      const finalData = {
        ...step1Data,
        name: data.name,
        email: data.email,
        phone: data.phone,
        postcode: data.postcode
      }

      try {
        // Convert the data to URL encoded format that Google Scripts expects
        const formData = new URLSearchParams()
        Object.entries(finalData).forEach(([key, value]) => {
          formData.append(key, value)
        })

        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formData.toString()
        })

        // Since we're using no-cors, we can't actually check the response
        // We'll assume success if no error was thrown
        fireConfetti()
        reset() // Clear the form
        setStep(1) // Go back to step 1
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
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto gap-16 p-8 items-center">
      <div className="flex-1 px-4 md:px-20">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl">
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
                <h2 className="text-3xl font-bold">Enter some details to get a quote today</h2>
                <div className="space-y-6">
                  <RegInput 
                    value={watch('registration')} 
                    onChange={(value) => setValue('registration', value)} 
                  />
                  <input
                    type="text"
                    placeholder="Mileage"
                    {...register('mileage', { required: true })}
                    className="w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm"
                  />
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-6 px-8 rounded-xl text-xl font-semibold hover:bg-blue-600 transition-colors shadow-sm"
                  >
                    Get Started →
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="step2"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-3xl font-bold">Enter some details about yourself</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register('name', { required: true })}
                    className="w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                    className="w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register('phone', { required: true })}
                    className="w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm"
                  />
                  <input
                    type="text"
                    placeholder="Post Code"
                    {...register('postcode', { required: true })}
                    className="w-full p-6 text-xl rounded-xl border border-gray-300 focus:ring-2 focus:ring-primary/50 focus:outline-none placeholder-gray-400 shadow-sm"
                  />
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
            )}
          </AnimatePresence>
        </form>
      </div>
      
      <div className="flex-1">
        <div className="rounded-[2rem] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.16)] transition-shadow duration-300">
          <div className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-3">Vehicle Vault</h2>
            <div className="relative w-full h-[400px]">
              <Image
                src="/car-hero.jpeg"
                alt="Car with cow"
                fill
                className="object-cover rounded-[2rem]"
                quality={100}
              />
            </div>
          </div>
        </div>
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
          zIndex: 50
        }}
      />
    </div>
  )
} 