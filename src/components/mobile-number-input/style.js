import styled from 'styled-components'

export const MobileNumberInputContainer = styled.div`
  background-color: #FFF;
  border-radius: 4px;
  border: solid 1px #E7EDF3;
  display: flex;
  height: 64px;
  padding: 8px 16px;
  @media screen and (max-width: 960px) {
    height: 48px;
    margin-bottom: 24px;
  }
`

export const CountryCodeContainer = styled.div`
  align-items: center;
  border-right: 1px solid #F3F3F2;
  display: flex;
`

export const CountryCodeText = styled.div`
  color: #535C65;
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0.1px;
  line-height: 1.44;
  @media screen and (max-width: 960px) {
    font-size: 0.875rem;
  }
`

export const PhoneNumberContainer = styled.input`
  border: 0;
  color: #535C65;
  font-size: 1.125rem;
  font-weight: 300;
  letter-spacing: 0.1px;
  line-height: 1.44;
  outline: none;
  padding-left: 16px;
  width: 150px;
  @media screen and (max-width: 960px) {
    font-size: 0.875rem;
  }
`
