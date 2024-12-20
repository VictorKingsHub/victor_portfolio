'use client'
import React, { useState } from 'react'
import styles from './Project.module.css'
import Link from 'next/link'
import Image from 'next/image'

const data = [
  {
    id: 1,
    number: '01',
    image: '/riskout.png',
    desc: 'Travel Consulting Website',
    title: 'Riskout Consults',
    link: 'https://consults.vercel.app/',
    visit: 'Visit',
    github: 'Github',
    githubLink: 'https://github.com/VictorKingsHub/consults'
  },
  {
    id: 2,
    number: '02',
    image: '/github.png',
    desc: 'Github Profile Finder Web app',
    title: 'Github Profile',
    link: 'https://github-profile-neon.vercel.app/',
    visit: 'Visit',
    github: 'Github',
    githubLink: 'https://github.com/VictorKingsHub/github-profile-finder'
  },
  {
    id: 3,
    number: '03',
    image: '/qrcode.png',
    desc: 'QR Code Scanner',
    title: 'QR Code',
    link: 'https://qr-code-flame-zeta.vercel.app/',
    visit: 'Visit',
    github: 'Github',
    githubLink: 'https://github.com/VictorKingsHub/qr-code'
  },
  {
    id: 4,
    number: '04',
    image: '/random.png',
    desc: 'Random Number Generator',
    title: 'Number Generator',
    link: 'https://random-color-gen-six.vercel.app/',
    visit: 'Visit',
    github: 'Github',
    githubLink: 'https://github.com/VictorKingsHub/random-color'
  }
]

export default function PhotoSpeaksSection () {
  const [selected, setSelected] = useState(1)

  const handleSelection = (getCurrentId: any) => {
    setSelected(getCurrentId)
  }

  return (
    <div className={styles.container}>
      <div className='mb-3'>
        <div className={styles.topTitle}>
          <h1 className='w-full text-center'>
            Some <span className={styles.speaks}>Projects</span>
          </h1>
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.year}>
          {data.map(dedicate => {
            return (
              <div key={dedicate.id}>
                <div
                  className={` ${
                    selected === dedicate.id ? styles.active : styles.question
                  }`}
                  onClick={() => handleSelection(dedicate.id)}
                >
                  <div> {dedicate.number} </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className={styles.answer}>
          {data.map(ans => {
            return (
              <div className={styles.allAnswer} key={ans.id}>
                {selected === ans.id && (
                  <div className={styles.com}>
                    <div className={styles.answeImgr}>
                      <Image
                        className={styles.img}
                        src={ans.image}
                        alt={ans.title}
                        width={400}
                        height={200}
                      />
                    </div>
                    <div className={styles.answerText}>
                      <h1 className={styles.title}> {ans.title} </h1>
                      <p className={styles.desc}>{ans.desc}</p>
                      <div className={styles.a}>
                        <a
                          href={ans.link}
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {' '}
                          {ans.visit}{' '}
                        </a>
                        <a href={ans.githubLink} className='text-yellow-300'> {ans.github} </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
