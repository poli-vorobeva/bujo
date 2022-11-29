import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IHabbitsData, IUserData } from "../../dto";
import { changeBgData } from "../../reducer/canvasImgBgData";
interface IImage {
  name: string;
  src: string;
}
const ImageComponent = styled.img`
  display: block;
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 5;
`;
const BgImage = ({ name, src }: IImage) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    console.log("click");
    dispatch(
      changeBgData({
        data: {
          id: name,
          name,
          src,
          coordinate: { x: 0, y: 0 },
          width: +600,
          height: +500,
        },
        type: "habbitImg",
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
