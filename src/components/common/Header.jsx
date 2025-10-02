import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, User, UserPlus, Users, Briefcase, Heart, Image, Sparkles, Phone, Handshake, Home, Info, Target, LogOut, Settings, ChevronDown,Shield } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const Header = ({ openAuthModal }) => {
  // Mock auth hook for demo - replace with your actual useAuth hook
  
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus first menu item when menu opens
      const firstMenuItem = menuRef.current?.querySelector('button, a');
      firstMenuItem?.focus();
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const navigateTo = (page) => {
    if (page === 'home') {
      navigate('/');
    } else if (page === 'about') {
      navigate('/about');
    } else if (page === 'projects') {
      navigate('/projects');
    } else if (page === 'donate') {
      navigate('/donate');
    } else if (page === 'gallery') {
      navigate('/gallery-page');
    } else if (page === 'whatsnew') {
      navigate('/what-new');
    } else if (page === 'contact') {
      navigate('/contact');
    } else if (page === 'collaborate') {
      navigate('/collaborate');
    } else if (page === 'events&campaigns') {
      navigate('/events&campaigns');
    } else if (page === 'admin') {
      navigate('/admin');
    }
  };

  const handleJoinUsClick = (type) => {
    if (type === 'volunteer') {
      navigate('/volunteer');
    } else if (type === 'intern') {
      navigate('/intern');
    }
  };

 
  const handleLogout = () => {
    logout();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
     navigate('/');
  };

  // Get user's first name or username
  const getUserDisplayName = () => {
    if (!user) return '';
    return user.name ? user.name.split(' ')[0] : 'User';
  };

  // User dropdown menu component
  const UserDropdown = ({ isMobile = false }) => (
    <div className={`${isMobile ? 'relative' : 'absolute right-0 mt-2'} w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50`}>
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
        {user?.role === 'admin' && (
          <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold bg-purple-100 text-purple-800 rounded-full">
            Admin
          </span>
        )}
      </div>
      <div className="py-1">
        {/* Show Admin Dashboard link for admin users */}
        {user?.role === 'admin' && (
          <button
            onClick={() => { navigateTo('admin'); setIsUserMenuOpen(false); }}
            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 flex items-center space-x-2"
          >
            <Shield className="w-4 h-4" />
            <span>Admin Dashboard</span>
          </button>
        )}
        <button
          onClick={() => { 
            console.log('Navigate to profile');
            setIsUserMenuOpen(false);
          }}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
        >
          <Settings className="w-4 h-4" />
          <span>Profile Settings</span>
        </button>
        <button
          onClick={handleLogout}
          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center space-x-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
  return (
    <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 lg:py-6">
        <div className="flex justify-between items-center">
          {/* Logo - Responsive sizing */}
          <div className="flex items-center space-x-2 sm:space-x-3 cursor-pointer" onClick={() => navigateTo('home')}>
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden flex items-center justify-center bg-white shadow-lg border border-gray-100">
              <img 
                src="https://voh-buckets.s3.ap-south-1.amazonaws.com/stage/1756595178282%3A0.9684351400001376.png" 
                alt="MAD Foundation Logo - Navigate to homepage" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Hidden text for screen readers */}
            <span className="sr-only">MAD Foundation - Navigate to homepage</span>
          </div>

          {/* Desktop Navigation - Hidden on smaller screens due to many items */}
          <nav className="hidden xl:flex items-center space-x-4 2xl:space-x-6" role="navigation" aria-label="Main navigation">
            <button onClick={() => navigateTo('home')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Home className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Home</span>
            </button>
            <button onClick={() => navigateTo('about')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Info className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>About</span>
            </button>
            <button onClick={() => navigateTo('projects')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Target className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Projects</span>
            </button>
            <button onClick={() => navigateTo('donate')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Heart className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Donate</span>
            </button>
            <button onClick={() => navigateTo('gallery')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Image className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Gallery</span>
            </button>
            <button onClick={() => navigateTo('events&campaigns')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Sparkles className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Events & Campaigns</span>
            </button>

            {/* Separate Volunteer and Intern buttons */}
            <button
              onClick={() => handleJoinUsClick('volunteer')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base"
            >
              <Users className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Volunteer</span>
            </button>
            <button
              onClick={() => handleJoinUsClick('intern')}
              className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base"
            >
              <Briefcase className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Intern</span>
            </button>

            <button onClick={() => navigateTo('collaborate')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Handshake className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Collaborate</span>
            </button>

            <button onClick={() => navigateTo('contact')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm 2xl:text-base">
              <Phone className="w-3 h-3 2xl:w-4 2xl:h-4" aria-hidden="true" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Desktop Navigation for Large screens (but not XL) - Simplified */}
          <nav className="hidden lg:flex xl:hidden items-center space-x-3" role="navigation" aria-label="Main navigation">
            <button onClick={() => navigateTo('home')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm">
              <Home className="w-4 h-4" aria-hidden="true" />
              <span>Home</span>
            </button>
            <button onClick={() => navigateTo('about')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm">
              <Info className="w-4 h-4" aria-hidden="true" />
              <span>About</span>
            </button>
            <button onClick={() => navigateTo('projects')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm">
              <Target className="w-4 h-4" aria-hidden="true" />
              <span>Projects</span>
            </button>
            <button onClick={() => navigateTo('donate')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm">
              <Heart className="w-4 h-4" aria-hidden="true" />
              <span>Donate</span>
            </button>
            <button onClick={() => navigateTo('contact')} className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors text-sm">
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>Contact</span>
            </button>
          </nav>

          {/* Auth Section - Desktop */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            {isAuthenticated ? (
              /* Logged In User Menu */
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                  aria-expanded={isUserMenuOpen}
                  aria-haspopup="true"
                  aria-label={`User menu for ${getUserDisplayName()}`}
                >
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs sm:text-sm font-medium">
                    {getUserDisplayName().charAt(0).toUpperCase()}
                  </div>
                  <span className="hidden sm:block max-w-16 lg:max-w-24 truncate text-sm">{getUserDisplayName()}</span>
                  <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                
                {isUserMenuOpen && <UserDropdown />}
              </div>
            ) : (
              /* Not Logged In - Show Auth Buttons */
              <>
                <button 
                  onClick={() => openAuthModal('signin')}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                >
                  <User className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span className="hidden sm:block">Sign In</span>
                </button>
                <button 
                  onClick={() => openAuthModal('register')}
                  className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3 lg:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                >
                  <UserPlus className="w-3 h-3 sm:w-4 sm:h-4" aria-hidden="true" />
                  <span className="hidden sm:block">Register</span>
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button with enhanced accessibility */}
          <button 
            ref={hamburgerRef}
            className="lg:xl:hidden p-1"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" aria-hidden="true" />
            )}
            <span className="sr-only">
              {isMenuOpen ? "Close main menu" : "Open main menu with options: Home, About, Projects, Donate, Gallery, Events, Volunteer, Intern, Collaborate, Contact, and user account options"}
            </span>
          </button>
        </div>

        {/* Mobile Menu with enhanced accessibility */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            ref={menuRef}
            className="lg:xl:hidden mt-3 sm:mt-4 p-3 sm:p-4 bg-gray-50 rounded-lg"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            {/* Skip link for keyboard users */}
            <div className="sr-only">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-blue-600 underline"
              >
                Skip to main content
              </button>
            </div>

            <nav className="flex flex-col space-y-2 sm:space-y-3" role="list">
              <button 
                onClick={() => { navigateTo('home'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Home className="w-4 h-4" aria-hidden="true" />
                <span>Home</span>
              </button>
              
              <button 
                onClick={() => { navigateTo('about'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Info className="w-4 h-4" aria-hidden="true" />
                <span>About</span>
              </button>
              
              <button 
                onClick={() => { navigateTo('projects'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Target className="w-4 h-4" aria-hidden="true" />
                <span>Projects</span>
              </button>
              
              <button 
                onClick={() => { navigateTo('donate'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Heart className="w-4 h-4" aria-hidden="true" />
                <span>Donate</span>
              </button>
              
              <button 
                onClick={() => { navigateTo('gallery'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Image className="w-4 h-4" aria-hidden="true" />
                <span>Gallery</span>
              </button>
              
              <button 
                onClick={() => { navigateTo('events&campaigns'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                <span>Events & Campaigns</span>
              </button>

              {/* Separate Mobile Volunteer and Intern */}
              <button
                onClick={() => { handleJoinUsClick('volunteer'); setIsMenuOpen(false); }}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Users className="w-4 h-4" aria-hidden="true" />
                <span>Volunteer</span>
              </button>
              
              <button
                onClick={() => { handleJoinUsClick('intern'); setIsMenuOpen(false); }}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Briefcase className="w-4 h-4" aria-hidden="true" />
                <span>Intern</span>
              </button>

              <button 
                onClick={() => { navigateTo('collaborate'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Handshake className="w-4 h-4" aria-hidden="true" />
                <span>Collaborate</span>
              </button>

              <button 
                onClick={() => { navigateTo('contact'); setIsMenuOpen(false); }} 
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded p-1"
                role="listitem"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Contact</span>
              </button>

              {/* Mobile Auth Section */}
              <div className="pt-2 sm:pt-3 border-t border-gray-200" role="region" aria-label="User account options">
                {isAuthenticated ? (
                  /* Mobile - Logged In User */
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center space-x-3 px-2 py-2 bg-white rounded-lg">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        {getUserDisplayName().charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{user?.name || 'User'}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        {user?.role === 'admin' && (
                          <span className="inline-block mt-0.5 px-2 py-0.5 text-xs font-medium bg-purple-100 text-purple-800 rounded">
                            Admin
                          </span>
                        )}
                      </div>
                    </div>
                      {user?.role === 'admin' && (
                      <button
                        onClick={() => {
                          navigateTo('admin');
                          setIsMenuOpen(false);
                        }}
                        className="w-full flex items-center space-x-2 px-3 sm:px-4 py-2 text-purple-600 bg-white rounded-lg hover:bg-purple-50 text-sm"
                      >
                        <Shield className="w-4 h-4" />
                        <span>Admin Dashboard</span>
                      </button>
                    )}
                    
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        console.log('Navigate to profile');
                      }}
                      className="w-full flex items-center space-x-2 px-3 sm:px-4 py-2 text-gray-700 bg-white rounded-lg hover:bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      role="listitem"
                    >
                      <Settings className="w-4 h-4" aria-hidden="true" />
                      <span>Profile Settings</span>
                    </button>
                    
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-2 px-3 sm:px-4 py-2 text-red-600 bg-white rounded-lg hover:bg-red-50 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      role="listitem"
                    >
                      <LogOut className="w-4 h-4" aria-hidden="true" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                ) : (
                  /* Mobile - Not Logged In */
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                    <button 
                      onClick={() => {
                        openAuthModal('signin');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 px-4 py-2 text-blue-600 border border-blue-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      role="listitem"
                    >
                      <User className="w-4 h-4" aria-hidden="true" />
                      <span>Sign In</span>
                    </button>
                    <button 
                      onClick={() => {
                        openAuthModal('register');
                        setIsMenuOpen(false);
                      }}
                      className="flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      role="listitem"
                    >
                      <UserPlus className="w-4 h-4" aria-hidden="true" />
                      <span>Register</span>
                    </button>
                  </div>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
      
      {/* Click outside to close user menu */}
      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsUserMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;