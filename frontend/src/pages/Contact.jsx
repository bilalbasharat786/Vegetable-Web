import React from 'react';
import { Link } from 'react-router-dom';
import contactBg from '../assets/bg_1.jpg'; 

const Contact = () => {
  return (
    <div className="font-sans w-full bg-white">
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div> 
        <div className="relative z-10 text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-3 font-light">
            <Link to="/" className="mr-2 hover:text-[#82ae46] transition-colors">Home</Link> 
            <span className="text-gray-300">Contact Us</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">Contact Us</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white p-8 shadow-sm text-center md:text-left border border-gray-100 flex flex-col justify-center min-h-[150px]">
                <p className="text-gray-600 mb-1 font-medium text-sm">
                    <span className="text-black font-bold mr-2">Address:</span> 
                    198 West 21th Street, Suite 721 New York NY 10016
                </p>
            </div>
            <div className="bg-white p-8 shadow-sm text-center md:text-left border border-gray-100 flex flex-col justify-center min-h-[150px]">
                <p className="text-gray-600 mb-1 font-medium text-sm">
                    <span className="text-black font-bold mr-2">Phone:</span> 
                    <a href="tel:+1235235598" className="text-[#82ae46] hover:underline">+ 1235 2355 98</a>
                </p>
            </div>
            <div className="bg-white p-8 shadow-sm text-center md:text-left border border-gray-100 flex flex-col justify-center min-h-[150px]">
                <p className="text-gray-600 mb-1 font-medium text-sm">
                    <span className="text-black font-bold mr-2">Email:</span> 
                    <a href="mailto:info@yoursite.com" className="text-[#82ae46] hover:underline">info@yoursite.com</a>
                </p>
            </div>
            <div className="bg-white p-8 shadow-sm text-center md:text-left border border-gray-100 flex flex-col justify-center min-h-[150px]">
                <p className="text-gray-600 mb-1 font-medium text-sm">
                    <span className="text-black font-bold mr-2">Website:</span> 
                    <a href="#" className="text-[#82ae46] hover:underline">yoursite.com</a>
                </p>
            </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 bg-white shadow-sm">
            <div className="w-full lg:w-1/2 bg-gray-200 min-h-[400px] lg:min-h-[550px] relative flex items-center justify-center">
                <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">!</div>
                    <h3 className="text-xl text-gray-700 font-bold mb-2">Sorry! Something went wrong.</h3>
                    <p className="text-gray-500 text-sm">This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 p-8 md:p-12 bg-white">
                <form className="space-y-6">
                    <div>
                        <input type="text" placeholder="Your Name" className="w-full border border-gray-300 p-4 outline-none focus:border-[#82ae46] placeholder-gray-400" />
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email" className="w-full border border-gray-300 p-4 outline-none focus:border-[#82ae46] placeholder-gray-400" />
                    </div>
                    <div>
                        <input type="text" placeholder="Subject" className="w-full border border-gray-300 p-4 outline-none focus:border-[#82ae46] placeholder-gray-400" />
                    </div>
                    <div>
                        <textarea rows="7" placeholder="Message" className="w-full border border-gray-300 p-4 outline-none focus:border-[#82ae46] placeholder-gray-400 resize-none"></textarea>
                    </div>
                    <div>
                        <button className="bg-[#82ae46] text-white py-4 px-10 rounded-full font-bold uppercase tracking-wider hover:bg-[#6f943a] transition-colors shadow-lg w-full md:w-auto">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;