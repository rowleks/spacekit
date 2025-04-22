import React from 'react';
import Navbar from '@/components/navbar/Navbar';
import Button from '@/components/button/Button';
import Footer from '@/components/footer/Footer';

const Page = () => {
  return (
    <div className='bg-gray-100  flex flex-col'>
      <Navbar />
      <div className='flex-grow flex flex-col  justify-center items-center px-4 pt-10 md:pt-20 lg:pt-24'>
        <div className='w-full'> {/* Wrapper for centering h4 */}
          <h4 className='mb-8 pb-6 font-extralight text-2xl text-center'>
            Have questions or <br className='sm:hidden' /> need support?
          </h4>
        </div>
        <form className='w-full max-w-md'>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>
              Name:
            </label>
            <input
              type='text'
              id='name'
              placeholder='Enter Your Name'
              className='shadow appearance-none border-b rounded-t-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>
              Email:
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter Your Email'
              className='shadow appearance-none border-b rounded-t-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            />
          </div>

          <div className='mb-4'>
            <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>
              Message:
            </label>
            <textarea
              id='message'
              placeholder='Enter your message'
              className='shadow appearance-none border-b rounded-t-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none'
            />
          </div>

         <Button/>
        </form>
        
        <Footer/>
      </div>
    </div>
  );
};

export default Page;