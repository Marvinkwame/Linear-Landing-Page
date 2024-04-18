import React from 'react'
import Hero, { HeroSubTitle, HeroTitle } from './Hero'
import { Button } from './Button'
import HeroImage from './HeroImage'

const HomepageHero = () => {
    return (
        <Hero>
            <Button className="animate-fade-in opacity-0 translate-y-[-1rem]" variant="secondary" href="/" size="small">
                Linear 2024 Release - Built for scale
            </Button>
            <HeroTitle className="animate-fade-in [--animatin-delay:200ms] opacity-0 translate-y-[-1rem]">
                Linear is a better way <br className="hidden md:block" /> to build products
            </HeroTitle>
            <HeroSubTitle className="animate-fade-in [--animatin-delay:400ms] opacity-0 translate-y-[-1rem]">
                Meet the new standard of modern software development. <br className="hidden md:block" /> Streamline issues, sprints and product roadmaps.
            </HeroSubTitle>
            <Button href="/" variant="primary" size="large" className="animate-fade-in opacity-0 translate-y-[-1rem]">
                Get started
            </Button>
            <HeroImage />
        </Hero>
    )
}

export default HomepageHero