import Banner from "@/components/Banner/Banner"
import NewsLetter from "@/components/newsLetter/NewsLetter"
import AboutNumbers from "@/pages/AboutPage/AboutNumbers/AboutNumbers"
import AboutStat from "@/pages/AboutPage/AboutStat/AboutStat"
import AboutTestimonial from "@/pages/AboutPage/AboutTestimonial/AboutTestimonial"
import HomeAboutSection from "@/pages/HomePage/HomeAboutSection/HomeAboutSection"
import MovementAction from "@/pages/HomePage/Movement/MovementAction"

const AboutUsPage = () => {
  return (
    <div>
      <Banner value="About Us"/>
      <AboutNumbers/>
      <HomeAboutSection />
      <AboutStat />
      <div className="mb-40 mt-112 md:mb-0 md:mt-0">
        <NewsLetter />
      </div>
      <MovementAction/>
      <AboutTestimonial/>
    </div>
  )
}

export default AboutUsPage