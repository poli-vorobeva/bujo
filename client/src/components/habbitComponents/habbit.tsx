import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IIntStBgImg } from "../../dto";

interface iHabbit {
  text: string;
  handleInput: (e: React.FormEvent<HTMLInputElement>) => void;
}

interface IBgImgStore {
  imgBgData: IIntStBgImg;
}

interface IInputComponent {
  color: string;
}

const InputComponent = styled.input<{ styledComp: IInputComponent }>`
  position: relative;
  z-index: 5;
  transform: scale(0.5);
  color: ${({ styledComp }) => styledComp.color};
`;

const Habbit = ({ text, handleInput }: iHabbit) => {
  const [color, setColor] = useState("black");
  const stateSetting = useSelector(
    (state: IBgImgStore) => state.imgBgData.data.habbitImg.setting
  );
  useEffect(() => {
    setColor(stateSetting.color);
  }, [stateSetting]);
  return (
    <>
      <InputComponent
        styledComp={{ color }}
        type="text"
        value={text}
        onInput={handleInput}
      />
    </>
  );
};
export default Habbit;
