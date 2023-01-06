import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { AppDispatch, IStateDataBgCanvas } from "../../dto";
import { useDispatch, useSelector } from "react-redux";
import { addNewHabbit } from "../../reducer/habbitsData";

interface IBgImgStore {
  imgBgData: IStateDataBgCanvas;
}

interface IBtncomponent {
  color: string;
}

const BtnComponent = styled.button<{ styledComp: IBtncomponent }>`
  position: relative;
  z-index: 5;
  transform: scale(0.5);
  color: ${({ styledComp }) => styledComp.color};
`;
const Btn = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(addNewHabbit());
  };
  const [color, setColor] = useState("#000000");
  const stateSetting = useSelector(
    (state: IBgImgStore) => state.imgBgData.data.habbitImg.setting
  );
  useEffect(() => {
    setColor(stateSetting.color);
  }, [stateSetting]);
  return (
    <BtnComponent onClick={handleClick} styledComp={{ color }}>
      Add new habbit
    </BtnComponent>
  );
};

export default Btn;
