'use client'
import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

const Button = ({ value, color="#ffffff" }) => {
  return (
    <button className={`font-primary min-w-[140px] px-[19px] h-[40px] text-[16px] xl:text-[19.2px] underline bg-primary hover:bg-[#e17c00] hover:scale-105 transition-all duration-300 ease-in-out`}
    style={{ color: color }}>
      {value}
    </button>
  )
}

export default Button;