import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function contact() {
  
 const [isOpen, setIsOpen] = useState(false);
    
      return (
        <>
       <nav className="bg-red-500 fixed top-0 w-full z-10 shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between  lg:h-14 md:h-28 items-center">
          
                    
                    <div className="text-white font-bold lg:text-lg lg:hidden md:text-6xl">
                      <Link to="/main">Zing Grill</Link>
                    </div>
          
                    
                    <div className="lg:hidden md:mr-12 lg:mr-0">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="text-white md:text-6xl focus:outline-none"
                      >
                        ☰
                      </button>
                    </div>
          
                    <div className="hidden  text-lg lg:flex lg:space-x-80 lg:ml-10 space-x-10 font-bold">
                      <Link to="/main" className="text-white hover:text-black">Home</Link>
                      <Link to="/items" className="text-white hover:text-black">Items</Link>
                      <Link to="/contact" className="text-white hover:text-black">Contact</Link>
                      <Link to="/login" className="text-white hover:text-black">SignIn </Link>
                    </div>
                  </div>
                </div>
          
                
                {isOpen && (
                  <div className="lg:hidden md:text-5xl md:mt-3 bg-red-500 px-4 pb-4 space-y-4 font-bold">
                    <Link to="/main" className="block text-white hover:text-black">Home</Link>
                    <Link to="/items" className="block text-white hover:text-black">Items</Link>
                    <Link to="/contact" className="block text-white hover:text-black">Contact</Link>
                    <Link to="/login" className="block text-white hover:text-black">Sign In</Link>
                  </div>
                )}
              </nav>
         
       
  

      <div className="lg:pt-24 md:pt-48 lg:mt-0 md:mt-10 px-6 md:px-20">
        <h1 className="lg:text-4xl  md:text-6xl font-extrabold text-center text-red-600 mb-4 font-serif">Contact Us</h1>
        <p className="text-center lg:text-lg md:text-3xl text-gray-600 mb-10">We'd love to hear from you! Fill out the form below to get in touch.</p>

        <form className="lg:w-2xl lg:mt-0 md:mt-10 md:w-3xl mx-auto bg-white p-10 rounded-xl shadow-md lg:space-y-6 md:space-y-10">
          <div>
            <label className="block mb-1 lg:text-lg md:text-4xl font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300  lg:text-sm md:text-4xl rounded-md px-4 lg:py-2 md:py-6 outline-none  focus:ring-0 focus:outline-none "
            />
          </div>
          <div>
            <label className="block mb-1 lg:text-lg md:text-4xl font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border lg:text-sm md:text-4xl  border-gray-300 rounded-md px-4 lg:py-2 md:py-6  outline-none focus:ring-0 focus:ring-red-400"
            />
          </div>
          <div>
            <label className="block mb-1 lg:text-lg md:text-4xl font-semibold text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="w-full border border-gray-300  lg:text-sm md:text-4xl  rounded-md px-4 lg:py-2 md:py-6 outline-none focus:ring-0"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full lg:text-lg md:text-4xl bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition duration-300 font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>

     
      <footer className="lg:mt-24 md:mt-[1000px] ">
        <div className="bg-red-500 text-white flex items-center justify-center h-14">
          <p className="lg:text-sm md:text-4xl">© 2025 Zing Grill. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}



export default contact