import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import chicken65 from '../FriedChicken/chicken65.jpg';
import buffaloWings from '../FriedChicken/buffaloWings.jpg';
import hotChicken from '../FriedChicken/hotChicken.jpg';
import japaneeseStyle from '../FriedChicken/japaneeseStyle.jpg';
import koreanFriedChicken from '../FriedChicken/koreanFriedChicken.jpg';
import southernFriedChicken from '../FriedChicken/southernFriedChicken.jpg';
import taiwanesePopcorn from '../FriedChicken/taiwanesePopcornChicken.jpg';
import { useState } from 'react';

const crispyItems = [
  { name: 'Southern Fried Chicken', image: southernFriedChicken, price: "$20" },
  { name: 'Korean Fried Chicken', image: koreanFriedChicken, price: "$20" },
  { name: 'Hot Chicken', image: hotChicken, price: "$20" },
  { name: 'Buffalo Wings', image: buffaloWings, price: "$20" },
  { name: 'Chicken 65', image: chicken65, price: "$20" },
  { name: 'Taiwanese Popcorn Chicken', image: taiwanesePopcorn, price: "$20" },
  { name: 'Japanese-Style Karaage', image: japaneeseStyle, price: "$20" },
];

const Crispy = () => {
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
        {crispyItems.map((item, index) => (
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

export default Crispy;
