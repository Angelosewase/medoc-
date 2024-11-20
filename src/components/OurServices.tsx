import React from "react";

const OurServices = () => {
  const services = [
    {
      icon: "🧠",
      title: "Healthcare Data Management",
      description:
      "We provide secure, centralized storage for patient data, ensuring healthcare providers have easy access to accurate records. This streamlines operations and helps maintain consistency in patient care.",
    },
    {
      icon: "👁️",
      title: "Remote Consultations",
      description:
        "Our platform supports virtual consultations, allowing patients to connect with their healthcare providers remotely. This ensures convenient, accessible care, especially for those in remote areas.",
    },
    {
      icon: "💉",
      title: "Appointment Scheduling & Reminders",
      description:
        "Patients can easily schedule, reschedule, or cancel appointments through our intuitive platform. Automatic reminders ensure that appointments run smoothly and on time.",
    },
    {
      icon: "❤️",
      title: "Patient Access & Control",
      description:
        "Medico gives patients direct access to their health records, empowering them to manage their own care. This enhances patient engagement and ensures they stay informed about their health journey.",
    },
    {
      icon: "❤️",
      title: "Healthcare Provider Collaboration",
      description:
        "Our system enables healthcare providers to share patient data securely, improving communication and collaboration. This ensures more coordinated care and better health outcomes for patients.",
    },
  ];

  return (
    <section className="py-16 md:px-20 px-4 bg-gray-50  " id="services">
      <div className="container mx-auto px-4">
        <div className="flex flex-col mb-16">
          <span className="text-blue-500 mb-4">Our Services</span>
          <div className="flex justify-between items-start">
            <h2 className="text-4xl font-bold max-w-3xl mx-auto my-8">
            Comprehensive, quality-driven solutions to streamline healthcare management and enhance patient experiences.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2   w-[80%] gap-4 mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex  gap   h-[225px] bg-white pt-4 pl-4 gap-10 rounded "
            >
              <div className="w-12 ">{service.icon}</div>
              <div className= 'flex-1  flex flex-col justify-end gap-2'>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button className="bg-gray-100 w-12 h-12  self-end flex items-center justify-center hover:bg-gray-200">
                  →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
