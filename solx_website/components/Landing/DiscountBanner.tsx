import CustomButton from '@components/ui/CustomButton';
import Image from 'next/image'
import React from 'react'

const DiscountBanner = () => {
  return (
    <div className="headings flex-center xl:flex-row gap-5 relative mx-auto">
      <div className="hero__image-container  ">
        <div className="z-10 w-full h-full absolute flex-center justify-end mr-32">
          <div className="bg-green px-20 py-10 w-1/3">
            <p className="text-6xl font-bold text-cream pb-5">Join us, and get upto 5% discount on energy</p>
            <p className='text-2xl font-medium text-cream pb-14'>Don't just sell your energy, earn various benefits from selling and various other discounts.</p>
            <CustomButton title='Know More' containerStyles='text-cream border-cream border-2 rounded-full text-xl font-medium hover:text-green hover:border-green hover:bg-cream transition-all'/>
          </div>
        </div>
        <div className="absolute top-0 left-0 h-full w-full -z-10 bg-gradient-linear opacity-40 blur-sm">

        </div>
        <div className="relative w-full xl:h-full h-[590px] z-0 opacity-60 blur-[1px]">
          <Image
            src="/images/discount-section-image.jpg"
            alt="discount image"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner