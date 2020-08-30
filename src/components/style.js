import styled from 'styled-components'

export const SizedBox = styled.div`
  height: ${_ => _.height ? `${_.height}px` : '100%'};
  width: ${_ => _.width ? `${_.width}px` : '100%'};
`

export const MAX_CONTENT_WIDTH = 1366
