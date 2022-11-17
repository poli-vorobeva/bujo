import { reg, auth, authUserData, regUserData } from "./reducer/fetchUserData";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { requestAuth } from "./request/requestAuth";

import store from "./store";
export type AppDispatch = typeof store.dispatch;
export interface IUser {
  userData: {
    email: string;
    password: string;
    name: string;
  };
}
const TestForm = () => {
  const nameStore = useSelector((state: IUser) => state.userData.name);
  const passwordStore = useSelector((state: IUser) => state.userData.password);
  const dispatch = useDispatch<AppDispatch>();
  const [name, changeName] = useState("");
  const [email, changeEmail] = useState("");
  const [password, changePassword] = useState("");

  const onAuth = () => {
    changeName("");
    changePassword("");
    changeEmail("");
    dispatch(authUserData({ email, password })).then((res) => {
      console.log(res);
    });
  };
  const onReg = () => {
    changeName("");
    changePassword("");
    changeEmail("");
    dispatch(regUserData({ email, name, password })).then((res) =>
      console.log(res)
    );
  };

  return (
    <div>
      <p>{nameStore}</p>
      Name{" "}
      <input
        onChange={(e) => changeName(e.target.value)}
        type="text"
        value={name}
      />
      <br />
      Email
      <input
        onChange={(e) => changeEmail(e.target.value)}
        type="text"
        value={email}
        required
      />
      <br />
      Password
      <input
        onChange={(e) => changePassword(e.target.value)}
        type="text"
        value={password}
        required
      />
      <br />
      <button onClick={onAuth}>Auth</button>
      <button onClick={onReg}>Reg</button>
      <Link to={"./main"}>Link</Link>
      <p></p>
    </div>
  );
};

export default TestForm;
