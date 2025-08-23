import React, { useState } from 'react';
import { Users, Heart, BookOpen, Send, CheckCircle, Phone, Mail, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

const JoinProjects = () => {
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
      console.log('Project inquiry submitted:', formData);
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

  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "#facebook", color: "text-blue-400 hover:text-blue-300" },
    { icon: Instagram, name: "Instagram", href: "#instagram", color: "text-pink-400 hover:text-pink-300" },
    { icon: Youtube, name: "YouTube", href: "#youtube", color: "text-red-400 hover:text-red-300" },
    { icon: Linkedin, name: "LinkedIn", href: "#linkedin", color: "text-blue-500 hover:text-blue-400" }
  ];

  if (isSubmitted) {
    return (
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
              <p className="text-gray-600">We'll get back to you about collaboration opportunities soon.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Us in Making a Difference</h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              We believe in the power of collective effort. Your involvement helps build a more inclusive society.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Action Buttons */}
            <div className="lg:col-span-1 space-y-6">
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Join as Volunteer</h4>
                      <p className="text-blue-200 text-sm">Make a direct impact</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Donate</h4>
                      <p className="text-blue-200 text-sm">Support our initiatives</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Internships</h4>
                      <p className="text-blue-200 text-sm">Learn and contribute</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4 mb-4">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a 
                        key={index}
                        href={social.href} 
                        className={`${social.color} transition-colors`}
                        aria-label={social.name}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                  Follow Us Now
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get in Touch with Us</h3>
                <p className="text-gray-600 mb-6 text-sm">Fill out the form below, and our team will reach out to you.</p>
                
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    placeholder="Email ID"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-sm"
                    required
                  />

                  <textarea
                    name="message"
                    placeholder="Message"
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
                        <span>Submit</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Our team will review your message and respond promptly.</span>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-3 h-3" />
                        <span>+91 9915670267</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-3 h-3" />
                        <span>madfoundation704@gmail.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinProjects;