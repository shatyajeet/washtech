import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../components/style'

export const JumbotronContainer = styled.div`
  background: url('https://res.cloudinary.com/dhahnivds/image/upload/f_auto,q_auto,h_640/v1599491621/WashTech/banner-image-desktop_2x.png') no-repeat center;
  background-size: cover;
  display: flex;
  height: 720px;
  justify-content: center;
  padding: 200px ${CONTENT_PADDING}px 120px;
  position: relative;
  @media screen and (max-width: 960px) {
    background: url('https://res.cloudinary.com/dhahnivds/image/upload/c_scale,f_auto,q_auto,w_720/v1599491590/WashTech/banner-image_3x.png') no-repeat center;
    background-size: cover;
    height: auto;
    padding: 100px 16px 42px;
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
  background-color: rgba(56, 62, 68, 0.89);
  border-radius: 8px;
  bottom: ${_ => -_.height / 2}px;
  box-shadow: 0 0 8px 0 rgba(55, 70, 95, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
  width: 80%;
  @media screen and (max-width: 960px) {
    padding: 24px 16px;
    width: 100%;
  }
`

export const QuoteHeading = styled.div`
  color: #FFF;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  @media screen and (max-width: 960px) {
    font-size: 0.875rem;
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
  justify-content: center;
  & > input, .mobile-input {
    flex: 1;
  }
  @media screen and (max-width: 960px) {
    display: block;
  }
`
