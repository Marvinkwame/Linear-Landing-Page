"use client"
import classNames from 'classnames';
import Image from 'next/image';
import React from 'react'
import Container from './container';
import { useInView } from "react-intersection-observer";

type Props = {
    children: React.ReactNode;
    color: string;
    colorDark: string;
}

const Features = ({ children, color, colorDark }: Props) => {
    const { inView, ref } = useInView({ threshold: 0.2, triggerOnce: false })
    return (
        <section
            ref={ref}
            className={classNames('relative overflow-x-clip flex flex-col items-center py-[8.8rem] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_100%_40%_at_50%_60%,rgba(var(--feature-color),0.1),transparent)] before:absolute before:w-full before:h-[40rem] before:bg-no-repeat before:[mask:radial-gradient(100%_50%_at_center_center,_black,_transparent)] before:[background-position:1%_0%,99%_0%] before:[background-size:50%_100%,50%_100%] before:bg-[conic-gradient(from_90deg_at_80%_50%,#000212,rgb(var(--feature-color-dark))),conic-gradient(from_270deg_at_20%_50%,rgb(var(--feature-color-dark)),#000212)] before:transition-[transform,opacity] before:duration-1000 before:ease-in',
                inView && "is-visible before:opacity-100 before:[transform:rotate(180deg)_scale(2)]",
                !inView && "before:opacity-40 before:rotate-180 "
            )}
            style={
                {
                    "--feature-color": color,
                    "--feature-color-dark": colorDark,
                } as React.CSSProperties
            }>
            <div className="my-[25.2rem] w-full">
                {children}
            </div>
        </section>
    )
}

export default Features


type MainFeatureProps = {
    image: string;
    text: string;
    title: React.ReactNode;
    imageSize?: "small" | "large";
}

const MainFeature = ({ image, text, title, imageSize = "small" }: MainFeatureProps) => {
    return (
        <>
            <div className='relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]'>
                <Container className={classNames(
                    "max-w-[90%] text-center",
                    imageSize === "small" ? "w-[78rem]" : "w-[102.4rem]"
                )}>
                    <h2 className="text-6xl text-center mb-11 text-gradient md:text-8xl">
                        {title}
                    </h2>
                    <div
                        className='after:bg-[rgba(255,_255,_255,_0.15)] after:absolute after:inset-0 after:rounded-[inherit] relative rounded-[14px] before:rounded-[inherit] before:p-[1px] before:absolute before:inset-0 before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:[mask:linear-gradient(black,transparent)]'>
                        <img
                            src={image}
                            alt="Feature Image"
                            className='h-auto w-full' />
                    </div>
                </Container>
            </div>

            <Container className='w-[78rem] max-w-[90%] text-center'>
                <h2 className='text-2xl md:text-4xl text-white my-16 md:w-[80%] mx-auto leading-tight'>{text}</h2>
                <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
            </Container>
        </>
    )
}

type FeatureGridProps = {
    features: {
        icon: React.FC;
        title: string;
        text: string;
    }[];
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
    return (
        <Container>
            <div className='text-primary-text w-full text-sm md:text-md grid gap-y-9 mb-16 md:mb-[14rem] grid-cols-2 md:grid-cols-3 place-items-center'>
                {features.map(({ title, icon: Icon, text }) => (
                    <div key={title} className='max-w-[25.6rem] [&_svg]:mb-[4px] md:[&_svg]:inline [&_svg]:fill-white md:[&_svg]:mb-[2px] md:[&_svg]:mr-[6px] '>
                        <Icon />
                        <span className='text-white block md:inline'>{title}</span>  {text}
                    </div>
                ))}
            </div>
        </Container>
    )
}

type FeatureCardProps = {
    features: {
        image: string;
        title: string;
        text: string;
        imageClassName: string;
    }[];
}

const FeatureCards = ({ features }: FeatureCardProps) => {
    return (
        <Container>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                {features.map(({ image, text, title, imageClassName }) => (
                    <div key={title} className='relative before:absolute before:inset-0 aspect-[1.1/1] overflow-hidden before:bg-glass-gradient rounded-[2.4rem] md:rounded-[4.8rem] py-6 px-8 md:p-14 border border-bar bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)]'>
                        <h3 className='mb-2 text-2xl text-white'>{title}</h3>
                        <p className="max-w-[31rem] mb-16 md:mb-0 text-sm md:text-md text-primary-text">{text}</p>
                        <img
                            src={image}
                            alt={title}
                            className={classNames("absolute max-w-none", imageClassName)} />
                    </div>
                ))}
            </div>
        </Container>
    )
}

Features.Main = MainFeature;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;