import React from "react";
import styled from "styled-components";
interface ICheck {
  check: boolean;
  id: string;
  handleClick: () => void;
}

const InputComponent = styled.input`
  position: relative;
  z-index: 5;
  transform: scale(0.5);
`;

const Input = ({ check, id, handleClick }: ICheck) => {
  return (
    <InputComponent
      type="checkbox"
      id={id}
      defaultChecked={check}
      onClick={handleClick}
    />
  );
};

export default Input;
