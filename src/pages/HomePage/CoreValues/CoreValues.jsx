import CoreValuesCard from "./CoreValuesCard"

const coreValues = [
    {
        id: 1,
        title: "Mission"
    },
    {
        id: 1,
        title: "Vision"
    },
    {
        id: 1,
        title: "Values"
    },
]

const CoreValues = () => {

    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center md:text-start gap-10 lg:gap-10 my-14">
                {
                    coreValues.map(value => (
                        <CoreValuesCard key={value.id} value={value} />
                    ))
                }
            </div>
        </div>
    )
}

export default CoreValues