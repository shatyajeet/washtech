import styled from 'styled-components'

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from '../style'

export const HeaderBar = styled.header`
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(55, 70, 95, 0.12);
  display: flex;
  height: 80px;
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
  align-items: center;
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

export const MenuIcon = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 24px;
  padding: 0 3px;
  position: relative;
  width: 24px;
  div {
    transition: ${_ => _.open ? 'top 0.35s, 0.35s transform 0.35s, visibility 0.35s' : '0.35s top 0.35s, transform 0.35s, 0.35s visibility 0.35s'};
  }
  ${_ => _.open ? `
    div {
      top: 11px;
      &:first-child {
        transform: rotate(135deg);
      }
      &:nth-child(2) {
        visibility: hidden;
      }
      &:last-child {
        transform: rotate(225deg);
      }
    }
  ` : ''}
`
export const MenuLine = styled.div`
  background-color: #535D65;
  border-radius: 1px;
  height: 2px;
  position: absolute;
  top: ${_ => _.line1 ? 4 : (_.line2 ? 11 : 18)}px;
  width: 100%;
`

export const MenuOverlay = styled.div`
  position: fixed;
  top: 56px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
`

export const MenuContainer = styled.div`
  background-color: white;
  border-top: 1px solid rgba(55, 70, 95, 0.12);
  height: 100%;
  left: ${_ => _.open ? 0 : '-100%'};
  padding: 8px 16px;
  position: fixed;
  transition: left 0.35s;
  top: 56px;
  width: 100%;
  z-index: 1;
  div {
    padding: 8px 0;
    &:nth-child(3) {
      border-bottom: 0;
    }
  }
  button {
    margin-top: 8px;
  }
`
