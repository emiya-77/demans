import Banner from "@/components/Banner/Banner"
import NewsLetter from "@/components/newsLetter/NewsLetter"
import MovementAction from "@/pages/HomePage/Movement/MovementAction"
import SinglePetitionContent from "@/pages/PetitionPage/SinglePetitionContent/SinglePetitionContent"

const SinglePetitionInfo = {
    subTitle: "Petitions Support",
    title: "Give Your Support To Our Volunteers",
    description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
    titleColor: "#000000",
  }

const page = () => {
  return (
    <div>
        <Banner value="Single Petition" />
        <SinglePetitionContent/>
        <MovementAction info={SinglePetitionInfo} />
        <NewsLetter/>
    </div>
  )
}

export default page