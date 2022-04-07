import Image from "next/image";

import scheduleImg from '../public/assets/images/schedule.svg'

export default function Schedule() {
  return (
    <div className="md:p-11 xxxs:p-5 flex md:justify-between md:flex-row xxxs:flex-col gap-3">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-3">Estabelecendo presença online</h2>
          <div className="text-sm text-[#292525] flex flex-col gap-3">
            <p>
              Every SaaS website, regardless of niche, must do one thing brilliantly, which is converting visitors into users. At first glance, the site should encourage and guide visitors in a smooth way towards call-to-actions. 
            </p>
            <p>
              This goes hand in hand with a responsive design, meaning it needs to be apt for different devices. 
            </p>
            <p>
              We use a data-driven approach to measure user response when developing the site. This method usually makes the site quicker to launch, is more cost-effective and more successful in the long run.
            </p>
            <p>
              The pages need to be search engine optimized (SEO) because it lays the foundation for the technical quality, which in turn determines how high it will rank among search results. We also make sure that your website is indexed properly.
            </p>
            <p>
              We audit your audience and get to know your target market to be able to speak to them through the website in the best possible way. By finding out their consumer behavior we can refine the website approach.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-medium mb-3 text-[#60E1CB]">Agende uma sessão grátis</h2>
          <Image src={scheduleImg} alt="Agenda" />
        </div>
        
      </div>
  )
}
