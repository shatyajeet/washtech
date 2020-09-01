import React from 'react'
import { FooterContainer, FooterContent, QuickLinksContainer, QuickLinksColumn, LinkHeader, QuickLink } from './style'
import logo from '../logo.svg'
import { SizedBox } from '../components/style'
import phoneIcon from '../images/phone.svg'
import mailIcon from '../images/mail.svg'
import locationIcon from '../images/location.svg'

export default function Footer () {
  return <FooterContainer>
    <FooterContent>
      <img src={logo} alt='Washtec' />
      <QuickLinksContainer>
        <QuickLinksColumn>
          <LinkHeader>Quick Links</LinkHeader>
          <SizedBox height={16} />
          <QuickLink>Benefits</QuickLink>
          <SizedBox height={16} />
          <QuickLink>Services</QuickLink>
          <SizedBox height={16} />
          <QuickLink>Our Story</QuickLink>
          <SizedBox height={16} />
          <QuickLink>Terms & Policy</QuickLink>
        </QuickLinksColumn>
        <QuickLinksColumn>
          <LinkHeader>Contact Us</LinkHeader>
          <SizedBox height={16} />
          <QuickLink>Give us a call</QuickLink>
          <SizedBox height={16} />
          <QuickLink><img src={phoneIcon} alt='phone' height={36} /><SizedBox width={8} />+971-555-5564-37</QuickLink>
          <SizedBox height={16} />
          <QuickLink><img src={mailIcon} alt='mail' height={36} /><SizedBox width={8} />support@washtech.ae</QuickLink>
          <SizedBox height={16} />
          <QuickLink><img src={locationIcon} alt='location' height={36} /><SizedBox width={8} />Dubai</QuickLink>
        </QuickLinksColumn>
        <SizedBox width={1} />
      </QuickLinksContainer>
    </FooterContent>
  </FooterContainer>
}
