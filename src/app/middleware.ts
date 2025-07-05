import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  // Get IP address from various headers (different hosting providers use different headers)
  const forwardedFor = request.headers.get('x-forwarded-for')
  const realIp = request.headers.get('x-real-ip')
  const cfConnectingIp = request.headers.get('cf-connecting-ip')
  
  let ip = ''
  if (forwardedFor) {
    ip = forwardedFor.split(',')[0]?.trim() || ''
  } else if (realIp) {
    ip = realIp
  } else if (cfConnectingIp) {
    ip = cfConnectingIp
  }
  
  let country = 'GB' // Default to GB

  // Only try geolocation if we have a real IP
  if (ip && ip !== '::1' && ip !== '127.0.0.1' && !ip.startsWith('192.168.') && !ip.startsWith('10.')) {
    try {
      // Use ipapi.co for GDPR-compliant geolocation
      const geoRes = await fetch(`https://ipapi.co/${ip}/json/`, {
        headers: {
          'User-Agent': 'VehicleVault/1.0'
        }
      })
      
      if (geoRes.ok) {
        const geo = await geoRes.json()
        if (geo && geo.country_code === 'IE') {
          country = 'IE'
        }
      }
    } catch (e) {
      // Fail silently, default to GB
    }
  }

  const response = NextResponse.next()
  response.cookies.set('country', country, { 
    path: '/',
    httpOnly: false, // Allow client-side access
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax'
  })
  
  return response
}

export const config = {
  matcher: ['/((?!api|_next|static|favicon.ico).*)'],
} 