import Heading from "@/components/heading/Heading";
import UrgentThreatsCard from "./UrgentThreatsCard";

import threatImg1 from "@/../public/img/home/home-17.jpg"
import threatImg2 from "@/../public/img/home/home-19.jpg"
import threatImg3 from "@/../public/img/home/home-22.jpg"

const urgentInfo = {
    alignment: "center",
    titleSize: 92.8,
    titleColor: "#111111",
    subTitle: "Take Action",
    title: "Ready To Face Urgent Threats",
    description: "Duis molestie lobortis metus, sit amet accumsan sem gravida nec. Curabitur eu elit nec erat facilisis volutpat vel et mi.",
    width: "1000px"
}

const urgentCard = [
    {
        id: 1,
        title: "Saving the Endangered Turtle",
        description: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra. In dignissim leo nisl, eu scelerisque ex ornare iaculis.",
        img: threatImg1,
    },
    {
        id: 2,
        title: "Protecting the Frog's Native Habitat",
        description: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra. In dignissim leo nisl, eu scelerisque ex ornare iaculis.",
        img: threatImg2,
    },
    {
        id: 3,
        title: "Help Protect the Climate",
        description: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra. In dignissim leo nisl, eu scelerisque ex ornare iaculis.",
        img: threatImg3,
    }
]

const UrgentThreats = () => {
  return (
    <div className="w-full md:max-h-[700px] lg:max-h-[800px] xl:max-h-[1218px] -z-20 flex flex-col justify-center items-center relative bg-[url('https://i.ibb.co/0JfSXnx/map.png')] bg-fixed bg-center pt-[175px] xl:pt-[175px] pb-[178px] md:pb-[378px] lg:pb-[278px]">
        {/* <Image src={bg || ''} className="absolute scale-150 -z-10" alt="Background Image" /> */}
        <div className="mb-10">
            <Heading info={urgentInfo} />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center gap-2 xl:justify-between items-center">
            {
                urgentCard.map(info => (
                    <UrgentThreatsCard key={info.id} info={info}/>
                ))
            }
        </div>
    </div>
  )
}

export default UrgentThreats;