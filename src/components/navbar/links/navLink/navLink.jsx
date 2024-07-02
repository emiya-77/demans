import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./navLink.module.css";

const NavLink = ({ item }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathName = usePathname();

  const handleDropdownEnter = () => {
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setDropdownOpen(false);
  };

  const isActive = pathName === item.path || item.subMenu?.some(subItem => subItem.path === pathName);

  return (
    <div className="relative">
      <Link
        className={`${isActive && styles.active} flex items-center underline text-[19px] font-medium md:text-[16px] xl:text-[19px] hover:text-primary px-4 lg:p-0 xl:px-4`}
        href={item.path}
        key={item.title}
        onMouseEnter={item.dropdown ? handleDropdownEnter : null}
        onMouseLeave={item.dropdown ? handleDropdownLeave : null}
      >
        {item.title}
        {item.dropdown && <IoIosArrowDown className="ml-1" />}
      </Link>
      {item.dropdown && dropdownOpen && (
        <div
          className="z-50 absolute bg-white shadow-lg mt-0 pt-3 pb-4"
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          {item?.subMenu?.map((subItem) => (
            <Link
              href={subItem.path}
              key={subItem.title}
              className="block px-10 py-2 underline text-lg text-black hover:text-primary w-52"
            >
              {subItem.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavLink;
