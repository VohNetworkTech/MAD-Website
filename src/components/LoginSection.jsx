import React, { useState } from 'react';

const LoginSection = () => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted:', loginData);
    alert('Login functionality will be implemented soon!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Register & Sign In</h2>
          <p className="text-gray-600 text-center mb-8">Join our community of changemakers</p>
          
          <div className="text-center mb-6">
            <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
              Register Now
            </button>
          </div>

          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Sign In:</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={loginData.username}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                />
              </div>
              <button
                onClick={handleLoginSubmit}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Sign In
              </button>
              <div className="text-center">
                <a href="#forgot" className="text-blue-600 hover:text-blue-700 text-sm transition-colors">
                  Forgot Password?
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;