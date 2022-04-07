import { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowProps } from 'react-multi-carousel/lib/types';

import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai'
interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}

interface CustomRightArrowProps extends ArrowProps {
  myOwnStuff: string;
}


export default function Testimonials() {
  const [isTablet, setIsTablet] = useState(false)
  useEffect(() => {
    window.addEventListener('resize', () => {
      if(window.innerWidth <= 768) {
        setIsTablet(true)
      }else {
        setIsTablet(false)
      }
    })

  })

  const CustomLeftArrow = ({ onClick, ...rest }:CustomLeftArrowProps) => {
    return (
      <div
      className="absolute cursor-pointer translate-y-1/2 left-[60px] bg-[#fff] h-[40px] w-[40px] rounded-full shadow-xl flex items-center justify-center text-[#3d3d3d] text-xl"
      onClick={onClick}
    >
      <AiOutlineLeft />
    </div>
    )
  }
    

  const CustomRightArrow = ({ onClick, ...rest  }:CustomRightArrowProps) => {
    return (
      <div
      onClick={onClick}
      className="absolute cursor-pointer translate-y-1/2 right-[60px] bg-[#fff] h-[40px] w-[40px] rounded-full shadow-xl flex items-center justify-center text-[#3d3d3d] text-xl"
    >
      <AiOutlineRight />
    </div>
    ) 
  };

  const responsive = {
    desktop: {
      breakpoint: {
        min: 0,
        max: 4000
      },
      items: 1
    }
  };

  return (
    <div className="relative pt-10 pb-10">
      <div className="text-center">
        <p className="text-[#60E1CB] font-medium mb-4 text-lg">Testemunhos</p>
        <h2 className="text-5xl font-bold mb-6 xxxs:px-3 md:px-0">Nossos Clientes</h2>
      </div>
      <div>
      <Carousel 
        className="pb-10"
        infinite 
        responsive={responsive} 
        customLeftArrow={<CustomLeftArrow myOwnStuff="" />}
        customRightArrow={<CustomRightArrow myOwnStuff="" />}
        arrows={isTablet ? false : true}
        autoPlaySpeed={3000}
        draggable
        keyBoardControl
        showDots
        slidesToSlide={1}
        swipeable
        renderDotsOutside={false}
        >
        <Testimonial />
        <Testimonial />
        <Testimonial />
        <Testimonial />
      </Carousel>
      </div>
    </div>
  )
}
