import React from 'react';
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const PartOfChange = () => {
  return (
    <section id="join-movement" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Be a Part of the Change</h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-12 max-w-3xl mx-auto">
              Join us in creating a world of equal opportunities for persons with disabilities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg">
                Volunteer with Us
              </button>
              <button className="bg-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg">
                Donate Now
              </button>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Social Media Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us on Social Media</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Stay updated with our latest initiatives, events, and impact stories. Connect with us on social media:
              </p>
              
              <div className="space-y-4">
                <a href="#" className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <Facebook className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-gray-900">Facebook</div>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-4 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors group">
                  <Instagram className="w-6 h-6 text-pink-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-gray-900">Instagram</div>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-4 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors group">
                  <Youtube className="w-6 h-6 text-red-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-gray-900">YouTube</div>
                  </div>
                </a>
                
                <a href="#" className="flex items-center space-x-4 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group">
                  <Linkedin className="w-6 h-6 text-blue-700 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-gray-900">LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Contact Section */}
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/40 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Address</div>
                    <div className="text-gray-600 leading-relaxed">
                      J-54, First floor, near Vardhman Tower,<br />
                      Vikas Puri, Delhi West,<br />
                      Delhi-110018
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Phone</div>
                    <a href="tel:+919915670267" className="text-green-600 hover:text-green-700 font-medium">
                      +91 9915670267
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">Email</div>
                    <a href="mailto:contact@mad-foundation.org" className="text-blue-600 hover:text-blue-700 font-medium">
                      contact@mad-foundation.org
                    </a>
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

export default PartOfChange;