const Banner = ({value}) => {
  return (
    <div className="h-[300px] 2xl:h-[550px] flex justify-center items-center">
        <div className="h-[300px] 2xl:h-[550px] -z-10 absolute left-0 right-0 bg-[#B0B0B0]"></div>
        <h1 className="font-primary text-[85px] md:text-[92.8px] text-white">{value}</h1>
    </div>
  )
}

export default Banner;