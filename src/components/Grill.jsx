

import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';

import HawaiianStyleGrill from '../grill/HawaiianStyleGrill.jpg';
import ThaiStyleGrill from '../grill/ThaiStyleGrill.jpg';
import MexicanChipotle from '../grill/MexicanChipotle.jpg';
import PeriPeri from '../grill/PeriPeri.jpg';
import KoreanStyleBBQ from '../grill/KoreanStyleBBQ.jpg';
import IndianTandoori from '../grill/IndianTandoori.jpg';
import LemonRosemary from '../grill/LemonRosemary.jpg';
import JamaicanJerk from '../grill/JamaicanJerk.jpg';

const GrillItems = [
  { name: 'Korean-Style BBQ Chicken', image:  KoreanStyleBBQ,   price:'$25'},
  { name: 'Jamaican Jerk Chicken', image:JamaicanJerk, price:'$25' },
  { name: 'Indian Tandoori Chicken', image: IndianTandoori ,price:'$25'},
  { name: 'Mexican Chipotle Chicken', image: MexicanChipotle, price:'$25' },
  { name: 'Peri Peri Chicken', image: PeriPeri,   price:'$25' },
  { name: 'Hawaiian-Style Grilled Chicken', image:HawaiianStyleGrill  , price:'$25'},
  { name: 'Lemon Rosemary Chicken', image: LemonRosemary ,   price:'$25' },
  { name: 'Thai-Style Grilled Chicken', image:  ThaiStyleGrill , price:'$25'},
];
const Grill = () => {
  const { addToCart, totalCount } = useCart();
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
  
  


     
      <section className="fixed md:top-28 lg:top-14 z-[1] lg:h-12 md:h-24 w-full bg-white opacity-90 overflow-x-auto whitespace-nowrap">
        <ul className="flex gap-6 sm:gap-40 px-4 lg:py-3 md:py-5 lg:text-lg md:text-[40px]  sm:text-lg font-medium text-gray-600">
          <li className="hover:text-gray-700"><Link to="/Burger">Burger</Link></li>
          <li className="hover:text-gray-700"><Link to="/Grill">Grill</Link></li>
          <li className="hover:text-gray-700"><Link to="/FFries">French Fries</Link></li>
          <li className="hover:text-gray-700"><Link to="/Crispy">Crispy Chicken</Link></li>
          <li className="hover:text-gray-700"><Link to="/Mojito">Mojito</Link></li>
          <li className="hover:text-gray-700"><Link to="/Coke">Cokes</Link></li>
        </ul>
      
      </section>
      <br />

     
      <div className="lg:pt-36 md:pt-48 lg:px-4 sm:px-6   md:px-8 grid lg:grid-cols-2 md:grid-cols-1 lg:space-y-0 gap-10 md:space-y-10 z-0">
        {GrillItems.map((item, index) => (
          <div key={index} className="flex flex-col md:h-[500px] lg:h-52 lg:w-[600px] md:w-[900px] sm:flex-row bg-gradient-to-r from-amber-200
           via-white to-white shadow-md p-4 rounded-md items-center 
           sm:items-start gap-4 sm:gap-6 transform hover:scale-105 transition-transform duration-300">
            
            <img src={item.image} alt={item.name} className="lg:w-44 md:w-[360px] md:h-[460px] lg:h-[180px] sm:w-52 sm:h-52 object-cover" />
            <div className="flex flex-col items-center sm:items-start w-full relative">
              <h2 className="lg:text-xl md:text-6xl sm:text-3xl md:mt-12 lg:mt-1 font-bold mb-2">{item.name}</h2>
              <p className="mb-4 lg:text-sm md:text-4xl sm:text-2xl text-gray-600 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <h2 className="lg:text-xl  md:text-5xl sm:text-4xl">{item.price}</h2>
              
              <button
                onClick={() => addToCart(item)}
                className="bg-green-400 md:px-12 md:py-5 lg:text-lg md:text-4xl lg:px-10 lg:py-1 md:mt-40 
                lg:mt-16 md:mr-10 lg:mr-0 sm:mt-0 flex-wrap lg:absolute lg:top-8 sm:absolute sm:top-44 sm:right-0 rounded-full text-white hover:bg-green-500"
              >
                ADD
              </button>
            </div>
          </div>
        ))}

  
<Link to="/cart">
  <button
    aria-label="Cart item count"
    className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-10
               bg-green-500 text-white lg:text-2xl md:text-6xl lg:w-14 lg:h-14 md:w-36 md:h-36 sm:w-16 sm:h-16 
               rounded-full shadow-lg z-30 flex items-center justify-center hover:bg-green-600"
  >
    +
    {totalCount > 0 && (
      <div className="absolute -top-2 -right-2 bg-red-600 lg:w-6 lg:h-6 rounded-full md:w-12 md:h-12
                      lg:text-xs sm:text-sm md:text-3xl flex items-center justify-center font-bold">
        {totalCount}
      </div>
    )}
  </button>
</Link>


      </div>
    </>
  );
};

export default Grill;

