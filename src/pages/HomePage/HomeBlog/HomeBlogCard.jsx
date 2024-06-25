import Button from "@/components/button/Button";
import Image from "next/image";

const HomeBlogCard = ({info}) => {
    const {title, description} = info || '';

  return (
    <div className="w-[410px] lg:w-[370px] xl:w-[410px] flex flex-col items-center md:items-start">
        <div className="relative w-full h-[274px] bg-[#EDEDED]">
          <Image 
              src="https://i.ibb.co/vxwJw9s/home-32.jpg" 
              alt="Banner Image" 
              layout="fill" 
              objectFit="cover"
            />
        </div>
        <div className="px-5 py-6 text-center md:text-start">
            <h1 className="font-primary text-black text-2xl line-clamp-1 mb-3">{title}</h1>
            <p className="font-secondary leading-[21px] text-[#7E7E7E] line-clamp-5">{description}</p>
        </div>
        <Button value="Learn More"/>
    </div>
  )
}

export default HomeBlogCard