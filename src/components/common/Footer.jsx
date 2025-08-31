// src/components/common/Footer.jsx
import React from 'react';
import { Phone, Mail, Facebook, Instagram, Youtube, Linkedin, Accessibility } from 'lucide-react';
import { Link } from "react-router-dom"; // ✅ For navigation

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, name: "Facebook", href: "https://www.facebook.com/profile.php?id=61568907583148", color: "text-blue-400 hover:text-blue-300" },
    { icon: Instagram, name: "Instagram", href: "https://www.instagram.com/madfoundation85", color: "text-pink-400 hover:text-pink-300" },
    { icon: Youtube, name: "YouTube", href: "https://www.youtube.com/channel/UCCfkHNrVJVYxdpkM4TPTfjg", color: "text-red-400 hover:text-red-300" },
    { icon: Linkedin, name: "LinkedIn", href: "https://www.linkedin.com/company/madfoundationorg/", color: "text-blue-500 hover:text-blue-400" }
  ];

  const policyLinks = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms-conditions" },
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <Accessibility className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold">MAD Foundation</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Empowering lives, creating opportunities for persons with disabilities through education, employment, skill-development and livelihood.
              </p>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a href="tel:+919915670267" className="text-gray-300 hover:text-white transition-colors text-sm">
                    +91 9915670267
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a href="mailto:contact@mad-foundation.org" className="text-gray-300 hover:text-white transition-colors text-sm">
                    contact@mad-foundation.org
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h4>
              <div className="flex space-x-4">
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
              <p className="text-gray-400 text-xs mt-3">
                Stay updated with our latest initiatives, events, and impact stories              </p>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
              <ul className="space-y-2">
                {policyLinks.map((link, i) => (
                  <li key={i}>
                    <Link 
                      to={link.path} 
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              Copyright © 2025 MAD Foundation. All rights reserved.
              By using this website, you agree to our Privacy and Policy and Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
