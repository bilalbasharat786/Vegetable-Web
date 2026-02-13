import React, { useState, useEffect, useRef } from 'react';
import counterBg from '../assets/bg_3.jpg';


const useCounterAnimation = (targetValue, duration = 2000, startAnimation) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * targetValue));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [targetValue, duration, startAnimation]);

  return count;
};


const SingleCounter = ({ target, label, start }) => {
  const animatedCount = useCounterAnimation(target, 2000, start);

  return (
    <div className="flex flex-col items-center">
      <strong className="text-[#000000] text-2xl sm:text-3xl md:text-4xl font-semi-bold mb-2">
        {new Intl.NumberFormat().format(animatedCount)}
      </strong>
      <span className="text-black uppercase tracking-widest text-xs sm:text-sm font-medium opacity-100">
        {label}
      </span>
    </div>
  );
};

const About2 = () => {
  const [startCounter, setStartCounter] = useState(false);
  const counterSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounter(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const counterItems = [
    { id: 1, target: 10000, label: 'Happy Customers' },
    { id: 2, target: 100, label: 'Branches' },
    { id: 3, target: 1000, label: 'Partner' },
    { id: 4, target: 100, label: 'Awards' },
  ];

  return (
    <div
      ref={counterSectionRef}
      className="relative w-full bg-cover bg-center bg-fixed py-20 md:py-32"
      style={{ backgroundImage: `url(${counterBg})` }}
    >
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {counterItems.map((item) => (
            <SingleCounter
              key={item.id}
              target={item.target}
              label={item.label}
              start={startCounter}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About2;