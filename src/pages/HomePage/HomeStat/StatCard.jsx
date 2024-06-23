import DoughnutJS from "./DoughnutJS"

const StatCard = ({info}) => {
    const {percentage, content} = info || "";

  return (
    <div className="flex justify-center items-center">
        <div className="w-[233px] lg:-mt-24">
            <div className="w-full overflow-hidden h-[180px] relative flex justify-center items-center">
                <DoughnutJS progress={percentage}/>
                <h1 className="absolute mt-3 ml-2 text-[19.2px] text-white">{percentage}%</h1>
            </div>
            <h2 className="text-[16px] md:text-[24px] text-center text-white">
                {content}
            </h2>
        </div>
    </div>
  )
}

export default StatCard