import React, { useState, useEffect, useRef } from 'react';
import bgImage from '../assets/bg_1.jpg';
import prod1 from '../assets/product-1.jpg';
import prod2 from '../assets/product-2.jpg';
import prod3 from '../assets/product-3.jpg';
import prod4 from '../assets/product-4.jpg';
import prod5 from '../assets/product-5.jpg';
import prod6 from '../assets/product-6.jpg';
import prod7 from '../assets/product-7.jpg';
import prod8 from '../assets/product-8.jpg';
import prod9 from '../assets/onion.jpg';
import prod10 from '../assets/apple.jpg';
import prod11 from '../assets/garlic.jpg';
import prod12 from '../assets/chilli.jpg';


const FadeInUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={domRef} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const products = [
    { id: 1, name: 'Bell Pepper', category: 'Vegetables', image: prod1, price: '$80.00', oldPrice: '$120.00', discount: '30%' },
    { id: 2, name: 'Strawberry', category: 'Fruits', image: prod2, price: '$120.00', oldPrice: null, discount: null },
    { id: 3, name: 'Green Beans', category: 'Vegetables', image: prod3, price: '$120.00', oldPrice: null, discount: null },
    { id: 4, name: 'Purple Cabbage', category: 'Vegetables', image: prod4, price: '$120.00', oldPrice: null, discount: null },
    { id: 5, name: 'Tomatoe', category: 'Vegetables', image: prod5, price: '$80.00', oldPrice: '$120.00', discount: '30%' },
    { id: 6, name: 'Brocolli', category: 'Vegetables', image: prod6, price: '$120.00', oldPrice: null, discount: null },
    { id: 7, name: 'Carrots', category: 'Vegetables', image: prod7, price: '$120.00', oldPrice: null, discount: null },
    { id: 8, name: 'Fruit Juice', category: 'Juice', image: prod8, price: '$120.00', oldPrice: null, discount: null },
    { id: 9, name: 'Onion', category: 'Vegetables', image: prod9, price: '$80.00', oldPrice: '$120.00', discount: '30%' },
    { id: 10, name: 'Apple', category: 'Fruits', image: prod10, price: '$120.00', oldPrice: null, discount: null },
    { id: 11, name: 'Garlic', category: 'Vegetables', image: prod11, price: '$120.00', oldPrice: null, discount: null },
    { id: 12, name: 'Chilli', category: 'Vegetables', image: prod12, price: '$120.00', oldPrice: null, discount: null },
  ];
  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="font-sans">
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-2 font-light">
            <span className="mr-2">Home</span> <span className="text-gray-400">Products</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold uppercase tracking-wide">Products</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {['All', 'Vegetables', 'Fruits', 'Juice', 'Dried'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeCategory === cat ? 'text-[#82ae46]' : 'text-gray-800 hover:text-[#82ae46]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {filteredProducts.map((product, index) => (
            <FadeInUp key={product.id} delay={index * 50}>
              <div className="group border border-gray-100 p-4 text-center hover:shadow-xl transition-shadow duration-300 relative">
                {product.discount && (
                  <div className="absolute top-0 left-0 bg-[#82ae46] text-white text-sm px-2 py-1 font-medium z-10">
                    {product.discount}
                  </div>
                )}
                <div className="h-60 w-full overflow-hidden mb-4 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                     <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center hover:bg-[#6f943a]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
                     </button>
                     <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center hover:bg-[#6f943a]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                     </button>
                     <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center hover:bg-[#6f943a]">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                     </button>
                  </div>
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-black">{product.name}</h3>
                <div className="flex justify-center items-center gap-3">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                    )}
                    <span className="text-[#82ae46] font-medium">{product.price}</span>
                </div>
              </div>
            </FadeInUp>
          ))}
        </div>
        <div className="flex justify-center gap-2">
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">&lt;</button>
            <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center border border-[#82ae46]">1</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">2</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">3</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">4</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">5</button>
            <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#82ae46] hover:text-white hover:border-[#82ae46] transition-all">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Shop;