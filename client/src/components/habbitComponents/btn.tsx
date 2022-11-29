import styled from "styled-components";
import React from "react";

interface IBtncomponent {
  onClick: () => void;
}

interface IBtn {
  handleClick: () => void;
}

const BtnComponent = styled.button<IBtncomponent>`
  position: relative;
  z-index: 5;
  transform: scale(0.5);
`;
const Btn = ({ handleClick }: IBtn) => {
  return <BtnComponent onClick={handleClick}>Add new habbit</BtnComponent>;
};

export default Btn;
