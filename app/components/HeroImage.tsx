"use client"
import classNames from 'classnames';
import React from 'react'
import { useInView } from "react-intersection-observer"

const HeroImage = () => {
    const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });


    return (
        <div ref={ref} className="[perspective:2000px] mt-[12.8rem]">
            <div className={classNames('relative bg-hero-gradient border border-transparent bg-white bg-opacity-[0.01] rounded-lg ', inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
                "before:w-full before:h-full before:top-0 before:left-0 before:absolute before:bg-hero-glow before:[filter:blur(120px)] before:opacity-0", inView && "before:animate-image-glow")}>
                <img
                    src="/img/hero.webp"
                    alt="Hero Image"
                    className={classNames("relative z-10 transition-opacity delay-[680ms]", inView ? "opacity-100" : "opacity-0")}
                />
            </div>
        </div>
    )
}

export default HeroImage