import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../style'

export const SectionContainer = styled.div`
  background-color: ${_ => _.backgroundColor || '#FFF'};
  padding: 80px ${CONTENT_PADDING}px;
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
  flex-direction: ${_ => _.reverse ? 'row-reverse' : 'row'};
`

export const ItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`

export const SelectedContent = styled.div`
  flex: 1;
`

export const SelectedContentImageContainer = styled.div`
  text-align: center;
`

export const Item = styled.div`
  align-items: flex-start;
  background-color: ${_ => _.selected ? '#FFF' : 'transparent'};
  border-bottom: ${_ => _.borderBottom ? '1px solid #E7EDF3' : 0};
  box-shadow: ${_ => _.selected ? '0 10px 20px 0 rgba(55, 70, 95, 0.12)' : 'none'};
  cursor: ${_ => _.selected ? 'default' : 'pointer'};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 48px 40px;
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
  color: ${_ => _.selected ? '#383E44' : '#535C65'};
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.5;
`

export const SelectedItemHeading = styled.h3`
  color: #25292D;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5;
  margin: 0;
`

export const SelectedItemDescription = styled.p`
  color: #25292D;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5;
  height: 6.75rem;
  margin: 0;
`
