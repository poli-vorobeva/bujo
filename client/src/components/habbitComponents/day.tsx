import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { IIntStBgImg } from "../../dto";

interface IDay {
  n: number;
}
interface IBgImgStore {
  imgBgData: IIntStBgImg;
}

interface IDayComponent {
  color: string;
}

const DayComponent = styled.span<{ styledComp: IDayComponent }>`
  text-align: center;
  color: ${({ styledComp }) => styledComp.color};
`;

const Day = ({ n }: IDay) => {
  const [color, setColor] = useState("black");
  const stateSetting = useSelector(
    (state: IBgImgStore) => state.imgBgData.data.habbitImg.setting
  );
  useEffect(() => {
    setColor(stateSetting.color);
  }, [stateSetting]);
  return <DayComponent styledComp={{ color }}>{n}</DayComponent>;
};
export default Day;
