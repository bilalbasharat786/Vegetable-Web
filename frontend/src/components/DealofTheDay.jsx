import React, { useState, useEffect } from 'react';


import bgImage from '../assets/bg_3.jpg';

const DealOfTheDay = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  useEffect(() => {
    const targetDate = new Date().getTime() + (5 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="w-full relative bg-cover bg-center py-20 md:py-32 font-sans"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-white/50 md:bg-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2"></div>
          <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0">
            <span className="text-[#82ae46] font-bold italic text-lg block mb-2">
              Best Price For You
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-4 tracking-tight">
              Deal of the day
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed max-w-lg mx-auto md:mx-0">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
            </p>
            <h3 className="text-[#82ae46] font-bold italic text-3xl mb-2">Spinach</h3>
            <div className="text-gray-500 mb-8">
              <span className="line-through mr-2">$10</span>
              <span className="text-[#82ae46] font-bold text-xl">now $5 only</span>
            </div>
            <div className="flex justify-center md:justify-start gap-4 md:gap-8 mb-8">
              <div className="flex flex-col items-center">
                <span className="text-[#82ae46] text-3xl md:text-4xl font-extrabold">
                  {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                </span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium">Days</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#82ae46] text-3xl md:text-4xl font-extrabold">
                  {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
                </span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium">Hours</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#82ae46] text-3xl md:text-4xl font-extrabold">
                  {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                </span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium">Minutes</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-[#82ae46] text-3xl md:text-4xl font-extrabold">
                  {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                </span>
                <span className="text-gray-500 text-xs md:text-sm uppercase tracking-widest font-medium">Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealOfTheDay;