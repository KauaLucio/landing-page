import Image from "next/image";
import sectionBannerImg from '../public/assets/images/banner-section.svg'
import maskImg from '../public/assets/images/mask.svg'

import { BiSearchAlt } from 'react-icons/bi'
import Link from "next/link";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

export default function blog() {
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
            <h2 className="text-4xl font-bold mb-3">News &amp; Artigos</h2>
            <p className="text-sm opacity-75 font-medium text-[#292525] mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
          <div className="rounded-full px-3 bg-[#fff] flex items-center">
            <input className="w-11/12 outline-0 py-2" type="text" placeholder="Procure no blog..." />
            <button className="px-3 py-1 text-center rounded-full text-[#fff] bg-[#60E1CB] text-xl">
              <p><BiSearchAlt /></p>
            </button>
          </div>
        </div>
      </div>
      <div className="py-10 mx-auto max-w-6xl">
      <div className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-3">
        {arr.map(num => (
          <div key={num} className="bg-[#fff] rounded-lg shadow-2xl text-center mb-4">
            <div className="relative">
              <div className="w-full relative rounded-full">
                <span className="z-30 absolute top-[10px] left-[10px] px-1 py-[3px] font-medium text-xs text-[#fff] rounded-full bg-[#60E1CB]">Julho, 15</span>
                <Image src={maskImg} alt="Imagem 1" layout="responsive" objectFit="cover" />
              </div>
            </div>
            <div className="md:py-2 xxxs:py-4 px-4">
              <h2 className="mb-1 text-md font-bold">Do millennials care about saving?</h2>
              <p className="text-sm opacity-75">
                Curabitur tincidunt sed neque id pretium. Aenean volutpat tristique tincidunt. Pellentesque ac urna.
              </p>

              <button className="mt-3 px-3 py-1 rounded-full flex mx-auto items-center gap-1 text-sm font-medium bg-[#60E1CB] text-[#fff]">
                <Link passHref href="">Ler mais</Link>
              </button>
            </div>
          </div>
        ))}
          
        </div>
      </div>
    </div>
  )
}
