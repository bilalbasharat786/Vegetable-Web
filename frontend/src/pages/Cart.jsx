import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import cartBg from '../assets/bg_1.jpg'; 
import prod1 from '../assets/product-3.jpg';
import prod2 from '../assets/product-4.jpg';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { 
      id: 1, 
      image: prod1, 
      name: 'Bell Pepper', 
      description: 'Far far away, behind the word mountains, far from the countries', 
      price: 4.90, 
      quantity: 1 
    },
    { 
      id: 2, 
      image: prod2, 
      name: 'Bell Pepper', 
      description: 'Far far away, behind the word mountains, far from the countries', 
      price: 15.70, 
      quantity: 1 
    }
  ]);
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  const handleQuantityChange = (id, newQty) => {
      const qty = parseInt(newQty);
      if(qty > 0) {
        setCartItems(cartItems.map(item => 
            item.id === id ? { ...item, quantity: qty } : item
        ));
      }
  };
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const delivery = 0.00;
  const discount = 3.00;
  const total = subtotal + delivery - discount;
  return (
    <div className="font-sans w-full">
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${cartBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div> 
        <div className="relative z-10 text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-3 font-light">
            <Link to="/" className="mr-2 hover:text-[#82ae46] transition-colors">Home</Link> 
            <span className="text-gray-300">Cart</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">My Cart</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] md:min-w-full text-center">
            <thead className="bg-[#82ae46] text-white font-bold text-lg uppercase">
              <tr>
                <th className="py-5 px-2">&nbsp;</th>
                <th className="py-5 px-2">&nbsp;</th>
                <th className="py-5 px-4 text-left">Product name</th>
                <th className="py-5 px-2">Price</th>
                <th className="py-5 px-2">Quantity</th>
                <th className="py-5 px-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-6 px-4">
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="w-8 h-8 flex items-center justify-center border border-gray-300 text-gray-500 rounded hover:bg-red-500 hover:text-white transition-all text-xl"
                    >
                      &times;
                    </button>
                  </td>
                  <td className="py-6 px-4">
                    <div className="w-20 h-20 mx-auto overflow-hidden">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                  </td>
                  <td className="py-6 px-4 text-left max-w-xs">
                    <h3 className="text-black text-xl font-normal mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                  </td>
                  <td className="py-6 px-4 text-black text-lg">
                    ${item.price.toFixed(2)}
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex justify-center">
                      <input 
                        type="number" 
                        value={item.quantity}
                        onChange={(e) => handleQuantityChange(item.id, e.target.value)} 
                        className="w-20 py-2 border border-gray-300 text-center text-black outline-none focus:border-[#82ae46]"
                      />
                    </div>
                  </td>
                  <td className="py-6 px-4 text-black text-lg">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <hr className='p-10 ' />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 shadow-sm bg-white">
                <h3 className="text-lg font-bold text-black mb-4 uppercase">Coupon Code</h3>
                <p className="text-gray-500 mb-6 text-sm">Enter your coupon code if you have one</p>
                <div className="mb-4">
                    <label className="block text-black mb-2 text-sm font-medium">Coupon code</label>
                    <input type="text" className="w-full border border-gray-300 p-3 outline-none focus:border-[#82ae46]" />
                </div>
                <button className="bg-[#82ae46] text-white py-3 px-6 font-bold uppercase hover:bg-[#6f943a] transition-colors rounded-full text-sm">
                    Apply Coupon
                </button>
            </div>
            <div className="p-6 border border-gray-100 shadow-sm bg-white">
                <h3 className="text-lg font-bold text-black mb-4 uppercase">Estimate shipping and tax</h3>
                <p className="text-gray-500 mb-6 text-sm">Enter your destination to get a shipping estimate</p>
                
                <div className="mb-4">
                    <label className="block text-black mb-2 text-sm font-medium">Country</label>
                    <input type="text" className="w-full border border-gray-300 p-3 outline-none focus:border-[#82ae46]" />
                </div>
                <div className="mb-4">
                    <label className="block text-black mb-2 text-sm font-medium">State/Province</label>
                    <input type="text" className="w-full border border-gray-300 p-3 outline-none focus:border-[#82ae46]" />
                </div>
                <div className="mb-6">
                    <label className="block text-black mb-2 text-sm font-medium">Zip/Postal Code</label>
                    <input type="text" className="w-full border border-gray-300 p-3 outline-none focus:border-[#82ae46]" />
                </div>
                
                <button className="bg-[#82ae46] text-white py-3 px-6 font-bold uppercase hover:bg-[#6f943a] transition-colors rounded-full text-sm">
                    Estimate
                </button>
            </div>
            <div className="p-6 border border-gray-100 shadow-sm bg-white">
                <h3 className="text-lg font-bold text-black mb-6 uppercase">Cart Totals</h3>
                <div className="flex justify-between mb-4 border-b border-gray-100 pb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800 font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 border-b border-gray-100 pb-4">
                    <span className="text-gray-600">Delivery</span>
                    <span className="text-gray-800 font-medium">${delivery.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 border-b border-gray-100 pb-4">
                    <span className="text-gray-600">Discount</span>
                    <span className="text-gray-800 font-medium">${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-8">
                    <span className="text-black font-bold text-lg">TOTAL</span>
                    <span className="text-black font-bold text-lg">${total.toFixed(2)}</span>
                </div>
                <button 
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-[#82ae46] text-white py-4 px-6 font-bold uppercase hover:bg-[#6f943a] transition-colors rounded-full text-sm"
                >
                    Proceed to Checkout
                </button>
            </div>
            </div>
      </div>
    </div>
  );
};

export default Cart;