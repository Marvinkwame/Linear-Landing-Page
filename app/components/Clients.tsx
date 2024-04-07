import React from 'react'
import { RampLogo } from './logos/ramp'
import { LoomLogo } from './logos/loom'
import { VercelLogo } from './logos/vercel'
import { DescriptLogo } from './logos/descript'
import { CashAppLogo } from './logos/cashapp'
import { RaycastLogo } from './logos/raycast'
import { MercuryLogo } from './logos/mercury'
import { RetoolLogo } from './logos/retool'
import { AlanLogo } from './logos/alan'
import { ArcLogo } from './logos/arc'
import { OpenSeaLogo } from './logos/opensea'
import { PitchLogo } from './logos/pitch'

const Clients = () => {
  return (
    <div>
      <p className='text-center mb-12 text-lg text-white md:text-xl'>
        <span className="text-primary-text">
          Powering the world’s best product teams.
        </span>
        <br className='hidden md:block' />
        From next-gen startups to established
        enterprises.
      </p>

      <div className="flex flex-wrap justify-around gap-x-8 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
        <RampLogo />
        <LoomLogo className="hidden md:block" />
        <VercelLogo />
        <DescriptLogo className="hidden md:block" />
        <CashAppLogo />
        <RaycastLogo />
        <MercuryLogo />
        <RetoolLogo />
        <AlanLogo className="hidden md:block" />
        <ArcLogo className="hidden md:block" />
        <OpenSeaLogo className="hidden md:block" />
        <PitchLogo className="hidden md:block" />
      </div>
    </div>
  )
}

export default Clients