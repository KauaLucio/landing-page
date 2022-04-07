import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        {children}
      </main>
      <Footer />
    </>
  )
}
