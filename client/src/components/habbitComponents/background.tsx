import React from "react";
import BgImage from "./bgImage";
//import heart from '../../assets/png/heart.png'

const Background = () => {
  return (
    <>
      <BgImage name={"bg"} src={"../../assets/bg/bg1.jpg"} />
      <BgImage name={"bg"} src={"../../assets/bg/bg2.jpg"} />
    </>
  );
};
export default Background;
