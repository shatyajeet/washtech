import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../components/style'

export const JumbotronContainer = styled.div`
  display: flex;
  height: 640px;
  justify-content: center;
  padding: ${CONTENT_PADDING}px;
  position: relative;
  @media screen and (max-width: 960px) {
    height: auto;
    padding: 24px 16px 230px;
  }
`

export const JumbotronContent = styled.div`
  display: flex;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const LeftContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`

export const RightContent = styled.div`
  flex: 1;
  @media screen and (max-width: 960px) {
    img {
      width: 100%;
    }
  }
`

export const JumbotronImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 50%;
`

export const ContentLine = styled.div`
  color: #535C65;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.25;
  text-transform: uppercase;
`

export const ContentHeading = styled.h1`
  color: #383E44;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
`

export const ContentDescription = styled.h2`
  color: #25292D;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
`

export const QuoteContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  bottom: ${_ => -_.height / 2}px;
  box-shadow: 0 0 8px 0 rgba(55, 70, 95, 0.12);
  left: ${_ => _.width ? `calc(50% - ${_.width / 2}px)` : 0};
  padding: 24px;
  position: absolute;
  @media screen and (max-width: 960px) {
    bottom: unset;
    left: 16px;
    top: calc(100% - 182px);
    width: calc(100% - 32px);
  }
`

export const QuoteHeading = styled.div`
  color: #383E44;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`

export const QuoteDescription = styled.div`
  color: #25292D;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.5;
  @media screen and (max-width: 960px) {
    font-size: 0.875rem;
  }
`

export const QuoteForm = styled.div`
  display: flex;
  @media screen and (max-width: 960px) {
    display: block;
  }
`
