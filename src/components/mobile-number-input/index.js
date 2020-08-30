import React from 'react'

import { MobileNumberInputContainer, CountryCodeContainer, PhoneNumberContainer, CountryCodeText } from './style'
import countryIcon from '../../images/ae.svg'
import { SizedBox } from '../style'

export default function MobileNumberInput () {
  return <MobileNumberInputContainer>
    <CountryCodeContainer>
      <img src={countryIcon} alt='country' width={28} />
      <SizedBox width={8} />
      <CountryCodeText>+971</CountryCodeText>
      <SizedBox width={16} />
    </CountryCodeContainer>
    <PhoneNumberContainer placeholder='Phone number' type='number' />
  </MobileNumberInputContainer>
}
