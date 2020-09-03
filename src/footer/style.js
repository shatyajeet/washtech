import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../components/style'

export const FooterContainer = styled.div`
  background-color: #FAFCFF;
  padding: 80px ${CONTENT_PADDING}px;
`
export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
`

export const QuickLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
`

export const QuickLinksColumn = styled.div``

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
