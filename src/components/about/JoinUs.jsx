// src/components/about/JoinUs.jsx
import React, { useState } from 'react';
import { Heart, Users, BookOpen, Send, CheckCircle, Phone, Mail } from 'lucide-react';

const JoinUs = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Join us form submitted:', formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({ fullName: '', email: '', mobile: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const joinOptions = [
    { icon: Users, title: "Volunteer", description: "Join our volunteer team", color: "blue" },
    { icon: Heart, title: "Donate", description: "Support our mission", color: "red" },
    { icon: BookOpen, title: "Programs", description: "Explore our initiatives", color: "green" }
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
              <p className="text-gray-600">We'll get back to you soon.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Our Mission</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Together, we can create meaningful change for persons with disabilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left Side - Options & Contact */}
            <div className="space-y-6">
              {/* Action Cards */}
              <div className="grid grid-cols-3 gap-4">
                {joinOptions.map((option, index) => {
                  const IconComponent = option.icon;
                  const colorMap = {
                    blue: "bg-blue-600 hover:bg-blue-700",
                    red: "bg-red-600 hover:bg-red-700", 
                    green: "bg-green-600 hover:bg-green-700"
                  };
                  
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                      <div className={`w-12 h-12 ${colorMap[option.color]} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-white font-semibold text-sm mb-1">{option.title}</h4>
                      <p className="text-blue-200 text-xs">{option.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Contact Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-blue-300" />
                    <a href="tel:+919915670267" className="text-blue-100 hover:text-white transition-colors text-sm">
                      +91 9915670267
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-blue-300" />
                    <a href="mailto:madfoundation704@gmail.com" className="text-blue-100 hover:text-white transition-colors text-sm">
                      madfoundation704@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                    required
                  />
                  <input
                    type="tel"
                    name="mobile"
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    className="px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                    required
                  />
                </div>

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                  required
                />

                <textarea
                  name="message"
                  placeholder="How would you like to get involved?"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none text-sm"
                  required
                ></textarea>

                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;