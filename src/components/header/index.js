import React, { useState } from 'react'

import { HeaderBar, HeaderContent, NavBar, NavBarItem, LeftNav, RightNav, PhoneNumberContainer, PhoneNumberText, LogoNav, MobileRightNav, MenuOverlay, MenuContainer, MenuIcon, MenuLine } from './style'
import Chip from '../chip'
import { SizedBox } from '../style'
import Button from '../button'
import logo from '../../logo.svg'
import whatsAppLogo from '../../images/whats-app/whats-app@2x.jpg'
import phoneIcon from '../../images/phone-24.svg'
import callIcon from '../../images/call.svg'

export default function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  
  function navToSection (sectionId) {
    setMenuOpen(false);
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
        <img src={callIcon} alt='Call' width={32} />
        <SizedBox width={8} />
        <MenuIcon open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <MenuLine line1 />
          <MenuLine line2 />
          <MenuLine line3 />
        </MenuIcon>
        <div className='mob'>
          <MenuContainer open={menuOpen}>
            <NavBarItem onClick={() => navToSection('benefits')}>Benefits</NavBarItem>
            <NavBarItem onClick={() => navToSection('services')}>Services</NavBarItem>
            <NavBarItem onClick={() => navToSection('our-story-mobile')}>Our Story</NavBarItem>
            <SizedBox height={1} />
            <Button label='Sign In' />
          </MenuContainer>
        </div>
      </MobileRightNav>
    </HeaderContent>
  </HeaderBar>
}
