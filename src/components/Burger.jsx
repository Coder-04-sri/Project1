import { useCart } from '../context/CartContext'; 
import { Link } from 'react-router-dom';
import vegBurger from '../burger/vegBurger.jpg';
import beefBurger from '../burger/BeefBurger.jpg';
import cheeseBurger from '../burger/CheeseBurger.jpg';
import onionBurger from '../burger/OnionBurger.jpg';
import chickenBurger from '../burger/ChickenBurger.jpg';
import turkey from '../burger/TurkeyBurger.jpg';
import { useState } from 'react';

const burgerItems = [
  { name: 'Veg Burger', image: vegBurger, price: "$20" },
  { name: 'Cheese Burger', image: cheeseBurger, price: "$20" },
  { name: 'Chicken Burger', image: chickenBurger , price: "$20" },
  { name: 'Turkey Burger', image: turkey, price: "$20" },
  { name: 'Beef Burger', image: beefBurger , price: "$20" },
  { name: 'Onion Burger', image: onionBurger, price: "$20" },
];

const Burger = () => {
  const { addToCart, totalCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
   <nav className="bg-red-500 fixed top-0 w-full z-10 shadow-md">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between  lg:h-14 md:h-28 items-center">
   
             {/* Logo */}
             <div className="text-white font-bold lg:text-lg lg:hidden md:text-6xl">
               <Link to="/main">Zing Grill</Link>
             </div>
   
             {/* Hamburger Menu (visible only on small screens) */}
             <div className="lg:hidden md:mr-12 lg:mr-0">
               <button
                 onClick={() => setIsOpen(!isOpen)}
                 type="button"
                 className="text-white md:text-6xl focus:outline-none"
               >
                 ☰
               </button>
             </div>
   
             {/* Main Nav Links (visible on large screens only) */}
             <div className="hidden  text-lg lg:flex lg:space-x-80 lg:ml-10 space-x-10 font-bold">
               <Link to="/main" className="text-white hover:text-black">Home</Link>
               <Link to="/items" className="text-white hover:text-black">Items</Link>
               <Link to="/contact" className="text-white hover:text-black">Contact</Link>
               <Link to="/login" className="text-white hover:text-black">Sign</Link>
             </div>
           </div>
         </div>
   
         {/* Mobile Menu (visible when isOpen is true) */}
         {isOpen && (
           <div className="lg:hidden md:text-5xl md:mt-3 bg-red-500 px-4 pb-4 space-y-4 font-bold">
             <Link to="/main" className="block text-white hover:text-black">Home</Link>
             <Link to="/items" className="block text-white hover:text-black">Items</Link>
             <Link to="/contact" className="block text-white hover:text-black">Contact</Link>
             <Link to="/login" className="block text-white hover:text-black">Sign</Link>
           </div>
         )}
       </nav>
  
  


      {/* Category Tabs */}
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

      {/* Burger Items */}
      <div className="lg:pt-36 md:pt-48 lg:px-4 sm:px-6   md:px-8 grid lg:grid-cols-2 md:grid-cols-1 lg:space-y-0 gap-10 md:space-y-10 z-0">
        {burgerItems.map((item, index) => (
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
                lg:mt-16 md:mr-10 lg:mr-0 sm:mt-0 lg:absolute lg:top-5 sm:absolute sm:top-16 sm:right-0 rounded-full text-white hover:bg-green-500"
              >
                ADD
              </button>
            </div>
          </div>
        ))}

    {/* Floating Cart Button */}
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

export default Burger;
