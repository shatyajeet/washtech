import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../components/style'

export const FooterContainer = styled.div`
  background-color: #FAFCFF;
  padding: 80px ${CONTENT_PADDING}px;
  @media screen and (max-width: 960px) {
    padding: 48px 16px;
  }
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
  @media screen and (max-width: 960px) {
    display: block;
  }
`

export const QuickLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  @media screen and (max-width: 960px) {
    display: block;
    width: 100%;
  }
`

export const QuickLinksColumn = styled.div`
  @media screen and (max-width: 960px) {
    margin-top: 24px;
  }
`

export const LinkHeader = styled.div`
  color: #25292D;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
`

export const QuickLink = styled.div`
  align-items: center;
  color: #25292D;
  cursor: ${_ => _.point ? 'pointer' : 'default'};
  display: flex;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
`
