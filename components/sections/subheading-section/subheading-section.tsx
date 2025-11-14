import React from 'react';

export interface SubheadingSectionProps {
  text: string;
}

export const SubheadingSection = (props: SubheadingSectionProps) => {
  const { text } = props;

  return (
    <h2 className='font-michroma pt-6 text-3xl leading-none font-semibold text-primary uppercase sm:text-[32px] md:pt-8 md:text-[36px] lg:pt-12 lg:text-[40px] xl:text-[48px]'>
      {text}
    </h2>
  );
};
