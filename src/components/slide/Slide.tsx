import React from 'react';
import Headline from '../headline/Headline';

const Slide = () => {
  return (
    <div className='flex justify-center items-start gap-8 p-4'> {/* Added p-4 for padding */}
      <div className='w-[700px]'>
        <img src='./bags.jpg' alt='Bags' className='w-full h-auto' />
      </div>
      <div className='w-[700px]'>
        <img src='./standing-man.jpg' alt='Standing Man' className='w-full h-auto mb-4' />
        <p className='text-sm mb-2'>IDEAL FOR QUITE EVENINGS</p>
        <h5 className='text-xl font-semibold mb-2'>Mindful Living in <br />Every Page</h5>
        <p className='text-sm mb-4'>
          Whether you're looking to reflect on your past, gain clarity on your goals, or simply find a few moments of calm in your busy day, this beautifully designed guide will inspire and motivate.
          Let Journey Within be the companion that helps you navigate life’s ups and downs with grace and mindfulness.
        </p>

        <div className=''>
          <div className='block justify-end items-end'>
            <img src='./writing.jpg' alt='Writing 1' className='w-20 h-20' />
          <img src='./writing.jpg' alt='Writing 2' className='w-20 h-20' /></div>
          <div>
            <p className='text-sm mb-2'>QUALITY, SIMPLICITY AND COMFORT</p>
            <h5 className='text-xl font-semibold mb-2'>Simplicity Meets Sophistication</h5>
            <p className='text-sm'>
              Designed for those who appreciate the finer things in life, this mug combines functionality with sleek, modern design. Its smooth ceramic surface is easy to clean and resistant to stains, while the comfortable handle ensures a perfect grip every time.
              Whether you're enjoying a quiet morning at home or a quick break at the office, the Morning Brew Mug adds a touch of sophistication to your daily routine.
            </p>
          </div>
        </div>

        <div className=''>
         <img src='./writing.jpg' alt='Writing 3' className='w-20 h-20' />
        </div>
      </div>
    </div>
    
  
  );
};

export default Slide;