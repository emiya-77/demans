import { DM_Serif_Display, PT_Sans } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });
const pt_sans = PT_Sans({ subsets: ["latin"], weight: "400" });

const Heading = ({ info }) => {
  const { subTitle = "Take Action", title = "Their Lives matter. Let's Save It!", titleSize = "92.8", titleColor = "#ffffff", description = "", descriptionColor = "#ffffff", alignment = "start", width = "70%" } = info || "";
  return (
    <div>
      <div className={`w-full text-center lg:text-${alignment} lg:w-[${width}]`}>
        <h2 className={`${dm_serif_display.className} text-[--btn] text-[21.6px]`}>{subTitle}</h2>
        <h1 className={`${dm_serif_display.className} font-medium text-[${titleColor}] text-[40px] md:text-[${titleSize}px]`}>{title}</h1>
        <p className={`${pt_sans.className} text-[${descriptionColor}]`}>
          Lorem ipsum doloLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo augue, blandit et
          condimentum at, molestie id tortor.
        </p>
      </div>
    </div>
  )
}

export default Heading;