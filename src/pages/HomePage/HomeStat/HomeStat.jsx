import Image from "next/image"
import DoughnutJS from "./DoughnutJS"
import StatCard from "./StatCard"

const homeStatData = [
    {
        id: 1,
        percentage: 62,
        content: "of Animal Hunting Causes Extinction Worldwide"
    },
    {
        id: 2,
        percentage: 57,
        content: "Loss of forest due to illegal logging worldwide"
    },
    {
        id: 3,
        percentage: 78,
        content: "Loss of forest due to illegal logging worldwide"
    },
]

const HomeStat = () => {
  return (
    <div className={`font-primary h-[960px] lg:h-[677px] flex flex-col xl:flex-row items-center gap-2 lg:pb-6 xl:pb-0 xl:gap-[110px] mb-28 lg:mb-36 xl:mb-56`}>
        <div className="absolute bg-[url('https://i.ibb.co/k8xykrW/home-5.jpg')] bg-fixed bg-center left-0 right-0 w-full h-[960px] lg:h-[677px] bg-[#787878] -z-10">
            {/* <Image 
                src="https://i.ibb.co/k8xykrW/home-5.jpg" 
                alt="Banner Image" 
                layout="fill" 
                objectFit="cover"
            /> */}
        </div>
        <div className="w-full h-[30%] lg:h-full flex items-center xl:w-[440px]">
            <div className={`w-full text-center xl:text-start pt-6 md:pt-0`}>
                <h2 className={`font-primary text-primary text-[16px] md:text-[21.6px]`}>Fighting For Planet</h2>
                <h1 className={`font-primary font-medium text-white text-[30px] lg:text-[50px] xl:text-[64px] leading-[50px] lg:leading-[90px] mt-[13px]`}>Join A Wildlife Community Of Over Millions</h1>
            </div>
        </div>
        <div className="h-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-[20px] md:gap-x-[68px] md:gap-y-0 lg:gap-[68px]">
            {
                homeStatData.map((stat) => (
                    <StatCard info={stat} key={stat.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default HomeStat