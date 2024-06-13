import Content from "@/components/content/Content"

const topContent = {
  title: "Preventing Ilegal Logging",
  description: "Vestibulum id erat sed ipsum congue consequat vitae vitae neque. Aenean eu felis ante. Quisque semper sit amet lacus sed vestibulum. Curabitur tincidunt lorem maximus viverra sagittis.",
  titleColor: "#000000"
}
const bottomContent = {
  title: "Curabitur Hendrerit Diam",
  description: "Vestibulum id erat sed ipsum congue consequat vitae vitae neque. Aenean eu felis ante. Quisque semper sit amet lacus sed vestibulum. Curabitur tincidunt lorem maximus viverra sagittis.",
  titleColor: "#000000",
  alignment: "end"
}

const leftList = [
  "Morbi porttitor lorem faucibus libero",
  "Nec tempor dolor dignissim",
  "Etiam pretium scelerisque lorem"
]

const SinglePetitionContent = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-14 mt-56 mb-40">
      <div className="flex justify-center gap-8">
        <div className="w-1/3 h-[546px] bg-[#EDEDED]">
        </div>
        <div className="w-1/3 flex flex-col py-6">
          <Content info={topContent} />
          <ul className="p-6 space-y-4">
            {
              leftList.map((listItem, idx) => (
                <li className="list-disc" key={idx}>{listItem}</li>
              ))
            }
          </ul>
        </div>
        <div className="w-1/3 flex flex-col justify-end items-start">
            <h1 className="font-primary text-[32px]">&quot;Caring For The Environment is Like Caring For Yourself&quot;</h1>
            <p className="font-secondary text-[#7E7E7E]">– Hamish Jordan</p>
        </div>
      </div>
      <div className="flex justify-center gap-8">
        <div className="w-1/3 flex flex-col justify-end py-6">
          <Content info={bottomContent} />
        </div>
        <div className="w-1/3 h-[546px] bg-[#EDEDED]">
        </div>
        <div className="w-1/3 flex flex-col justify-start items-start gap-4 ">
            <div className="h-[272px] w-full bg-[#EDEDED]"></div>
            <p className="font-secondary text-[#7E7E7E]">auris sit amet felis augue. Nam ullamcorper, eros non dignissim hendrerit, dolor nunc placerat felis, ut condimentum risus lorem a odio. Ut euismod lorem vitae quam pellentesque laoreet. condimentum nisi. Maecenas vitae eros sem.</p>
        </div>
      </div>
    </div>
  )
}

export default SinglePetitionContent