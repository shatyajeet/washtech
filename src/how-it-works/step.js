import React from 'react'

import { StepContainer, StepPathImageContainer, StepImage, StepBackgroundImage } from './style'
import pathImage from '../images/path.svg'

export default function Step ({ icon, label }) {
  return <StepContainer>
    <StepPathImageContainer>
      <StepBackgroundImage src={pathImage} />
      <StepImage src={icon} />
    </StepPathImageContainer>
  </StepContainer>
}
