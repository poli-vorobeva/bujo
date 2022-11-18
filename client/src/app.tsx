import React, { useEffect } from "react";
import { test } from "./requestToServer";
import GlobalStyles from "./styles/global";
import Auth from "./pages/Auth";

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
