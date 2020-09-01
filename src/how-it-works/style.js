import styled from 'styled-components'

import { MAX_CONTENT_WIDTH } from '../components/style'

export const HowItWorksContainer = styled.div`
  background-color: #34B4A9;
  padding: 80px 0 280px;
`
export const HowItWorksContent = styled.div`
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  position: relative;
  text-align: center;
  width: 100%;
`

export const StepsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
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
  text-align: center;
  width: 180px;
`

export const OurStoryContainer = styled.div`
  background-color: #FFF;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgba(55, 70, 95, 0.12);
  display: flex;
  position: absolute;
  top: calc(100% + 60px);
`

export const OurStoryImage = styled.img`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`
export const OurStoryContent = styled.div`
  padding: 80px 64px;
`
