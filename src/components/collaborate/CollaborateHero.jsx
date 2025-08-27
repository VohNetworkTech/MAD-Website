import React from 'react';
import { Handshake, Users, Target, Building } from 'lucide-react';

const CollaborateHero = () => {
  return (
    <section className="relative h-[70vh] min-h-[600px] overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-32 left-24 w-24 h-24 border-2 border-white rounded-full"></div>
        <div className="absolute top-20 right-32 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-24 right-24 w-20 h-20 border-2 border-white rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Collaborations</span>
              <br />& Partnerships
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
              Working Together for Inclusion
            </p>
          </div>

          {/* Partnership Focus Areas */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Building className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Corporate</div>
              <div className="text-blue-200">Partnerships</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">NGO</div>
              <div className="text-blue-200">Alliances</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Target className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Government</div>
              <div className="text-blue-200">Collaboration</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <Handshake className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">Institution</div>
              <div className="text-blue-200">Networks</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborateHero;