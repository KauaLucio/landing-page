import { useState, useEffect } from "react";
import Image from "next/image";
import SlideSingle from "./SlideSingle";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ArrowProps } from 'react-multi-carousel/lib/types';

import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

interface CustomLeftArrowProps extends ArrowProps {
  myOwnStuff: string;
}

interface CustomRightArrowProps extends ArrowProps {
  myOwnStuff: string;
}

import circlesImg from '../public/assets/images/circles.svg'

export default function Portfolio() {
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


  const responsive = {
    desktop: {
      breakpoint: {
        min: 1024,
        max: 5000
      },
      items: 3
    },
    tablet: {
      breakpoint: {
        min: 640,
        max: 1023
      },
      items: 2
    },
    mobile: {
      breakpoint: {
        min: 279,
        max: 639
      },
      items: 1,
      partialVisibilityGutter: 0
    }
  };

  const CustomLeftArrow = ({ onClick }:CustomLeftArrowProps) => {
    return (
      <div
      className="absolute cursor-pointer translate-y-1/2 left-0 bg-[#fff] p-2 rounded-full shadow-xl text-[#60E1CB] text-3xl"
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
    )
  }
    

  const CustomRightArrow = ({ onClick }:CustomRightArrowProps) => {
    return (
      <div
      onClick={onClick}
      className="absolute cursor-pointer translate-y-1/2 right-0 bg-[#fff] p-2 rounded-full shadow-xl text-[#60E1CB] text-3xl font-bold"
    >
      <FaChevronRight />
    </div>
    ) 
  };

  return (
    <div className="relative py-10 pb-12 min-h-[900px] bg-[#fff]">
      <span className="absolute top-[20%] left-[-5%]" ><Image src={circlesImg} alt="Circles" width="600px" height="600px" /></span>
      <div className="z-0 absolute bottom-0 left-0 h-[437px] w-full bg-[#60E1CB]"></div>
      <div className="text-center z-10">
        <p className="text-[#60E1CB] font-medium mb-4 text-lg">Portfolio</p>
        <h2 className="xxxs:3xl md:text-5xl font-bold mb-6">Nossos trabalhos</h2>
      </div>
      <div className="max-w-3xl mx-auto my-10 flex items-center xxxs:flex-col md:flex-row  gap-8 text-[#5FA6CA] ">
          <button className="border-2 rounded-full text-[#7BC0E3]  py-3.8 px-5.5 font-medium">Website Optimization</button>
          <button className="font-medium">Website Optimization</button>
          <button className="font-medium">Website Optimization</button>
      </div>
      <div className="container md:px-2 mx-auto">
          <Carousel
            className="md:px-5 flex items-center gap-4"
            infinite 
            responsive={responsive} 
            customLeftArrow={<CustomLeftArrow myOwnStuff="" />}
            customRightArrow={<CustomRightArrow myOwnStuff="" />}
            arrows={isTablet ? false : true}
            autoPlaySpeed={3000}
            draggable
            keyBoardControl
            slidesToSlide={1}
            swipeable
            itemClass="mx-5"
          >
            <SlideSingle />
            <SlideSingle />
            <SlideSingle />
            <SlideSingle />
            <SlideSingle />
            <SlideSingle />
          </Carousel>
      </div>
    </div>
  )
}
