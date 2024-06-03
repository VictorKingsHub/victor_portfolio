"use client"
import React, { useEffect, useState } from 'react'
import styles from "./CountUp.module.css"
import CountUp from 'react-countup/build/CountUp';

interface CountUpProps {
    end: number; // The final count value
    start: number;
    duration: number; // Animation duration in seconds
    delay: number; // Delay before starting the animation (optional)
    isVisible?: boolean; // Optional prop to control visibility and trigger animation
    desc: string;
    desc2: string;
}

const CountUpItem = ({ end, start, duration, delay, isVisible, desc, desc2 }: CountUpProps) => {
    const [shouldAnimate, setShouldAnimate] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setShouldAnimate(true);
        } else {
            setShouldAnimate(false);
        }
    }, [isVisible]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.counter}>

                <CountUp
                    end={end}
                    start={start}
                    duration={duration}
                    delay={delay}
                    decimals={0}
                    separator=","
                />
            </div>
            <div className={styles.desc}>
                <p>{desc} <br /> {desc2}</p>
            </div>

        </div>
    )
}


const CountUpSection = () => {
  return (
    <div className={styles.container}>
      <CountUpItem end={4} start={0} duration={15} delay={1} desc={"Years of "} desc2={"Experience"} />

      <CountUpItem end={18} start={0} duration={20} delay={1} desc={"Number of" } desc2={"Projects"} />

      <CountUpItem end={8} start={0} duration={20} delay={1} desc={"Technologies"} desc2={"Masterpiece"} />

      <CountUpItem end={323} start={0} duration={20} delay={1} desc={"Code"} desc2={"Commits"}/>
        
    </div>
  )
}

export default CountUpSection
