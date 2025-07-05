import Image from 'next/image'
import Link from 'next/link'
import { VehicleForm } from './components/VehicleForm'
import './styles/fonts.css'
import { cookies } from 'next/headers'

export default async function Page({ searchParams }: any) {
  const cookiesStore = await cookies()
  const countryCookie = cookiesStore.get('country')?.value || 'GB'
  // Use ?loc= param if present
  let urlCountry = countryCookie
  const params = await searchParams
  if (params?.loc && typeof params.loc === 'string') {
    urlCountry = params.loc.toUpperCase()
  }
  const logoSrc = '/logo.svg'
  return (
    <main className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Navigation */}
      <nav className="bg-white border-b">
        {/* Make nav container full width and left-aligned */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src={logoSrc}
                  alt="logo"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                  priority
                />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Now integrated into VehicleForm */}
      {/* The <section> wrapper can be removed if VehicleForm handles its own top padding/spacing */}
      <section className="text-center">
        {/* VehicleForm will now render the appropriate HeroHeadline based on its internal step */}
      </section>

      {/* Form Section - VehicleForm now handles its own max-width and internal padding */}
      <div className="flex-1 flex flex-col items-center px-4">
        <VehicleForm country={urlCountry} />
      </div>

      {/* Car Emoji at Bottom Center, clipped and non-interactive */}
      <div className="pointer-events-none select-none absolute left-1/2 bottom-0 -translate-x-1/2 z-10 w-[140px] h-[90px] overflow-hidden" style={{maskImage: 'linear-gradient(to top, black 70%, transparent 100%)'}}>
        <Image
          src="/emoji_car.png"
          alt="Car Emoji"
          width={140}
          height={140}
          className="w-full h-auto"
          draggable={false}
          priority
        />
      </div>

      {/* GOV.UK SVG at bottom right, non-interactive */}
      <div className="pointer-events-none select-none absolute bottom-4 right-4 z-10 w-28 hidden sm:block">
        <Image
          src="/govuk.svg"
          alt="GOV.UK"
          width={112}
          height={57}
          className="w-full h-auto"
          draggable={false}
          priority
        />
      </div>
    </main>
  )
}
