import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const Button = () => {
  return (
    <button className={`${dm_serif_display.className} px-[41px] py-2 text-[19px] text-white tracking-wide underline bg-[--btn]`}>
        Donate
    </button>
  )
}

export default Button