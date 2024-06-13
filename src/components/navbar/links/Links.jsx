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
            path: "#",
            dropdown: true,
            subMenu: [
                {
                    title: "About Us",
                    path: "/about/about-us",
                },
                {
                    title: "Our Team",
                    path: "/about/our-team",
                }
            ]
        },
        {
            title: "Feature",
            path: "#",
            dropdown: true,
            subMenu: [
                {
                    title: "Services",
                    path: "/service",
                },
                {
                    title: "Petition",
                    path: "/petition",
                },
                {
                    title: "Single Petition",
                    path: "/petition/1",
                }
                ,
                {
                    title: "404",
                    path: "/error",
                }
            ]
        },
        {
            title: "Blog",
            path: "#",
            dropdown: true,
            subMenu: [
                {
                    title: "Archives",
                    path: "/archives",
                },
                {
                    title: "Single Post",
                    path: "/archives/1",
                }
            ]
        },
        {
            title: "Contact",
            path: "/contact-us",
        }
    ];

    return (
        <div className={`${styles.container}`}>
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
                    <Button value="Donate" />
                </div>
            }
        </div>
    )
}

export default Links