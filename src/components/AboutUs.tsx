import { ArrowRightIcon } from "@heroicons/react/20/solid";

function AboutUs() {
  return (
    <section className="py-16 md:px-20 px-4 pt-40" id="about">
      <div className=" mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left side - Images */}
          <div className="relative flex-1  flex items-center justify-center ">
            <img
              src="/about.png"
              alt="Doctor with patient"
              className="w-auto h-[450px] "
            />
            <div className=" absolute -bottom-28 -right-28">
              <img
                src="/about1.png"
                alt="Doctor portrait"
                className="w-auto h-[400px]  rounded-lg relative z-10"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 space-y-6">
            <div className="space-y-2  mb-16">
              <h2 className="text-6xl font-light  text-slate-800">About us</h2>
              <h4 className="text-blue-500 font-medium">Medoc</h4>
            </div>
            <div className="flex items-start  gap-8">
              <ArrowRightIcon className="w-40 text-primary" />
              <div>
                <h4 className="font-semibold text-xl">
                  Welcome to medoc , a dedicated health care provider
                </h4>
                <p className="">
                At Medico, we believe in providing more than just healthcare—we&apos;re here to create a compassionate, supportive environment where patients feel valued and understood. Our platform connects healthcare providers with patients, offering secure data management, remote consultations, and easy access to health information. We are dedicated to delivering high-quality care and ensuring every patient receives the attention they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
