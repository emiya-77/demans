import Content from "@/components/content/Content"

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
        <div className="absolute -z-10 left-0 right-0 h-[1857px] bg-primary"></div>
        <div className="h-[1857px] flex flex-col">
            <div className="h-1/3 flex items-center">
                <div className="w-[989px] p-4">
                    <Content info={servicesFirstInfo}/>
                </div>
            </div>
            <div className="w-full h-1/3 flex items-center">
                <div className="absolute right-0 left-0 flex justify-between items-center">
                    <div className="w-[600px] h-[600px] bg-white"></div>
                    <div className="w-[989px] p-4">
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