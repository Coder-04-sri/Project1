

import { useCart } from '../context/CartContext'; 
import { useState } from 'react';
import { Link } from 'react-router-dom'; 
import CocaColaCherry from '../coke/CocaColaCherry.jpg';
import CocaColaCherryVanilla from '../coke/CocaColaCherryVanilla.jpg';
import CocaColaCoffeinFree from '../coke/CocaColaCoffeineFree.jpg';
import CocaColaLime from '../coke/CocaColaLime.jpg';
import CocaColaClassic from '../coke/CokaColaClassic.jpg';
import CocaColaVanilla from '../coke/CocaColaVanilla.jpg';
import DietCoke from '../coke/DietCoke.jpg';
import CokeZeroSugar from '../coke/CokeZeroSugar.jpg';




 


const CokeItems = [
  { name: 'Coca-Cola Classic', image: CocaColaClassic,price:"$20"   },
  { name: 'Diet Coke', image: DietCoke  ,price:"$20" },
  { name: 'Coca-Cola Cherry', image:  CocaColaCherry ,price:"$20"},
  { name: 'Coca-Cola-Vanilla', image: CocaColaVanilla ,price:"$20" },
  { name: 'Coca-Cola-Lime', image: CocaColaLime  ,price:"$20"  },
  { name: 'Coca-Cola-Coffeine Free', image: CocaColaCoffeinFree ,price:"$20" },
  { name: 'Coca-Cola-Cherry Vanilla', image: CocaColaCherryVanilla ,price:"$20"  },
  { name: 'Coke Zero Sugar', image: CokeZeroSugar ,price:"$20" },
];

const Coke= () => {
  const { addToCart, totalCount } = useCart();
   
     const [isOpen, setIsOpen] = useState(false);
    
      return (
        <>
        <nav className="bg-red-500 fixed top-0 w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14 items-center">

          {/* Logo */}
          <div className="text-white font-bold text-lg">
            <Link to="/main">Zing Grill</Link>
          </div>

          {/* Hamburger Menu (visible only on small screens) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white text-2xl focus:outline-none"
            >
              ☰
            </button>
          </div>

          {/* Main Nav Links (visible on large screens only) */}
          <div className="hidden lg:flex lg:space-x-80 lg:ml-10 space-x-10 font-bold">
            <Link to="/main" className="text-white hover:text-black">Home</Link>
            <Link to="/items" className="text-white hover:text-black">Items</Link>
            <Link to="/contact" className="text-white hover:text-black">Contact</Link>
            <Link to="/login" className="text-white hover:text-black">Sign</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="lg:hidden bg-red-500 px-4 pb-4 space-y-2 font-bold">
          <Link to="/main" className="block text-white hover:text-black">Home</Link>
          <Link to="/items" className="block text-white hover:text-black">Items</Link>
          <Link to="/contact" className="block text-white hover:text-black">Contact</Link>
          <Link to="/login" className="block text-white hover:text-black">Sign</Link>
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
           {CokeItems.map((item, index) => (
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

export default Coke;






