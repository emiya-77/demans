import AboutNumbersCard from "./AboutNumbersCard"

const aboutNumbersInfo = [
    {
        id: 1,
        number: "2,279",
        title: "International Awards",
    },
    {
        id: 1,
        number: "3,099",
        title: "Dedicater Volunteer",
    },
    {
        id: 1,
        number: "1,589",
        title: "Successfull Campaigns",
    },
    {
        id: 1,
        number: "526",
        title: "Supporting Country",
    }
]

const AboutNumbers = () => {
  return (
    <div className="flex justify-around items-center flex-wrap mt-20">
        {
            aboutNumbersInfo.map((number) => (
                <AboutNumbersCard key={number.id} info={number} />
            ))
        }
    </div>
  )
}

export default AboutNumbers