import Image from 'next/image'
import React from 'react'

import sectionBannerImg from '../public/assets/images/banner-section.svg'

export default function ContactUs() {
  return (
    <div className="relative flex items-center justify-center z-30 min-h-[480px] xxxs:px-3 md:px-0">
      <div className="absolute w-full h-full -z-10">
        <Image 
          src={sectionBannerImg} 
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background section"  
        />
      </div>
      <div className="text-center">
          <h2 className="text-3xl font-bold mb-3">Interessado em trabalhar conosco?</h2>
          <p className="text-md mb-5">Send a line here get and update daily</p>
          <button className="rounded-full bg-[#292525] text-[#fff] font-medium py-3 px-6 shadow-3xl">initcode_contact@example.com</button>
      </div>
    </div>
  )
}
