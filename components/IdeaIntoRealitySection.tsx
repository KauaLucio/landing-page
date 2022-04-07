import Image from 'next/image'
import React from 'react'

import illustrationImg from '../public/assets/images/illustration.svg'
import Feature from './Feature'

export default function IdeaIntoRealitySection() {
  return (
    <div className="relative">
        <div className="xxxs:hidden md:block z-10 absolute right-0 bottom-[-20%]">
          <Image src={illustrationImg} alt="Ilustração da seção"/>
        </div>
        <div className="relative z-30 container mx-auto xxxs:px-0 xxxs:py-8 md:px-10 md:py-20">
          <div className="max-w-3xl mb-6">
            <h2 className="text-5xl font-bold mb-4">Sua ideia em <span className="text-[#60E1CB]">realidade</span></h2>
            <p>We start every web development project with a project manager from daCode interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.</p>
          </div>
          <div className="flex flex-col gap-6">
            <Feature />
            <Feature />
            <Feature />
            <Feature />
          </div>
        </div>
    </div>
  )
}
