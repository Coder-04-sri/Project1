import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, increment, decrement, clearCart } = useCart(); // ✅ Include clearCart
  const navigate = useNavigate();

  const getPrice = (item) => {
    const price =
      typeof item.price === 'string'
        ? item.price.replace(/[^0-9.]/g, '')
        : item.price;
    return Number(price) || 0;
  };

  if (!cartItems || cartItems.length === 0) {
    return <div className="p-10 text-center md:text-6xl lg:text-2xl">Your cart is empty 🛒</div>;
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * getPrice(item),
    0
  );

  return (
    <div className="p-10 ">
      <h1 className="lg:text-3xl md:text-6xl sm:text-5xl font-bold mb-6">Your Cart</h1>

      <div className="grid gap-6">
        {cartItems.map((item, i) => (
          <div key={i} className="border md:p-7 rounded-lg lg:p-5 shadow-md flex items-center">
            <img
              src={item.image || 'https://via.placeholder.com/100'}
              alt={item.name}
              className="lg:w-24 lg:h-24 md:w-64  md:h-80 object-cover rounded"
            />
            <div className="ml-6 flex-1">
              <h2 className="lg:text-xl md:text-5xl  font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600 lg:text-lg md:text-4xl">Price: ${getPrice(item).toFixed(2)}</p>
              <p className="text-gray-600 lg:text-lg md:text-4xl">Quantity: {item.quantity}</p>

              <div className="mt-2 flex items-center space-x-2">
                <button
                  onClick={() => decrement(item.name)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded lg:text-lg md:text-5xl"
                >
                  -
                </button>
                <button
                  onClick={() => increment(item.name)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded lg:text-lg md:text-5xl"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right text-gray-700 font-semibold lg:text-xl md:text-3xl">
              ₹{(item.quantity * getPrice(item)).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 text-right lg:text-lg md:text-4xl">
        <p className="lg:text-lg md:text-4xl font-semibold">Total Items: {totalItems}</p>
        <p className="lg:text-2xl md:text-5xl font-bold text-blue-700">
          Total Price: ${totalPrice.toFixed(2)}
        </p>

        <button
          onClick={() => {
            clearCart();         // ✅ Clears cart
            navigate('/payment'); // ✅ Navigates
          }}
          type='button'
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300 ease-in-out"
        >
         🛒 Buy Now
        </button>
      </div>
    </div>
  );
};

export default CartPage;
