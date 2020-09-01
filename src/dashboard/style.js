import styled from 'styled-components'

import { MAX_CONTENT_WIDTH } from '../components/style'

export const DashboardContainer = styled.div`
  background-color: #FAFCFF;
  padding: 80px 0;
`
export const DashboardContent = styled.div`
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
`

export const MainContent = styled.div`
  display: flex;
`

export const TextContent = styled.div`
  flex: 1;
`

export const ImageContent = styled.div`
  flex: 1;
`

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`
export const ListItem = styled.li`
  align-items: center;
  display: flex;
  font-size: 1.25rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 22px 0;
`
