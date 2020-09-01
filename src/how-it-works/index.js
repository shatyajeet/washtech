import React from 'react'

import { HowItWorksContainer, HowItWorksContent, StepsContainer } from './style'
import { ContentHeading, SizedBox } from '../components/style'
import collectIcon from '../images/collect.svg'
import cleanIcon from '../images/clean.svg'
import deliverIcon from '../images/deliver.svg'
import Step from './step'

export default function HowItWorks () {
  return <HowItWorksContainer>
    <HowItWorksContent>
      <ContentHeading color='#FFF'>How It Works</ContentHeading>
      <SizedBox height={16} />
      <StepsContainer>
        <Step icon={collectIcon} index={1} label='We Collect' />
        <Step icon={cleanIcon} index={2} label='We Clean' />
        <Step icon={deliverIcon} index={3} label='We Deliver' />
      </StepsContainer>
    </HowItWorksContent>
  </HowItWorksContainer>
}
