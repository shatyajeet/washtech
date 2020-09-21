import React from 'react'

import { MobileNumberInputContainer, CountryCodeContainer, PhoneNumberContainer, CountryCodeText } from './style'
import { SizedBox } from '../style'

export default function MobileNumberInput ({ required, onChange, value }) {
  return <MobileNumberInputContainer className='mobile-input'>
    <CountryCodeContainer>
      <CountryCodeText>+971</CountryCodeText>
      <SizedBox width={16} />
    </CountryCodeContainer>
    <PhoneNumberContainer placeholder='Phone number' value={value} type='tel' required={required} onChange={e => onChange(e.target.value.trim())} />
  </MobileNumberInputContainer>
}
