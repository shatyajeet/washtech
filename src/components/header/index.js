import React from 'react'

import { HeaderBar, HeaderContent, NavBar, NavBarItem, LeftNav, RightNav, PhoneNumberContainer, PhoneNumberText, LogoNav, MobileRightNav } from './style'
import Chip from '../chip'
import { SizedBox } from '../style'
import Button from '../button'
import logo from '../../logo.svg'
import whatsAppLogo from '../../images/whats-app/whats-app@2x.jpg'
import phoneIcon from '../../images/phone-24.svg'
import callIcon from '../../images/call.svg'
import menuIcon from '../../images/menu.svg'

export default function Header () {
  function navToSection (sectionId) {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <HeaderBar>
    <HeaderContent>
      <LeftNav>
        <LogoNav>
          <img src={logo} alt='Washtech' />
          <SizedBox width={8} />
          <Chip />
        </LogoNav>
        <NavBar>
          <NavBarItem onClick={() => navToSection('benefits')}>Benefits</NavBarItem>
          <NavBarItem onClick={() => navToSection('services')}>Services</NavBarItem>
          <NavBarItem onClick={() => navToSection('our-story')}>Our Story</NavBarItem>
        </NavBar>
      </LeftNav>
      <RightNav>
        <img src={whatsAppLogo} alt='WhatsApp' width={36} />
        <PhoneNumberContainer>
          <img src={phoneIcon} alt='phone' width={24} />
          <SizedBox width={8} />
          <PhoneNumberText>+971-555-5564-37</PhoneNumberText>
        </PhoneNumberContainer>
        <Button label='Sign In' />
      </RightNav>
      <MobileRightNav>
        <SizedBox width={24} />
        <img src={callIcon} alt='Call' width={24} />
        <SizedBox width={8} />
        <img src={menuIcon} alt='Call' width={24} />
      </MobileRightNav>
    </HeaderContent>
  </HeaderBar>
}
