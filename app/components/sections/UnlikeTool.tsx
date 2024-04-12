import React from 'react'
import Container from '../container'
import { ZapIllustration } from '../illustrations/Zap'
import { LogoLightIllustration } from '../illustrations/LogoLight'
import Button from '../Button'

const UnlikeTool = () => {
    return (
        <div className='text-white'>
            <Container>
                <div className="text-center">
                    <h2 className='mb-4 text-4xl md:text-7xl md:mb-7'>
                        Unlike any tool
                        <br className="hidden md:block" /> you have used before
                    </h2>
                    <p className='mb-12 mx-auto max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl'>
                        Designed to the last pixel and engineered with unforgiving precision,
                        Linear combines UI elegance with world-class performance.
                    </p>
                </div>
            </Container>

            <div className='flex md:flex-wrap gap-6 overflow-x-auto snap-x snap-mandatory'>
                <div className='bg-glass-gradient snap-center shrink-0 relative min-h-[48rem] w-full items-center flex flex-col justify-end text-center p-8 md:p-14 border border-transparent rounded-[4.8rem] md:basis-[calc(66.66%-12px)]'>
                    <p className='text-3xl'>Built for your keyboard</p>
                    <p className='text-md text-primary-text'>
                        Fly through your tasks with rapid-fire keyboard shortcuts for everything.
                        Literally everything.
                    </p>
                </div>

                <div className='bg-glass-gradient snap-center shrink-0 flex flex-col items-center justify-end min-h-[48rem] w-full relative text-center p-8 md:p-14 border border-transparent rounded-[4.8rem] md:basis-[calc(33.33%-12px)]'>
                    <div className="mask-linear-faded absolute top-[-9.2rem]">
                        <ZapIllustration />
                    </div>
                    <p className='text-3xl'>
                        Breathtakingly fast
                    </p>
                    <p className='text-md text-primary-text'>
                        Built for speed with 50ms interactions and real-time sync.
                    </p>
                </div>

                <div className='group bg-glass-gradient snap-center shrink-0 relative min-h-[48rem] flex flex-col items-center w-full justify-end text-center p-8 md:p-14 border border-transparent rounded-[4.8rem] md:basis-[calc(33.33%-12px)]'>
                    <div className='absolute w-[130%] top-[-9.2rem] pointer-events-none'>
                        <LogoLightIllustration />
                    </div>
                    <Button
                        className='absolute bottom-[60rem] opacity-0 translate-y-[30%] scale-[0.8] group-hover:opacity-100 group-hover:transform-none'
                        variant="secondary"
                        href='/'>
                        Product principles
                    </Button>
                    <p className='text-3xl mb-4'>
                        Designed for modern software teams
                    </p>
                    <p className='text-md text-primary-text'>
                        Comes with built-in workflows that create focus and routine.
                    </p>

                </div>

                <div className='bg-glass-gradient snap-center shrink-0 relative items-center min-h-[48rem] w-full flex flex-col justify-end text-center p-8 md:p-14 border border-transparent rounded-[4.8rem] md:basis-[calc(66.66%-12px)]'>
                    <p className='text-3xl'>
                        Meet your command line
                    </p>
                    <p className='text-md text-primary-text'>
                        Complete any action in seconds with the global command menu.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UnlikeTool