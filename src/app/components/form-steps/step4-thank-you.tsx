'use client'

import { motion } from 'framer-motion'
import { fadeVariants } from '@/app/utils/animations'
import { HeroHeadline } from '../hero-headline/hero-headline'
import { styles } from '@/app/components/ui/styles'

interface Step4ThankYouProps {
  referenceId: string
}

export function Step4ThankYou({ referenceId }: Step4ThankYouProps) {
  return (
    <motion.div
      key="step4"
      variants={fadeVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.3 }}
      className={`${styles.container.section} flex flex-col items-center`}
    >
      <HeroHeadline
        textStart="we "
        textHighlight="pay"
        textEnd=" what we "
        textHighlight2="say"
        subtext="We will contact you shortly with more information about your vehicle."
      />
      
      <div className="pt-8">
        <div className="inline-block bg-green-100 text-green-800 px-6 py-4 rounded-xl">
          <p className="font-semibold">Your reference ID:</p>
          <p className="text-2xl font-mono tracking-wider">{referenceId}</p>
        </div>
      </div>
    </motion.div>
  )
} 