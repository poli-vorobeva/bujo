import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Days from "./days";
import Habbits from "./habbits";
import { Canvas, Images, Background, Tools } from "../canvas/";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IHabbitsData, IUserData } from "../../dto";
import { getHabbitsData } from "../../reducer/habbitsData";
import { getImagesBgData } from "../../reducer/canvasImgBgData";

interface IhabbitsState {
  habbitsData: {
    data: IHabbitsData;
  };
}

const MainContainer = styled.div`
  display: flex;
`;

interface IHabbitContainer {
  widht: number;
  height: number;
}

const HabbitsContainer = styled.div<{ styledComp: IHabbitContainer }>`
  margin: 0 0;
  width: ${({ styledComp }) => styledComp.widht}px;
  height: ${({ styledComp }) => styledComp.height}px;
  position: relative;
`;

const HabbitTrack = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: IUserData) => state.userData.email);
  const CanvasWidth = 500;
  const CanvasHeight = 500;

  useEffect(() => {
    dispatch(getHabbitsData({ email }));
    dispatch(getImagesBgData({ email, type: "habbitImg" }));
  }, []);

  const listOfHabbits = useSelector(
    (state: IhabbitsState) => state.habbitsData.data
  );
  console.log(listOfHabbits);
  return (
    <>
      <MainContainer>
        <HabbitsContainer
          styledComp={{ widht: CanvasWidth, height: CanvasHeight }}
        >
          <p></p>
          <Days count={listOfHabbits.days} width={CanvasWidth} />
          <Habbits listOfHabbits={listOfHabbits.habbits} width={CanvasWidth} />
          <Canvas
            type={"habbitImg"}
            width={CanvasWidth}
            height={CanvasHeight}
          />
        </HabbitsContainer>
        <div>
          <Images />
          <Background />
          <Tools />
        </div>
      </MainContainer>
    </>
  );
};

export default HabbitTrack;
