import { NextResponse } from 'next/server'

const DVLA_API_KEY = 'OiQulXE0N92t1hVsGrVeP95TZzIUpeihy3Fs0NPc'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { registrationNumber } = body

    if (!registrationNumber) {
      return NextResponse.json(
        { error: 'Registration number is required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', {
      method: 'POST',
      headers: {
        'x-api-key': DVLA_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ registrationNumber }),
    })

    if (!response.ok) {
      const error = await response.json()
      return NextResponse.json(
        { error: error.message || 'Failed to fetch vehicle details' },
        { status: response.status }
      )
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Vehicle lookup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 