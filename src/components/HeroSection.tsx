import { ArrowRightIcon, MapPinIcon } from '@heroicons/react/20/solid'

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 pt-40 md:pt-16 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
              Your Partner in Health and Wellness
            </h1>
            <p className="text-lg text-slate-700">
              We are committed to providing you with the best medical and healthcare services 
              to help you live healthier and happier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 flex items-center gap-2">
                <span>See how we work</span>
                <ArrowRightIcon className="h-5 w-5" />
              </button>
              <button className="bg-white text-slate-800 px-8 py-3 rounded-full hover:bg-gray-50 flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span>Find the best Doctor</span>
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="hidden md:block ">
            <img 
              src="/hero-image.png" 
              alt="Healthcare Professionals" 
              className="w-full h-auto object-cover rounded-lg  mt-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection