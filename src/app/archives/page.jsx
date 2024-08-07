import Banner from "@/components/Banner/Banner";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import ArchivesBlog from "@/pages/ArchivesPage/ArchivesBlog/ArchivesBlog";
import MovementAction from "@/pages/HomePage/Movement/MovementAction";

import archivesBannerImg from "@/../public/img/archives/archives-4.jpg"
import archivesMovementImg from "@/../public/img/archives/archives-5.jpg"

const archivesActionInfo = {
  subTitle: "Petitions Support",
  title: "Give Your Support To Our Volunteers",
  titleColor: "#000000",
  description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
}

const ArchivesPage = () => {
  return (
    <div>
      <Banner value="Archives" img={archivesBannerImg} />
      <ArchivesBlog />
      <div className="2xl:mt-[155px]">
        <MovementAction info={archivesActionInfo} img={archivesMovementImg} />
      </div>
      <div className="mb-60 md:mb-0 lg:mt-20 2xl:mt-[155px]">
        <NewsLetter/>
      </div>
    </div>
  )
}

export default ArchivesPage;