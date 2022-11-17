import React, { useEffect, useState } from "react";
import RegForm from "./components/RegForm";
import TestForm from "./testform";
import CanvasChart from "./components/chartComponents/CanvasChart";
import { useSelector, useDispatch } from "react-redux";
import Main from "./components/main";
import { Routes, Route, HashRouter } from "react-router-dom";
interface IPage {
  activePage: { page: string };
}
export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<TestForm />}></Route>
        <Route path="/main" element={<Main />} />
        <Route path="/canvasChart" element={<CanvasChart />} />
      </Routes>
    </HashRouter>
  ); // <TestForm />;

  //return <RegForm />;
};
