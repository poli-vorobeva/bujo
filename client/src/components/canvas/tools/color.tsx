import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../dto";
import React from "react";
import { changeBgSetting } from "../../../reducer/canvasImgBgData";
interface IColor {
  type: string;
  setting: {
    color: string;
    opacity: number;
  };
}

const Color = ({ type, setting }: IColor) => {
  const dispatch = useDispatch<AppDispatch>();
  const handlerChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBgSetting({
        type,
        data: { opacity: setting.opacity, color: e.target.value },
      })
    );
  };
  return (
    <input type="color" onChange={handlerChangeColor} value={setting.color} />
  );
};

export default Color;
