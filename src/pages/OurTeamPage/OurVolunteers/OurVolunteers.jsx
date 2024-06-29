import Content from "@/components/content/Content"
import OurVolunteersCard from "./OurVolunteersCard"

import volunteerImg1 from '@/../public/img/team/team-3.jpg'
import volunteerImg2 from '@/../public/img/team/team-4.jpg'
import volunteerImg3 from '@/../public/img/team/team-5.jpg'
import volunteerImg4 from '@/../public/img/team/team-6.jpg'
import volunteerImg5 from '@/../public/img/team/team-7.jpg'
import volunteerImg6 from '@/../public/img/team/team-8.jpg'

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
        img: volunteerImg1,
    },
    {
        id: 2,
        name: "Diana Giza",
        designation: "Volunteer",
        img: volunteerImg2,
    },
    {
        id: 3,
        name: "Aebi Alther",
        designation: "Volunteer",
        img: volunteerImg3,
    },
    {
        id: 4,
        name: "Agon Braun",
        designation: "Environmental Activist",
        img: volunteerImg4,
    },
    {
        id: 5,
        name: "Diana Giza",
        designation: "Activist",
        img: volunteerImg5,
    },
    {
        id: 6,
        name: "Jason Brad",
        designation: "Activist",
        img: volunteerImg6,
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