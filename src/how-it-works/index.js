import React from 'react'

import { HowItWorksContainer, HowItWorksContent, StepsContainer, OurStoryContainer, OurStoryImage, OurStoryContent, StepLabel, OurStoryImageContainer } from './style'
import { ContentHeading, SizedBox, ContentLine, ContentDescription } from '../components/style'
import Step from './step'
import collectIcon from '../images/collect.svg'
import cleanIcon from '../images/clean.svg'
import deliverIcon from '../images/deliver.svg'
import arrowIcon from '../images/arrow.svg'
import arrowDownIcon from '../images/arrow-down.svg'

const ourStoryImage = 'https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_631/v1599018552/WashTech/our-story-image_3x.png'

export default function HowItWorks () {
  return <HowItWorksContainer>
    <HowItWorksContent>
      <ContentHeading color='#FFF' textAlign='center'>How It Works</ContentHeading>
      <SizedBox height={16} />
      <StepsContainer>
        <Step icon={collectIcon} index={1} />
        <div className='mob'>
          <SizedBox height={8} />
          <StepLabel>We Collect</StepLabel>
          <SizedBox height={16} />
          <img src={arrowDownIcon} alt='next' />
          <SizedBox height={16} />
        </div>
        <div className='desktop'>
          <img src={arrowIcon} alt='next' />
        </div>
        <Step icon={cleanIcon} index={2} />
        <div className='mob'>
          <SizedBox height={8} />
          <StepLabel>We Clean</StepLabel>
          <SizedBox height={16} />
          <img src={arrowDownIcon} alt='next' />
          <SizedBox height={16} />
        </div>
        <div className='desktop'>
          <img src={arrowIcon} alt='next' />
        </div>
        <Step icon={deliverIcon} index={3} />
        <div className='mob'>
          <SizedBox height={8} />
          <StepLabel>We Deliver</StepLabel>
        </div>
      </StepsContainer>
      <div className='mob' id='our-story-mobile' />
      <SizedBox height={24} />
      <div className='desktop'>
        <StepsContainer id='our-story'>
          <StepLabel>We Collect</StepLabel>
          <StepLabel>We Clean</StepLabel>
          <StepLabel>We Deliver</StepLabel>
        </StepsContainer>
      </div>
      <OurStoryContainer>
        <OurStoryImageContainer>
          <OurStoryImage src={ourStoryImage} alt='our story' />
        </OurStoryImageContainer>
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
