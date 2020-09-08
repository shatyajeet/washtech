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
