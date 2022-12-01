import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AppDispatch, IIntStBgImg } from "../../dto";
import { changeHabbitsName } from "../../reducer/habbitsData";

interface iHabbit {
  text: string;
  id: string;
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

const Habbit = ({ text, id }: iHabbit) => {
  const [color, setColor] = useState("black");
  const stateSetting = useSelector(
    (state: IBgImgStore) => state.imgBgData.data.habbitImg.setting
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    setColor(stateSetting.color);
  }, [stateSetting]);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(changeHabbitsName({ idHabbit: id, value: e.currentTarget.value }));
  };
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
