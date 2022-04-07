import Image from "next/image";
import Link from "next/link";
import sectionBannerImg from '../public/assets/images/banner-section.svg'

import { FaLinkedinIn } from 'react-icons/fa'

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function Team() {
  return (
    <div className="relative z-10">
      <div className="relative flex items-center justify-center z-30 pt-10 pb-10 xxxs:px-3 md:px-0">
        <div className="absolute w-full h-full -z-10">
          <Image 
            src={sectionBannerImg} 
            layout="fill"
            objectFit="cover"
            quality={100}
            alt="background section"  
          />
        </div>
        <div className="text-center max-w-xl">
            <h2 className="text-4xl font-bold mb-3">O Time</h2>
            <p className="text-sm opacity-75 font-medium text-[#292525]">Our team members have over 15 years of experience within web development, SEO, content and design. We have an extensive portfolio of working with different companies and projects from various parts of the world. </p>
        </div>
      </div>
      <div className="z-30 relative top-[-50px] mx-auto max-w-6xl">
        <div className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
        {arr.map(num => (
          <div key={num} className="bg-[#fff] py-3 px-4 rounded-lg shadow-2xl text-center mb-4">
            <div className="relative mb-3">
              <div className="w-[80px] h-[80px] rounded-full bg-[#E9FBF8] mx-auto"></div>
            </div>
            <h2 className="mb-1 text-md font-bold">John Doe</h2>
            <p className="text-sm text-[#60E1CB]">
              Web Project Manager
            </p>
            <div className="mt-2 inline-block p-1 text-lg shadow-xl rounded-full bg-[#5FA6CA] mx-auto">
              <FaLinkedinIn />
            </div>
            <button className="mt-3 px-2 py-1 rounded-full flex mx-auto items-center gap-1 text-sm font-medium bg-[#60E1CB] text-[#fff]">
              <Link passHref href="">johndoe@email.com</Link>
            </button>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  )
}
 