import { useState } from "react";

function Plans() {
  const [activeTab, setActiveTab] = useState("woman");

  const tabs = [
    { id: "woman", label: "Medoc for Providers" },
    { id: "cancer", label: "Medoc for Patients" },
    { id: "kids", label: "Medoc Health Data Management System" },
  ];

  const products = [
    {
      id: "woman",
      name: "Medoc for Providers",
      description:
        "A comprehensive platform for healthcare providers to manage data, offer remote care, and enhance patient outcomes.",
      key_features: [
        "Patient Data Management - Centralized, secure storage of patient records, diagnoses, and treatment plans.",
        "Remote Consultations - Enables video consultations with patients for convenience and flexibility.",
        "Appointment Scheduling - Easy-to-use scheduling tools for managing appointments and patient reminders.",
        "Collaborative Tools - Secure sharing of patient data among multiple healthcare providers for better care coordination.",
        "Data Analytics - Insights and reports to help providers track patient progress and improve care strategies.",
      ],
    },
    {
      id: "cancer",
      name: "Medoc for Patients",
      description:
        "A mobile app that puts healthcare in the hands of patients, offering easy access to health records, remote consultations, and more.",
      key_features: [
        "Health Record Access - Patients can view and manage their medical history, appointments, and test results.",
        "Remote Consultations - Schedule and attend virtual consultations with healthcare providers from anywhere.",
        "Appointment Booking - Easily book, reschedule, or cancel appointments with healthcare providers.",
        "Prescription Management - View prescriptions and refill requests directly through the app.",
        "Health Reminders - Receive reminders for appointments, medications, and follow-up care.",
      ],
    },
    {
      id: "kids",
      name: "Medoc Health Data Management System",
      description:
        "A secure system for storing, managing, and sharing patient data to ensure efficient healthcare delivery.",
      key_features: [
        "Centralized Patient Records - Secure and accessible storage for comprehensive patient data.",
        "HIPAA Compliant Security - Ensures patient data is protected with top-tier encryption and privacy practices.",
        "Real-Time Data Sharing - Enables secure, real-time sharing of patient data among authorized providers.",
        "Data Analytics & Reporting - Powerful tools to analyze patient trends and care outcomes.",
        "Integration with Other Systems - Seamlessly integrates with existing healthcare systems and software for smooth data flow.",
      ],
    },
  ];

  const activeProduct = products.find((product) => product.id === activeTab);

  return (
    <section className="py-16 px-4 md:px-20" id="plans">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Medoc Plans</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Empowering healthcare providers and patients with innovative solutions
          for better care, management, and communication."
        </p>

        {/* Tabs */}
        <div className=" justify-center gap-4 mb-16 bg-white shadow-md rounded-lg inline-flex py-2 px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg transition-colors ${
                activeTab === tab.id
                  ? "bg-primary text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-16 items-center">
          {/* Left Content */}
          <div className="text-left space-y-6 max-w-[750px]">
            <div className="inline-block p-3 bg-primary rounded-full">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </div>
            <h3 className="text-3xl font-bold">{activeProduct?.name}</h3>
            <p className="text-gray-600">{activeProduct?.description}</p>

            <ul className="space-y-3">
              {activeProduct?.key_features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-[#14a090] transition-colors">
              Try it out 
            </button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className=" absolute bottom-0 right-0 w-2/4 h-1/2 rounded-tl-[100px] -z-10 "></div>
            <img
              src="/plans.png"
              alt="Doctor with laptop"
              className="relative z-10 w-auto h-[450px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plans;
