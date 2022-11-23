import React from "react";
import styled from "styled-components";

interface IImage {
  id: string;
}
const ImageComponent = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 5;
`;
const Image = ({ id }: IImage) => {
  const handleDrag = (e: React.DragEvent<HTMLImageElement>) => {
    //
    console.log("start");
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("name", id);
    e.dataTransfer.setData("id", String(Math.floor(Math.random() * 100)));
    e.dataTransfer.setData("width", String(100));
    e.dataTransfer.setData("height", String(100));
  };
  const handleDragMove = () => {};
  return (
    <ImageComponent
      onDragStart={handleDrag}
      onDrag={handleDragMove}
      src={"../../assets/png/" + id + ".png"}
      alt="img"
    />
  );
};
export default Image;
