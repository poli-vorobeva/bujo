import React from "react";
import BgImage from "./bgImage";
//import heart from '../../assets/png/heart.png'
interface IBackground {
  type: "habbitImg";
  width: number;
  height: number;
}
const Background = ({ type, width, height }: IBackground) => {
  return (
    <>
      <BgImage
        name={"bg"}
        src={"../../assets/bg/bg1.jpg"}
        type={type}
        width={width}
        height={height}
      />
      <BgImage
        name={"bg"}
        src={"../../assets/bg/bg2.jpg"}
        type={type}
        width={width}
        height={height}
      />
    </>
  );
};
export default Background;
