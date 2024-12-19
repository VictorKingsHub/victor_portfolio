"use client"
import React, { useState } from 'react'
import styles from "./AccordionMenu.module.css"
import Link from 'next/link'
import Image from 'next/image'
import data from './data'

function AccordionMenu() {
    const [selected, setSelected] = useState(1)
    const handleSelection = (getCurrentId: any) => {
        setSelected(getCurrentId)
    }

    return (
        <div className={styles.container}>
            <div className={styles.edu}>
                {/* <h1>Our Educational Services</h1> */}
            </div>
            <div className={styles.both}>
                <div className={styles.wrapper}>
                    {data.map((list: any) => {
                        return (
                            <div key={list.id}>
                                <div className={` ${selected === list.id ? styles.active : styles.question} `}
                                    onClick={() => handleSelection(list.id)}>
                                    <div > {list.question} </div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
                <div className={styles.answer}>

                    {data.map((list: any) => {
                        return (
                            <div className={styles.allAnswer} key={list.id}>
                                {selected === list.id && (
                                    <div className={styles.com}>
                                        <div className={styles.answerImg}>
                                            <Image className={styles.img} src={list.img} alt={list.title} width={200} height={200} />
                                        </div>
                                        <div className={styles.answerText}>
                                            <h1 className={styles.title}> {list.title}  </h1>
                                            <p className={styles.desc}>{list.answer}</p>

                                            <div className={styles.but}>
                                                <Link href={list.link} className={styles.button}>
                                                    <button> {list.button} </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default AccordionMenu
