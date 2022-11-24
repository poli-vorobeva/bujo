import React from "react";
import styled from "styled-components";

interface IImage {
  name: string;
}
const ImageComponent = styled.img`
  width: 100px;
  height: 100px;
  position: relative;
  z-index: 5;
`;
const Image = ({ name }: IImage) => {
  const handleDrag = (e: React.DragEvent<HTMLImageElement>) => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("name", name);
    e.dataTransfer.setData("width", String(100));
    e.dataTransfer.setData("height", String(100));
  };
  const handleDragMove = () => {};
  return (
    <ImageComponent
      onDragStart={handleDrag}
      onDrag={handleDragMove}
      src={"../../assets/png/" + name + ".png"}
      alt="img"
    />
  );
};
export default Image;
