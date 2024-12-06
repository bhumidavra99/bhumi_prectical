import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const {
        cart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        calculateTotal,
      } = useContext(CartContext);

  if (cart.length === 0) {
    return <div className="p-4">Your cart is empty.</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-md shadow"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-16 w-16 object-contain mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                className="px-4 py-2 bg-gray-300 rounded text-sm font-bold mr-2"
                onClick={() => decrementQuantity(item.id)}
              >
                -
              </button>
              <span className="px-4 py-2 text-lg font-bold">{item.quantity}</span>
              <button
                className="px-4 py-2 bg-gray-300 rounded text-sm font-bold mr-2"
                onClick={() => incrementQuantity(item.id)}
              >
                +
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded text-sm font-bold"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <h3 className="text-2xl font-bold">
          Total: ${calculateTotal().toFixed(2)}
        </h3>
      </div>
    </div>
  
  );
};

export default Cart;
