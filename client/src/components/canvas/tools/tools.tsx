import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IStateDataBgCanvas } from "../../../dto";
import {
  changeBackgroundInBg,
  changeBgSetting,
} from "../../../reducer/canvasImgBgData";
import Color from "./color";
import Opacity from "./opacity";
import DeleteImage from "./deleteImage";
import DeleteBg from "./deleteBg";
interface ITools {
  type: "habbitImg";
  width: number;
  height: number;
  handlerClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}
interface IBgImgStore {
  imgBgData: IStateDataBgCanvas;
}

const Tools = ({ type, width, height, handlerClick }: ITools) => {
  const dispatch = useDispatch<AppDispatch>();
  const [setting, setSetting] = useState({ color: "#000000", opacity: 1 });
  const stateSetting = useSelector(
    (state: IBgImgStore) => state.imgBgData.data.habbitImg.setting
  );
  useEffect(() => {
    setSetting(stateSetting);
  }, [stateSetting]);

  const handlerDeleteBg = () => {
    dispatch(
      changeBackgroundInBg({
        type,
        data: {
          id: "0",
          name: "bg",
          src: "../../assets/bg/bg0.jpg",
          coordinate: { x: 0, y: 0 },
          width,
          height,
        },
      })
    );
  };

  const handlerChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBgSetting({
        type,
        data: { opacity: setting.opacity, color: e.target.value },
      })
    );
  };
  const handlerChangeOpasicity = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(
      changeBgSetting({
        type,
        data: { opacity: +e.target.value, color: setting.color },
      })
    );
  };
  return (
    <>
      <h3>Panel</h3>
      <Color type={type} setting={setting} />
      <br></br>
      <Opacity type={type} setting={setting} />

      <br></br>
      <DeleteImage handlerClick={handlerClick} />
      <DeleteBg type={type} width={width} height={height} />
    </>
  );
};

export default Tools;
