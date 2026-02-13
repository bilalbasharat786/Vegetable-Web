import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeServices from './components/HomeServices'
import FeaturedProducts from './components/FeaturedProducts'
import DealOfTheDay from './components/DealofTheDay'
import Testimony from './components/Testimony'
import Footer from './components/Footer'
import './App.css'
import Shop from './pages/Shop';
import Wishlist from './pages/Wishlist';
import ProductSingle from './pages/ProductSingle';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import Contact from './pages/Contact';

function Home() {
  

  return (
    <>
      <Hero />
      <HomeServices />
      <FeaturedProducts />
      <DealOfTheDay />
      <Testimony />
      <Footer />
    </>
  )
}
function App() {
  return (
     <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />}/>
        <Route path="/product-single" element={<ProductSingle />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog-single" element={<BlogSingle />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
