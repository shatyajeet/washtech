import React from 'react'
import { FooterContainer, FooterContent, QuickLinksContainer, QuickLinksColumn } from './style'
import logo from '../logo.svg'

export default function Footer () {
  return <FooterContainer>
    <FooterContent>
      <img src={logo} alt='Washtec' />
      <QuickLinksContainer>
        <QuickLinksColumn></QuickLinksColumn>
      </QuickLinksContainer>
    </FooterContent>
  </FooterContainer>
}
