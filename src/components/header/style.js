import styled from 'styled-components'

const CONTENT_WIDTH = 1366

export const HeaderBar = styled.header`
  background-color: #fff;
  box-shadow: 0 0 8px 0 rgba(55, 70, 95, 0.12);
  display: flex;
  justify-content: center;
  padding: 16px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`

export const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: ${CONTENT_WIDTH}px;
  width: 100%;
`

export const LeftNav = styled.div`
  align-items: center;
  display: flex;
`

export const NavBar = styled.div`
  display: flex;
`

export const NavBarItem = styled.div`
  cursor: pointer;
  font-size: 1.125rem;
  line-height: 1.5;
`

export const RightNav = styled.div`
  align-items: center;
  display: flex;
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
