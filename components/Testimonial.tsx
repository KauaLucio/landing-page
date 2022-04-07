import Image from "next/image"
import starImg from '../public/assets/images/star.svg'
import placeholderImg from '../public/assets/images/placeholder.svg'

const arr = [1,2,3,4,5]

export default function Testimonial() {
  return (
    <div className="container px-0 mx-auto md:px-20">
        <div className="md:p-9 xxxs:p-4 shadow-3xl text-center flex flex-col items-center">
            <span className="text-xl font-bold mb-1">5.0</span>
            <div className="flex gap-1 items-center mb-4">
              {arr.map((item) => (
                <Image key={item} src={starImg} alt="5 estrelas" width="30px" height="30px" />
              ))}
            </div>
            <blockquote className="text-center">
              <p className="mb-4 italic">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, cum natus vitae quod qui reprehenderit nobis ab
                libero, fugit.
              </p>
              <cite className="flex items-center md:flex-row xxxs:flex-col gap-2 not-italic">
                <Image src={placeholderImg} alt="Image user" width="50px" height="50px" />
                <div>
                  <p className="font-medium">Marcelo Souza</p>
                  <span className="text-sm text-[#60E1CB]">Owner, Ikirakenne Ltd</span>
                </div>
              </cite>
            </blockquote>
        </div>
    </div>
  )
}
