import Faq from '@/components/faq/Faq'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'

const FAQ = () => {
  return (
    <div  className='bg-gray'>
      <Navbar/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default FAQ

