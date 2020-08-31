import styled from 'styled-components'

export const SizedBox = styled.div`
  height: ${_ => _.height ? `${_.height}px` : '100%'};
  width: ${_ => _.width ? `${_.width}px` : '100%'};
`

export const AppContent = styled.div`
  margin-top: 80px;
`

export const MAX_CONTENT_WIDTH = 1366

export const ContentLine = styled.div`
  color: #535C65;
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.25;
  text-transform: uppercase;
`

export const ContentHeading = styled.h2`
  color: #383E44;
  font-size: 3rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
`

export const ContentDescription = styled.h3`
  color: #25292D;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
`