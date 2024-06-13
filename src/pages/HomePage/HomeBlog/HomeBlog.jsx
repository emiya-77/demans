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
    },
    {
        id: 2,
        title: "Let's Help The Endangered...",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
    },
    {
        id: 3,
        title: "How Climate Changes Influence...",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
    }
]

const HomeBlog = () => {

  return (
    <div className="h-[954px]">
        <div className="absolute bg-[#EDEDED] h-[954px] left-0 right-0 -z-10"></div>
        <div className="py-20">
            <div className="mb-4">
                <Heading info={info} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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