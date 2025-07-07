import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function contact() {
  
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
                <a href="/main" className="text-white hover:text-black">Home</a>
                <a href="/items" className="text-white hover:text-black">Items</a>
                <a href="/contact" className="text-white hover:text-black">Contact</a>
                <a href="/login" className="text-white hover:text-black">Sign</a>
              </div>
            </div>
          </div>
    
         
          {isOpen && (
            <div className="md:hidden bg-red-500 px-4 pb-4 space-y-2 font-bold">
              <a href="/main" className="block text-white hover:text-black">Home</a>
              <a href="/items" className="block text-white hover:text-black">Items</a>
              <a href="/contact" className="block text-white hover:text-black">Contact</a>
              <a href="/login" className="block text-white hover:text-black">Sign</a>
            </div>
          )}
        </nav>

      <div className="pt-24 px-6 md:px-20">
        <h1 className="text-4xl font-extrabold text-center text-red-600 mb-4 font-serif">Contact Us</h1>
        <p className="text-center text-gray-600 mb-10">We'd love to hear from you! Fill out the form below to get in touch.</p>

        <form className="max-w-2xl mx-auto bg-white p-10 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer className="mt-20">
        <div className="bg-red-500 text-white flex items-center justify-center h-14">
          <p className="text-sm">© 2025 Zing Grill. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}



export default contact