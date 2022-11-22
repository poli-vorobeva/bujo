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
`
const Image = ({ id }: IImage) => {
  return <ImageComponent src={'../../assets/png/'+id+'.png'} alt="img"/>;
};
export default Image;