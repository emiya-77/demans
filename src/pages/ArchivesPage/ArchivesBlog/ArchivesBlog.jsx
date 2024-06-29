import HomeBlogCard from "@/pages/HomePage/HomeBlog/HomeBlogCard"

import archivesBlogImg1 from "@/../public/img/archives/archives-1.jpg"
import archivesBlogImg2 from "@/../public/img/archives/archives-2.jpg"
import archivesBlogImg3 from "@/../public/img/archives/archives-3.jpg"

const archivesBlogInfo = [
    {
        id: 1,
        title: "Why Is Deforestation An…",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
        img: archivesBlogImg1,
    },
    {
        id: 2,
        title: "Let's Help The Endangered...",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
        img: archivesBlogImg2,
    },
    {
        id: 3,
        title: "How Climate Changes Influence...",
        description: "Single Post August 1, 20202 14:00 PM No Comment Why Is Deforestation an Urgent Global Problem Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi…",
        img: archivesBlogImg3,
    }
]

const ArchivesBlog = () => {
  return (
    <div className="">
        <div className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 place-items-center gap-8">
                {
                    archivesBlogInfo.map((info) => (
                        <HomeBlogCard info={info} key={info.id} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default ArchivesBlog