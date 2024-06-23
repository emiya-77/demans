import Image from "next/image"
import Button from "@/components/button/Button";
import Content from "@/components/content/Content";

const aboutInfo = {
    subTitle: "Our Actions",
    title: "For Animals, For Earth",
    description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum. Suspendisse bibendum libero non mauris consequat, vel sagittis lectus suscipit.",
    titleSize: "64",
    titleColor: "#000000",
    descriptionColor: "#7E7E7E",
    width: "100%",
}

const MovementAction = ({info = aboutInfo}) => {

    const {btnValue = "Make a Donation"} = info || '';

    return (
        <div className={`font-primary w-full h-[1024px] xl:h-[630px] mb-10`}>
            <div className="h-full flex flex-col xl:flex-row justify-center items-center gap-12 xl:gap-0">
                <div className="w-full h-[40%] md:h-[30%] xl:h-[70%] flex flex-col justify-between xl:w-1/2 px-7">
                    <Content info={info} />
                    <div className="mt-8 text-center lg:text-start">
                        <Button value={btnValue} />
                    </div>
                </div>
                <div className="relative w-full bg-[#EDEDED] xl:w-1/2 h-[30%] md:h-[40%] lg:h-[70%]">
                    <div className="w-full h-full">
                        <Image src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovementAction