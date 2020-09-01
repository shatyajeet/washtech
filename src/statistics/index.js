import React from 'react'

import { StatisticsContainer, StatisticsContent, NumbersContainer, CredentialsContainer, NumbersItem, Value, Label, LabelText } from './style'
import { SizedBox } from '../components/style'
import safetyIcon from '../images/safety.svg'
import premiumIcon from '../images/premium.svg'
import trustIcon from '../images/trust.svg'

export default function Statistics () {
  return <StatisticsContainer>
    <StatisticsContent>
      <NumbersContainer>
        <NumbersItem>
          <Value>100,000</Value>
          <SizedBox width={8} />
          <Label>
            <LabelText>pieces</LabelText>
            <LabelText>a day</LabelText>
          </Label>
        </NumbersItem>
        <NumbersItem>
          <Value>5</Value>
          <SizedBox width={8} />
          <Label>
            <LabelText>washing</LabelText>
            <LabelText>plants</LabelText>
          </Label>
        </NumbersItem>
        <NumbersItem>
          <Value>44</Value>
          <SizedBox width={8} />
          <Label>
            <LabelText>delivery</LabelText>
            <LabelText>trucks</LabelText>
          </Label>
        </NumbersItem>
      </NumbersContainer>
      <CredentialsContainer>
        <img src={safetyIcon} alt='Safety' height={60} />
        <img src={premiumIcon} alt='Premium' height={60} />
        <img src={trustIcon} alt='Trust' height={60} />
      </CredentialsContainer>
    </StatisticsContent>
  </StatisticsContainer>
}
