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

const MovementAction = ({info = aboutInfo, img}) => {

    const {btnValue = "Make a Donation"} = info || '';

    return (
        <div className={`font-primary w-full h-[1024px] md:h-[800px] xl:h-[630px] 2xl:h-[420px]`}>
            <div className="h-full flex flex-col-reverse xl:flex-row justify-center items-center gap-12 xl:gap-[30px]">
                <div className="w-full h-[40%] md:h-[30%] xl:h-[70%] 2xl:h-full flex flex-col justify-between xl:w-[630px]">
                    <Content info={info} />
                    <div className="mt-8 text-center md:text-start">
                        <Button value={btnValue} />
                    </div>
                </div>
                <div className="relative w-full bg-[#EDEDED] xl:w-[630px] h-[30%] md:h-[40%] lg:h-[50%] xl:h-[70%] 2xl:h-full shadow-lg">
                    <div className="relative w-full h-full">
                        <Image 
                            src={img || ''} 
                            alt="Banner Image" 
                            layout="fill" 
                            objectFit="cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovementAction