import React from 'react'

import { HeaderBar, HeaderContent, NavBar, NavBarItem, LeftNav, RightNav, PhoneNumberContainer, PhoneNumberText } from './style'
import Chip from '../chip'
import { SizedBox } from '../style'
import logo from '../../logo.svg'
import whatsAppLogo from '../../images/whats-app/whats-app@2x.jpg'
import phoneIcon from '../../images/phone.svg'
import Button from '../button'

export default function Header () {
  return <HeaderBar>
    <HeaderContent>
      <LeftNav>
        <img src={logo} alt='Washtech' />
        <SizedBox width={10} />
        <Chip />
        <SizedBox width={108} />
        <NavBar>
          <NavBarItem>Benefits</NavBarItem>
          <SizedBox width={48} />
          <NavBarItem>Services</NavBarItem>
          <SizedBox width={48} />
          <NavBarItem>Our Story</NavBarItem>
        </NavBar>
      </LeftNav>
      <RightNav>
        <img src={whatsAppLogo} alt='WhatsApp' width={36} />
        <SizedBox width={24} />
        <PhoneNumberContainer>
          <img src={phoneIcon} alt='phone' width={24} />
          <SizedBox width={8} />
          <PhoneNumberText>+971-555-5564-37</PhoneNumberText>
        </PhoneNumberContainer>
        <SizedBox width={24} />
        <Button label='Sign In' />
      </RightNav>
    </HeaderContent>
  </HeaderBar>
}
