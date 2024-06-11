

const Heading = ({ info }) => {
  const { 
    subTitle = "sub title", 
    title = "title", 
    titleColor = "#ffffff", 
    description = "description", 
    descriptionColor = "#7E7E7E", 
    alignment = "start", 
    width = "900px" 
  } = info || "";

  return (
    <div>
      <div className={`w-full text-center lg:text-start lg:w-[900px]`}>
        <h2 className={`font-primary text-primary text-[21.6px]`}>{subTitle}</h2>
        <h1 className={`font-primary font-medium text-[${titleColor}] text-[40px] lg:text-[50px] xl:text-[92.8px]`}>{title}</h1>
        <p className={`font-secondary w-[80%] md:text-[8px] lg:text-[10px] xl:text-[16px] text-[${descriptionColor}]`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Heading;