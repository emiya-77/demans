import Heading from "@/components/heading/Heading";

const Banner = () => {
  return (
    <>
        <div className="h-[590px] z-0 absolute left-0 right-0 bg-[#B0B0B0]"></div>
        <div className={`h-[590px] relative z-10 flex justify-center items-center`}>
            <Heading/>
        </div>
    </>
  )
}

export default Banner;