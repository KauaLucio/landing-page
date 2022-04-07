import { Text } from '@loomhq/lens'
import Image from 'next/image'
import React from 'react'

import ilustrationImg from '../public/assets/images/analyse.svg'
import circlesImg from '../public/assets/images/circles.svg'

export default function Home() {
  return (
    <div className="relative pt-5 pb-9">
      <div className="absolute bottom-[10px] left-[-3%] lg:w-[500px] xl:w-[500px] md:w-[300px] sm:w-[300px] lg:h-[500px] xl:h-[500px] md:h-[300px] sm:h-[350px]"><Image src={circlesImg} alt="Circulos de rodapé" width="500px" height="530px" /></div>      
      <div className="container md:px-6 mx-auto flex items-center justify-center">
        <div className="relative">
          <span className="absolute xl:top-[-25px] lg:top-[-25px] md:top-[-15px] sm:top-[-15px] xs:top-[-15px] xxxs:top-[-15px] left-0 w-[120px] h-[4px] bg-[#60E1CB]"></span>
          <h2 className="text-5xl xl:text-5xl lg:text-5xl md:text-4xl sm:text-4xl xs:text-3xl xxxs:text-3xl font-bold mb-3">
            Nós ajudaremos você a criar seu <span className="text-[#60E1CB]">website</span>
          </h2>
          <Text className="mt-3 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ut turpis adipiscing tempus, magna elit nunc iaculis sit. Libero velit quis leo non. At donec egestas cras in libero pellentesque. Donec amet phasellus
          </Text>
          <div className="flex gap-4 xl:items-center xl:flex-row md:items-start md:flex-col">
            <button className="py-2 px-5 rounded-3xl bg-[#60E1CB] font-medium text-[#fff] shadow-lg shadow-[#60E1CB]">Nossos trabalhos</button>
            <button className="py-2 px-5 rounded-3xl bg-[#fff] font-medium text-[#60E1CB] drop-shadow-lg">Fale conosco</button>
          </div>
        </div>
        <div className="xl:block lg:block md:hidden sm:hidden xs:hidden xxxs:hidden">
          <Image src={ilustrationImg}  alt="Ilustration" />
        </div>
      </div>
    </div>
  )
}
