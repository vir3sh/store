import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex items-center border rounded-lg p-4 gap-4">
      <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price}</p>
        <div className="flex items-center gap-2 mt-2">
          <button 
            className="px-2 py-1 border rounded"
            onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button 
            className="px-2 py-1 border rounded"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            +
          </button>
          <button 
            className="ml-4 text-red-600"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;
