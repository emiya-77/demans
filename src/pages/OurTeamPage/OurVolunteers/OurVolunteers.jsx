import Content from "@/components/content/Content"
import OurVolunteersCard from "./OurVolunteersCard"

const volunteerTitleInfo = {
    subTitle: "Our Team",
    title: "Meet Our Volunteers",
    description: "",
    titleColor: "#000000",
}

const volunteerInfo = [
    {
        id: 1,
        name: "Jason Brad",
        designation: "Environmental Activist",
    },
    {
        id: 2,
        name: "Diana Giza",
        designation: "Volunteer",
    },
    {
        id: 3,
        name: "Aebi Alther",
        designation: "Volunteer",
    },
    {
        id: 4,
        name: "Agon Braun",
        designation: "Environmental Activist",
    },
    {
        id: 5,
        name: "Diana Giza",
        designation: "Activist",
    },
    {
        id: 6,
        name: "Jason Brad",
        designation: "Activist",
    },
]

const OurVolunteers = () => {
  return (
    <div>
        <div className="mb-8">
            <Content info={volunteerTitleInfo}/>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
                volunteerInfo.map((info) => (
                    <OurVolunteersCard info={info} key={info.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default OurVolunteers