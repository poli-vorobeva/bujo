import React from "react";
import styled from "styled-components";

interface iHabbit {
  text: string;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputComponent = styled.input`
  position: relative;
  z-index: 5;
  transform: scale(0.5);
`;

const Habbit = ({ text, handleInput }: iHabbit) => {
  return (
    <>
      <InputComponent type="text" value={text} onInput={handleInput} />
    </>
  );
};
export default Habbit;
