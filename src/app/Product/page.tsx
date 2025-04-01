import React from 'react'
import ProductCard from '@/components/productcard/ProductCard'
import Navbar from '@/components/navbar/Navbar'

const Product = () => {
  return (
    <div>
      <Navbar/>
      <div className="overflow-hidden w-80 flex justify-center items-center">
          <p className="whitespace-nowrap animate-scroll-text">
            DESIGNED FOR YOUR EVERYDAY ADVENTURE DESIGNED FOR YOUR EVERYDAY ADVENTURE DESIGNED FOR YOUR EVERYDAY ADVENTURE
          </p>
        </div>
        <ProductCard/>
    </div>
  )
}

export default Product
