import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({subsets: ["latin"], weight: "400"});

const Heading = ({subTitle="Take Action", title="Their Lives matter. Let's Save it!", titleSize="64", titleColor="#000000", description="", descriptionColor="#7E7E7E", alignment="start"}) => {
  return (
    <div>
      <div className="w-4/5">
        <h2 className={`${dm_serif_display.className} text-[--btn] text-[21.6px]`}>{subTitle}</h2>
        <h1 className={`${dm_serif_display.className} text-white text-[92.8px] leading-[120px]`}>{title}</h1>
        <p className="text-white">
          Lorem ipsum doloLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo augue, blandit et
          condimentum at, molestie id tortor.
        </p>
      </div>
    </div>
  )
}

export default Heading;