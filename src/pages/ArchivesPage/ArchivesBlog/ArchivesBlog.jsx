import HomeBlogCard from "@/pages/HomePage/HomeBlog/HomeBlogCard"

const archivesBlogInfo = [
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

const ArchivesBlog = () => {
  return (
    <div className="">
        <div className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
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