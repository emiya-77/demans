import Image from "next/image";
import Button from "../button/Button"
import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const NewsLetter = () => {
    return (
        <div className={`font-primary h-[458px] flex flex-col md:flex-row items-center gap-2 md:gap-0 2xl:gap-[30px]`}>
            <div className="absolute bg-[url('https://i.ibb.co/SVPs72X/home-12.jpg')] bg-left bg-fixed left-0 w-full h-full md:h-[458px] -z-10">
            </div>
            <div className="absolute w-full left-0 right-0 h-full md:h-[458px] bg-black opacity-20"></div>
            <div className="w-full md:w-1/3 2xl:w-[410px] h-full flex justify-start items-start">
                <div className="relative w-[300px] h-[300px] md:w-[300px] md:h-[350px] lg:w-[410px] lg:h-[410px] bg-gray-300">
                    <Image 
                        src="https://i.ibb.co/WN9tST9/home-15.jpg" 
                        alt="Newsletter Background" 
                        layout="fill" 
                        objectFit="cover" 
                        className="shadow-lg"
                    />
                </div>
            </div>
            <div className="w-full md:w-2/3 2xl:w-[850px] text-center md:text-start z-10 md:pl-2 xl:pl-0">
                <h1 className="text-[60px] lg:text-[80px] xl:text-[92.8px] text-white">Join Us Now!</h1>
                <p className="text-2xl text-[#FF8E00] mb-[42px]">Become One Of Our Growing Family Of Volunteers To Protect Animals.</p>
                <div className="flex justify-center gap-5">
                    <input type="text" className="text-white w-[650px] bg-transparent border-b-[1px] focus:outline-none" />
                    <Button value="Subscribe" />
                </div>
            </div>
        </div>
    )
}

export default NewsLetter