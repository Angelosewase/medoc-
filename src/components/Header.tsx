import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'

function Header() {
  return (
    <header className='fixed top-0 z-50 w-full  backdrop-blur-lg'>
      {/* Top bar */}
      <div className="bg-primary/90 text-white px-4 py-2">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center gap-2">
              <MapPinIcon className="h-4 w-4" />
              <span>90919 Madie run Apt. 790</span>
            </div>
            <div className="flex items-center gap-2">
              <EnvelopeIcon className="h-4 w-4" />
              <span>medico@health.care</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a href="https://wa.me/+250725541525" className="hover:underline">
              Connect on Whatsapp
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white/50 container mx-auto py-2 px-4 mt-2 rounded-lg w-[90%] ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Medico Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-xl">Medoc</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="hover:text-primary">Home</a>
            <a href="#about" className="hover:text-primary">About</a>
            <a href="#services" className="hover:text-primary">Services </a>
            <a href="#whyUs" className="hover:text-primary">why us </a>
            <a href="#plans" className="hover:text-primary">plans </a>
            <a href="/contact" className="hover:text-primary">Contact us</a>
          </nav>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-5 w-5 text-primary" />
              <span className="font-semibold">+250725541525</span>
            </div>
            <a 
              href="#appointment"
              className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/80 transition-colors"
            >
              Book A demo
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header