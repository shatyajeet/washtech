import React from 'react'

import { ButtonContainer } from './style'

export default function Button ({ label, height, styles }) {
  return <ButtonContainer height={height} style={styles}>
    {label}
  </ButtonContainer>
}
