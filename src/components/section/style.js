import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../style'

export const SectionContainer = styled.div`
  background-color: ${_ => _.backgroundColor || '#FFF'};
  padding: 80px ${CONTENT_PADDING}px;
  @media screen and (max-width: 960px) {
    padding: 48px 16px;
  }
`

export const SectionContent = styled.div`
  margin: auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
`

export const HeadContent = styled.div`
  width: 75%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const MainContent = styled.div`
  display: flex;
  flex-direction: ${_ => _.reverse ? 'row-reverse' : 'row'};
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`

export const ItemContent = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  @media screen and (max-width: 960px) {
    flex-wrap: nowrap;
    margin-bottom: 24px;
  }
`

export const SelectedContent = styled.div`
  flex: 1;
`

export const SelectedContentImageContainer = styled.div`
  text-align: center;
  @media screen and (max-width: 960px) {
    img {
      width: calc(100% - 40px);
    }
  }
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
  @media screen and (max-width: 960px) {
    align-items: center;
    border: 1px solid #E7EDF3;
    border-left: 0;
    border-radius: ${_ => _.selected ? 4 : 0}px;
    box-shadow: ${_ => _.selected ? '0 0 8px 0 rgba(55, 70, 95, 0.12)' : 'none'};
    flex: 1;
    padding: 12px 0;
  }
`

export const ItemIcon = styled.img`
  @media screen and (max-width: 960px) {
    height: 24px;
    width: 24px;
  }
`

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
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`

export const SelectedItemDescription = styled.p`
  color: #25292D;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5;
  height: 6.75rem;
  margin: 0;
  @media screen and (max-width: 960px) {
    font-size: 0.875rem;
  }
`
