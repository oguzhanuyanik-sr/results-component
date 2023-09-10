import React from 'react';

interface CardLayoutProps {
  children: React.ReactNode;
  styles: string;
}

const CardLayout = ({ children, styles }: CardLayoutProps) => {
  return (
    <section
      className={`${styles} w-full md:max-w-[400px] flex flex-col items-center py-6 md:py-11 rounded-b-[32px] md:rounded-[32px]`}
    >
      {children}
    </section>
  );
};

export default CardLayout;
