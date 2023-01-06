import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { AppDispatch } from "../../dto";
import { changeHabbitsInput } from "../../reducer/habbitsData";
interface ICheck {
  check: boolean;
  id: string;
  habbitId: string;
  // handleClick: () => void;
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
const Input = ({ check, id, habbitId }: ICheck) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(
      changeHabbitsInput({
        idHabbit: habbitId,
        idEl: id,
        value: e.currentTarget.checked,
      })
    );
  };
  return (
    <InputContainer>
      <LabelComponent htmlFor={`${habbitId}-${id}`}>
        <InputComponent
          type="checkbox"
          name={id}
          id={`${habbitId}-${id}`}
          defaultChecked={check}
          onClick={handleClick}
        />
        <SpanComponent styledComp={{ check }} />
      </LabelComponent>
    </InputContainer>
  );
};

export default Input;
