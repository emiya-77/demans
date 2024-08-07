
const Banner = ({value, img=''}) => {
  return (
    <div className="h-[400px] 2xl:h-[655px] flex justify-center items-center">
        <div className={`h-[400px] 2xl:h-[655px] -z-10 absolute left-0 right-0`} style={{
          backgroundImage: `url(${img?.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="w-full h-full bg-black bg-opacity-20"></div>
        </div>
        <h1 className="font-primary text-[85px] md:text-[92.8px] text-white">{value}</h1>
    </div>
  )
}

export default Banner;