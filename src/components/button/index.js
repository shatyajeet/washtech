import React from 'react'

import { ButtonContainer } from './style'

export default function Button ({ label, height, styles, onClick }) {
  return <ButtonContainer height={height} style={styles} onClick={onClick}>
    {label}
  </ButtonContainer>
}
