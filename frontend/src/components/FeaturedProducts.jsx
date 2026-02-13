import React from 'react';
import prod1 from '../assets/product-1.jpg';
import prod2 from '../assets/product-2.jpg';
import prod3 from '../assets/product-3.jpg';
import prod4 from '../assets/product-4.jpg';
import prod5 from '../assets/product-5.jpg';
import prod6 from '../assets/product-6.jpg';
import prod7 from '../assets/product-7.jpg';
import prod8 from '../assets/product-8.jpg';

const products = [
  { id: 1, name: 'Bell Pepper', image: prod1, price: '$80.00', oldPrice: '$120.00', discount: '30%' },
  { id: 2, name: 'Strawberry', image: prod2, price: '$120.00', oldPrice: null, discount: null },
  { id: 3, name: 'Green Beans', image: prod3, price: '$120.00', oldPrice: null, discount: null },
  { id: 4, name: 'Purple Cabbage', image: prod4, price: '$120.00', oldPrice: null, discount: null },
  { id: 5, name: 'Tomatoe', image: prod5, price: '$80.00', oldPrice: '$120.00', discount: '30%' },
  { id: 6, name: 'Brocolli', image: prod6, price: '$120.00', oldPrice: null, discount: null },
  { id: 7, name: 'Carrots', image: prod7, price: '$120.00', oldPrice: null, discount: null },
  { id: 8, name: 'Fruit Juice', image: prod8, price: '$120.00', oldPrice: null, discount: null },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-white font-sans">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#82ae46] font-bold italic text-lg block mb-2">Featured Products</span>
          <h2 className="text-4xl font-extrabold text-black mb-4">Our Products</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border border-gray-100 p-4 text-center hover:shadow-xl transition-shadow duration-300">
              {product.discount && (
                <div className="absolute top-0 left-0 bg-[#82ae46] text-white text-sm px-2 py-1 font-medium">
                  {product.discount}
                </div>
              )}
              <div className="h-60 w-full overflow-hidden mb-4 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="relative h-20">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-black group-hover:text-[#82ae46] transition-colors">
                  {product.name}
                </h3>
                <div className="absolute w-full bottom-2 transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:translate-y-4 pointer-events-none">
                  <div className="flex justify-center items-center gap-3">
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">{product.oldPrice}</span>
                    )}
                    <span className="text-[#82ae46] font-medium">{product.price}</span>
                  </div>
                </div>
                <div className="absolute w-full bottom-0 flex justify-center items-center gap-2 transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 z-10">
                  <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center hover:bg-[#6f943a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center hover:bg-[#6f943a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#82ae46] text-white flex items-center justify-center hover:bg-[#6f943a] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" stroke="none">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;