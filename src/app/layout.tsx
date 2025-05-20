import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import localFont from 'next/font/local'

const lexend = localFont({
  src: '../../public/fonts/LexendDeca-Bold.ttf',
  variable: '--font-lexend',
  display: 'swap',
})

const spaceGrotesk = localFont({
  src: '../../public/fonts/SpaceGrotesk-VariableFont_wght.ttf',
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'webuynecars.com',
  description: 'we buy north east cars get your free evaluation today',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`min-h-screen ${lexend.variable} ${spaceGrotesk.variable}`}>{children}</body>
    </html>
  )
}
