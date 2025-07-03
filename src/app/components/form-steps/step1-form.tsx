'use client'

import { RegInput } from '../RegInput'
import { Gauge } from 'lucide-react'
import { UseFormRegister, UseFormWatch, UseFormSetValue } from 'react-hook-form'
import { HeroHeadline } from '../hero-headline/hero-headline'
import { motion } from 'framer-motion'
import { fadeVariants } from '@/app/utils/animations'
import { styles } from '@/app/components/ui/styles'
import { plateConfigs } from '@/app/config/plate-config'

interface FormData {
  registration: string
  mileage: string
  name: string
  email: string
  phone: string
  postcode: string
}

interface Step1FormProps {
  register: UseFormRegister<FormData>
  watch: UseFormWatch<FormData>
  setValue: UseFormSetValue<FormData>
  isLoading: boolean
  apiError: string | null
  onSubmit: () => void
  country: string
}

export function Step1Form({
  register,
  watch,
  setValue,
  isLoading,
  apiError,
  onSubmit,
  country
}: Step1FormProps) {
  return (
    <motion.div
      key="step1"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className={`${styles.container.section} flex flex-col items-center`}
    >
      <HeroHeadline
        textStart="we buy "
        textHighlight="north east"
        textEnd=" cars"
        subtext="Enter some details to get a quote today"
      />
      
      <div className={styles.container.formControls}>
        <RegInput 
          value={watch('registration')} 
          onChange={(value) => setValue('registration', value)} 
          country={country}
        />
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <Gauge className="text-blue-900 w-7 h-7" aria-label="Mileage" />
          </div>
          <input
            type="text"
            placeholder="Mileage"
            {...register('mileage', { required: true })}
            className={styles.input.base}
            style={{ minWidth: 0 }}
          />
        </div>
        {apiError && (
          <div className={`text-sm ${styles.states.error}`}>{apiError}</div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={`${styles.button.primary} mt-2 ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
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
  )
} 