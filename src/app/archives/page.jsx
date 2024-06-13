import Banner from "@/components/Banner/Banner";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import ArchivesBlog from "@/pages/ArchivesPage/ArchivesBlog/ArchivesBlog";
import MovementAction from "@/pages/HomePage/Movement/MovementAction";

const archivesActionInfo = {
  subTitle: "Petitions Support",
  title: "Give Your Support To Our Volunteers",
  description: "Suspendisse porttitor interdum nisl eu iaculis. Maecenas et ex ante. Proin hendrerit tempor arcu in porta. Phasellus nibh urna, varius in varius scelerisque, tempus eu lorem. In commodo nisl nec mi scelerisque vestibulum.",
}

const ArchivesPage = () => {
  return (
    <div>
      <Banner value="Archives" />
      <ArchivesBlog />
      <MovementAction info={archivesActionInfo} />
      <NewsLetter/>
    </div>
  )
}

export default ArchivesPage;