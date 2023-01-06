import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../dto";
import React from "react";
import { changeBgSetting } from "../../../reducer/canvasImgBgData";
interface IOpacity {
  type: "habbitImg";
  setting: {
    color: string;
    opacity: number;
  };
}

const Opacity = ({ type, setting }: IOpacity) => {
  const dispatch = useDispatch<AppDispatch>();
  const handlerChangeOpacity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBgSetting({
        type,
        data: { opacity: +e.target.value, color: setting.color },
      })
    );
  };
  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.05"
      onChange={handlerChangeOpacity}
      value={setting.opacity}
    />
  );
};

export default Opacity;
