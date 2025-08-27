// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Menu, X,  User, UserPlus, Users, Briefcase, Heart, Image, Sparkles, Phone, Handshake, Home, Info, Target } from 'lucide-react';

const Header = ({ openAuthModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigateTo = (page) => {
    if (page === 'home') {
      window.location.href = '/';
    } else if (page === 'about') {
      window.location.href = '/about';
    } else if (page === 'projects') {
      window.location.href = '/projects';
    } else if (page === 'donate') {
      window.location.href = '/donate';
    } else if (page === 'gallery') {
      window.location.href = '/gallery-page';
    } else if (page === 'whatsnew') {
      window.location.href = '/what-new';
    } else if (page === 'contact') {
      window.location.href = '/contact';
    } else if (page === 'collaborate') {
      window.location.href = '/collaborate';
    }
  };

  const handleJoinUsClick = (type) => {
    if (type === 'volunteer') {
      window.location.href = '/volunteer';
    } else if (type === 'intern') {
      window.location.href = '/intern';
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg border border-gray-100">
              <img 
                src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756323728209%3A0.6944437775580377.jpg" 
                alt="MAD Foundation Logo" 
                className="w-14 h-14 object-contain"
              />
            </div>
           
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => navigateTo('home')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </button>
            <button onClick={() => navigateTo('about')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Info className="w-4 h-4" />
              <span>About</span>
            </button>
            <button onClick={() => navigateTo('projects')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Target className="w-4 h-4" />
              <span>Projects</span>
            </button>
            <button onClick={() => navigateTo('donate')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Heart className="w-4 h-4" />
              <span>Donate</span>
            </button>
            <button onClick={() => navigateTo('gallery')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Image className="w-4 h-4" />
              <span>Gallery</span>
            </button>
            <button onClick={() => navigateTo('whatsnew')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Sparkles className="w-4 h-4" />
              <span>What's New</span>
            </button>

            {/* Separate Volunteer and Intern buttons */}
            <button
              onClick={() => handleJoinUsClick('volunteer')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>Volunteer</span>
            </button>
            <button
              onClick={() => handleJoinUsClick('intern')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Briefcase className="w-4 h-4" />
              <span>Intern</span>
            </button>

            <button onClick={() => navigateTo('collaborate')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Handshake className="w-4 h-4" />
              <span>Collaborate</span>
            </button>

            <button onClick={() => navigateTo('contact')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </button>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button 
              onClick={() => openAuthModal('signin')}
              className="flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
            >
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </button>
            <button 
              onClick={() => openAuthModal('register')}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-gray-50 rounded-lg">
            <nav className="flex flex-col space-y-3">
              <button onClick={() => navigateTo('home')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button onClick={() => navigateTo('about')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Info className="w-4 h-4" />
                <span>About</span>
              </button>
              <button onClick={() => navigateTo('projects')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Target className="w-4 h-4" />
                <span>Projects</span>
              </button>
              <button onClick={() => navigateTo('donate')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Heart className="w-4 h-4" />
                <span>Donate</span>
              </button>
              <button onClick={() => navigateTo('gallery')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Image className="w-4 h-4" />
                <span>Gallery</span>
              </button>
              <button onClick={() => navigateTo('whatsnew')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Sparkles className="w-4 h-4" />
                <span>What's New</span>
              </button>

              {/* Separate Mobile Volunteer and Intern */}
              <button
                onClick={() => handleJoinUsClick('volunteer')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Users className="w-4 h-4" />
                <span>Volunteer</span>
              </button>
              <button
                onClick={() => handleJoinUsClick('intern')}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
              >
                <Briefcase className="w-4 h-4" />
                <span>Intern</span>
              </button>

              <button onClick={() => navigateTo('collaborate')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Handshake className="w-4 h-4" />
                <span>Collaborate</span>
              </button>

              <button onClick={() => navigateTo('contact')} className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4" />
                <span>Contact</span>
              </button>

              <div className="flex space-x-3 pt-3 border-t border-gray-200">
                <button 
                  onClick={() => openAuthModal('signin')}
                  className="flex items-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg"
                >
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </button>
                <button 
                  onClick={() => openAuthModal('register')}
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Register</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;