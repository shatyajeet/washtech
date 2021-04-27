import styled from "styled-components";

import { MAX_CONTENT_WIDTH, CONTENT_PADDING } from "../components/style";

export const TestimonialsContainer = styled.div`
  padding: 300px ${CONTENT_PADDING}px 80px;
  @media screen and (max-width: 1490px) {
    padding-top: 280px;
  }
  @media screen and (max-width: 1366px) {
    padding-top: 240px;
  }
  @media screen and (max-width: 1280px) {
    padding-top: 220px;
  }
  @media screen and (max-width: 1200px) {
    padding-top: 200px;
  }
  @media screen and (max-width: 960px) {
    padding: 580px 16px 48px 24px;
  }
`;

export const TestimonialsContent = styled.div`
  margin: 0 auto;
  max-width: ${MAX_CONTENT_WIDTH}px;
  width: 100%;
`;

export const ReviewComment = styled.div`
  color: #25292d;
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
  line-height: 1.5;
  width: 80%;
  @media screen and (max-width: 960px) {
    width: 100%;
    font-size: 1rem;
  }
`;

export const ReviewDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ReviewerDetails = styled.div``;

export const ReviewerName = styled.div`
  color: #25292d;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.5;
`;
export const ReviewerJD = styled.div`
  color: #25292d;
  font-size: 0.75rem;
  font-weight: 300;
  line-height: 1.5;
`;

export const ReviewCountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 40%;
  @media screen and (max-width: 960px) {
    justify-content: flex-end;
  }
`;

export const ReviewCountItems = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(_) => _.count * 30 + (_.count - 1) * 10}px;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const ReviewCountItem = styled.div`
  background-color: ${(_) => (_.active ? "#12b07e" : "rgba(37, 41, 45, 0.1)")};
  border-radius: 2.5px;
  height: 5px;
  width: 30px;
`;

export const ReviewNext = styled.img`
  cursor: pointer;
`;
