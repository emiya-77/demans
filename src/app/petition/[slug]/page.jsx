import Banner from "@/components/Banner/Banner"
import NewsLetter from "@/components/newsLetter/NewsLetter"
import MovementAction from "@/pages/HomePage/Movement/MovementAction"
import SinglePetitionContent from "@/pages/PetitionPage/SinglePetitionContent/SinglePetitionContent"

import petitionBannerImg from "@/../public/img/petition/petition-3.webp"
import singlePetitionMovementImg from "@/../public/img/petition/single-petition/single-petition-1.jpg"

const SinglePetitionInfo = {
    subTitle: "Petitions Support",
    title: "Give Your Support To Our Volunteers",
    description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
    titleColor: "#000000",
  }

const page = () => {
  return (
    <div>
        <Banner value="Single Petition" img={petitionBannerImg} />
        <SinglePetitionContent/>
        <MovementAction info={SinglePetitionInfo} img={singlePetitionMovementImg} />
        <div className="mb-40 md:mb-0">
          <NewsLetter/>
        </div>
    </div>
  )
}

export default page