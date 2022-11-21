import React, { useEffect, useState } from "react";
import TestForm from "./testform";
import CanvasChart from "./components/chartComponents/CanvasChart";
import { useSelector, useDispatch } from "react-redux";
import Main from "./components/main";
import { Routes, Route, HashRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Auth from "./components/Auth";
import HabbitTracker from './components/habbitComponents';
interface IPage {
  activePage: { page: string };
}
export const App = () => {
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/main" element={<Main />} />
        <Route path="/canvasChart" element={<CanvasChart />} />
        <Route path='/habitTracker' element={<HabbitTracker/>}/>
      </Routes>
    </HashRouter>
  ); // <TestForm />;

  //return <RegForm />;
};
