import Banner from "@/components/Banner/Banner";
import NewsLetter from "@/components/newsLetter/NewsLetter";
import HelpSection from "@/pages/ServicesPage/HelpSection/HelpSection";

const ServicePage = () => {
  return (
    <div>
      <Banner value="Services"/>
      <HelpSection/>
      <NewsLetter/>
    </div>
  )
}

export default ServicePage;