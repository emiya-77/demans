import Content from "@/components/content/Content"
import Image from "next/image"

import petitionSingleImg1 from "@/../public/img/petition/single-petition/single-petition-2.jpg"
import petitionSingleImg2 from "@/../public/img/petition/single-petition/single-petition-6.jpg"
import petitionSingleImg3 from "@/../public/img/petition/single-petition/single-petition-9.jpg"

const topContent = {
  title: "Preventing Ilegal Logging",
  description: "Vestibulum id erat sed ipsum congue consequat vitae vitae neque. Aenean eu felis ante. Quisque semper sit amet lacus sed vestibulum. Curabitur tincidunt lorem maximus viverra sagittis.",
  titleColor: "#000000"
}
const bottomContent = {
  title: "Curabitur Hendrerit Diam",
  description: "Vestibulum id erat sed ipsum congue consequat vitae vitae neque. Aenean eu felis ante. Quisque semper sit amet lacus sed vestibulum. Curabitur tincidunt lorem maximus viverra sagittis.",
  titleColor: "#000000",
  alignment: "end"
}

const leftList = [
  "Morbi porttitor lorem faucibus libero",
  "Nec tempor dolor dignissim",
  "Etiam pretium scelerisque lorem"
]

const SinglePetitionContent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-14 mt-56 lg:mb-40">
      <div className="w-full flex flex-col flex-wrap lg:flex-nowrap md:flex-row justify-center gap-8">
        <div className="relative w-full md:w-[calc(50%-16px)] lg:w-1/3 h-[546px] md:h-[380px] lg:h-[546px] bg-[#EDEDED] shadow-lg">
          <Image 
            src={petitionSingleImg1 || ''} 
            alt="Banner Image" 
            layout="fill" 
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-[calc(50%-16px)] lg:w-1/3 flex flex-col py-6">
          <Content info={topContent} />
          <ul className="p-6 space-y-4">
            {
              leftList?.map((listItem, idx) => (
                <li className="list-disc" key={idx}>{listItem}</li>
              ))
            }
          </ul>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-end items-start">
            <h1 className="font-primary text-[32px]">&quot;Caring For The Environment is Like Caring For Yourself&quot;</h1>
            <p className="font-secondary text-[#7E7E7E]">– Hamish Jordan</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center flex-wrap lg:flex-nowrap gap-8">
        <div className="w-full md:w-[calc(50%-16px)] lg:w-1/3 flex flex-col justify-end py-6">
          <Content info={bottomContent} />
        </div>
        <div className="relative w-full md:w-[calc(50%-16px)] lg:w-1/3 h-[546px] md:h-[220px] lg:h-[546px] bg-[#EDEDED] shadow-lg">
          <Image 
            src={petitionSingleImg2 || ''} 
            alt="Banner Image" 
            layout="fill" 
            objectFit="cover"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col md:flex-row lg:flex-col justify-start items-start gap-4 md:gap-8 lg:gap-4">
            <div className="relative h-[272px] md:h-[220px] lg:h-[272px] w-full md:w-1/2 lg:w-full bg-[#EDEDED] shadow-lg">
            <Image 
              src={petitionSingleImg3 || ''} 
              alt="Banner Image" 
              layout="fill" 
              objectFit="cover"
            />
            </div>
            <p className="font-secondary md:w-1/2 lg:w-auto text-[#7E7E7E]">auris sit amet felis augue. Nam ullamcorper, eros non dignissim hendrerit, dolor nunc placerat felis, ut condimentum risus lorem a odio. Ut euismod lorem vitae quam pellentesque laoreet. condimentum nisi. Maecenas vitae eros sem.</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePetitionContent