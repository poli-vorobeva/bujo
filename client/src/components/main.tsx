import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export interface IUser {
  userData: {
    email: string;
    password: string;
    name: string;
  };
}

const Main = () => {
  const name = useSelector((state: IUser) => state.userData.name);

  return (
    <div>
      <div>Hello, {name}</div>
      <Link to="/canvasChart">Canvas chart</Link>
    </div>
  );
};
export default Main;
