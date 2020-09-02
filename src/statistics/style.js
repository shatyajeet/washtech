import styled from 'styled-components'

import { MAX_CONTENT_WIDTH } from '../components/style'

export const StatisticsContainer = styled.div`
  background-color: #34B4A9;
  padding: 40px 0;
`

export const StatisticsContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
`

export const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 45%;
`

export const NumbersItem = styled.div`
  display: flex;
`
export const Value = styled.div`
  color: #FFF;
  font-size: 3rem;
  font-weight: 500;
  line-height: 1.5;
`
export const Label = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const LabelText = styled.div`
  color: #FFF;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
`

export const CredentialsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 260px;
`

export const TooltipContainer = styled.div`
  position: relative;
  &:hover {
    .tooltip {
      opacity: 1;
    }
  }
`

export const Tooltip = styled.span`
  background-color: #29252D;
  border-radius: 5px;
  color: #fff;
  font-size: 0.75rem;
  left: 0;
  line-height: 1.5;
  opacity: 0;
  padding: 2.5px 5px;
  position: absolute;
  text-align: center;
  top: calc(100% + 5px);
  width: 100%;
  transition: opacity 0.15s ease-in-out;
`
