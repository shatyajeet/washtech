import styled from 'styled-components'
import { MAX_CONTENT_WIDTH } from '../style'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(20, 20, 20, 0.5);
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: fixed;
  max-width: ${MAX_CONTENT_WIDTH / 2}px;
  top: calc(50% - 80px);
  left: calc(50% - ${MAX_CONTENT_WIDTH / 4}px);
  width: 100%;
  z-index: 11;
`

export const ModalBody = styled.div`
  line-height: 1.5;
  color: #34B4A9;
  font-weight: 400;
  padding: 48px;
  padding-bottom: 0;
  background-color: #FFF;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

export const ModalFooter = styled.div`
  padding: 48px;
  padding-top: 24;
  padding-bottom: 12px;
  background-color: #FFF;
  text-align: right;
  border-radius: 5px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`
