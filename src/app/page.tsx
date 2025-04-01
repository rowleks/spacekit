"use client"
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Faq from '@/components/faq/Faq';
import Footer from '@/components/footer/Footer';
import Headline from '@/components/headline/Headline';
import Hero from '@/components/hero/Hero';
import Site from '@/components/site/Site';
import Product from './Product/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div>
            <Hero />
            <Site />
            <Headline />
            <Link to="/product">Go to Product Page</Link>
            <Faq />
            <Footer />
          </div>
        } />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;