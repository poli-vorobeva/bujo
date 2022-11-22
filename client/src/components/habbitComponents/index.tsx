import React, { useEffect, useState } from "react";
import Days from "./days";
import Habbits from "./habbits";
import CanvasHabbit from "./canvashabbit";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IHabbitsData, IUserData } from "../../dto";
import { getHabbitsData } from "../../reducer/habbitsData";

interface IhabbitsState {
  habbitsData: {
    data: IHabbitsData;
  };
}

const HabbitTrack = () => {
  const dispatch = useDispatch<AppDispatch>();
  const email = useSelector((state: IUserData) => state.userData.email);
  useEffect(() => {
    dispatch(getHabbitsData({ email }));
  }, []);

  const listOfHabbits = useSelector(
    (state: IhabbitsState) => state.habbitsData.data
  );
  return (
    <>
      <div className="main">
        <p></p>
        <Days count={listOfHabbits.days} />
        <Habbits listOfHabbits={listOfHabbits.habbits} />
        <CanvasHabbit />
      </div>
    </>
  );
};

export default HabbitTrack;
