import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-b from-blue-50 to-white py-16  px-40">
        <div className="container mx-auto px-4 mt-20">
          <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col md:flex-row gap-8">
            {/* Form Section */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-4">Leave us a message</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="First_Name Last_Name"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Your Message"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
                >
                  Send
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="flex-1 space-y-4">
              <h2 className="text-2xl font-bold text-blue-600">Get In Touch</h2>
              <div className="flex items-center gap-2">
                <MapPinIcon className="h-5 w-5 text-blue-600" />
                <span>
                 Kigali, Rwanda
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneIcon className="h-5 w-5 text-blue-600" />
                <span>+250725541525</span>
              </div>
              <div className="flex items-center gap-2">
                <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                <span>sewasejo8@gmail.com</span>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="https://www.instagram.com/direct/new/?username=s_angel.11" className="text-blue-600 hover:underline">
                  Instagram
                </a>
                <a href="https://www.linkedin.com/in/sewase-angel-416346299/" className="text-blue-600 hover:underline">
                  linkedin
                </a>
                <a href="https://x.com/angel_sewase" className="text-blue-600 hover:underline">
                  Twitter
                </a>
              </div>
              <div className="mt-4">
                <img
                  src="/map.png"
                  alt="Map"
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
