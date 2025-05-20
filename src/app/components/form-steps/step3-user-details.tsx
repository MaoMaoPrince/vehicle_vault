'use client'

import { motion } from 'framer-motion'
import { fadeVariants } from '@/app/utils/animations'
import { User, Mail, Phone, MapPin } from 'lucide-react'
import { UseFormRegister } from 'react-hook-form'
import { styles } from '@/app/components/ui/styles'

interface FormData {
  registration: string
  mileage: string
  name: string
  email: string
  phone: string
  postcode: string
}

interface Step3UserDetailsProps {
  register: UseFormRegister<FormData>
  isSubmitting: boolean
  submitError: string | null
}

export function Step3UserDetails({
  register,
  isSubmitting,
  submitError
}: Step3UserDetailsProps) {
  return (
    <motion.div
      key="step3"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className={styles.container.section}
    >
      <h2 className={styles.heading.page}>
        Enter some details about yourself
      </h2>
      
      <div className={styles.container.formControls}>
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <User className="text-blue-900 w-7 h-7" aria-label="Name" />
          </div>
          <input
            type="text"
            placeholder="Name"
            {...register('name', { required: true })}
            className={styles.input.base}
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
            className={styles.input.base}
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
            className={styles.input.base}
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
            className={styles.input.base}
          />
        </div>
        
        {submitError && (
          <div className={`text-sm ${styles.states.error}`}>{submitError}</div>
        )}
        
        <button
          type="submit"
          disabled={isSubmitting}
          className={`${styles.button.primary} ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Submitting...' : 'Submit →'}
        </button>
      </div>
    </motion.div>
  )
} 