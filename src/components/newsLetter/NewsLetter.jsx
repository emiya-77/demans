import Button from "../button/Button"
import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const NewsLetter = () => {
    return (
        <div className={`font-primary h-[458px] flex flex-col md:flex-row items-center gap-2 md:gap-7`}>
            <div className="absolute left-0 w-full h-full md:h-[458px] bg-[#787878] -z-10">
            </div>
            <div className="w-full md:w-1/3 h-full flex justify-center items-start">
                <div className="w-[300px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[410px] lg:h-[410px] bg-gray-300">
                </div>
            </div>
            <div className="w-full md:w-2/3 text-center md:text-start">
                <h1 className="text-[60px] lg:text-[80px] xl:text-[92.8px] text-white">Join Us Now!</h1>
                <p className="text-2xl text-[#FF8E00] mb-12">Become One Of Our Growing Family Of Volunteers To Protect Animals.</p>
                <div className="flex justify-center gap-5">
                    <input type="text" className="text-white w-[650px] bg-transparent border-b-[1px] focus:outline-none" />
                    <Button value="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter