import styled from "styled-components";

export const ChipContainer = styled.div`
  align-items: center;
  background-color: #0499f2;
  border-radius: 4px;
  display: flex;
  height: 24px;
  padding: 0 8px;
  margin-bottom: 5px;
  @media screen and (max-width: 960px) {
    width: 105px;
    margin-bottom: 0;
  }
`;

export const ChipText = styled.div`
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 1;
`;
