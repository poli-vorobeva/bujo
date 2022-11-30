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
  display: none;
`;

interface ISpanComponent {
  check: boolean;
}
const SpanComponent = styled.span<{ styledComp: ISpanComponent }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-image: ${({ styledComp }) =>
    (styledComp.check && `url('../../assets/svg/check.svg')`) ||
    `url('../../assets/svg/circle.svg')`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 13px 13px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LabelComponent = styled.label`
  position: relative;
  z-index: 5;
  width: 60%;
  height: 50%;
`;
const Input = ({ check, id, handleClick }: ICheck) => {
  return (
    <InputContainer>
      <LabelComponent htmlFor={id}>
        <InputComponent
          type="checkbox"
          name={id}
          id={id}
          defaultChecked={check}
          onClick={handleClick}
        />
        <SpanComponent styledComp={{ check }} />
      </LabelComponent>
    </InputContainer>
  );
};

export default Input;
