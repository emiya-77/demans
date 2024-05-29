'use client'
import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const Button = ({ value }) => {
  return (
    <button className={`${dm_serif_display.className} px-[41px] py-2 text-[16px] xl:text-[19px] text-white tracking-wide underline bg-[--btn] md:px-[28px] md:py-[8px] lg:px-[41px] lg:py-3`}>
      {value}
    </button>
  )
}

export default Button;