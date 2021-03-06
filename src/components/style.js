import styled from "styled-components";

export const SizedBox = styled.div`
  height: ${(_) => (_.height ? `${_.height}px` : "100%")};
  width: ${(_) => (_.width ? `${_.width}px` : "100%")};
`;

export const AppContent = styled.div`
  margin-top: 80px;
`;

export const MAX_CONTENT_WIDTH = 1366;
export const CONTENT_PADDING = 60;

export const ContentLine = styled.div`
  color: ${(_) => _.color || "#535C65"};
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 2px;
  line-height: 1.25;
  text-align: ${(_) => _.textAlign || "left"};
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    font-size: 0.825rem;
  }
`;

export const ContentHeading = styled.h2`
  color: ${(_) => _.color || "#383E44"};
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.25;
  margin: 0;
  text-align: ${(_) => _.textAlign || "left"};
  @media screen and (max-width: 960px) {
    font-size: 1.5rem;
  }
`;

export const ContentDescription = styled.h3`
  color: #25292d;
  font-size: 1.5rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0;
  text-align: left;
  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;
