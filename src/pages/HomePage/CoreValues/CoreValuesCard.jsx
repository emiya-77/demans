import Button from "@/components/button/Button";

const CoreValuesCard = ({ value }) => {

    return (
        <div className="w-full 2xl:w-[410px]">
            <div className="w-[110px] pb-[20.5px] border-b-[1px] border-black inline-block mb-5 md:mb-[23.5]">
                <h4 className={`font-primary text-[28px] md:text-[32px]`}>
                    {value?.title}
                </h4>
            </div>
            <p className="text-[#7e7e7e] text-[16px] leading-[20px] w-auto mb-[19px]">
                Donec faucibus ante sed nibh semper, nec posuere
                libero pharetra. In dignissim leo nisl, eu scelerisque ex
                ornare iaculis.
            </p>
            <Button value="Read More" />
        </div>
    )
}

export default CoreValuesCard