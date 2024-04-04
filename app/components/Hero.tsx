import React from 'react'
import classNames from "classnames";

interface HeroProps {
    children: React.ReactNode;
}

interface HeroElementProps {
    children: React.ReactNode;
    className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
    return <h1 className={classNames('text-6xl md:text-8xl my-6', className)}>
        {children}
    </h1>
}

export const HeroSubTitle = ({ children, className }: HeroElementProps) => {
    return <p className={classNames('text-lg md:text-xl mb-12 text-primary-text', className)}>
        {children}
    </p>
}

const Hero = ({ children }: HeroProps) => {
    return (
        <div className='text-center'>
            {children}
        </div>
    )
}

export default Hero