import Banner from "@/components/Banner/Banner";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import MovementAction from "@/pages/HomePage/Movement/MovementAction";
import PetitionContent from "@/pages/PetitionPage/PetitionContent/PetitionContent";

import petitionBannerImg from "@/../public/img/petition/petition-3.webp"
import petitionMovementImg from "@/../public/img/petition/petition-4.jpg"

const petitionActionInfo = {
  subTitle: "Petitions Support",
  title: "Give Your Support To Our Volunteers",
  description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
  titleColor: "#000000",
}

const PetitionPage = () => {
  return (
    <div>
      <Banner value="Petition" img={petitionBannerImg}/>
      <MovementAction info={petitionActionInfo} img={petitionMovementImg} />
      <PetitionContent/>
      <div className="mb-40 md:mb-0">
        <NewsLetter/>
      </div>
    </div>
  )
}

export default PetitionPage;