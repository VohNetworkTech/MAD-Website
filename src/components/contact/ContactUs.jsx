import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8 md:p-12">
      <h1 className="text-3xl font-bold mb-6 text-blue">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        Have questions or want to get in touch with us? Fill out the form below or reach us directly.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8E1C30]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8E1C30]"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#8E1C30]"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="space-y-4 text-gray-700">
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@mad-foundation.org" className="text-blue-600 underline">
              contact@mad-foundation.org
            </a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+911234567890" className="text-blue-600 underline">
              +91 12345 67890
            </a>
          </p>
          <p>
            <strong>Address:</strong>  
            MAD Foundation Office,  
            123 Main Street,  
            New Delhi, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
