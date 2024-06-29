import Banner from "@/components/Banner/Banner";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import MovementAction from "@/pages/HomePage/Movement/MovementAction";
import OurVolunteers from "@/pages/OurTeamPage/OurVolunteers/OurVolunteers";

import teamMovementImg from '@/../public/img/team/team-1.jpg'
import teamBannerImg from '@/../public/img/team/team-2.jpg'

const teamActionInfo = {
  subTitle: "Petitions Support",
  title: "Give Your Support To Our Volunteers",
  description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
  titleSize: "64",
  titleColor: "#000000",
  descriptionColor: "#7E7E7E",
  width: "100%",
}

const OurTeamPage = () => {
  return (
    <div>
      <Banner value="Our Team" img={teamBannerImg} />
      <div className="mt-20">
        <OurVolunteers />
      </div>
      <MovementAction info={teamActionInfo} img={teamMovementImg}/>
      <div className="mb-40 mt-40">
        <NewsLetter />
      </div>
    </div>
  )
}

export default OurTeamPage;