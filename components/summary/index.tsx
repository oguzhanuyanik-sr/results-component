import React from 'react';
import CardLayout from '../layout/CardLayout';
import SummaryItem from '../common/summary-item';
import { summaryItemData } from '@/constants';
import Link from 'next/link';

type Props = {};

const Summary = (props: Props) => {
  return (
    <CardLayout styles='bg-white text-darkBlue px-10'>
      <p className='title mb-7 text-start md:text-center w-full'>Summary</p>
      <div className='w-full'>
        {summaryItemData.map(({ icon, title, rate, color }) => (
          <SummaryItem
            key={title}
            icon={icon}
            title={title}
            rate={rate}
            color={color}
          />
        ))}
      </div>
      <Link
        href='/'
        className='mt-6 bg-darkBlue w-full rounded-[128px] text-veryLightBlue text-center font-bold text-lg py-5 hover:bg-blueGradient transition-all'
      >
        Continue
      </Link>
    </CardLayout>
  );
};

export default Summary;
