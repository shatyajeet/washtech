import React from 'react'

import { MobileNumberInputContainer, CountryCodeContainer, PhoneNumberContainer, CountryCodeText } from './style'
import { SizedBox } from '../style'

export default function MobileNumberInput () {
  return <MobileNumberInputContainer className='mobile-input'>
    <CountryCodeContainer>
      <CountryCodeText>+971</CountryCodeText>
      <SizedBox width={16} />
    </CountryCodeContainer>
    <PhoneNumberContainer placeholder='Phone number' type='tel' />
  </MobileNumberInputContainer>
}
