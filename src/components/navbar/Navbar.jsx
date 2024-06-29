import { DM_Serif_Display } from "next/font/google";
const dm_serif_display = DM_Serif_Display({ subsets: ["latin"], weight: "400" });

import Image from "next/image";
import Links from "./links/Links";
import styles from "./navbar.module.css"

import Logo from "@/../public/brand/logo.png"
import Button from "../button/Button";

const Navbar = () => {
  return (
    <div className={`${styles.container} my-2`}>
      <div className="w-[220px] md:w-[160px] xl:w-[220px]">
        <Image className="object-fit" src={Logo || ''} alt="Logo"></Image>
      </div>
      <div className={`font-primary md:w-auto`}>
        <Links />
      </div>
      <div className={styles.display}>
        <Button value="Donate" />
      </div>
    </div>
  )
}

export default Navbar;