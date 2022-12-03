import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../dto";
import { changeBackgroundInBg } from "../../../reducer/canvasImgBgData";
interface IDeleteBg {
  type: "habbitImg";
  width: number;
  height: number;
}

const DeleteBg = ({ type, width, height }: IDeleteBg) => {
  const dispatch = useDispatch<AppDispatch>();
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
  return <button onClick={handlerDeleteBg}>Delete bg</button>;
};

export default DeleteBg;
