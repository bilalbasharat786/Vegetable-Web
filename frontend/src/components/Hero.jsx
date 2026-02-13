import React, { useState, useEffect } from 'react';
import heroImage1 from '../assets/bg_1.jpg'; 
import heroImage2 from '../assets/bg_2.jpg';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage1, heroImage2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-screen overflow-hidden font-sans">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          currentImageIndex === 0 ? 'opacity-100 z-0' : 'opacity-0 z-0'
        }`}
        style={{ backgroundImage: `url(${images[0]})` }}
      ></div>
       <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
          currentImageIndex === 1 ? 'opacity-100 z-0' : 'opacity-0 z-0'
        }`}
        style={{ backgroundImage: `url(${images[1]})` }}
      ></div>
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-20 px-4">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold uppercase tracking-widest mb-4 leading-tight drop-shadow-lg">
          We serve Fresh Vegetables & Fruits
        </h1>
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-8 font-bold opacity-90 drop-shadow-md">
          We deliver organic vegetables & fruits
        </p>
        <button className="bg-[#82ae46] hover:bg-[#6f943a] text-white py-3 px-8 rounded-full text-sm md:text-base uppercase tracking-wider font-bold transition-all transform hover:scale-105 shadow-lg">
          View Details
        </button>
      </div>
    </div>
  );
};

export default HeroSection;