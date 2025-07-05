import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const country = request.cookies.get('country')?.value || 'not-set'
  const ip = request.headers.get('x-forwarded-for') || 
             request.headers.get('x-real-ip') || 
             request.headers.get('cf-connecting-ip') || 
             'unknown'
  
  return NextResponse.json({
    country,
    ip,
    headers: Object.fromEntries(request.headers.entries())
  })
} 