import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, IUserData } from "../dto";
import { getCanvasData } from "../reducer/canvasChartData";
import { getHabbitsData } from "../reducer/habbitsData";
import store from "../store";

const Main = () => {
  const name = useSelector((state: IUserData) => state.userData.name);
  const email = useSelector((state: IUserData) => state.userData.email);
  const dispatch = useDispatch<AppDispatch>();
  dispatch(getCanvasData({ email }));
  return (
    <div>
      <div>Hello, {name}</div>
      <Link to="/canvasChart">Canvas chart</Link>
      <Link to="/habitTracker">Habbit tracker</Link>
    </div>
  );
};
export default Main;
