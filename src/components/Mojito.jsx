
import { useCart } from '../context/CartContext'; 
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BluberryMojito from '../mojito/BluberryMojito.jpg';
import StrawberryMojito from '../mojito/BluberryMojito.jpg';
import CoconutMojito from '../mojito/CoconutMojito.jpg';
import PineappleMojito from '../mojito/PineappleMojito.jpg';
import RaspberryMojito from '../mojito/RaspberryMojito.jpg';
import GinMojito from '../mojito/GinMojito.jpg';
import TequliaMojito from '../mojito/TequliaMojito.jpg';
import FrozenMojito from '../mojito/FrozenMojito.jpg';
import VerginMojito from '../mojito/VerginMojitoMocktail.jpg';
import VodkaMojito from '../mojito/VodkaMojito.jpg';
import WatermelonMojito from '../mojito/WatermelonMojito.jpg';




const mojitoItems = [
  { name: 'Strawberry Mojito', image: StrawberryMojito,price:"$20"   },
  { name: 'Watermelon Mojito', image: WatermelonMojito ,price:"$20" },
  { name: 'Frozen Mojito', image: FrozenMojito,price:"$20"},
  { name: 'Coconut Mojito', image: CoconutMojito  ,price:"$20" },
  { name:  'Pineapple Mojito', image: PineappleMojito   ,price:"$20"  },
  { name: 'Raspberry Mojito', image: RaspberryMojito  ,price:"$20" },
  { name:  'Blueberry Mojito', image: BluberryMojito  ,price:"$20"  },
  { name: 'Gin Mojito', image:  GinMojito  ,price:"$20" },
  { name: 'Vodka Mojito', image:VodkaMojito ,price:"$20" },
  { name: 'Tequila Mojito', image: TequliaMojito ,price:"$20" },
  { name: 'Vergin Mojito Mocktail', image:  VerginMojito ,price:"$20" },
];

const Mojito = () => {
  const { addToCart, totalCount } = useCart();
   
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
      
    
    
          {/* Category Tabs */}
          <section className="fixed top-14 z-[1] w-full bg-white opacity-90 overflow-x-auto whitespace-nowrap">
            <ul className="flex gap-6 sm:gap-40 px-4 py-3 text-sm sm:text-lg font-medium text-gray-600">
              <li className="hover:text-gray-700"><Link to="/Burger">Burger</Link></li>
              <li className="hover:text-gray-700"><Link to="/Grill">Grill</Link></li>
              <li className="hover:text-gray-700"><Link to="/FFries">French Fries</Link></li>
              <li className="hover:text-gray-700"><Link to="/Crispy">Crispy Chicken</Link></li>
              <li className="hover:text-gray-700"><Link to="/Mojito">Mojito</Link></li>
              <li className="hover:text-gray-700"><Link to="/Coke">Cokes</Link></li>
            </ul>
            <hr className="border-gray-300" />
          </section>
   
         
   
         {/* Items Grid */}
         <div className="px-4 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 pb-20">
           {mojitoItems.map((item, index) => (
             <div
               key={index}
               className="flex flex-col sm:flex-row items-center bg-gradient-to-r from-amber-200 via-white to-white shadow-md p-4 rounded-md gap-4 sm:gap-6 transform hover:scale-105 transition-transform duration-300"
             >
               <img src={item.image} alt={item.name} className="w-40 sm:w-52 h-40 sm:h-52 object-cover" />
               <div className="flex-1 text-center sm:text-left">
                 <h2 className="text-xl sm:text-2xl font-bold mb-2">{item.name}</h2>
                 <p className="mb-2 sm:mb-4 text-sm text-gray-600">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, tenetur.
                 </p>
                 <h2 className="text-xl sm:text-2xl">{item.price}</h2>
                 <div className="mt-2 sm:mt-4 flex justify-center sm:justify-start">
                   <button
                     onClick={() => addToCart(item)}
                     className="bg-green-400 px-5 py-1 rounded-full text-white hover:bg-green-500"
                   >
                     ADD
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
   
        {/* Floating Cart Button */}
   <Link to="/cart">
     <button
       aria-label="Cart item count"
       className="fixed bottom-6 right-4 sm:bottom-8 sm:right-6 md:bottom-10 md:right-6 
                  bg-green-500 text-white text-2xl w-14 h-14 sm:w-16 sm:h-16 
                  rounded-full shadow-lg z-30 flex items-center justify-center hover:bg-green-600"
     >
       +
       {totalCount > 0 && (
         <div className="absolute -top-2 -right-2 bg-red-600 w-6 h-6 rounded-full 
                         text-xs sm:text-sm flex items-center justify-center font-bold">
           {totalCount}
         </div>
       )}
     </button>
   </Link>
   
       </>
     );
};

export default Mojito;

