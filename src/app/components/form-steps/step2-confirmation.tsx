'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeVariants } from '@/app/utils/animations'
import { styles } from '@/app/components/ui/styles'

// Consider adding icons for MOT/Tax status for better visual cues
// import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react' 

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

interface Step2ConfirmationProps {
  vehicleDetails: VehicleDetails
  onBack: () => void
  onContinue: () => void
}

export function Step2Confirmation({
  vehicleDetails,
  onBack,
  onContinue
}: Step2ConfirmationProps) {
  return (
    <motion.div
      key="step2"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className={styles.container.section}
    >
      <h2 className={styles.heading.page}>
        Is this your car?
      </h2>
      
      {/* MOT and Tax Status - Made to appear on one row on mobile */}
      <div className="grid grid-cols-2 gap-4">
        <div className={styles.card.status.default}>
          <div className="text-sm font-medium text-gray-500 mb-1">MOT Status</div>
          <div className={`text-xl font-semibold ${vehicleDetails.motStatus === 'Valid' ? styles.states.success : styles.states.error}`}>
            {vehicleDetails.motStatus} 
          </div>
          {vehicleDetails.motExpiryDate && (
            <div className="text-xs text-gray-500 mt-1">
              Expires: {new Date(vehicleDetails.motExpiryDate).toLocaleDateString('en-GB')}
            </div>
          )}
        </div>

        <div className={styles.card.status.default}>
          <div className="text-sm font-medium text-gray-500 mb-1">Tax Status</div>
          <div className={`text-xl font-semibold ${vehicleDetails.taxStatus === 'Taxed' ? styles.states.success : styles.states.error}`}>
            {vehicleDetails.taxStatus}
          </div>
          {vehicleDetails.taxDueDate && (
            <div className="text-xs text-gray-500 mt-1">
              Due: {new Date(vehicleDetails.taxDueDate).toLocaleDateString('en-GB')}
            </div>
          )}
        </div>
      </div>
      
      {/* Vehicle Details */}
      <div className={styles.card.primary}>
        <div className="grid grid-cols-2 gap-y-4 gap-x-4 text-base">
          {[ 
            { label: "Registration", value: vehicleDetails.registrationNumber, isMono: true },
            { label: "Make", value: vehicleDetails.make },
            { label: "Colour", value: vehicleDetails.colour },
            { label: "Year", value: vehicleDetails.yearOfManufacture },
            { label: "Fuel Type", value: vehicleDetails.fuelType },
          ].map(detail => (
            <React.Fragment key={detail.label}> 
              <div className="font-medium text-gray-500">{detail.label}:</div>
              <div className={`text-gray-800 font-semibold ${detail.isMono ? 'font-mono tracking-wider' : ''}`}>{detail.value}</div>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Action Buttons - Reversed order on mobile */}
      <div className="flex flex-col-reverse md:flex-row gap-3 md:gap-4 pt-2 md:pt-4 relative z-20">
        <button
          type="button"
          onClick={onBack}
          className={styles.button.secondary}
        >
          ← Back
        </button>
        <button
          type="button"
          onClick={onContinue}
          className={styles.button.primary}
        >
          Yes, Continue →
        </button>
      </div>
    </motion.div>
  )
} 