import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have questions or want to get in touch with us? Fill out the form below or reach us directly.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <input
            type="email"
            placeholder="Email ID"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
          <select
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
            required
            defaultValue=""
          >
            <option value="" disabled>Select Subject</option>
            <option value="general-inquiry">General Inquiry</option>
            <option value="volunteering">Volunteering</option>
            <option value="internship">Internship</option>
            <option value="partnership">Partnership</option>
            <option value="donation">Donation</option>
            <option value="other">Other</option>
          </select>
          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-6 text-gray-700">
          <div>
            <p className="font-semibold text-gray-900 mb-2">Email:</p>
            <a href="mailto:contact@mad-foundation.org" className="text-blue-600 hover:text-blue-700 underline">
              contact@mad-foundation.org
            </a>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900 mb-2">Phone:</p>
            <a href="tel:+919915670267" className="text-blue-600 hover:text-blue-700 underline">
               +91 9915670267
            </a>
          </div>
          
          <div>
            <p className="font-semibold text-gray-900 mb-2">Address:</p>
            <p className="leading-relaxed">
              J-54, First floor, near Vardhman Tower,<br />
              Vikas Puri, Delhi West,<br />
              Delhi-110018, India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;