import React, { useEffect } from "react";
import { test } from "./requestToServer";

export const App = () => {
  useEffect(() => {
    test();
  }, []);
  return <h1>При вет, GfffGG</h1>;
};
