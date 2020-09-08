import React, { useState, useEffect } from 'react'

import { HeaderBar, HeaderContent, NavBar, NavBarItem, LeftNav, RightNav, PhoneNumberContainer, PhoneNumberText, LogoNav, MobileRightNav, MenuContainer, MenuIcon, MenuLine } from './style'
import Chip from '../chip'
import { SizedBox } from '../style'
import Button from '../button'
import logo from '../../logo.svg'
import logoWhite from '../../images/logo-white.svg'
import whatsAppLogo from '../../images/whats-app/whats-app@3x.png'
import phoneIcon from '../../images/phone-24.svg'
import phoneWhiteIcon from '../../images/phone-white-24.svg'
import callIcon from '../../images/call.svg'

export default function Header () {
  const [menuOpen, setMenuOpen] = useState(false)
  const [whiteHeader, setWhiteHeader] = useState(false)
  
  function navToSection (sectionId) {
    setMenuOpen(false);
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  window.onscroll = function () {
    const headerChangeThreshold = document.documentElement.clientWidth < 960 ? 560 : 640
    setWhiteHeader(window.scrollY >= headerChangeThreshold)
  }

  return <HeaderBar className={whiteHeader && 'scrolled'}>
    <HeaderContent>
      <LeftNav>
        <LogoNav>
          <img className='logo-light' src={logoWhite} alt='Washtech' />
          <img className='logo-black' src={logo} alt='Washtech' />
          <SizedBox width={8} />
          <Chip />
        </LogoNav>
        <NavBar>
          <NavBarItem className='nav-bar-item' onClick={() => navToSection('benefits')}>Benefits</NavBarItem>
          <NavBarItem className='nav-bar-item' onClick={() => navToSection('services')}>Services</NavBarItem>
          <NavBarItem className='nav-bar-item' onClick={() => navToSection('our-story')}>Our Story</NavBarItem>
        </NavBar>
      </LeftNav>
      <RightNav>
        <img src={whatsAppLogo} alt='WhatsApp' width={36} />
        <PhoneNumberContainer className='phone-number-container'>
          <img className='phone-light' src={phoneWhiteIcon} alt='phone' width={24} />
          <img className='phone-dark' src={phoneIcon} alt='phone' width={24} />
          <SizedBox width={8} />
          <PhoneNumberText className='phone-number-text'>+971-555-5564-37</PhoneNumberText>
        </PhoneNumberContainer>
        <Button label='Sign In' />
      </RightNav>
      <MobileRightNav>
        <SizedBox width={24} />
        <img src={callIcon} alt='Call' width={32} />
        <SizedBox width={8} />
        <MenuIcon className='menu-icon' open={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <MenuLine line1 />
          <MenuLine line2 />
          <MenuLine line3 />
        </MenuIcon>
        <div className='mob'>
          <MenuContainer open={menuOpen}>
            <NavBarItem onClick={() => navToSection('benefits')}>Benefits</NavBarItem>
            <NavBarItem onClick={() => navToSection('services')}>Services</NavBarItem>
            <NavBarItem onClick={() => navToSection('our-story-mobile')}>Our Story</NavBarItem>
            <Button label='Sign In' />
          </MenuContainer>
        </div>
      </MobileRightNav>
    </HeaderContent>
  </HeaderBar>
}
