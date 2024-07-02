
import Content from "@/components/content/Content"
import StatCard from "./StatCard"
import Button from "@/components/button/Button"

const aboutStatData = [
    {
        id: 1,
        percentage: 72,
        content: "Endangered Species"
    },
    {
        id: 2,
        percentage: 89,
        content: "Climate Protection"
    },
    {
        id: 3,
        percentage: 84,
        content: "Forest Protection"
    },
]

const aboutInfo = {
    subTitle: "About Us",
    title: "Our Mission",
    description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
    titleSize: "64",
    titleColor: "#000000",
    descriptionColor: "#7E7E7E",
    width: "100%",
}

const AboutStat = () => {
  return (
    <div className={`font-primary h-[260px] flex flex-col md:flex-row items-center gap-2 md:gap-7 2xl:gap-[30px] my-24`}>
        <div className="absolute left-0 right-0 w-full h-full md:h-[260px] -z-10">
        </div>
        <div className="w-full h-full flex items-center md:w-1/3 2xl:w-[520px]">
            <Content info={aboutInfo} />
        </div>
        <div className="w-full h-full items-end grid grid-cols-3 lg:grid-cols-3 md:w-2/3 2xl:w-auto md:pl-10 2xl:pl-0 gap-[85px]">
            {
                aboutStatData.map((stat) => (
                    <StatCard info={stat} key={stat.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default AboutStat