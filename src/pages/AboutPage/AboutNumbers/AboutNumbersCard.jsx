
const AboutNumbersCard = ({info}) => {

    const {number, title} = info || {};

  return (
    <div className="font-primary flex flex-col justify-center items-center p-4">
        <h1 className="text-[60px] md:text-[92.8px] leading-[100px]">{number}</h1>
        <p className="text-[16px] md:text-[24px] text-primary">{title || ""}</p>
    </div>
  )
}

export default AboutNumbersCard