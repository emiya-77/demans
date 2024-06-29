import Image from "next/image"
import bg from "@/../public/symbol/map.png"
import Heading from "@/components/heading/Heading";
import UrgentThreatsCard from "./UrgentThreatsCard";

const urgentInfo = {
    alignment: "center",
    titleSize: 92.8,
    titleColor: "#111111",
    title: "Ready To Face Urgent Threats",
    description: "Duis molestie lobortis metus, sit amet accumsan sem gravida nec. Curabitur eu elit nec erat facilisis volutpat vel et mi.",
    width: "1000px"
}

const urgentCard = [
    {
        id: 1,
        title: "Saving the Endangered Turtle",
        description: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra. In dignissim leo nisl, eu scelerisque ex ornare iaculis.",
    },
    {
        id: 2,
        title: "Protecting the Frog's Native Habitat",
        description: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra. In dignissim leo nisl, eu scelerisque ex ornare iaculis.",
    },
    {
        id: 3,
        title: "Help Protect the Climate",
        description: "Donec faucibus ante sed nibh semper, nec posuere libero pharetra. In dignissim leo nisl, eu scelerisque ex ornare iaculis.",
    }
]

const UrgentThreats = () => {
  return (
    <div className="w-full max-h-[700px] lg:max-h-[800px] xl:max-h-[1218px] -z-20 flex flex-col justify-center items-center relative">
        <Image src={bg || ''} className="absolute scale-150 -z-10" alt="Background Image" />
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