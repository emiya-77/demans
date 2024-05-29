import NewsLetter from "@/components/newsLetter/NewsLetter";
import Banner from "@/pages/HomePage/Banner/Banner";
import CoreValues from "@/pages/HomePage/CoreValues/CoreValues";
import HomeAboutSection from "@/pages/HomePage/HomeAboutSection/HomeAboutSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <CoreValues />
      <HomeAboutSection />
      <NewsLetter />
    </div>
  )
}

export default Home;