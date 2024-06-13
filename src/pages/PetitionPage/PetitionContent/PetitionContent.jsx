import PetitionContentCard from "./PetitionContentCard"

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
    }
]

const PetitionContent = () => {

  return (
    <div>
        {
            petitionInfo.map((info) => (
                <PetitionContentCard key={info.id} info={info}/>
            ))
        }
    </div>
  )
}

export default PetitionContent