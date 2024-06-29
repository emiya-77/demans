
const Banner = ({value, img=''}) => {
  return (
    <div className="h-[300px] 2xl:h-[550px] flex justify-center items-center">
        <div className={`h-[300px] 2xl:h-[550px] -z-10 absolute left-0 right-0`} style={{
          backgroundImage: `url(${img.src})`,
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