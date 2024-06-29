import Content from "@/components/content/Content"
import Image from "next/image";

const PetitionContentCard = ({info}) => {
    const {img, title, description, left_topText, leftList, left_bottomText,} = info || '';

  return (
    <div className="mt-16 mb-32">
        <div className="relative h-[538px] bg-[#EDEDED]">
            <Image src={img || ''} 
                alt="Home About Us Image" 
                layout="fill" 
                objectFit="cover"
                />
        </div>
        <div className="flex flex-col md:flex-row justify-between py-8">
            <div className="w-full md:w-1/2">
                <Content info={{title:title, description:description, titleColor:"#000000"}}/>
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col items-start justify-between font-secondary">
                <p className="text-[#7E7E7E]">{left_topText}</p>
                <ul className="p-6 space-y-4">
                    {
                        leftList?.map((listItem, idx) => (
                            <li className="list-disc" key={idx}>{listItem}</li>
                        ))
                    }
                </ul>
                <p className="text-[#7E7E7E]">{left_bottomText}</p>
            </div>
        </div>
    </div>
  )
}

export default PetitionContentCard