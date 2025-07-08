import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import FrenchFries from '../images/frenchFries.jpg';
import GrilledChicken from '../images/grilledChicken.jpg';
import chickenBurger from '../images/chickenBurger.jpg';
import cokeWithIce from '../images/cokeWithIce.jpg';
import chocoMojito from '../images/chocoMojito.jpg';
import BeefSteak from '../images/beefSteak.jpg';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

function Items() {
  const { addToCart, totalCount } = useCart();

  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5;
    const empty = 5 - full - (half ? 1 : 0);
    const stars = [];

    for (let i = 0; i < full; i++)
      stars.push(<FaStar key={'f' + i} className="text-yellow-400" />);
    if (half) stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" />);
    for (let i = 0; i < empty; i++)
      stars.push(<FaRegStar key={'e' + i} className="text-yellow-400" />);

    return stars;
  };

  const foodItems = [
    {
      id: 1,
      image: chickenBurger ,
      name: 'Spicy Chicken Burger',         
      description: 'A juicy chicken burger with spicy mayo and fresh veggies.',
      rating: 4.5,
      price: 20,                           
      button: 'ADD',
    },
    {
      id: 2,
      image:  BeefSteak,
      name: 'Grilled Beef Steak',
      description: 'Tender beef steak grilled to perfection with herbs.',
      rating: 4.0,
      price: 10,
      button: 'ADD',
    },
    {
      id: 3,
      image: FrenchFries,
      name: 'French Fries',
      description: 'Crispy golden fries with a pinch of sea salt.',
      rating: 3.5,
      price: 30,
      button: 'ADD',
    },
    {
      id: 4,
      image:chocoMojito,
      name: 'Choco Mojito',
      description: 'Refreshing mojito with a twist of chocolate.',
      rating: 5.0,
      price: 20,
      button: 'ADD',
    },
    {
      id: 5,
      image: GrilledChicken ,
      name: 'Hot Grilled Chicken',
      description: 'Grilled chicken marinated with spicy sauces and herbs.',
      rating: 4.8,
      price: 15,
      button: 'ADD',
    },
    {
      id: 6,
      image: cokeWithIce ,
      name: 'Coke with Ice',
      description: 'Chilled Coke served with ice cubes and lemon slice.',
      rating: 4.2,
      price: 20,
      button: 'ADD',
    },
  ];

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

      <div className="pt-20 text-center px-8">
        <h1 className="text-4xl font-extrabold text-red-600 font-serif">
          Delicious Food. Quick Delivery.
        </h1>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
          Explore our hand-crafted burgers, sizzling grills, crispy fries, and
          cool mojitos. Freshly made and served with love!
        </p>
      </div>

      <section className="mt-10">
        <ul className="flex flex-wrap justify-center gap-10 text-lg font-medium text-gray-600 cursor-pointer">
          <li className="hover:text-red-500">
            <Link to="/burger">🍔 Burger</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/grill">🔥 Grill</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/FFries">🍟 French Fries</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/crispy">🍗 Crispy Chicken</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/mojito">🥤 Mojito</Link>
          </li>
          <li className="hover:text-red-500">
            <Link to="/coke">🥶 Cokes</Link>
          </li>
        </ul>
        <hr className="mt-6 w-3/4 mx-auto border-gray-300" />
      </section>

      <section className="text-center mt-16 px-6">
        <h2 className="text-3xl font-bold text-red-500">Special Offers Just For You!</h2>
        <p className="text-gray-700 mt-2 max-w-xl mx-auto">
          Order 2 or more items and get a free drink. Fresh ingredients, tasty
          flavors, and hot deals every day!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10 py-16">
        {foodItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300"
          >
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item.description}</p>
              <div className="flex items-center mt-3">
                {renderStars(item.rating)}
                <span className="text-sm text-gray-500 ml-2">{item.rating}</span>
              </div>

              <button
                onClick={() => addToCart({
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  quantity: 1,
                })}
                className="bg-green-500 p-2 rounded-full relative left-32 w-24 text-white hover:text-black mt-4"
              >
                {item.button}
              </button>
              <h2 className="text-2xl mt-2">₹{item.price.toFixed(2)}</h2>
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

      </section>

      <footer className="bg-red-500 text-white text-center py-4 mt-10">
        <p>© 2025 Zing Grill. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default Items;
