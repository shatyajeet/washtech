import styled from "styled-components";

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../components/style";

export const HowItWorksContainer = styled.div`
  background-color: #12b07e;
  padding: 80px ${CONTENT_PADDING}px 280px;
  @media screen and (max-width: 960px) {
    padding: 48px 16px 150px;
  }
`;
export const HowItWorksContent = styled.div`
  margin: auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  position: relative;
  text-align: center;
  width: 100%;
`;

export const StepsContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const StepContainer = styled.div``;

export const StepPathImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 166px;
  justify-content: center;
  position: relative;
  width: 180px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const StepBackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const StepImage = styled.img``;

export const StepLabel = styled.div`
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
  text-align: center;
  width: 180px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const OurStoryContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgba(55, 70, 95, 0.12);
  display: flex;
  position: absolute;
  top: calc(100% + 60px);
  left: 0;
  width: 100%;
  @media screen and (min-width: 1366px) and (max-width: 1490px) {
    h3 {
      font-size: 1.25rem;
    }
  }
  @media screen and (max-width: 1366px) and (min-width: 960px) {
    h3 {
      font-size: 1.125rem;
    }
  }
  @media screen and (max-width: 960px) {
    display: block;
    top: calc(100% + 16px);
  }
`;

export const OurStoryImageContainer = styled.div`
  width: 40%;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const OurStoryImage = styled.img`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 100%;
  @media screen and (max-width: 960px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 8px;
  }
`;
export const OurStoryContent = styled.div`
  padding: 78px 64px;
  width: 60%;
  @media screen and (max-width: 1320px) {
    padding: 45px 64px;
  }
  @media screen and (max-width: 960px) {
    padding: 24px 16px;
    width: 100%;
  }
`;
