import styled from 'styled-components'

import { CONTENT_PADDING, MAX_CONTENT_WIDTH } from '../components/style'

export const ContactlessLaundryContainer = styled.div`
  padding: 80px ${CONTENT_PADDING}px;
  @media screen and (max-width: 960px) {
    padding: 48px 16px;
  }
`
export const ContactlessLaundryContent = styled.div`
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  text-align: center;
  width: 100%;
  h2, h3 {
    text-align: center;
  }
  @media screen and (max-width: 960px) {
    h2, h3 {
      text-align: left;
    }
  }
`

export const VideoContainer = styled.div`
  height: 480px;
  position: relative;
  video {
    border: 1px solid rgba(55, 70, 95, 0.12);
    height: 100%;
  }
  img {
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 40px);
    cursor: pointer;
  }
  @media screen and (max-width: 960px) {
    height: unset;
    width: 100%;
    video {
      height: unset;
      width: 100%;
    }
  }
`
