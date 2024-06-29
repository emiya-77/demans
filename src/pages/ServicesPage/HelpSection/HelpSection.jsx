import Content from "@/components/content/Content"
import Image from "next/image"

import servicesHelpImg from "@/../public/img/services/services-3.jpg"

const servicesFirstInfo = {
    title: "Help To Save Animals Of Africa",
    description: "Morbi lacinia urna nec erat accumsan maximus. Aliquam erat volutpat. Duis ut venenatis purus, vitae cursus purus. Suspendisse in elit accumsan, aliquet eros at, vestibulum purus. Mauris lorem lectus, faucibus at orci sed, bibendum egestas purus. Phasellus sagittis magna eget nulla malesuada maximus. Morbi porttitor lorem faucibus libero vulputate, nec tempor dolor dignissim. Mauris vitae fermentum dui. Pellentesque dictum odio metus, ac vestibulum lacus sagittis ut. Etiam pretium scelerisque lorem, at mollis dolor maximus at. Nunc nec metus porttitor, sagittis sapien sit amet, tempor augue.",
    titleColor: "#ffffff"
}

const servicesSecondInfo = {
    title: "Saving Natural Habitats Together",
    description: "Morbi lacinia urna nec erat accumsan maximus. Aliquam erat volutpat. Duis ut venenatis purus, vitae cursus purus. Suspendisse in elit accumsan, aliquet eros at, vestibulum purus. Mauris lorem lectus, faucibus at orci sed, bibendum egestas purus. Phasellus sagittis magna eget nulla malesuada maximus. Morbi porttitor lorem faucibus libero vulputate, nec tempor dolor dignissim. Mauris vitae fermentum dui. Pellentesque dictum odio metus, ac vestibulum lacus sagittis ut. Etiam pretium scelerisque lorem, at mollis dolor maximus at. Nunc nec metus porttitor, sagittis sapien sit amet, tempor augue.",
    titleColor: "#ffffff"
}

const servicesThirdInfo = {
    title: "Protect The Wildlife From Illegal Trade",
    description: "Morbi lacinia urna nec erat accumsan maximus. Aliquam erat volutpat. Duis ut venenatis purus, vitae cursus purus. Suspendisse in elit accumsan, aliquet eros at, vestibulum purus. Mauris lorem lectus, faucibus at orci sed, bibendum egestas purus. Phasellus sagittis magna eget nulla malesuada maximus. Morbi porttitor lorem faucibus libero vulputate, nec tempor dolor dignissim. Mauris vitae fermentum dui. Pellentesque dictum odio metus, ac vestibulum lacus sagittis ut. Etiam pretium scelerisque lorem, at mollis dolor maximus at. Nunc nec metus porttitor, sagittis sapien sit amet, tempor augue.",
    titleColor: "#ffffff"
}

const HelpSection = () => {
  return (
    <div>
        <div className="absolute -z-10 left-0 right-0 h-[1857px] md:h-[1000px] lg:h-[1857px] bg-black">
        </div>
        <div className="h-[1857px] md:h-[1000px] lg:h-[1857px] flex flex-col gap-20 md:gap-4">
            <div className="h-1/3 flex items-center">
                <div className="w-[989px] p-4">
                    <Content info={servicesFirstInfo}/>
                </div>
            </div>
            <div className="w-full h-1/3 flex items-center">
                <div className="absolute right-0 left-0 flex flex-col md:flex-row justify-between items-center">
                    <div className="w-[380px] h-[300px] xl:w-[600px] xl:h-[600px] bg-white" style={{
                    backgroundImage: `url(${servicesHelpImg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}>
                        {/* <Image 
                            src={servicesHelpImg}
                            alt="Animal Image"
                            layout="fill" 
                            objectFit="cover"
                        /> */}
                    </div>
                    <div className="w-[400px] lg:w-[989px] p-4">
                        <Content info={servicesSecondInfo}/>
                    </div>
                </div>
            </div>
            <div className="h-1/3 flex items-center">
                <div className="w-[989px] p-4">
                    <Content info={servicesThirdInfo}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HelpSection