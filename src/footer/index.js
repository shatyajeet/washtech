import React from 'react'
import { FooterContainer, FooterContent, QuickLinksContainer, QuickLinksColumn, LinkHeader, QuickLink } from './style'
import logo from '../logo.svg'
import { SizedBox } from '../components/style'
import phoneIcon from '../images/phone.svg'
import mailIcon from '../images/mail.svg'
import locationIcon from '../images/location.svg'

export default function Footer () {
  function navToSection (sectionId) {
    const section = document.getElementById(sectionId)
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <FooterContainer>
    <FooterContent>
      <img src={logo} alt='Washtec' />
      <QuickLinksContainer>
        <QuickLinksColumn>
          <LinkHeader>Quick Links</LinkHeader>
          <SizedBox height={16} />
          <QuickLink point onClick={() => navToSection('benefits')}>Benefits</QuickLink>
          <SizedBox height={16} />
          <QuickLink point onClick={() => navToSection('services')}>Services</QuickLink>
          <SizedBox height={16} />
          <QuickLink point onClick={() => navToSection('our-story')}>Our Story</QuickLink>
          <SizedBox height={16} />
          <QuickLink>Terms & Policy</QuickLink>
        </QuickLinksColumn>
        <QuickLinksColumn>
          <LinkHeader>Contact Us</LinkHeader>
          <SizedBox height={16} />
          <QuickLink>Give us a call</QuickLink>
          <SizedBox height={16} />
          <a href='tel:+971-585-9287-82'>
            <QuickLink point>
              <img src={phoneIcon} alt='phone' height={36} /><SizedBox width={8} />+971-585-9287-82
            </QuickLink>
          </a>
          <SizedBox height={16} />
          <a href='mailto:support@washtech.ae'>
            <QuickLink point><img src={mailIcon} alt='mail' height={36} /><SizedBox width={8} />support@washtech.ae</QuickLink>
          </a>
          <SizedBox height={16} />
          <QuickLink><img src={locationIcon} alt='location' height={36} /><SizedBox width={8} />Dubai</QuickLink>
        </QuickLinksColumn>
        <SizedBox width={1} />
      </QuickLinksContainer>
    </FooterContent>
  </FooterContainer>
}
