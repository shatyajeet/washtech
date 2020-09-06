import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../style'

export const HeaderBar = styled.header`
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(55, 70, 95, 0.12);
  display: flex;
  justify-content: center;
  padding: 16px ${CONTENT_PADDING}px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  @media screen and (max-width: 960px) {
    align-items: center;
    padding: 0 16px;
    height: 56px;
  }
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
`

export const LeftNav = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 55%;
  @media screen and (max-width: 960px) {
    width: 66%;
  }
`

export const LogoNav = styled.div`
  align-items: center;
  display: flex;
  img {
    height: 32px;
  }
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const NavBarItem = styled.div`
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.5;
`

export const RightNav = styled.div`
  align-items: center;
  display: flex;
  max-width: 400px;
  justify-content: space-between;
  width: 37%;
  @media screen and (max-width: 960px) {
    display: none;
  }
`

export const MobileRightNav = styled.div`
  display: flex;
  @media screen and (min-width: 960px) {
    display: none;
  }
`

export const PhoneNumberContainer = styled.div`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 5px;
  display: flex;
  height: 36px;
  padding: 0 24px;
  transition: border-color 0.35s ease-in-out;
  &:hover {
    border-color: #34B4A9;
  }
`

export const PhoneNumberText = styled.div`
  color: #34B4A9;
  font-size: 1.125rem;
  line-height: 1.44;
`
