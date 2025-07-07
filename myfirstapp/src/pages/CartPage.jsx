import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';


const CartPage = () => {
  const { cartItems, increment, decrement } = useCart();
  const navigate = useNavigate();


  const getPrice = (item) => {
    const price =
      typeof item.price === 'string'
        ? item.price.replace(/[^0-9.]/g, '')
        : item.price;
    return Number(price) || 0;
  };

  if (!cartItems || cartItems.length === 0) {
    return <div className="p-10 text-center text-2xl">Your cart is empty 🛒</div>;
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.quantity * getPrice(item),
    0
  );

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="grid gap-6">
        {cartItems.map((item, i) => (
          <div key={i} className="border rounded-lg p-5 shadow-md flex items-center">
            <img
              src={item.image || 'https://via.placeholder.com/100'}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="ml-6 flex-1">
              <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600">Price: ₹{getPrice(item).toFixed(2)}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>

              <div className="mt-2 flex items-center space-x-2">
                <button
                  onClick={() => decrement(item.name)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                  -
                </button>
                <button
                  onClick={() => increment(item.name)}
                  className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                >
                  +
                </button>
              </div>
            </div>

            <div className="text-right text-gray-700 font-semibold">
              ₹{(item.quantity * getPrice(item)).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

    
            <div className="mt-10 text-right">
        <p className="text-lg font-semibold">Total Items: {totalItems}</p>
        <p className="text-2xl font-bold text-blue-700">
          Total Price: ₹{totalPrice.toFixed(2)}
        </p>

        <button
          onClick={() => navigate('/payment')}
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transform transition duration-300 ease-in-out"
        >
         🛒 Buy Now
        </button>
      </div>

    </div>
  );
};

export default CartPage;
