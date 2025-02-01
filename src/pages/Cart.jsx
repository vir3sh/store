import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { cartItems, getTotalPrice } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl">Your cart is empty</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl font-bold">${getTotalPrice().toFixed(2)}</span>
            </div>
            <button className="w-full mt-4 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
