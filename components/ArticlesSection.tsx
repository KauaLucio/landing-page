import React, { useEffect, useState } from 'react'
import ArticleSingle from './ArticleSingle'

import circlesImg from '../public/assets/images/circles.svg'
import Image from 'next/image'

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


export default function ArticlesSection() {
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
      className="hidden"

    />
    )
  }
    

  const CustomRightArrow = ({ onClick, ...rest  }:CustomRightArrowProps) => {
    return (
      <div
      onClick={onClick}
      className="absolute cursor-pointer translate-y-1/2 right-[30%] bg-[#60E1CB] h-[50px] w-[50px] rounded-full shadow-xl flex items-center justify-center text-[#fff] text-xl"
    >
      <AiOutlineRight />
    </div>
    ) 
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: {
        min:1280,
        max: 5000
      },
      items: 3
    },
    desktop: {
      breakpoint: {
        min: 1024,
        max: 5000
      },
      items: 2
    },
    tablet: {
      breakpoint: {
        min: 640,
        max: 1023
      },
      items: 1
    },
    mobile: {
      breakpoint: {
        min: 279,
        max: 639
      },
      items: 1
    }
  };

  return (
    <div className="relative bg-[#E9FBF8] md:py-25 xxxs:py-10">
      <div className="xxxs:hidden md:block absolute bottom-md right-[-5%]">
        <Image src={circlesImg} alt="circlesImg"  width="350px" height="400px" />
      </div>
      <div className="container px-0 mx-auto grid md:grid-cols-3 xxxs:grid-cols-1">
      <div className="col-span-1 xxxs:mb-5 md:mb-0">
        <p className="text-[#60E1CB] font-medium mb-3 text-lg">News &amp; Artigos</p>
        <h2 className="text-5xl font-bold mb-4">DaCode Blog</h2>
        <p>
        On daCode blog we will review the latest in web development for the SaaS-, tech- and crypto industry.
        </p>

        <button 
          className="mt-5 px-5 py-2 rounded-full border border-[#5FA6CA] text-[#5FA6CA] hover:bg-[#5FA6CA] hover:text-[#fff] duration-300"
          >
          Ver todos
        </button>
      </div>
      <div className="relative xxxs:right-auto md:right-[-5%] col-span-2">
        <Carousel 
          className="rounded-lg"
          infinite 
          responsive={responsive} 
          customLeftArrow={<CustomLeftArrow myOwnStuff="" />}
          customRightArrow={<CustomRightArrow myOwnStuff="" />}
          arrows={isTablet ? false : true}
          draggable
          keyBoardControl
          slidesToSlide={1}
          swipeable
          renderDotsOutside={false}
          itemClass="md:mr-[1.4%]"
        >
          <ArticleSingle />
          <ArticleSingle />
          <ArticleSingle />
          <ArticleSingle />
        </Carousel>
      </div>
      </div>
    </div>
  )
}
