import React from 'react'
import ProductCard from '../productcard/ProductCard'

const Product = () => {
  return (
    <div>
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
