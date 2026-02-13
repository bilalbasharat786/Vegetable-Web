import React, {useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import heroBg from '../assets/bg_1.jpg';
import aboutImg from '../assets/about.jpg';
import About2 from '../components/About2';
import person1 from '../assets/person_1.jpg';
import person2 from '../assets/person_2.jpg';
import person3 from '../assets/person_3.jpg';
import feature1 from '../assets/f-icon1.png';
import feature2 from '../assets/f-icon2.png';
import feature3 from '../assets/f-icon3.png';
import feature4 from '../assets/f-icon4.png';

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
const About = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
            <span className="text-gray-300">About us</span>
          </p>
          <h1 className=" text-4xl md:text-6xl font-extrabold uppercase tracking-wide">About Us</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 bg-[#f7f6f2]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] md:h-[500px] w-full">
            <img 
              src={aboutImg} 
              alt="About Us" 
              className="w-full h-full object-cover shadow-lg"
            />
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-[#82ae46] rounded-full flex items-center justify-center shadow-2xl animate-pulse cursor-pointer hover:bg-[#6f943a] transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white ml-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
              Welcome to Vegefoods an eCommerce website
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p className="text-gray-500 mb-8 leading-relaxed">
              But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
            </p>
            
            <Link to="/shop">
              <button className="bg-[#82ae46] text-white py-4 px-8 rounded-full font-bold uppercase tracking-wider hover:bg-[#6f943a] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
      {isVideoOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4">
          <button 
            onClick={() => setIsVideoOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-[#82ae46] transition-colors"
          >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          </button>
          <div className="w-full max-w-4xl aspect-video bg-black shadow-2xl rounded-lg overflow-hidden relative">
             <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1" 
                title="Vegefoods Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
             ></iframe>
          </div>
        </div>
      )}
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
      <About2 />
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
      <div className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <FadeInUp delay={100}>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-4 transition-transform group-hover:scale-110 duration-300">
                <img src={feature1} alt="Free Shipping" className="w-full h-full object-contain" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-widest mb-2">Free Shipping</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">On order over $100</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={200}>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-4 transition-transform group-hover:scale-110 duration-300">
                 <img src={feature2} alt="Always Fresh" className="w-full h-full object-contain" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-widest mb-2">Always Fresh</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Product well package</p>
            </div>
          </FadeInUp>
          <FadeInUp delay={300}>
            <div className="flex flex-col items-center group">
              <div className="w-24 h-24 mb-4 transition-transform group-hover:scale-110 duration-300">
                <img src={feature3} alt="Superior Quality" className="w-full h-full object-contain" />
              </div>
              <h3 className="uppercase font-bold text-sm tracking-widest mb-2">Superior Quality</h3>
              <p className="text-gray-500 text-xs uppercase tracking-wide">Quality Products</p>
            </div>
          </FadeInUp>
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
    </div>
  );
};

export default About;