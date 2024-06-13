import Heading from "@/components/heading/Heading";

const bannerInfo = { 
  subTitle: "Take Action", 
  title: "Their Lives Matter. Let's Save It!", 
  titleSize: "92.8", 
  titleColor: "#ffffff", 
  description: "Lorem ipsum doloLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo augue, blandit et condimentum at, molestie id tortor.", 
  descriptionColor: "#7E7E7E", 
  alignment: "start", 
  width: "70%" 
}

const Banner = () => {

  return (
    <>
        <div className="h-[480px] 2xl:h-[700px] z-0 absolute left-0 right-0 bg-[#B0B0B0]"></div>
        <div className={`h-[480px] 2xl:h-[700px] relative z-10 flex justify-start items-end pb-28`}>
            <Heading info={bannerInfo} />
        </div>
    </>
  )
}

export default Banner;