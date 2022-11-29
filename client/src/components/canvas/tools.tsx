import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../dto";
import { changeBgData, changeBgSetting } from "../../reducer/canvasImgBgData";
interface ITools {
  type: "habbitImg";
  width: number;
  height: number;
  handlerClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const Tools = ({ type, width, height, handlerClick }: ITools) => {
  const dispatch = useDispatch<AppDispatch>();
  const handlerDeleteBg = () => {
    dispatch(
      changeBgData({
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
      changeBgSetting({ type, data: { opacity: 1, color: e.target.value } })
    );
  };
  return (
    <>
      <h3>Panel</h3>
      <input type="color" onChange={handlerChangeColor} />
      <br></br>
      <button>Change Opacity</button>
      <br></br>
      <input type="checkbox" onClick={handlerClick} />
      Delete component<br></br>
      <button onClick={handlerDeleteBg}>Delete bg</button>
    </>
  );
};

export default Tools;
