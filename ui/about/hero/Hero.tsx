import Image from 'next/image'
import React from 'react'
import styles from "./Hero.module.css"
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TiSocialLinkedin } from 'react-icons/ti'
import { IoLogoFacebook } from 'react-icons/io'
import { BsFacebook } from 'react-icons/bs'

const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left} >
                <div >
                    <p>Front-End Developer</p>
                    <h1 className={styles.name}>Hello, I&apos;m  <span className={styles.nameEnd}>Victor Eze</span></h1>
                </div>
                <div className='px-3'>
                    <p>I excel at crafting elegant digital experiences <br />
                        I&apos;m experienced in various frontend technologies</p>
                </div>
                <div className={styles.down}>
                    <Link href="/" className={styles.Link}>CV download</Link>
                    <Link href="" className={styles.Link}> <FaGithub /> </Link>
                    <Link href="" className={styles.Link}> <TiSocialLinkedin /> </Link>
                    <Link href="" className={styles.Link}> <BsFacebook />
                    </Link>
                </div>

            </div>
            <div className={styles.right}>
                <div className={styles.imgWrapper}>
                    <Image src="/review3.jpg" width={300} height={300} className={styles.img} alt='Profile photo' />
                </div>
            </div>
        </div>
    )
}

export default HeroSection
