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

      {/* Burger Items */}
      <div className="pt-36 px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 z-0">
        {burgerItems.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row bg-gradient-to-r from-amber-200 via-white to-white shadow-md p-4 rounded-md items-center sm:items-start gap-4 sm:gap-6 transform hover:scale-105 transition-transform duration-300">
            <img src={item.image} alt={item.name} className="w-40 h-40 sm:w-52 sm:h-52 object-cover" />
            <div className="flex flex-col items-center sm:items-start w-full relative">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">{item.name}</h2>
              <p className="mb-4 text-sm text-gray-600 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <h2 className="text-xl sm:text-2xl">{item.price}</h2>
              <button
                onClick={() => addToCart(item)}
                className="bg-green-400 px-5 py-1 mt-4 sm:mt-0 sm:absolute sm:bottom-0 sm:right-0 rounded-full text-white hover:bg-green-500"
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

      </div>
    </>
  );
};

export default Burger;
