import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import wishlistBg from '../assets/bg_1.jpg'; 
import prod1 from '../assets/product-1.jpg';
import prod2 from '../assets/product-2.jpg';
import prod3 from '../assets/product-3.jpg';
import prod4 from '../assets/product-4.jpg';
import prod5 from '../assets/product-5.jpg';
import prod6 from '../assets/product-6.jpg';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([
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
      name: 'Strawberry', 
      description: 'Far far away, behind the word mountains, far from the countries', 
      price: 15.70, 
      quantity: 1 
    },
    { 
      id: 3, 
      image: prod3, 
      name: 'Green Beans', 
      description: 'Far far away, behind the word mountains, far from the countries', 
      price: 15.70, 
      quantity: 1 
    },
    { 
      id: 4, 
      image: prod4, 
      name: 'Purple Cabbage', 
      description: 'Far far away, behind the word mountains, far from the countries', 
      price: 15.70, 
      quantity: 1 
    },
    { 
      id: 5, 
      image: prod5, 
      name: 'Tomatoe', 
      description: 'Far far away, behind the word mountains, far from the countries', 
      price: 15.70, 
      quantity: 1 
    },
    { 
      id: 6, 
      image: prod6, 
      name: 'Brocolli', 
      description: 'Far far away, behind the word mountains, far from the countries', 
      price: 15.70, 
      quantity: 1 
    }
  ]);
  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div className="font-sans w-full">
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${wishlistBg})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div> 
        
        <div className="relative z-10 text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-3 font-light">
            <Link to="/" className="mr-2 hover:text-[#82ae46] transition-colors">Home</Link> 
            <span className="text-gray-300">Wishlist</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">My Wishlist</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="overflow-x-auto">
          <table className="min-w-[900px] md:min-w-full text-center">
            <thead className="bg-[#82ae46] text-white font-bold text-lg uppercase">
              <tr>
                <th className="py-5 px-2">&nbsp;</th>
                <th className="py-5 px-2">&nbsp;</th>
                <th className="py-5 px-4 text-left">Product List</th>
                <th className="py-5 px-2">Price</th>
                <th className="py-5 px-2">Quantity</th>
                <th className="py-5 px-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map((item) => (
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
                        type="text" 
                        defaultValue={item.quantity} 
                        className="w-16 py-2 border border-gray-300 text-center text-black outline-none focus:border-[#82ae46]"
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
        {wishlistItems.length === 0 && (
            <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-400">Your wishlist is empty!</h3>
                <Link to="/shop" className="mt-4 inline-block bg-[#82ae46] text-white px-6 py-2 rounded-full uppercase font-bold tracking-widest hover:bg-[#6f943a] transition-colors">
                    Go to Shop
                </Link>
            </div>
        )}

      </div>
    </div>
  );
};

export default Wishlist;