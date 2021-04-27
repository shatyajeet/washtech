import React from "react";

import { ButtonContainer } from "./style";

export default function Button({ bgColor, label, height, styles, onClick }) {
  return (
    <ButtonContainer
      bgColor={bgColor}
      height={height}
      style={styles}
      onClick={onClick}
    >
      {label}
    </ButtonContainer>
  );
}
