import Button from "@/components/button/Button"
import Image from "next/image";

const MovementCard = ({info}) => {
    const {title, content, image} = info || "";
  return (
    <div className="w-[300px] lg:w-[300px] xl:w-[300px] 2xl:w-[300px] py-4 hover:scale-105 hover:shadow-md transition-all duration-300 ease-in-out p-2">
        <div className="mb-4">
            <Image src={image || ''} alt={title || ""}/>
        </div>
        <div className="border-b-[1px] border-black inline-block mb-5 md:mb-6">
            <h4 className={`font-primary text-[28px] md:text-[32px]`}>
                {title || ""}
            </h4>
        </div>
        <p className="text-[#7e7e7e] mb-5 line-clamp-2">
            {content}
        </p>
        <Button value="Read More" />
    </div>
  )
}

export default MovementCard