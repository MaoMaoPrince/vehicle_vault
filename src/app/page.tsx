import Image from 'next/image'
import { VehicleForm } from './components/VehicleForm'
import './styles/fonts.css'

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b">
        {/* Make nav container full width and left-aligned */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
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

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center">
        <VehicleForm />
      </div>
    </main>
  )
}
