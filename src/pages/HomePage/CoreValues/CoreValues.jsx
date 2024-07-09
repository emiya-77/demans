import CoreValuesCard from "./CoreValuesCard"

const coreValues = [
    {
        id: 1,
        title: "Mission"
    },
    {
        id: 2,
        title: "Vision"
    },
    {
        id: 3,
        title: "Values"
    },
]

const CoreValues = () => {

    return (
        <div className="flex justify-center items-center">
            <div className="w-full min-h-[210px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center md:text-start gap-10 md:gap-6 lg:gap-[30px] mt-[51px]">
                {
                    coreValues?.map(value => (
                        <CoreValuesCard key={value.id} value={value} />
                    ))
                }
            </div>
        </div>
    )
}

export default CoreValues