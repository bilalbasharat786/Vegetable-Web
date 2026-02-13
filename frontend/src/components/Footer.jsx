import React from 'react';
import twitterIcon from '../assets/twitter.png';
import facebookIcon from '../assets/facebook.png';
import instagramIcon from '../assets/instagram.png';
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
  
    <footer className="bg-[#ffffff] text-gray-900 py-16 relative font-sans text-[15px]">
      <button 
        onClick={scrollToTop}
        className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-[#82ae46] hover:bg-[#6f943a] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg z-10 group"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-black group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>


      <div className="container mx-auto px-4 pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="mb-8 md:mb-0">
            <h2 className="text-black font-bold text-lg mb-6 tracking-wider uppercase">Vegefoods</h2>
            <p className="mb-8 leading-relaxed text-gray-900">
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
            </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12  flex items-center justify-center rounded-full hover:bg-[#82ae46] transition-colors duration-300 group overflow-hidden">
                  <img src={twitterIcon} alt="Twitter" className="w-12 h-12 object-contain" />
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#82ae46] transition-colors duration-300 group overflow-hidden">
                  <img src={facebookIcon} alt="Facebook" className="w-12 h-12 object-contain" />
                </a>
                <a href="#" className="w-12 h-12 flex items-center justify-center rounded-full hover:bg-[#82ae46] transition-colors duration-300 group overflow-hidden">
                   <img src={instagramIcon} alt="Instagram" className="w-12 h-12 object-contain" />
                </a>
              </div>
          </div>
          <div className="mb-8 md:mb-0 md:pl-10">
             <h2 className="text-black font-bold text-lg mb-6 tracking-wider uppercase">Menu</h2>
             <ul className="space-y-4">
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">Journal</a></li>
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">Contact Us</a></li>
             </ul>
          </div>
          <div className="mb-8 md:mb-0">
             <h2 className="text-black font-bold text-lg mb-6 tracking-wider uppercase">Help</h2>
             <ul className="space-y-4">
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">Shipping Information</a></li>
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">Returns & Exchange</a></li>
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">Terms & Conditions</a></li>
                <li><a href="#" className="hover:text-[#82ae46] transition-colors">Privacy Policy</a></li>
             </ul>
          </div>
          <div>
             <h2 className="text-black font-bold text-lg mb-6 tracking-wider uppercase">Have a Questions?</h2>
             <ul className="space-y-4">
                <li className="flex items-start gap-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#82ae46] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                   <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
                </li>
                <li className="flex items-center gap-4">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#82ae46] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                   <a href="tel://+23923929210" className="hover:text-[#82ae46] transition-colors">+2 392 3929 210</a>
                </li>
                <li className="flex items-center gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#82ae46] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                   <a href="mailto:info@yourdomain.com" className="hover:text-[#82ae46] transition-colors">info@yourdomain.com</a>
                </li>
             </ul>
          </div>
        </div>
        <div className="text-center text-gray-900 pt-8 border-t border-gray-800">
          <p>
            Copyright ©{new Date().getFullYear()} All rights reserved | This template is made with 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1 inline-block text-[#82ae46]" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            by <a href="#" className="text-[#82ae46] hover:underline">Colorlib</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;