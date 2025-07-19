import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function login() {
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
               <Link to="/login" className="text-white hover:text-black">SignIn</Link>
             </div>
           </div>
         </div>
   
         {isOpen && (
           <div className="lg:hidden md:text-6xl md:mt-3 bg-red-500 px-4 pb-4 space-y-5 font-bold">
             <Link to="/main" className="block text-white hover:text-black">Home</Link>
             <Link to="/items" className="block text-white hover:text-black">Items</Link>
             <Link to="/contact" className="block text-white hover:text-black">Contact</Link>
             <Link to="/login" className="block text-white hover:text-black">Sign In</Link>
           </div>
         )}
       </nav>
  

     
      <div className="min-h-screen   flex items-center justify-center bg-gradient-to-br bg-white lg:pt-20 md:pt-16 px-4">
        <div className="bg-white md:w-[830px] lg:w-[600px] lg:h-[500px] md:h-[800px] shadow-2xl rounded-2xl lg:w-sm p-8">
          <h2 className="lg:text-3xl md:text-6xl font-extrabold text-center text-red-600 font-serif">Sign In to Zing Grill</h2>
          <p className="text-center text-gray-600 lg:text-sm md:text-3xl mt-4 mb-6">Welcome back! Please enter your credentials</p>

          <form className="space-y-6">
            <div>
              <label className="block lg:text-sm md:text-5xl font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-3  block w-full lg:px-4 md:text-4xl lg:text-lg lg:py-2 md:px-5 md:py-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
              />
            </div>

            <div>
              <label className="block lg:text-sm md:text-5xl font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="mt-3 outline-none md:text-4xl lg:text-lg block w-full lg:px-4 lg:py-2 md:px-5 md:py-6 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center md:text-4xl lg:text-lg ">
                <input type="checkbox" className="scale-150 lg:h-3 lg:w-4 md:h-6 md:w-6 mr-10 sm:h-2 sm:w-2 " />
                Remember me
              </label>
              <a href="#" className="text-red-500 hover:underline md:text-4xl lg:text-lg">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white md:pt-3 md:text-5xl lg:text-lg lg:py-2 md:py-6 rounded-md hover:bg-red-600 transition duration-300 font-semibold"
            >
              Sign In
            </button>
          </form>

          <p className="text-center lg:text-sm md:text-3xl text-gray-600 mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-red-500 font-medium hover:underline">Create one</a>
          </p>
        </div>
      </div>

    
      <footer className="bg-red-500 text-white text-center py-3 mt-10">
        <p>© 2025 Zing Grill. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default login;
