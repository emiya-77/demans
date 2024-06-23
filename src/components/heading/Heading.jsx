

const Heading = ({ info }) => {
  const { 
    subTitle = "sub title", 
    title = "title", 
    titleColor = "#ffffff", 
    description = "", 
    descriptionColor = "#7E7E7E", 
    alignment = "start", 
    width = "900px",
  } = info || "";

  const center =  {
    textAlign: 'center',
    display: 'block',
    width: '100%',
  };

  return (
    <div>
      <div className={`w-full text-center md:text-start md:w-2/3 lg:w-[60%] xl:w-[900px]`} style={alignment == 'center'? center: {}}>
        <h2 className={`font-primary text-primary text-[21.6px]`}>{subTitle}</h2>
        <h1 className={`font-primary font-medium text-[40px] md:text-[50px] xl:text-[92.8px]`} style={{ color: titleColor }}>{title}</h1>
        <p className={`font-secondary w-[80%] md:w-full md:text-[10px] lg:text-[12px] xl:text-[16px] text-[${descriptionColor}]`}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Heading;