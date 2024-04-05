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
                <svg
                className={classNames(
                    "absolute left-0 top-0 w-full h-full",
                    '[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]',
                inView && "[&_path]:animate-sketch-lines" )}
                    width="100%"
                    viewBox='0 0 1499 778'
                    fill="none"
                >
                    <path pathLength="1" d="M1500 72L220 72"></path>
                    <path pathLength="1" d="M1500 128L220 128"></path>
                    <path pathLength="1" d="M1500 189L220 189"></path>
                    <path pathLength="1" d="M220 777L220 1"></path>
                    <path pathLength="1" d="M538 777L538 128"></path>
                </svg>
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