import DoughnutJS from "./DoughnutJS"

const StatCard = ({info}) => {
    const {percentage, content} = info || "";

  return (
    <div className="flex justify-center items-start">
        <div className="w-[233px] overflow-hidden">
            <div className="w-full overflow-hidden h-[120px] md:h-[180px] relative flex justify-center items-center">
                <DoughnutJS progress={percentage}/>
                <h1 className="absolute mt-3 ml-2 text-[19.2px] text-black">{percentage}%</h1>
            </div>
            <h2 className="text-3 lg:text-[24px] text-center text-black">
                {content}
            </h2>
        </div>
    </div>
  )
}

export default StatCard