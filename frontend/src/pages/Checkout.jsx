import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import checkoutBg from '../assets/bg_1.jpg'; 

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: 'France',
    streetAddress: '',
    apartment: '',
    city: '',
    postcode: '',
    phone: '',
    email: '',
    createAccount: false,
    shipDifferent: false,
    paymentMethod: 'Direct Bank Transfer'
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="font-sans w-full bg-[#f7f6f2]">
      <div 
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${checkoutBg})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div> 
        <div className="relative z-10 text-center text-white">
          <p className="uppercase tracking-widest text-sm mb-3 font-light">
            <Link to="/" className="mr-2 hover:text-[#82ae46] transition-colors">Home</Link> 
            <span className="mr-2">/</span>
            <Link to="/cart" className="mr-2 hover:text-[#82ae46] transition-colors">Cart</Link>
            <span className="text-gray-300">Checkout</span>
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wide">Checkout</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-2xl font-bold text-black mb-8">Billing Details</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-3/5">
            <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-black mb-2 text-sm font-medium">First Name</label>
                        <input type="text" name="firstName" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46]" />
                    </div>
                    <div>
                        <label className="block text-black mb-2 text-sm font-medium">Last Name</label>
                        <input type="text" name="lastName" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46]" />
                    </div>
                </div>
                <div>
                    <label className="block text-black mb-2 text-sm font-medium">State / Country</label>
                    <div className="relative">
                        <select name="country" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46] appearance-none cursor-pointer">
                            <option value="France">France</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                            <option value="Pakistan">Pakistan</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <label className="block text-black mb-2 text-sm font-medium">Street Address</label>
                    <input type="text" name="streetAddress" placeholder="House number and street name" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46] mb-4" />
                    <input type="text" name="apartment" placeholder="Appartment, suite, unit etc: (optional)" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46]" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-black mb-2 text-sm font-medium">Town / City</label>
                        <input type="text" name="city" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46]" />
                    </div>
                    <div>
                        <label className="block text-black mb-2 text-sm font-medium">Postcode / ZIP *</label>
                        <input type="text" name="postcode" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46]" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-black mb-2 text-sm font-medium">Phone</label>
                        <input type="text" name="phone" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46]" />
                    </div>
                    <div>
                        <label className="block text-black mb-2 text-sm font-medium">Email Address</label>
                        <input type="email" name="email" className="w-full border border-gray-300 p-3 bg-white outline-none focus:border-[#82ae46]" />
                    </div>
                </div>

                <div className="flex items-center gap-2 mt-4">
                    <input type="radio" name="createAccount" id="createAccount" className="accent-[#82ae46] w-4 h-4" />
                    <label htmlFor="createAccount" className="text-black text-sm">Create an Account?</label>
                </div>

                <div className="flex items-center gap-2">
                    <input type="radio" name="shipDifferent" id="shipDifferent" className="accent-[#82ae46] w-4 h-4" />
                    <label htmlFor="shipDifferent" className="text-black text-sm uppercase font-bold">Ship to different address</label>
                </div>

            </form>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="bg-white p-8 border border-gray-100 shadow-sm mb-8">
                <h3 className="text-lg font-bold text-black mb-6">Cart Total</h3>
                
                <div className="flex justify-between mb-4 border-b border-gray-100 pb-4">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="text-gray-800 font-medium">$20.60</span>
                </div>
                <div className="flex justify-between mb-4 border-b border-gray-100 pb-4">
                    <span className="text-gray-600">Delivery</span>
                    <span className="text-gray-800 font-medium">$0.00</span>
                </div>
                <div className="flex justify-between mb-4 border-b border-gray-100 pb-4">
                    <span className="text-gray-600">Discount</span>
                    <span className="text-gray-800 font-medium">$3.00</span>
                </div>
                
                <div className="flex justify-between mb-4">
                    <span className="text-gray-400 font-medium">TOTAL</span>
                    <span className="text-black font-bold text-lg">$17.60</span>
                </div>
            </div>

            <div className="bg-white p-8 border border-gray-100 shadow-sm">
                <h3 className="text-lg font-bold text-black mb-6">Payment Method</h3>
                
                <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                        <input type="radio" name="payment" id="bank" defaultChecked className="accent-[#82ae46] w-4 h-4 cursor-pointer" />
                        <label htmlFor="bank" className="text-gray-600 cursor-pointer">Direct Bank Tranfer</label>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <input type="radio" name="payment" id="check" className="accent-[#82ae46] w-4 h-4 cursor-pointer" />
                        <label htmlFor="check" className="text-gray-600 cursor-pointer">Check Payment</label>
                    </div>
                    
                    <div className="flex items-center gap-3">
                        <input type="radio" name="payment" id="paypal" className="accent-[#82ae46] w-4 h-4 cursor-pointer" />
                        <label htmlFor="paypal" className="text-gray-600 cursor-pointer">Paypal</label>
                    </div>

                    <div className="flex items-start gap-3 mt-4">
                        <input type="checkbox" id="terms" className="accent-[#82ae46] w-4 h-4 mt-1 cursor-pointer" />
                        <label htmlFor="terms" className="text-gray-500 text-sm cursor-pointer">I have read and accept the terms and conditions</label>
                    </div>
                </div>

                <button className="w-full bg-[#82ae46] text-white py-4 font-bold rounded hover:bg-[#6f943a] transition-colors">
                    Place an order
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;