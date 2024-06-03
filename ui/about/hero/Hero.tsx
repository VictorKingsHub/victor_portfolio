import Image from 'next/image'
import React from 'react'
import styles from "./Hero.module.css"
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { TiSocialLinkedin } from 'react-icons/ti'
import { BsFacebook } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { MdFileDownload } from 'react-icons/md'

const HeroSection = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left} >
                <div className={styles.namebody}>
                    <p className={styles.prof}>Front-End Developer</p>
                    <h1 className={styles.name}>Hello, I&apos;m  <span className={styles.nameEnd}>Victor Eze</span></h1>
                </div>
                <div className={styles.about}>
                    <p >I excel at crafting elegant digital experiences <br />
                        I&apos;m hightly experienced in various frontend technologies</p>
                </div>
                <div className={styles.down}>
                    <Link href="/" className={styles.but}>
                        <span>CV download  </span> <MdFileDownload />
                    </Link>
                    <Link href={`mailto:ezevictornkemjika@gmail.com`} className={styles.Link}>
                    <SiGmail />
                    </Link>
                    <Link href="https://github.com/VictorKingsHub" className={styles.Link}>
                        <FaGithub />
                    </Link>
                    <Link href="www.linkedin.com/in/eze-victor-nkemjika-hub" className={styles.Link}>
                        <TiSocialLinkedin />
                    </Link>
                    <Link href="https://web.facebook.com/VictorKingsConcepts/" className={styles.Link}>
                        <BsFacebook />
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
