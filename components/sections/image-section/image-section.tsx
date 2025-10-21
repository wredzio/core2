import React from 'react';

import { cn } from '@/lib/utils';

interface ImageSectionProps {
  title: string;
  description: React.ReactNode;
  image: React.ReactNode;
  layout: 'left' | 'right';
}

export const ImageSection = (props: ImageSectionProps) => {
  const { title, description, image, layout } = props;

  return (
    <div className='px-3 py-6 xl:px-0'>
      <div
        className={cn('flex flex-col gap-8', {
          'lg:flex-row': layout === 'left',
          'lg:flex-row-reverse': layout === 'right',
        })}
      >
        <div className='flex flex-1 flex-col justify-center'>
          <h2 className='text-3xl font-bold uppercase md:text-4xl'>{title}</h2>
          <div className='mt-6 text-lg'>{description}</div>
        </div>
        <div className='relative min-h-[400px] flex-1 md:min-h-[600px]'>
          <div className='absolute inset-0 overflow-hidden rounded-lg'>{image}</div>
        </div>
      </div>
    </div>
  );
};
