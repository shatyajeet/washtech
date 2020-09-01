import React from 'react'

import { HowItWorksContainer, HowItWorksContent, StepsContainer, OurStoryContainer, OurStoryImage, OurStoryContent, StepLabel } from './style'
import { ContentHeading, SizedBox, ContentLine, ContentDescription } from '../components/style'
import Step from './step'
import collectIcon from '../images/collect.svg'
import cleanIcon from '../images/clean.svg'
import deliverIcon from '../images/deliver.svg'
import arrowIcon from '../images/arrow.svg'
import ourStoryImage from '../images/our-story/our-story-image.jpg'

export default function HowItWorks () {
  return <HowItWorksContainer>
    <HowItWorksContent>
      <ContentHeading color='#FFF' textAlign='center'>How It Works</ContentHeading>
      <SizedBox height={16} />
      <StepsContainer>
        <Step icon={collectIcon} index={1} />
        <img src={arrowIcon} alt='next' />
        <Step icon={cleanIcon} index={2} />
        <img src={arrowIcon} alt='next' />
        <Step icon={deliverIcon} index={3} />
      </StepsContainer>
      <SizedBox height={24} />
      <StepsContainer>
        <StepLabel>We Collect</StepLabel>
        <StepLabel>We Clean</StepLabel>
        <StepLabel>We Deliver</StepLabel>
      </StepsContainer>
      <OurStoryContainer>
        <OurStoryImage src={ourStoryImage} alt='our story' />
        <OurStoryContent>
          <ContentLine>Who We Are</ContentLine>
          <SizedBox height={8} />
          <ContentHeading textAlign='left'>Our Story</ContentHeading>
          <SizedBox height={8} />
          <ContentDescription>
            We are a bunch of techies who are passionate to revolutionize ordinary laundry service.
            Our aim is to build a customer-centric business that not just provides the supreme quality
            of laundry service but also to provide digital experience which enables our customers to
            use the washtech platform and gather insights based on consumption patterns, invoices and many more.
          </ContentDescription>
        </OurStoryContent>
      </OurStoryContainer>
    </HowItWorksContent>
  </HowItWorksContainer>
}
