import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import sectionBannerImg from '../public/assets/images/banner-section.svg'
import logoImg from '../public/assets/images/logo.svg'

export default function Footer() {
  return (
    <footer className="relative z-30">
      <div className="absolute w-full h-full -z-10">
        <Image 
          src={sectionBannerImg} 
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="background section"  
        />
      </div>
      <div className="xxxs:px-3 md:px-10 xxxs:py-8 md:py-15 grid md:grid-cols-12 xxxs:grid-cols-1 gap-5">
        <div className="md:col-span-4 xss:col-span-1">
          <div className="mb-4">
            <Image src={logoImg} width="100x" height="22px" alt="Logo Dacode" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facilis quaerat voluptatibus.</p>
        </div>
        <div className="md:col-span-2 xxxs:col-span-1">
          <h3 className="font-bold mb-4">Trabalho</h3>
          <div className="text-[#292525] opacity-50 flex flex-col font-medium">
            <span><Link href="/">Blog</Link></span>
            <span><Link href="/">Como trabalhamos</Link></span>
            <span><Link href="/">Testemunhos</Link></span>
          </div>
        </div>
        <div className="md:col-span-2 xss:col-span-1">
          <h3 className="font-bold mb-4">Serviços</h3>
          <div className="text-[#292525] opacity-50 flex flex-col font-medium">
            <span><Link href="/">Estratégia de Marketing</Link></span>
            <span><Link href="/">Otimização de Sites</Link></span>
            <span><Link href="/">Email Marketing</Link></span>
          </div>
        </div>
        <div className="md:col-span-2 xss:col-span-1">
          <h3 className="font-bold mb-4">Solução de Negocio</h3>
          <div className="text-[#292525] opacity-50 flex flex-col font-medium">
            <span><Link href="/">Parceiros</Link></span>
            <span><Link href="/">Sobre o Projeto</Link></span>
            <span><Link href="/">Corporação</Link></span>
          </div>
        </div>
        <div className="md:col-span-2 xss:col-span-1">
          <h3 className="font-bold mb-4">Social Media</h3>
          <div className="text-[#292525] opacity-50 flex flex-col font-medium">
            <span><Link href="/">Twitter</Link></span>
            <span><Link href="/">Instagram</Link></span>
            <span><Link href="/">Facebook</Link></span>
          </div>
        </div>
        <div className="md:col-span-12 xxxs:col-span-1 h-[1px] bg-[#fff] md:mt-8 xxxs:mt-0"></div>
        <div className="md:mt-5 md:col-span-12 xxxs:col-span-1 flex items-center md:justify-between xxxs:flex-col md:flex-row">
          <p className="font-bold">&copy; DaCode, 2020</p>
          <p className="font-medium">Layout Designed by: Tim Haldorsson</p>
        </div>
      </div>
    </footer>
  )
}
