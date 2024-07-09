import Banner from "@/components/Banner/Banner"
import NewsLetter from "@/components/newsLetter/NewsLetter"
import AboutNumbers from "@/pages/AboutPage/AboutNumbers/AboutNumbers"
import AboutStat from "@/pages/AboutPage/AboutStat/AboutStat"
import AboutTestimonial from "@/pages/AboutPage/AboutTestimonial/AboutTestimonial"
import HomeAboutSection from "@/pages/HomePage/HomeAboutSection/HomeAboutSection"
import MovementAction from "@/pages/HomePage/Movement/MovementAction"

import aboutBannerImg from '@/../public/img/about/about-10.jpg'
import aboutMovementImg from '@/../public/img/about/about-1.jpg'

const AboutUsPage = () => {
  return (
    <div>
      <Banner value="About Us" img={aboutBannerImg}/>
      <AboutNumbers/>
      <HomeAboutSection />
      <AboutStat />
      <div className="mb-40 mt-60 lg:mt-[112px] md:mb-0 md:mt-0">
        <NewsLetter />
      </div>
      <div className="lg:pt-[100px] xl:pt-[200px] bg-[url('https://i.ibb.co/0JfSXnx/map.png')] bg-fixed">
        <MovementAction img={aboutMovementImg}/>
      </div>
      <div className="md:mt-[125px]">
        <AboutTestimonial/>
      </div>
    </div>
  )
}

export default AboutUsPage