import '../styles/Testimonials.module.css';
import type { NextPage } from 'next'

import HomeComponent from '../components/Home'
import IdeaIntoRealitySection from '../components/IdeaIntoRealitySection'
import Portfolio from '../components/Portfolio'
import Services from '../components/Services'
import ContactUs from '../components/ContactUs'
import Testimonials from '../components/Testimonials'
import ArticlesSection from '../components/ArticlesSection'

const Home: NextPage = () => {
  return (
    <div>
      <HomeComponent />
      <Services />
      <Portfolio />
      <IdeaIntoRealitySection />
      <ContactUs />
      <Testimonials />
      <ArticlesSection />
    </div>
  )
}

export default Home
