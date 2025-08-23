import React from 'react';
import { Bell, Users, Target, Calendar } from 'lucide-react';

const NewsContent = () => {
  return (
    <section id="news-content" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stay Updated with My Action for the Disabled Foundation</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                At My Action for the Disabled Foundation (MAD Foundation), we are constantly working on new initiatives, organizing events, and expanding our impact. Stay informed about our latest programs, success stories, upcoming events, and important announcements.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our updates keep you connected with the progress we're making in disability empowerment, accessibility initiatives, and inclusion advocacy. Be the first to know about new opportunities, community events, and inspiring achievements.
              </p>

              {/* Key Update Areas */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Bell className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Latest program launches and initiative updates</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Calendar className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Upcoming events and workshop announcements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Users className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Success stories and community achievements</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                    <Target className="text-white w-3 h-3" />
                  </div>
                  <p className="text-gray-700">Important policy changes and advocacy milestones</p>
                </div>
              </div>

              <button
                onClick={() => {
                  const formSection = document.getElementById('news-submit');
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600  text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Subscribe for Updates
              </button>
            </div>

            {/* News Visual */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Team meeting discussing latest MAD Foundation initiatives"
                  className="w-full h-64 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-bold">Latest Updates</h3>
                  <p className="text-sm text-gray-200">Stay informed about our progress</p>
                </div>
              </div>

              {/* Update Type Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <Bell className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Announcements</h4>
                  <p className="text-sm text-gray-600">Important updates and news releases</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <Calendar className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Events</h4>
                  <p className="text-sm text-gray-600">Upcoming workshops and gatherings</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <Users className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Success Stories</h4>
                  <p className="text-sm text-gray-600">Inspiring achievements and milestones</p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200">
                  <Target className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-gray-900 mb-2">Impact Updates</h4>
                  <p className="text-sm text-gray-600">Progress reports and outcomes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsContent;