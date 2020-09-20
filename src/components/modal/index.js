import React from 'react'
import Button from '../button'

import { ModalBody, ModalContainer, ModalFooter, ModalOverlay } from './style'

export default function Modal ({ text, open, onOKClick }) {
  return open ? <>
    <ModalOverlay />
    <ModalContainer open={open}>
      <ModalBody>{text}</ModalBody>
      <ModalFooter>
        <Button onClick={onOKClick} label='OK' height={48} styles={{ backgroundColor: '#FFF', color: '#34B4A9', letterSpacing: 2, fontSize: '0.875rem', fontWeight: 600, padding: '0 14px' }} />
      </ModalFooter>
    </ModalContainer>
  </> : null
}
