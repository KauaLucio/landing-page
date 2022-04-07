import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import React from 'react'

import {FaBars, FaTimes} from 'react-icons/fa'

export default function Navbar() {
  const [menuIcon, setMenuIcon] = useState(true)
  const navLinksRef = useRef<HTMLDivElement>(null);

  const handleOpenMenu = () => {
    setMenuIcon(!menuIcon)
    
    if(menuIcon) {
      navLinksRef.current?.classList.add('show-menu-mobile')
    }else {
      navLinksRef.current?.classList.remove('show-menu-mobile')
    }
  }

  useEffect(() => {
   navLinksRef.current?.classList.remove('show-menu-mobile')
  }, [])

  if (typeof window !== "undefined") {
    window.addEventListener('resize', () => {
      if(window.innerWidth > 768) {
        navLinksRef.current?.classList.remove('show-menu-mobile')
      }
    })
  }


  return (
    <nav>
      <div onClick={handleOpenMenu} className={`relative z-30 toggle icon-menu`}>{menuIcon ? <FaBars /> : <FaTimes/>}</div>
      {/* <div ref={menuCloseIconRef} className="toggle close"><FaTimes/></div> */}
      <div ref={navLinksRef} id="nav-links" className="flex items-center lg:gap-5 xl:gap-5 md:gap-3 sm:gap-2 text-[#60E1CB] font-medium">  
        <Link passHref href="/"><span>Home</span></Link>
        <Link passHref href="/services"><span>Serviços</span></Link>
        <Link passHref href="/testimonials"><span>Testemunhos</span></Link>
        <Link passHref href="/team"><span>Time</span></Link>
        <Link passHref href="/blog"><span>Blog</span></Link>
        <button className="hover:bg-[#5FA6CA] xl:px-4 lg:px-3 md:px-2 sm:px-2 py-2 rounded-full bg-[#7BC0E3] text-[#fff] font-medium lg:text-medium xl:text-medium md:text-sm sm:text-sm">Fale conosco</button>
      </div>
    </nav>
  )
}
