import React from 'react'

import { StepContainer, StepPathImageContainer, StepImage, StepLabel, StepBackgroundImage } from './style'
import { SizedBox, ContentLine } from '../components/style'
import pathImage from '../images/path.svg'

export default function Step ({ icon, index, label }) {
  return <StepContainer>
    <StepPathImageContainer>
      <StepBackgroundImage src={pathImage} />
      <StepImage src={icon} />
    </StepPathImageContainer>
    <SizedBox height={16} />
    <ContentLine color='#FFF'>Step {index}</ContentLine>
    <SizedBox height={8} />
    <StepLabel>{label}</StepLabel>
  </StepContainer>
}
