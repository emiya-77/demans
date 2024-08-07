import Banner from "@/components/Banner/Banner";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import HelpSection from "@/pages/ServicesPage/HelpSection/HelpSection";

import servicesBannerImg from "@/../public/img/services/services-1.jpg"
import UrgentThreats from "@/pages/HomePage/UrgentThreats/UrgentThreats";

const ServicePage = () => {
  return (
    <div>
      <Banner value="Services" img={servicesBannerImg}/>
      <div className="">
        <UrgentThreats />
      </div>
      <HelpSection/>
      <div className="mb-60 md:mb-0">
        <NewsLetter/>
      </div>
    </div>
  )
}

export default ServicePage;