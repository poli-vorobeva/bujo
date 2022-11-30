import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { IIntStBgImg } from "../../dto";
import { useSelector } from "react-redux";

interface IBtn {
  handleClick: () => void;
}
interface IBgImgStore {
  imgBgData: IIntStBgImg;
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
const Btn = ({ handleClick }: IBtn) => {
  const [color, setColor] = useState("black");
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
