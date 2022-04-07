import Image from "next/image";
import ContactUs from "../components/ContactUs";
import Schedule from "../components/Schedule";
import ServicesContainer from "../components/ServicesContainer";

import sectionBannerImg from '../public/assets/images/banner-section.svg'

export default function Services() {
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
            <h2 className="text-4xl font-bold mb-3">O que podemos oferecer ao seu negócio</h2>
            <p className="text-sm opacity-75 font-medium text-[#292525]">We have chosen to only collaborate and work with SaaS businesses, this is because our expertise lies and we know that we can provide the most value to our clients. Our team has worked with Nordic, European and American tech unicorns.</p>
        </div>
      </div>
      <div className="z-30 relative top-[-40px] max-w-7xl mx-auto bg-[#E9FBF8] rounded-xl md:px-12 md:py-11 xxxs:px-3 xxxs:py-5">
        <div className="text-center mb-4">
          <h2 className="text-4xl font-bold mb-3">Nossos Serviços</h2>
          <p className="">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
tempor invidunt ut labore et.</p>
        </div>
        <ServicesContainer />
      </div>
      <ContactUs />
      <Schedule />
    </div>
  )
}
