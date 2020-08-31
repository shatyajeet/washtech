import styled from 'styled-components'

import { MAX_CONTENT_WIDTH } from '../style'

export const SectionContainer = styled.div`
  background-color: ${_ => _.backgroundColor || '#FFF'};
  padding: 80px 0;
`

export const SectionContent = styled.div`
  margin: auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
`

export const HeadContent = styled.div`
  width: 75%;
`

export const MainContent = styled.div`
  display: flex;
`

export const ItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

export const SelectedContent = styled.div`
  flex: 1;
`

export const Item = styled.div`
  background-color: ${_ => _.selected ? '#FFF' : 'transparent'};
  border-bottom: ${_ => _.borderBottom ? '1px solid #E7EDF3' : 0};
  box-shadow: ${_ => _.selected ? '0 10px 20px 0 rgba(55, 70, 95, 0.12)' : 'none'};
  cursor: ${_ => _.selected ? 'default' : 'pointer'};
  padding: 72px 40px;
  width: 50%;
  transition: box-shadow 0.35s ease-in-out;

  &:hover {
    ${_ => _.selected ? 'none' : 'box-shadow: 0 5px 10px 0 rgba(55, 70, 95, 0.12)'};
  }

  &:nth-child(odd) {
    border-right: 1px solid #E7EDF3;
  }
`

export const ItemIcon = styled.img``

export const ItemLabel = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
`
