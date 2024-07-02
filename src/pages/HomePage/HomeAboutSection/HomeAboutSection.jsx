'use client'

import Image from "next/image"
import { DM_Serif_Display, PT_Sans } from "next/font/google";
import quote from "@/../public/symbol/quote.png";
import Button from "@/components/button/Button";
import Content from "@/components/content/Content";
import ScrollTrigger from "react-scroll-trigger";
import { useState } from "react";
import CountUp from "react-countup";

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
    const [counterOn, setCounterOn] = useState(true);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className={`${dm_serif_display.className} w-full h-[1024px] xl:h-[630px] mt-[221px]`}>
                <div className="h-full flex flex-col xl:flex-row justify-center items-center gap-12 xl:gap-0">
                    <div className="relative w-full bg-[#EDEDED] xl:w-1/2 h-full shadow-lg">
                        <div className="w-full h-full">
                            <Image src="https://i.ibb.co/WByhb1m/home-9.jpg" alt="Home About Us Image" layout="fill" objectFit="cover" />
                        </div>
                        <div className="absolute bottom-20  text-center bg-[#FF8E00] px-[56px] w-[380px] md:w-[410px] h-[164px]">
                            <h1 className="text-[80px] md:text-[92.8px] text-white leading-[105px]">
                                {
                                    counterOn && <CountUp start={0} end={480} duration={5} delay={0}/>
                                }Ton</h1>
                            <p className="font-bold text-2xl">of trash every minutes</p>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2 px-7">
                        <Content info={aboutInfo} />
                        <div className="mt-[38px] text-center lg:text-start">
                            <div className="flex items-start px-5 gap-7 mb-[52px] text-start">
                                <Image src={quote || ''} className="w-[104px]" alt="quote symbol" />
                                <p className={`${pt_sans.className}`}>Maecenas at lorem a odio commodo eleifend ac eget nunc. Integer et egestas lacus. In vehicula felis vitae euismod consectetur.</p>
                            </div>
                            <Button value="Read More" />
                        </div>
                    </div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default HomeAboutSection