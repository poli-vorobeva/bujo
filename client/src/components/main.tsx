import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCanvasData } from "../reducer/canvasChartData";
import store from "../store";
export interface IUser {
  userData: {
    email: string;
    password: string;
    name: string;
  };
}
export type AppDispatch = typeof store.dispatch;

const Main = () => {
  const name = useSelector((state: IUser) => state.userData.name);
  const email = useSelector((state: IUser) => state.userData.email);
  const dispatch = useDispatch<AppDispatch>();
  dispatch(getCanvasData({ email }));

  return (
    <div>
      <div>Hello, {name}</div>
      <Link to="/canvasChart">Canvas chart</Link>
    </div>
  );
};
export default Main;