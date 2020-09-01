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
  width: 40%;
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
  width: 220px;
`
