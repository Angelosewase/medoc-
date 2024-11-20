import { ArrowRightIcon, MapPinIcon } from "@heroicons/react/20/solid";

function HeroSection() {
  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-200 pt-40 md:pt-16 py-16 md:px-14 px-4">
      <div className="container mx-auto px-6">
        {/* Main content grid remains similar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800  decoration-4 decoration-blue-500">
              Streamlining Healthcare, Empowering Patients
            </h1>
            <p className="text-lg text-slate-700">
              "Seamless healthcare management and patient interaction,
              empowering providers to manage data and patients to access care
              remotely, anytime, anywhere."
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

          <div className="hidden md:block">
            <img
              src="/hero-image.png"
              alt="Healthcare Professionals"
              className="w-[90%] h-auto object-cover mt-10"
            />
          </div>
        </div>

        {/* New Booking Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-6 absolute -bottom-0 hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
            {/* Appointment Date */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Next Appointment</div>
                <div className="font-semibold">November 25, 2024</div>
              </div>
            </div>

            {/* Doctor's Specialization */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Specialization</div>
                <div className="font-semibold">Pediatrics</div>
              </div>
            </div>

            {/* Doctor's Location */}
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657A8 8 0 118.343 7.343a8 8 0 019.314 9.314z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <div className="text-sm text-gray-600">Clinic Location</div>
                <div className="font-semibold">San Francisco, CA</div>
              </div>
            </div>

            {/* Booking Button */}
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
