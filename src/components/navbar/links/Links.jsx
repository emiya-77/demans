'use client'

import { useState } from "react";
import NavLink from "./navLink/navLink";
import styles from "./links.module.css";
import Button from "@/components/button/Button";

const Links = () => {
    const [open, setOpen] = useState(false);
    const links = [
        {
            title: "Homepage",
            path: "/",
        },
        {
            title: "About",
            path: "/about-us",
            dropdown: true,
        },
        {
            title: "Feature",
            path: "#",
            dropdown: true,
        },
        {
            title: "Blog",
            path: "#",
            dropdown: true,
        },
        {
            title: "Contact",
            path: "/contact-us",
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.title} />
                ))}
            </div>
            <button className={styles.menuButton} onClick={() => setOpen(prev => !prev)}>Menu</button>
            {
                open && <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <NavLink item={link} key={link.title} />
                    ))}
                    <Button/>
                </div>
            }
        </div>
    )
}

export default Links