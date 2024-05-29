'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {

  const pathName = usePathname();

  return (
    <Link className={`${pathName === item.path && styles.active} flex items-center underline text-[19px] font-medium md:text-[16px] xl:text-[19px]`} href={item.path} key={item.title}>
      {item.title}
      {item.dropdown && <IoIosArrowDown></IoIosArrowDown>}
    </Link>
  )
}

export default NavLink;