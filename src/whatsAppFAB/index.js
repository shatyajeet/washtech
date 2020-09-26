import React from 'react'

import { WhatsAppFABContainer } from './style'
import whatsAppLogo from '../images/whats-app/whats-app@3x.png'

export default function WhatsAppFAB () {
  return <WhatsAppFABContainer>
    <a href='https://api.whatsapp.com/send?phone=971585928782' target='_blank' rel='noopener noreferrer'>
      <img src={whatsAppLogo} alt='WhatsApp' width={36} />
    </a>
  </WhatsAppFABContainer>
}
