import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false); 
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (path) => {
    setIsOpen(false);   
    setIsShopOpen(false); 
    navigate(path); 
  };

  return (
    <div className="w-full font-sans">
      <div className="bg-[#82ae46] text-white py-1 px-4 text-[11px] md:text-xs tracking-wide">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-1 md:gap-0">
          <div className="flex items-center gap-4 md:gap-6 uppercase">
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+ 1235 2355 98</span>
            </div>
            <div className="flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>YOUREMAIL@EMAIL.COM</span>
            </div>
          </div>
          <div className="uppercase text-center md:text-right">
            3-5 Business days delivery & free returns
          </div>
        </div>
      </div>
      <nav 
        className={`bg-white transition-all duration-500 ease-in-out z-50 
        ${isScrolled ? 'fixed top-0 left-0 w-full shadow-lg' : 'relative shadow-sm sticky top-0'}`}
      >
        <div 
            className={`container mx-auto px-4 flex justify-between items-center transition-all duration-300
            ${isScrolled ? 'py-0 h-[60px]' : 'py-4 md:py-6'}`}
        >
          <div 
            className={`${isScrolled ? 'text-black' : 'text-[#82ae46]'} font-extrabold text-xl md:text-2xl tracking-widest uppercase cursor-pointer`}
            onClick={() => handleNavigation("/")}
          >
            Vegefoods
          </div>
          <ul className={`hidden md:flex items-center gap-8 text-[11px] font-bold tracking-widest uppercase text-black h-full`}>
            <li 
                className="hover:text-[#82ae46] cursor-pointer transition-colors"
                onClick={() => handleNavigation("/")}
            >
                Home
            </li>
            <li className="relative group cursor-pointer hover:text-[#82ae46] transition-colors flex items-center gap-1 h-full">
              <span onClick={() => handleNavigation("/shop")}>Shop</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
              <ul className="absolute top-full left-0 mt-0 w-40 bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-black normal-case font-normal border-t-2 border-[#82ae46]">
                <li className="px-4 py-2 hover:bg-gray-100 block" onClick={() => handleNavigation("/shop")}>Shop</li>
                <li className="px-4 py-2 hover:bg-gray-100 block" onClick={() => handleNavigation("/wishlist")}>Wishlist</li>
                <li className="px-4 py-2 hover:bg-gray-100 block" onClick={() => handleNavigation("/product-single")}>Single Product</li>
                <li className="px-4 py-2 hover:bg-gray-100 block" onClick={() => handleNavigation("/cart")}>Cart</li>
                <li className="px-4 py-2 hover:bg-gray-100 block" onClick={() => handleNavigation("/checkout")}>Checkout</li>
              </ul>
            </li>
            <li className="hover:text-[#82ae46] cursor-pointer transition-colors" onClick={() => handleNavigation("/about")}>About</li>
            <li className="hover:text-[#82ae46] cursor-pointer transition-colors" onClick={() => handleNavigation("/blog")}>Blog</li>
            <li className="hover:text-[#82ae46] cursor-pointer transition-colors" onClick={() => handleNavigation("/contact")}>Contact</li>
            <li 
                className={`cursor-pointer transition-colors flex items-center gap-1 h-full px-4 
                ${isScrolled ? 'bg-[#82ae46] text-white hover:bg-[#6f943a] -mr-4' : 'hover:text-[#82ae46]'}`}
                onClick={() => handleNavigation("/cart")}
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
               </svg>
               [{0}]
            </li>
          </ul>
          <button 
            className="md:hidden text-gray-600 focus:outline-none flex items-center gap-2 uppercase text-xs font-bold"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className={`md:hidden bg-black text-white transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <ul className="flex flex-col uppercase text-xs font-bold tracking-widest">
            <li 
                className="border-b border-gray-800 py-3 px-4 hover:text-[#82ae46]"
                onClick={() => handleNavigation("/")}
            >
                Home
            </li>
            <li className="border-b border-gray-800">
                <button 
                  onClick={() => setIsShopOpen(!isShopOpen)}
                  className="w-full text-left py-3 px-4 flex justify-between items-center hover:text-[#82ae46]"
                >
                  Shop
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 transform transition-transform ${isShopOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className={`bg-gray-900 text-gray-300 normal-case ${isShopOpen ? 'block' : 'hidden'}`}>
                    <li className="py-2 px-8 border-b border-gray-800 hover:text-white" onClick={() => handleNavigation("/shop")}>Shop</li>
                    <li className="py-2 px-8 border-b border-gray-800 hover:text-white" onClick={() => handleNavigation("/wishlist")}>Wishlist</li>
                    <li className="py-2 px-8 border-b border-gray-800 hover:text-white" onClick={() => handleNavigation("/product-single")}>Single Product</li>
                    <li className="py-2 px-8 border-b border-gray-800 hover:text-white" onClick={() => handleNavigation("/cart")}>Cart</li>
                    <li className="py-2 px-8 border-b border-gray-800 hover:text-white" onClick={() => handleNavigation("/checkout")}>Checkout</li>
                </ul>
            </li>
            <li className="border-b border-gray-800 py-3 px-4 hover:text-[#82ae46]" onClick={() => handleNavigation("/about")}>About</li>
            <li className="border-b border-gray-800 py-3 px-4 hover:text-[#82ae46]" onClick={() => handleNavigation("/blog")}>Blog</li>
            <li className="border-b border-gray-800 py-3 px-4 hover:text-[#82ae46]" onClick={() => handleNavigation("/contact")}>Contact</li>
            <li className="py-3 px-4 hover:text-[#82ae46]" onClick={() => handleNavigation("/cart")}>Cart [0]</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;