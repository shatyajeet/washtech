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
  max-width: 853px;
  margin: auto;
  video {
    height: 100%;
  }
  img {
    position: absolute;
    left: calc(50% - 40px);
    top: calc(50% - 40px);
    cursor: pointer;
    &.pause-icon {
      visibility: hidden;
    }
  }
  &:hover {
    img.pause-icon, .player-controls.active {
      visibility: visible;
    }
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

export const VideoPlayerControls = styled.div`
  position: absolute;
  bottom: 0;
  height: 50px;
  background-color: rgba(55, 70, 95, 0.12);
  visibility: hidden;
  width: 100%;
  .slider {
    height: 4px;
    background-color: #aaa;
  }
  .progress {
    line-height: 1.5;
    display: inline-block;
    position: absolute;
    left: 30px;
    bottom: 12px;
    color: #fff;
    font-weight: 500;
  }
`

export const ProgressBar = styled.div`
  background-color: yellow;
  height: 4px;
  width: ${_ => _.progress}%;
`
