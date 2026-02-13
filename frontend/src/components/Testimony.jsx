import React, { useEffect, useRef, useState } from 'react';
import person1 from '../assets/person_1.jpg';
import person2 from '../assets/person_2.jpg';
import person3 from '../assets/person_3.jpg';
import partner1 from '../assets/partner-1.png';
import partner2 from '../assets/partner-2.png';
import partner3 from '../assets/partner-3.png';
import partner4 from '../assets/partner-4.png';
import partner5 from '../assets/partner-5.png';

const FadeInUp = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
        }
      });
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

const Testimony = () => {
  
  const testimonials = [
    {
      id: 1,
      image: person1,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Garreth Smith",
      position: "MARKETING MANAGER"
    },
    {
      id: 2,
      image: person2,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Garreth Smith",
      position: "INTERFACE DESIGNER"
    },
    {
      id: 3,
      image: person3,
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      name: "Garreth Smith",
      position: "UI DESIGNER"
    }
  ];
  const partners = [partner1, partner2, partner3, partner4, partner5];

  return (
    <section className="py-24 bg-[#ffffff] font-sans overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
           <FadeInUp>
              <span className="text-[#82ae46] font-bold italic text-xl block mb-2">Testimony</span>
              <h2 className="text-4xl font-extrabold text-black mb-4">Our satisfied customer says</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in
              </p>
           </FadeInUp>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((item, index) => (
            <FadeInUp key={item.id} delay={index * 200}> 
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 right-0 bg-white rounded-full p-1 text-[#82ae46]">
                        <span className="bg-[#82ae46] text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                           ❝
                        </span>
                    </div>
                </div>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm relative px-4">
                  {item.text}
                </p>
                <h3 className="text-black font-bold text-lg">{item.name}</h3>
                <span className="text-gray-400 text-xs tracking-widest uppercase">{item.position}</span>
              </div>
            </FadeInUp>
          ))}
        </div>
        <div className="flex justify-center gap-2 mb-24">
            <span className="w-3 h-3 rounded-full bg-[#82ae46] cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-[#82ae46]"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-[#82ae46]"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-[#82ae46]"></span>
            <span className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-[#82ae46]"></span>
        </div>
        <div className="border-t border-gray-200 w-full mb-16"></div>
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
             {partners.map((logo, index) => (
                <FadeInUp key={index} delay={index * 150}>
                   <div className="h-8 md:h-12 w-auto">
                      <img src={logo} alt="Partner" className="h-full object-contain" />
                   </div>
                </FadeInUp>
             ))}
        </div>
      </div>
      <section className="bg-[#f7f6f2] py-12 md:py-20 relative z-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-black mb-2">Subcribe to our Newsletter</h2>
              <p className="text-gray-500">Get e-mail updates about our latest shops and special offers</p>
            </div>
            <div className="w-full md:w-auto flex flex-col md:flex-row gap-0">
              <input 
                type="email" 
                placeholder="Enter email address" 
                className="p-4 w-full md:w-80 outline-none text-gray-700 placeholder-gray-400"
              />
              <button className="bg-[#82ae46] hover:bg-[#6f943a] text-white px-8 py-4 font-bold uppercase transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
    
  );
};

export default Testimony;