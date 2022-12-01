import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IHabbitsData, IUserData } from "../../dto";
import { changeBackgroundInBg } from "../../reducer/canvasImgBgData";
interface IImage {
  name: string;
  src: string;
  type: "habbitImg";
  width: number;
  height: number;
}
const ImageComponent = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 5;
`;
const BgImage = ({ name, src, type, width, height }: IImage) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    console.log("click");
    dispatch(
      changeBackgroundInBg({
        data: {
          id: "0",
          name,
          src,
          coordinate: { x: 0, y: 0 },
          width,
          height,
        },
        type,
      })
    );
  };
  return (
    <div onClick={handleClick}>
      <ImageComponent src={src} alt={name} />
    </div>
  );
};
export default BgImage;
