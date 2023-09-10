import Image from 'next/image';
import React from 'react';

interface SummaryItemProps {
  icon: string;
  title: string;
  rate: string;
  color: 'red' | 'yellow' | 'green' | 'blue';
}

const styles = {
  red: 'text-red bg-lightRed',
  yellow: 'text-yellow bg-lightYellow',
  green: 'text-green bg-lightGreen',
  blue: 'text-blue bg-lightBlue',
};

const SummaryItem = ({ icon, title, rate, color }: SummaryItemProps) => {
  return (
    <div
      className={`w-full flex justify-between mb-4 p-5 rounded-xl ${styles[color]}`}
    >
      <div className='flex'>
        <Image src={icon} alt={title} />
        <p className='ml-4 font-medium text-lg'>{title}</p>
      </div>
      <p className='font-bold text-base text-darkBlue'>
        {rate} <span className='opacity-50'>/ 100</span>
      </p>
    </div>
  );
};

export default SummaryItem;
