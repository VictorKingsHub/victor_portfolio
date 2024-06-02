"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navigationmenu = [
    { label: "about", link: "/" },
    { label: "Contact", link: "/contact" },
    { label: "Projects", link: "/projects" },
]
const Navigation = () => {
    const pathName = usePathname()

    return (
        <nav className='flex flex-row justify-evenly p-2 w-full'>
            <div className="left">
                <Link href="/" className='font-mono text-xl font-extrabold'>Victor</Link>
            </div>
            <div className="right flex flex-row  mx-8">

                {navigationmenu.map((items) => (
                    <Link key={items.label} href={items.link} className={`${pathName === items.link ? "text-teal-3 border-b-2 border-teal-3 font-semibold" : "text-white"} mx-3 p-1 font-mono`}> {items.label} </Link>
                ))}
                <button className='btn bg-teal-3 px-3 text-sm rounded-lg'> Button </button>
            </div>
        </nav>
    )
}

export default Navigation
