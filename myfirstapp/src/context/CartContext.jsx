import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(i => i.name === item.name);
      if (existing) {
        return prevItems.map(i =>
          i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const increment = (name) => setCartItems(prev =>
    prev.map(i =>
      i.name === name ? { ...i, quantity: i.quantity + 1 } : i
    )
  );
  const decrement = (name) => setCartItems(prev =>
    prev
      .map(i =>
        i.name === name ? { ...i, quantity: i.quantity - 1 } : i
      )
      .filter(i => i.quantity > 0)
  );
  const totalCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, increment, decrement, totalCount }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
