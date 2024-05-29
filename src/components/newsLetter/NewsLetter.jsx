import Button from "../button/Button"
import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const NewsLetter = () => {
    return (
        <div className={`${dm_serif_display.className} h-[458px] flex items-center gap-7 my-56`}>
            <div className="absolute left-0 w-full h-[458px] bg-[#787878] -z-10">
            </div>
            <div className="w-1/3 h-full flex items-start">
                <div className="w-[410px] h-[410px] bg-gray-300">

                </div>
            </div>
            <div className="w-2/3">
                <h1 className="text-[92.8px] text-white">Join Us Now!</h1>
                <p className="text-2xl text-[#FF8E00]">Become One Of Our Growing Family Of Volunteers To Protect Animals.</p>
                <div className="flex justify-center gap-5">
                    <input type="text" className="w-[692px] bg-transparent border-b-[1px]" />
                    <Button value="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter