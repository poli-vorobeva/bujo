import React, { useEffect } from "react";
import { test } from "./requestToServer";
import RegForm from "./components/RegForm";

export const App = () => {
  useEffect(() => {
    test();
  }, []);
  return <RegForm />;
};
