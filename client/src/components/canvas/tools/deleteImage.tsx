import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../dto";
import { changeBackgroundInBg } from "../../../reducer/canvasImgBgData";
interface IDeleteImage {
  handlerClick: (e: React.MouseEvent<HTMLInputElement>) => void;
}

const DeleteImage = ({ handlerClick }: IDeleteImage) => {
  return (
    <>
      <input type="checkbox" onClick={handlerClick} />
      Delete component<br></br>
    </>
  );
};

export default DeleteImage;
