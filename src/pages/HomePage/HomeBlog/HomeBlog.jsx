import Heading from "@/components/heading/Heading"
import HomeBlogCard from "./HomeBlogCard"

const info = {
    subTitle: "All Post",
    title: "Read Our Blog",
    titleColor: "#000000",
    alignment: "center",
}

const homeBlogInfo = [
    {
        id: 1,
        title: "Why Is Deforestation An…",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
        img: "https://i.ibb.co/vxwJw9s/home-32.jpg",
    },
    {
        id: 2,
        title: "Let's Help The Endangered...",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
        img: "https://i.ibb.co/N7cF2wq/home-28.jpg",
    },
    {
        id: 3,
        title: "How Climate Changes Influence...",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
        img: "https://i.ibb.co/BGntB1H/home-25.jpg",
    }
]

const HomeBlog = () => {

  return (
    <div className="min-h-[954px] xl:mt-[169px] mb-16 md:mb-0">
        <div className="absolute bg-[#EDEDED] h-[1905px] lg:h-[1350px] xl:h-[950px] left-0 right-0 -z-10"></div>
        <div className="py-20">
            <div className="mb-[18px]">
                <Heading info={info} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-[30px]">
                {
                    homeBlogInfo.map((info) => (
                        <HomeBlogCard info={info} key={info.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HomeBlog