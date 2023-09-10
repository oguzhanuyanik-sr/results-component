import React from 'react';
import CardLayout from '@/components/layout/card-layout';

const Result = () => {
  return (
    <CardLayout styles='bg-blueGradient'>
      <p className='title text-lightPurple mb-10 px-10'>Your Result</p>
      <div className='mb-6 md:mb-7 bg-darkBlueGradient h-[140px] w-[140px] md:h-[200px] md:w-[200px] rounded-full flex flex-col justify-center items-center'>
        <p className='font-extrabold text-[56px] md:text-7xl text-white'>76</p>
        <p className='text-lightPurple font-bold text-base md:text-lg'>
          of 100
        </p>
      </div>
      <p className='heading text-white mb-[14px]'>Great</p>
      <p className='text text-lightPurple text-center px-[54px]'>
        Your performance exceed 65% of the people conducting the test here!
      </p>
    </CardLayout>
  );
};

export default Result;
