import Button from "@/components/button/Button"
import Image from "next/image";

const MovementCard = ({info}) => {
    const {title, content, image} = info || "";
  return (
    <div className="w-[300px] hover:scale-105 transition-all duration-300 ease-in-out">
        <div className="relative mb-[20px] flex justify-center xl:justify-start">
            <Image src={image || ''} alt={title || ""}/>
        </div>
        <div className="border-bottom-after after:left-[50%] after:-translate-x-[50%] xl:after:left-0 xl:after:translate-x-[0%] border-black inline-block mb-5 md:mb-[33.5px] pb-[17.5px]">
            <h4 className={`font-primary text-[28px] md:text-[32px] leading-[44px]`}>
                {title || ""}
            </h4>
        </div>
        <p className="text-[#7e7e7e] mb-[29px] line-clamp-2 leading-[21px]">
            {content}
        </p>
        <Button value="Read More" />
    </div>
  )
}

export default MovementCard