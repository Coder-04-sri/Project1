import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function login() {
   const [isOpen, setIsOpen] = useState(false);
    
      return (
        <>
        <nav className="bg-red-500 fixed top-0 w-full z-10 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-14 items-center">
              
             <div className="text-white font-bold text-lg lg:hidden">
                  <Link to="/main">Zing Grill</Link>
                </div>
    
              
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="text-white focus:outline-none text-2xl"
                >
                  ☰
                </button>
              </div>
    
             
           
              <div className="lg:space-x-80 lg:ml-10 hidden md:flex space-x-10 font-bold">
                <Link to="/main" className="text-white hover:text-black">Home</Link>
                <Link to="/items" className="text-white hover:text-black">Items</Link>
                <Link to="/contact" className="text-white hover:text-black">Contact</Link>
                <Link to="/login" className="text-white hover:text-black">Sign</Link>
              </div>
            </div>
          </div>
    
         
          {isOpen && (
            <div className="md:hidden bg-red-500 px-4 pb-4 space-y-2 font-bold">
              <Link to="/main" className="block text-white hover:text-black">Home</Link>
              <Link to="/items" className="block text-white hover:text-black">Items</Link>
              <Link to="/contact" className="block text-white hover:text-black">Contact</Link>
              <Link to="/login" className="block text-white hover:text-black">Sign</Link>
            </div>
          )}
        </nav>

     
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br bg-white pt-20 px-4">
        <div className="bg-white shadow-2xl rounded-2xl w-full max-w-md p-8">
          <h2 className="text-3xl font-extrabold text-center text-red-600 font-serif">Sign In to Zing Grill</h2>
          <p className="text-center text-gray-600 text-sm mt-2 mb-6">Welcome back! Please enter your credentials</p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-red-500 hover:underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 font-semibold"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-red-500 font-medium hover:underline">Create one</a>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-500 text-white text-center py-3 mt-10">
        <p>© 2025 Zing Grill. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default login;
