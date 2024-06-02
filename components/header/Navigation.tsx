"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import styles from "./Navigation.module.css"

const navigationmenu = [
    { label: "About", link: "/" },
    { label: "Contact", link: "/contact" },
    { label: "Projects", link: "/projects" },
]
const Navigation = () => {
    const pathName = usePathname()

    return (
        <nav className={styles.container}>
            <div className={styles.left}>
                <Link href="/" className={styles.logo}>Victor</Link>
            </div>
            <div className={styles.right}>
                {navigationmenu.map((items) => (
                    <Link key={items.label} href={items.link} className={`${pathName === items.link ? styles.active : styles.inactive}`}> {items.label} </Link>
                ))}
                <button className={styles.button}> Button </button>
            </div>
        </nav>
    )
}

export default Navigation
