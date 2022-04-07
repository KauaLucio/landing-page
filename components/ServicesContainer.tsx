import Link from 'next/link'
import Image from 'next/image'

import ellipseImg from '../public/assets/images/ellipse.svg'
import arrowRightImg from '../public/assets/images/arrow-right.svg'
import websiteImg from '../public/assets/images/web-site.svg'
import wordpressPluginImg from '../public/assets/images/wordpress.svg'
import webDesignImg from '../public/assets/images/web-design.svg'
import magnifyingImg from '../public/assets/images/magnifying-glass.svg'
import startupImg from '../public/assets/images/startup.svg'
import layersImg from '../public/assets/images/layers.svg'


export default function ServicesContainer() {
  return (
    <div className="grid xxxs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-3">
          <div className="bg-[#fff] px-4 pt-8 pb-4 rounded-lg border-t-[5px] border-[#60E1CB] shadow-black shadow-2xl">
            <div className="relative mb-3">
              <div className="absolute top-[-15px] left-[-15px]"><Image src={ellipseImg} alt="Ícone WordPress" /></div>
              <Image src={websiteImg} alt="Ícone WordPress" />
            </div>
            <h2 className="mb-3 text-md font-bold">Wordpress Site</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit harum eaque
            </p>
            <span className="mt-3 flex items-center gap-1 text-sm text-[#5FA6CA]">
              <Link passHref href="">Leia mais</Link>
              <Image src={arrowRightImg} alt="Seta para a direita" />
            </span>
          </div>

          <div className="bg-[#fff] px-4 pt-8 pb-4 rounded-lg border-t-[5px] border-[#60E1CB] shadow-black shadow-2xl">
            <div className="relative mb-3">
              <div className="absolute top-[-15px] left-[-15px]"><Image src={ellipseImg} alt="Ícone WordPress" /></div>
              <Image src={wordpressPluginImg} alt="Ícone WordPress" />
            </div>
            <h2 className="mb-3 text-md font-bold">Wordpress Plugin</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit harum eaque
            </p>
            <span className="mt-3 flex items-center gap-1 text-sm text-[#5FA6CA]">
              <Link passHref href="">Leia mais</Link>
              <Image src={arrowRightImg} alt="Seta para a direita" />
            </span>
          </div>

          <div className="bg-[#fff] px-4 pt-8 pb-4 rounded-lg border-t-[5px] border-[#60E1CB] shadow-black shadow-2xl">
            <div className="relative mb-3">
              <div className="absolute top-[-15px] left-[-15px]"><Image src={ellipseImg} alt="Ícone WordPress" /></div>
              <Image src={webDesignImg} alt="Ícone WordPress" />
            </div>
            <h2 className="mb-3 text-md font-bold">Website Redesign</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit harum eaque
            </p>
            <span className="mt-3 flex items-center gap-1 text-sm text-[#5FA6CA]">
              <Link passHref href="">Leia mais</Link>
              <Image src={arrowRightImg} alt="Seta para a direita" />
            </span>
          </div>

          <div className="bg-[#fff] px-4 pt-8 pb-4 rounded-lg border-t-[5px] border-[#60E1CB] shadow-black shadow-2xl">
            
            <div className="relative mb-3">
              <div className="absolute top-[-15px] left-[-15px]"><Image src={ellipseImg} alt="Ícone WordPress" /></div>
              <Image src={magnifyingImg} alt="Ícone WordPress" />
            </div>
            <h2 className="mb-3 text-md font-bold">Wordpress Site Optimization</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit harum eaque
            </p>
            <span className="mt-3 flex items-center gap-1 text-sm text-[#5FA6CA]">
              <Link passHref href="">Leia mais</Link>
              <Image src={arrowRightImg} alt="Seta para a direita" />
            </span>
          </div>

          <div className="bg-[#fff] px-4 pt-8 pb-4 rounded-lg border-t-[5px] border-[#60E1CB] shadow-black shadow-2xl">
              <div className="relative mb-3">
                <div className="absolute top-[-15px] left-[-15px]"><Image src={ellipseImg} alt="Ícone WordPress" /></div>
                <Image src={startupImg} alt="Ícone WordPress" />
              </div>
              <h2 className="mb-3 text-md font-bold">Search Engine Optimization</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit harum eaque
              </p>
              <span className="mt-3 flex items-center gap-1 text-sm text-[#5FA6CA]">
                <Link passHref href="">Leia mais</Link>
                <Image src={arrowRightImg} alt="Seta para a direita" />
              </span>
          </div>

          <div className="bg-[#fff] px-4 pt-8 pb-4 rounded-lg border-t-[5px] border-[#60E1CB] shadow-black shadow-2xl">
              <div className="relative mb-3">
                <div className="absolute top-[-15px] left-[-15px]"><Image src={ellipseImg} alt="Ícone WordPress" /></div>
                <Image src={layersImg} alt="Ícone WordPress" />
              </div>
              <h2 className="mb-3 text-md font-bold">Cross Platform Mobile App</h2>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit harum eaque adipisicing elit harum eaque
              </p>
              <span className="mt-3 flex items-center gap-1 text-sm text-[#5FA6CA]">
                <Link passHref href="">Leia mais</Link>
                <Image src={arrowRightImg} alt="Seta para a direita" />
              </span>
          </div>
        </div>
  )
}
