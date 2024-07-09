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
      <div className="lg:mt-[60px] xl:mt-[100px] 2xl:mt-[195px]">
        <MovementAction info={teamActionInfo} img={teamMovementImg}/>
      </div>
      <div className="md:mt-[100px] lg:mt-[147px] xl:mt-[100px] 2xl:mt-[147px] mb-60 md:mb-0">
        <NewsLetter />
      </div>
    </div>
  )
}

export default OurTeamPage;