import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log('🔍 Middleware running for:', request.url)
  
  // Get IP address from x-forwarded-for header (standard in Next.js middleware)
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || ''
  console.log('🌐 IP detected:', ip)
  
  let country = 'GB' // Default to GB

  if (ip && ip !== '::1' && ip !== '127.0.0.1') {
    try {
      // Use ipapi.co for GDPR-compliant geolocation
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`)
      if (geoRes.ok) {
        const geo = await geoRes.json()
        if (geo && geo.country_code === 'IE') country = 'IE'
      }
    } catch (e) {
      // Fail silently, default to GB
    }
  }

  console.log('🏳️ Country set to:', country)
  const response = NextResponse.next()
  response.cookies.set('country', country, { path: '/' })
  return response
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
} 