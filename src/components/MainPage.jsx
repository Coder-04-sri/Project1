import React from 'react';
import image1 from '../images/img1.png';
import aboutimg from '../images/about.jpeg';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import  { useState } from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    const stars = [];

    for (let i = 0; i < full; i++) stars.push(<FaStar key={'f' + i} className="text-yellow-400" />);
    if (half) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    for (let i = 0; i < empty; i++) stars.push(<FaRegStar key={'e' + i} className="text-yellow-400" />);

    return stars;
  };
   
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <nav className="bg-red-500 fixed top-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between lg:h-14 md:h-32 items-center">
          
         

          
          <div className="md:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none md:text-7xl"
            >
              ☰
            </button>
          </div>

         
          
                        <div className="lg:space-x-80 lg:ml-10 hidden md:flex space-x-10  lg:text-xl md:text-5xl md:space-x-20  md:ml-16 font-bold">
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
  




      <div className="lg:mt-10 md:mt-16 bg-gradient-to-l from-red-500 to-red-500 lg:h-[620px] md:h-[800px] rounded-b-[15%] md:rounded-b-[50%] relative">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-12 md:py-0 h-full">
          <img
            src={image1}
            alt="Main"
            className=" rounded-full w-72 h-72 md:h-[500px] md:w-[500px] object-cover shadow-lg"
          />
          <div className="text-white text-center md:text-left font-title">
            <h1 className="lg:text-9xl md:text-9xl">Zing</h1>
            <h2 className="lg:text-8xl md:text-9xl font-mono mt-2 md:mt-4">Grill</h2>
            <p className="mt-6 text-lg md:text-4xl font-medium tracking-wide md:mr-3">Time to Feed Yourself</p>
          </div>
        </div>
      </div>

      
      <div className=" md:grid lg:flex flex-col md:flex-row items-center justify-center lg:gap-10 py-20 px-6 md:px-16 md:mr-5">
        <p className="w-full lg:text-2xl md:text-4xl md:w-1/1 text-lg leading-relaxed tracking-wider text-gray-700 text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque autem delectus aspernatur nisi quisquam
          neque rerum, similique fugit tenetur repellat, deleniti numquam quo soluta excepturi deserunt nesciunt...
        </p>
        <div className="clip-custom  ">
          <img
            src={aboutimg}
            alt="About"
            className=" lg:w-72 lg:h-72 md:w-[800px] md:mt-10 md:h-[800px] object-cover rounded-xl shadow-md"
          />
        </div>
      </div>

     
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-24 text-center text-2xl md:text-4xl font-serif font-extrabold tracking-wide mt-10 px-4">
        <div className="flex flex-col items-center">
          <span className="text-gray-600 text-lg md:text-2xl">Customer</span>
          <span className="text-red-500 text-3xl md:text-5xl mt-1">200+</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-600 text-lg md:text-2xl">Year</span>
          <span className="text-red-500 text-3xl md:text-5xl mt-1">3+</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gray-600 text-lg md:text-2xl mb-1">Ratings</span>
          <div className="flex items-center justify-center gap-2 mt-1">
            {renderStars(4.5)}
            <span className="text-red-500 text-2xl md:text-3xl ml-2">4.5+</span>
          </div>
        </div>
      </div>

     
      <footer className="mt-24">
        <div className="bg-red-500 flex items-center justify-center text-white lg:h-14 md:h-20">
          <a href="/items" className="font-mono md:text-6xl lg:p-0 md:p-3 lg:text-4xl hover:underline">See more items!</a>
        </div>
      </footer>
    </>
  );
}

export default MainPage;
