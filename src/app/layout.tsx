import './globals.css'
import type { Metadata } from 'next'
import React from 'react'
import localFont from 'next/font/local'
import Script from 'next/script'
import { cookies } from 'next/headers'
import { plateConfigs } from './config/plate-config'

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookiesStore = await cookies()
  const country = cookiesStore.get('country')?.value || 'GB'
  const config = plateConfigs[country] || plateConfigs['GB']
  return (
    <html lang="en">
      <head>
        {/* Google Analytics Debug */}
        <script>
          {`console.log('GA DEBUG: NEXT_PUBLIC_GA_ID is', '${process.env.NEXT_PUBLIC_GA_ID}')`}
        </script>
        {/* Google Analytics */}
        {process.env.NODE_ENV === 'production' && process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}></script>
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                console.log('GA DEBUG: gtag loaded with ID', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className={`min-h-screen ${lexend.variable} ${spaceGrotesk.variable}`}>
        {/* GA Debug visible element */}
        <div id="ga-debug" style={{position:'fixed',top:0,left:0,zIndex:9999,background:'#fff',color:'#000',padding:'2px 8px',fontSize:'12px'}}>GA ID: {process.env.NEXT_PUBLIC_GA_ID || 'NOT SET'}</div>
        {children}
      </body>
    </html>
  )
}
