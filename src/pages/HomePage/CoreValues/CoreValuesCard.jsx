import Button from "@/components/button/Button";

const CoreValuesCard = ({ value }) => {

    return (
        <div className="w-full 2xl:w-[400px] py-4 hover:scale-105 hover:shadow-md px-4 transition-all duration-300 ease-in-out">
            <div className="h-[60px] md:h-[65px] border-b-[1px] border-black inline-block mb-5 md:mb-6">
                <h4 className={`font-primary text-[28px] md:text-[32px]`}>
                    {value?.title}
                </h4>
            </div>
            <p className="text-[#7e7e7e] mb-5 w-auto">
                Donec faucibus ante sed nibh semper, nec posuere
                libero pharetra. In dignissim leo nisl, eu scelerisque ex
                ornare iaculis.
            </p>
            <Button value="Read More" />
        </div>
    )
}

export default CoreValuesCard