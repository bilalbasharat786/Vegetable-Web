import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import heroBg from '../assets/bg_1.jpg'; 
import productImg from '../assets/product-1.jpg';

const ProductSingle = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('Large');
  const increaseQty = () => {
    setQuantity(prev => prev + 1);
  };
  const decreaseQty = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };
  const handleAddToCart = () => {
    console.log(`Added to cart: ${quantity} x ${size} Bell Pepper`);
    navigate('/cart');
  };

  return (
    <div className="font-sans w-full bg-white">
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-3 font-light">
            <Link to="/" className="mr-2 hover:text-[#82ae46] transition-colors">Home</Link> 
            <span className="mr-2">/</span>
            <Link to="/shop" className="mr-2 hover:text-[#82ae46] transition-colors">Product</Link>
            <span className="mr-2">/</span>
            <span className="text-gray-300">Product Single</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">Product Single</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="w-full h-auto overflow-hidden">
            <a href={productImg} target="_blank" rel="noopener noreferrer">
                <img 
                src={productImg} 
                alt="Bell Pepper" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer" 
                />
            </a>
          </div>
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-black mb-2">Bell Pepper</h2>
            <div className="flex items-center gap-4 mb-4 text-sm">
                <div className="flex text-[#82ae46]">
                    <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                    <span className="ml-2 text-gray-500 font-normal">5.0</span>
                </div>
                <div className="text-gray-500 border-l border-gray-300 pl-4">
                    <span className="text-black font-semibold">100</span> Rating
                </div>
                <div className="text-gray-500 border-l border-gray-300 pl-4">
                    <span className="text-black font-semibold">500</span> Sold
                </div>
            </div>
            <p className="text-3xl font-bold text-black mb-6">$120.00</p>
            <p className="text-gray-500 leading-relaxed mb-8">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Text should turn around and return to its own, safe country. But nothing the copy said could convince her and so it didn’t take long until.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="w-full sm:w-1/3">
                    <select 
                        value={size} 
                        onChange={(e) => setSize(e.target.value)}
                        className="w-full border border-gray-300 p-3 text-gray-600 outline-none focus:border-[#82ae46] appearance-none uppercase text-xs tracking-wider"
                    >
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="Extra Large">Extra Large</option>
                    </select>
                </div>
                <div className="w-full sm:w-1/3 flex items-center">
                    <button 
                        onClick={decreaseQty}
                        className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all text-xl"
                    >
                        -
                    </button>
                    <input 
                        type="text" 
                        value={quantity} 
                        readOnly
                        className="w-full h-12 border-t border-b border-gray-300 text-center outline-none text-black"
                    />
                     <button 
                        onClick={increaseQty}
                        className="w-12 h-12 border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all text-xl"
                    >
                        +
                    </button>
                </div>
            </div>
            <p className="mb-8 text-black font-medium">600 kg available</p>
            <div>
                <button 
                    onClick={handleAddToCart}
                    className="bg-black text-white px-10 py-4 font-bold rounded-full hover:bg-[#82ae46] transition-colors border border-black hover:border-[#82ae46]"
                >
                    Add to Cart
                </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;