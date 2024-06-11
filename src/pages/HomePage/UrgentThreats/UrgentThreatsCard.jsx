import Button from "@/components/button/Button";
import { DM_Serif_Display, PT_Sans } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: "400" })

const UrgentThreatsCard = ({info}) => {
    const {title, description} = info || "";
    console.log(info);
  return (
    <div className="w-[410px] bg-black bg-opacity-30 h-[330px] xl:h-[500px] flex flex-col items-center mt-20">
        <div className="w-[150px] h-[200px] xl:w-[250px] xl:h-[300px] bg-[#EDEDED] -mt-10 xl:-mt-12">
        </div>
        <div className="h-full text-center px-4 xl:px-10 py-4 flex flex-col justify-evenly items-center">
            <h4 className={`${dm_serif_display.className} text-[24px] xl:text-[32px] text-black line-clamp-2`}>{title}</h4>
            <p className={`${pt_sans.className} text-[12px] xl:text-[16px] text-white`}>{description}</p>
            <Button value="Take Action" color="#000000" />
        </div>
    </div>
  )
}

export default UrgentThreatsCard