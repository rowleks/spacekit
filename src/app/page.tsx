"use client";
import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Faq from "@/components/faq/Faq";
import Footer from "@/components/footer/Footer";
import Headline from "@/components/headline/Headline";
import Hero from "@/components/hero/Hero";
import Site from "@/components/site/Site";
// import Product from './Product/page';

function App() {
  return (
    <div>
      <Hero />
      <Site />
      <Headline />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
