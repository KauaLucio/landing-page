import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logoImg from '../public/assets/images/logo.svg'

import Navbar from './Navbar'

export default function Header() {
  return (
    <header className="w-full py-5 bg-[#fff] relative z-30 shadow-lg">
      <div className="container md:px-6 mx-auto flex justify-between items-center">
        <div className="cursor-pointer">
          <Link passHref href="/">
            <Image src={logoImg} width="195px" height="22px" alt="Logo Dacode" />
          </Link>
        </div>
        <Navbar />
      </div>
    </header>
  )
}
