// src/components/common/Header.jsx
import React, { useState } from 'react';
import { Menu, X, Accessibility, User, UserPlus, ChevronDown, Users, Briefcase, Heart, Image, Sparkles } from 'lucide-react';

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
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <Accessibility className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">MAD Foundation</h1>
              <p className="text-sm text-gray-600">My Action for the Disabled</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => navigateTo('projects')} className="text-gray-700 hover:text-blue-600 transition-colors">Projects</button>
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

            {/* Join Us Dropdown - Hover Triggered */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors">
                <span>Join Us</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <button
                  onClick={() => handleJoinUsClick('volunteer')}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Users className="w-4 h-4" />
                  <span>Volunteer</span>
                </button>
                <button
                  onClick={() => handleJoinUsClick('intern')}
                  className="w-full flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Intern</span>
                </button>
              </div>
            </div>

            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
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
              <button onClick={() => navigateTo('home')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Home</button>
              <button onClick={() => navigateTo('about')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">About</button>
              <button onClick={() => navigateTo('projects')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">Projects</button>
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

              {/* Mobile Join Us Section */}
              <div className="border-t border-gray-200 pt-3">
                <p className="text-sm font-semibold text-gray-500 mb-2">Join Us</p>
                <div className="pl-4 space-y-2">
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
                </div>
              </div>

              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>

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
