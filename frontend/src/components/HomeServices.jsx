import React, { useEffect, useRef, useState } from 'react';
import catFruit from '../assets/category-1.jpg';
import catVeg from '../assets/category-2.jpg';
import catJuice from '../assets/category-3.jpg';
import catDried from '../assets/category-4.jpg';
import centerImg from '../assets/category.jpg';
import feature1 from '../assets/f-icon1.png';
import feature2 from '../assets/f-icon2.png';
import feature3 from '../assets/f-icon3.png';
import feature4 from '../assets/f-icon4.png';

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
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const HomeServices = () => {
  return (
    <section className="w-full py-16 bg-white font-sans overflow-hidden">
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {/* Feature 1: Shipping */}
          <FadeInUp delay={100}>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-4 transition-transform group-hover:scale-110 duration-300">
                <img src={feature1} alt="Free Shipping" className="w-full h-full object-contain" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-widest mb-2">Free Shipping</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">On order over $100</p>
            </div>
          </FadeInUp>

          {/* Feature 2: Always Fresh */}
          <FadeInUp delay={200}>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-4 transition-transform group-hover:scale-110 duration-300">
                 <img src={feature2} alt="Always Fresh" className="w-full h-full object-contain" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-widest mb-2">Always Fresh</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Product well package</p>
            </div>
          </FadeInUp>

          {/* Feature 3: Superior Quality */}
          <FadeInUp delay={300}>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-4 transition-transform group-hover:scale-110 duration-300">
                <img src={feature3} alt="Superior Quality" className="w-full h-full object-contain" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-widest mb-2">Superior Quality</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Quality Products</p>
            </div>
          </FadeInUp>

          {/* Feature 4: Support */}
          <FadeInUp delay={400}>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-4 transition-transform group-hover:scale-110 duration-300">
                <img src={feature4} alt="Support" className="w-full h-full object-contain" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-widest mb-2">Support</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">24/7 Support</p>
            </div>
          </FadeInUp>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6">
            <FadeInUp delay={100}>
              <div className="relative h-64 group overflow-hidden cursor-pointer">
                <img src={catFruit} alt="Fruits" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 bg-[#82ae46] text-white px-6 py-2 text-lg font-normal">Fruits</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={200}>
              <div className="relative h-64 group overflow-hidden cursor-pointer">
                <img src={catVeg} alt="Vegetables" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 bg-[#82ae46] text-white px-6 py-2 text-lg font-normal">Vegetables</div>
              </div>
            </FadeInUp>
          </div>
          <div className="flex flex-col gap-6 justify-between text-center order-first lg:order-none mb-6 lg:mb-0">
             <FadeInUp delay={300}>
                <div className="flex flex-col items-center justify-center h-full">
                  <h2 className="text-[#82ae46] font-script text-3xl md:text-4xl mb-2 italic">Vegetables</h2>
                  <p className="text-gray-600 mb-6 font-medium">Protect the health of every home</p>
                  <button className="bg-[#82ae46] hover:bg-[#6f943a] text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider transition-colors mb-8">
                    Shop now
                  </button>
                  <div className="w-full h-64 overflow-hidden">
                     <img src={centerImg} alt="Basket" className="w-full h-full object-contain" />
                  </div>
                </div>
             </FadeInUp>
          </div>
          <div className="flex flex-col gap-6">
            <FadeInUp delay={400}>
              <div className="relative h-64 group overflow-hidden cursor-pointer">
                <img src={catJuice} alt="Juices" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 bg-[#82ae46] text-white px-6 py-2 text-lg font-normal">Juices</div>
              </div>
            </FadeInUp>
            <FadeInUp delay={500}>
              <div className="relative h-64 group overflow-hidden cursor-pointer">
                <img src={catDried} alt="Dried" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute bottom-0 left-0 bg-[#82ae46] text-white px-6 py-2 text-lg font-normal">Dried</div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeServices;