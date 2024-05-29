import Image from "next/image"
import { DM_Serif_Display, PT_Sans } from "next/font/google";
import Heading from "@/components/heading/Heading";
import quote from "@/../public/symbol/quote.png";
import Button from "@/components/button/Button";

const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: "700" });

const aboutInfo = {
    subTitle: "About Us",
    title: "Preserving Oceans, Forests, Climate & Peace",
    description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
    titleSize: "64",
    titleColor: "#000000",
    descriptionColor: "#7E7E7E",
    width: "100%",
}

const HomeAboutSection = () => {
    return (
        <div className={`${dm_serif_display.className} w-full h-[1024px] xl:h-[630px] my-40`}>
            <div className="h-full flex flex-col xl:flex-row justify-center items-center gap-12 xl:gap-0">
                <div className="relative w-full bg-[#EDEDED] xl:w-1/2 h-full">
                    <div className="w-full h-full">
                        <Image src="" alt="" />
                    </div>
                    <div className="absolute bottom-20  text-center bg-[#FF8E00] px-[56px] w-[380px] md:w-[410px] h-[164px]">
                        <h1 className="text-[92.8px] text-white leading-[105px]">480Ton</h1>
                        <p className="font-bold text-2xl">of trash every minutes</p>
                    </div>
                </div>
                <div className="w-full xl:w-1/2 px-7">
                    <Heading info={aboutInfo} />
                    <div className="mt-8 text-center">
                        <div className="flex items-start px-5 gap-7 mb-20 text-start">
                            <Image src={quote} className="w-[104px]" alt="quote symbol" />
                            <p className={`${pt_sans.className}`}>Maecenas at lorem a odio commodo eleifend ac eget nunc. Integer et egestas lacus. In vehicula felis vitae euismod consectetur.</p>
                        </div>
                        <Button value="Read More" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeAboutSection