import Image from "next/image";
import ContactUs from "../components/ContactUs";
import Schedule from "../components/Schedule";
import sectionBannerImg from '../public/assets/images/banner-section.svg'
const arr = [1, 2, 3, 4]

export default function testimonials() {
  return (
    <div>
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
            <h2 className="text-4xl font-bold mb-3">Alguns dos nossos clientes</h2>
            <p className="text-sm opacity-75 font-medium text-[#292525]">We take your SaaS idea and make it into reality. We start with going into why and what your are looking for. Then after brainstorming on branding and strategy we are going into the details of what what and why the you want to create a website. In order to make the creation process as smooth and effective as possible then we are working in an agile/scrum way in order to make sure we can deliver on time and within budget for our clients.</p>
        </div>
      </div>
      <div className="py-10 mx-auto max-w-4xl">
          {arr.map(num => (
            <div key={num} className="rounded-xl p-10 mb-8 bg-[#E9FBF8]">
              <div className="rounded-lg bg-[#fff] text-center border-t-[5px] border-[#60E1CB] shadow-black shadow-2xl py-4 px-5">
                <h2 className="text-xl font-bold mb-3">
                  Lunar Strategy SaaS Marketing Agency - Rebranding of website
                </h2>
                <p className="opacity-75">
                  We got a mission from Lunar Strategy to rebrand their website for their SaaS marketing agency. Their vision was to make a clean website and playing with their Lunar and Space theme, this mean using icon and symbols on the website that went with their branding and where they wanted to position themselves.
                </p>
              </div>
            </div>
          ))}
      </div>
      <ContactUs />
      <Schedule />
    </div>
  )
}
