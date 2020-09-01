import React from 'react'

import { StepContainer, StepPathImageContainer, StepImage, StepLabel, StepBackgroundImage } from './style'
import { SizedBox } from '../components/style'
import pathImage from '../images/path.svg'

export default function Step ({ icon, label }) {
  return <StepContainer>
    <StepPathImageContainer>
      <StepBackgroundImage src={pathImage} />
      <StepImage src={icon} />
    </StepPathImageContainer>
    <SizedBox height={16} />
    <SizedBox height={8} />
    <StepLabel>{label}</StepLabel>
  </StepContainer>
}
