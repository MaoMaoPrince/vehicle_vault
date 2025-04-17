import Image from 'next/image'
import React from 'react'
import { RegInput } from './components/RegInput'
import './styles/fonts.css'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Image
                src="/logo.svg"
                alt="Vehicle Vault"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </div>
          </div>
        </div>
      </nav>

      {/* Split Layout */}
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Form */}
        <div className="w-full lg:w-1/2 bg-[#f8f9fc] px-4 py-12 lg:py-20">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-[2.75rem] md:text-6xl font-bold">
                <span className="block text-gray-900">We Buy Cars</span>
              </h1>
              <h2 className="text-[2rem] md:text-5xl font-bold text-primary mt-4">
                Get Your Instant Quote Today
              </h2>
            </div>

            {/* Form Cards */}
            <div className="space-y-6">
              {/* Registration Input */}
              <RegInput />

              {/* Mileage Input */}
              <input
                type="number"
                placeholder="MILEAGE"
                className="w-full p-8 text-3xl font-bold text-center bg-white rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder-gray-700"
              />

              {/* Submit Button */}
              <button className="w-full bg-secondary hover:bg-secondary/90 text-white text-2xl font-bold py-8 rounded-xl shadow-lg transition-colors">
                SELL MY CAR
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <Image
            src="/car-hero.jpeg"
            alt="Luxury Car"
            fill
            className="object-cover"
            priority
            quality={100}
          />
        </div>
      </div>
    </main>
  )
}
