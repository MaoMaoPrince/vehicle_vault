'use client'

import { motion } from 'framer-motion'
import { fadeVariants } from '@/app/utils/animations'
import { HeroHeadline } from '../hero-headline/hero-headline'
import { styles } from '@/app/components/ui/styles'

interface Step4ThankYouProps {
  referenceId: string
  country?: string
}

export function Step4ThankYou({ referenceId, country = 'GB' }: Step4ThankYouProps) {
  const colorMap: Record<string, { main: string; highlight: string; boxBg: string; boxText: string }> = {
    GB: { main: 'text-[#4172db]', highlight: 'text-[#ff5c5c]', boxBg: 'bg-green-100', boxText: 'text-green-800' },
    IE: { main: 'text-[#009a44]', highlight: 'text-[#ff8200]', boxBg: 'bg-[#e6ffe6]', boxText: 'text-[#009a44]' },
  }
  const { main, highlight, boxBg, boxText } = colorMap[country] || colorMap.GB
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
        textStart={<span className={main}>we </span>}
        textHighlight={<span className={highlight}>pay</span>}
        textEnd={<span className={main}> what we </span>}
        textHighlight2={<span className={highlight}>say</span>}
        subtext="We will contact you shortly with more information about your vehicle."
      />
      
      <div className="pt-8">
        <div className={`inline-block ${boxBg} ${boxText} px-6 py-4 rounded-xl`}>
          <p className="font-semibold">Your reference ID:</p>
          <p className="text-2xl font-mono tracking-wider">{referenceId}</p>
        </div>
      </div>
    </motion.div>
  )
} 