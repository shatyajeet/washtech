import styled from 'styled-components'

export const ButtonContainer = styled.button`
  background-color: #34B4A9;
  border: 0;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  height: ${_ => _.height || 36}px;
  line-height: 1.5;
  outline: none;
  padding: 0 24px;
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    font-size: 0.875rem;
    height: 48px;
    width: 100%;
  }
`
