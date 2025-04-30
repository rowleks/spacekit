"use client";
import React, { useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Headline from "@/components/headline/Headline";
import Hero from "@/components/hero/Hero";
import Site from "@/components/site/Site";
// import Product from './Product/page';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []); // The empty dependency array ensures this runs only once after the initial render

  return (
    <div className="overflow-hidden">
      <Hero />
      <Site />
      <Headline />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;