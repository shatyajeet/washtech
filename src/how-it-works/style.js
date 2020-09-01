import styled from 'styled-components'

import { MAX_CONTENT_WIDTH } from '../components/style'

export const HowItWorksContainer = styled.div`
  background-color: #34B4A9;
  padding: 80px 0;
`
export const HowItWorksContent = styled.div`
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  text-align: center;
  width: 100%;
`

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 50%;
`

export const StepContainer = styled.div``

export const StepPathImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 166px;
  justify-content: center;
  position: relative;
  width: 180px;
`

export const StepBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const StepImage = styled.img``

export const StepLabel = styled.div`
  color: #FFF;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
  text-align: left;
`
