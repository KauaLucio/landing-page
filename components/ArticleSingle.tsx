import Image from "next/image";
import Link from "next/link";
import arrowRightImg from '../public/assets/images/arrow-right.svg'

export default function ArticleSingle() {
  return (
    <div className="md:w-[344px] bg-[#fff] md:pt-10 md:px-5 md:pb-6 md:pr-0 xxxs:p-4 rounded-lg shadow-xl">
      <h2 className="font-bold mb-3 text-[#292525]">Why Your SaaS Business should use WordPress</h2>
      <p className="text-sm text-[#292525]">A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort</p>
      <button className="mt-4 flex text-sm items-center gap-1 text-[#5FA6CA] font-medium">
        <Link href="/">Ler Mais</Link>
        <Image src={arrowRightImg} alt="seta"/>
      </button>
    </div>
  )
}
