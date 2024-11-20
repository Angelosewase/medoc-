function WhyUs() {
  const benefits = [
    "Patient-Centered Care",
    "Remote Access to Care",
    "Secure and Compliant",
    "Streamlined Data Management",
    "Enhanced Collaboration",
    "Continuous Innovation"
  ];

  return (
    <section className="py-16 md:px-20 px-4  " id="whyUs">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center gap-[200px] items-center ">
          {/* Left side - Image */}
          <div className="relative  flex items-center justify-center">
      
              <img
                src="/whyus.png"
                alt="Healthcare Professional"
                className="w-auto    h-[360px] ml-16 "
              />
    
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-800">
              Why Choose Us?
            </h2>

            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-slate-700">{benefit}</span>
                </li>
              ))}
            </ul>

 
          </div>
        </div>
        <div className="mt-8   md:px-[250px]  ">
              <h3 className="text-4xl font-bold text-slate-800 mb-4">
              Quality, Collaboration, Simplicity
              </h3>
              <p className="text-slate-600 mb-6 w-full md:w-[85%]  text-lg">
              We are dedicated to delivering outstanding healthcare solutions, prioritizing patient comfort and well-being. Our team of professionals is committed to providing the highest standards of care and service.
              </p>
              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                Try Medoc
              </button>
            </div>
      </div>
    </section>
  )
}

export default WhyUs