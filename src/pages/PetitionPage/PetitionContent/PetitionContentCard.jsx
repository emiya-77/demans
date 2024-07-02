import Content from "@/components/content/Content"
import Image from "next/image";

const PetitionContentCard = ({info}) => {
    const {img, title, description, left_topText, leftList, left_bottomText,} = info || '';

  return (
    <div className="mb-[193px]">
        <div className="relative h-[538px] bg-[#EDEDED]">
            <Image src={img || ''} 
                alt="Home About Us Image" 
                layout="fill" 
                objectFit="cover"
                />
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-[29px]">
            <div className="w-full md:w-1/2 2xl:w-[630px] 2xl:-mt-[14px]">
                <Content info={{title:title, description:description, titleColor:"#000000"}}/>
            </div>
            <div className="w-full md:w-1/2 2xl:w-[630px] h-full flex flex-col items-start justify-between font-secondary">
                <p className="text-[#7E7E7E] leading-[21px] mb-[31px]">{left_topText}</p>
                <ul className="space-y-[14px] mb-[29px]">
                    {
                        leftList?.map((listItem, idx) => (
                            <li className="list-disc" key={idx}>{listItem}</li>
                        ))
                    }
                </ul>
                <p className="text-[#7E7E7E] leading-[21px]">{left_bottomText}</p>
            </div>
        </div>
    </div>
  )
}

export default PetitionContentCard