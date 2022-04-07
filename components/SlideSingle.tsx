import Image from "next/image";

import workImg from '../public/assets/images/work.jpg'

export default function SlideSingle() {
  return (
    <div className="z-30 xxxs:w-full md:max-w-md md:mx-2">
      <div className="rounded-lg mb-2">
        <Image className="rounded-lg" src={workImg} alt="Image"/>
      </div>
      <p className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate doloribus sit, similique aperiam voluptates repudiandae odio iusto repellat? Inventore dolorem modi vitae cumque veritatis.</p>
    </div>
  )
}
