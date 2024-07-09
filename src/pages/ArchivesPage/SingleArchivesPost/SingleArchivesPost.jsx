import Content from "@/components/content/Content"
import { SlCalender } from "react-icons/sl";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaComments } from "react-icons/fa";

const singleArchivesInfo = {
    title: "How Climate Changes Influence Their Lives",
    description: "Ut sem augue, egestas vel nunc eget, interdum tristique magna. Fusce tempor leo in nunc tincidunt volutpat. Nunc fringilla tincidunt augue, eu scelerisque nisi imperdiet vitae. Fusce in libero sed tellus pretium dignissim ac non diam. Aliquam volutpat magna vitae orci bibendum condimentum. Mauris consequat elit vel dictum fringilla. Praesent elit neque, mollis a efficitur vel, congue non nibh. Maecenas ornare mauris dictum, molestie felis at, feugiat erat. Nam ornare arcu nibh, id varius ante finibus sit amet. Donec eu cursus ipsum, nec vestibulum augue :",
    titleColor: "#000000"
}

const leftList = [
    "Morbi porttitor lorem faucibus libero",
    "Nec tempor dolor dignissim",
    "Etiam pretium scelerisque lorem"
  ]

const SingleArchivesPost = () => {
  return (
    <div className="mt-20 2xl:mt-[153px]">
        <div className="h-[250px] md:h-[430px] lg:h-[500px] xl:h-[700px] 2xl:h-[860px] bg-[#EDEDED]"></div>
        <div>
            <div className="flex justify-start md:gap-8 mb-8 md:mb-[83px] flex-wrap">
                <div className="flex p-2 justify-center items-center gap-3">
                    <div className="text-primary">
                        <SlCalender size={20}/>
                    </div>
                    <p className="font-primary text-[14px] md:text-[19.2px]">August 1, 2020</p>
                </div>
                <div className="flex p-2 justify-center items-center gap-3">
                    <div className="text-primary">
                        <TfiAlarmClock size={20}/>
                    </div>
                    <p className="font-primary text-[14px] md:text-[19.2px]">14:00 PM</p>
                </div>
                <div className="flex p-2 justify-center items-center gap-3">
                    <div className="text-primary">
                        <FaComments size={20}/>
                    </div>
                    <p className="font-primary text-[14px] md:text-[19.2px]">No Comment</p>
                </div>
            </div>
            <div className="mb-[36px]">
                <Content info={singleArchivesInfo}/>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-0">
                <div className="w-full md:w-1/2">
                    <ul className="px-6 mb-[36px] space-y-4">
                        {
                            leftList?.map((listItem, idx) => (
                                <li className="list-disc" key={idx}>{listItem}</li>
                            ))
                        }
                    </ul>
                    <p className="font-secondary text-[#7E7E7E]">Integer vitae cursus orci. Ut quis felis finibus, mattis purus sed, dapibus eros. Duis nec nibh turpis. Nullam sit amet varius nunc. Donec vestibulum ipsum arcu, fermentum condimentum magna lacinia eget. Donec scelerisque blandit augue nec condimentum.</p>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center gap-8">
                    <div className="w-[300px] h-[200px] bg-[#EDEDED]"></div>
                    <div className="w-[300px] h-[200px] bg-[#EDEDED]"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SingleArchivesPost