import NewsLetter from "@/components/newsLetter/NewsLetter";
import Banner from "@/pages/HomePage/Banner/Banner";
import CoreValues from "@/pages/HomePage/CoreValues/CoreValues";
import HomeAboutSection from "@/pages/HomePage/HomeAboutSection/HomeAboutSection";
import HomeBlog from "@/pages/HomePage/HomeBlog/HomeBlog";
import HomeStat from "@/pages/HomePage/HomeStat/HomeStat";
import Movement from "@/pages/HomePage/Movement/Movement";
import UrgentThreats from "@/pages/HomePage/UrgentThreats/UrgentThreats";

const Home = () => {
  return (
    <div>
      <Banner />
      <CoreValues />
      <HomeAboutSection />
      <div className="mt-28 md:mt-36 xl:mt-[263px]">
        <NewsLetter />
      </div>
      <div className="pt-[100px]">
        <UrgentThreats />
      </div>
      <HomeStat/>
      <Movement/>
      <HomeBlog/>
    </div>
  )
}

export default Home;