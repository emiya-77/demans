import Heading from "@/components/heading/Heading";
import Image from "next/image";

const bannerInfo = { 
  subTitle: "Take Action", 
  title: "Their Lives Matter. Let's Save It!", 
  titleSize: "92.8", 
  titleColor: "#ffffff", 
  description: "Lorem ipsum doloLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo augue, blandit et condimentum at, molestie id tortor.", 
  descriptionColor: "#ffffff", 
  alignment: "start", 
  width: "70%" 
}

const Banner = () => {

  return (
    <>
        <div className="bg-[url('https://i.ibb.co/Kz1z3JM/home-2.jpg')] bg-left h-[480px] xl:h-[600px] 2xl:h-[781px] z-0 absolute left-0 right-0 bg-[#B0B0B0]">
          {/* <Image 
            src="https://i.ibb.co/Kz1z3JM/home-2.jpg" 
            alt="Banner Image" 
            layout="fill" 
            objectFit="cover"
          /> */}
          <div className="w-full h-full bg-black bg-opacity-10"></div>
        </div>
        <div className={`h-[480px] xl:h-[600px] 2xl:h-[781px] relative z-10 flex justify-start items-end pb-28`}>
            <Heading info={bannerInfo} />
        </div>
    </>
  )
}

export default Banner;