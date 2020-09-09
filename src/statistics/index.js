import React from 'react'

import { StatisticsContainer, StatisticsContent, NumbersContainer, CredentialsContainer, NumbersItem, Value, Label, LabelText, TooltipContainer, Tooltip } from './style'
import { SizedBox } from '../components/style'
import safetyIcon from '../images/safety.svg'
import premiumIcon from '../images/premium.svg'
import trustIcon from '../images/trust.svg'

export default function Statistics () {
  return <StatisticsContainer>
    <StatisticsContent>
      <NumbersContainer>
        <NumbersItem>
          <Value>18,000</Value>
          <SizedBox width={8} />
          <Label>
            <LabelText>pieces</LabelText>
            <LabelText>a day</LabelText>
          </Label>
        </NumbersItem>
        <NumbersItem>
          <Value>2</Value>
          <SizedBox width={8} />
          <Label>
            <LabelText>washing</LabelText>
            <LabelText>plants</LabelText>
          </Label>
        </NumbersItem>
        <NumbersItem>
          <Value>14</Value>
          <SizedBox width={8} />
          <Label>
            <LabelText>delivery</LabelText>
            <LabelText>trucks</LabelText>
          </Label>
        </NumbersItem>
      </NumbersContainer>
      <CredentialsContainer>
        <TooltipContainer>
          <img src={safetyIcon} alt='Safety' height={60} />
          <Tooltip className='tooltip'>Safety</Tooltip>
        </TooltipContainer>
        <TooltipContainer>
          <img src={premiumIcon} alt='Premium' height={60} />
          <Tooltip className='tooltip'>Premium</Tooltip>
        </TooltipContainer>
        <TooltipContainer>
          <img src={trustIcon} alt='Trust' height={60} />
          <Tooltip className='tooltip'>Trust</Tooltip>
        </TooltipContainer>
      </CredentialsContainer>
    </StatisticsContent>
  </StatisticsContainer>
}
