import PetitionContentCard from "./PetitionContentCard"

import petitionImg1 from "@/../public/img/petition/petition-5.jpg"
import petitionImg2 from "@/../public/img/petition/petition-8.jpg"

const petitionInfo = [
    {
        id: 1,
        title: "Preventing Illegal Logging",
        description: "Vestibulum id erat sed ipsum congue consequat vitae vitae neque. Aenean eu felis ante. Quisque semper sit amet lacus sed vestibulum. Curabitur tincidunt lorem maximus viverra sagittis. Vestibulum mollis, risus in vehicula laoreet, sem est imperdiet augue, vitae iaculis metus est scelerisque neque.",
        left_topText: "Nullam et porttitor nunc, venenatis volutpat lorem. Nullam facilisis felis vitae tristique varius. Sed id tellus rhoncus, congue lectus non, accumsan arcu :",
        leftList: [
            "Morbi porttitor lorem faucibus libero",
            "Nec tempor dolor dignissim",
            "Etiam pretium scelerisque lorem"
        ],
        left_bottomText: "Integer vitae cursus orci. Ut quis felis finibus, mattis purus sed, dapibus eros. Duis nec nibh turpis. Nullam sit amet varius nunc. Donec vestibulum ipsum arcu, fermentum condimentum magna lacinia eget. Donec scelerisque blandit augue nec condimentum.",
        img: petitionImg1,
    },
    {
        id: 2,
        title: "Urgent Strict Environmental Standards",
        description: "Vestibulum id erat sed ipsum congue consequat vitae vitae neque. Aenean eu felis ante. Quisque semper sit amet lacus sed vestibulum. Curabitur tincidunt lorem maximus viverra sagittis. Vestibulum mollis, risus in vehicula laoreet, sem est imperdiet augue, vitae iaculis metus est scelerisque neque.",
        left_topText: "Nullam et porttitor nunc, venenatis volutpat lorem. Nullam facilisis felis vitae tristique varius. Sed id tellus rhoncus, congue lectus non, accumsan arcu :",
        leftList: [
            "Morbi porttitor lorem faucibus libero",
            "Nec tempor dolor dignissim",
            "Etiam pretium scelerisque lorem"
        ],
        left_bottomText: "Integer vitae cursus orci. Ut quis felis finibus, mattis purus sed, dapibus eros. Duis nec nibh turpis. Nullam sit amet varius nunc. Donec vestibulum ipsum arcu, fermentum condimentum magna lacinia eget. Donec scelerisque blandit augue nec condimentum.",
        img: petitionImg2,
    }
]

const PetitionContent = () => {

  return (
    <div className="mt-[95px]">
        {
            petitionInfo.map((info) => (
                <PetitionContentCard key={info.id} info={info}/>
            ))
        }
    </div>
  )
}

export default PetitionContent