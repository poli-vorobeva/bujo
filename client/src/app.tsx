import React, { useEffect } from "react";
import { test } from "./requestToServer";
import GlobalStyles from "./global";
import Auth from "./components/Auth";

export const App = () => {
  // useEffect(() => {
  //   test();
  // }, []);
  return (
    <>
      <GlobalStyles />
      <Auth />;
    </>
  );
};
