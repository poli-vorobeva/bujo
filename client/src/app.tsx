import React, { useEffect, useState } from "react";
import TestForm from "./testform";
import CanvasChart from "./components/chartComponents/CanvasChart";
import { useSelector, useDispatch } from "react-redux";
import Main from "./components/main";
import { Routes, Route, HashRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import WeeksTasks from "./pages/WeeksTasks";
import NotFountPage from "./pages/NotFoundPage";
import HabbitTrack from "./components/habbitComponents";
import { AppDispatch, IHabbitsData, IStateDataBgCanvas } from "./dto";
// interface IPage {
//   activePage: { page: string };
// }
interface IBgImgStore {
  imgBgData: IStateDataBgCanvas;
}
export const App = () => {
  //todo при загруке сразу со страницы с канвасом- ошибки
  return (
    <HashRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Auth />} />
          <Route path="main" element={<Main />} />
          <Route path="canvasChart" element={<CanvasChart />} />
          <Route path="weeksTasks" element={<WeeksTasks />} />
          <Route path="habbitsTracker" element={<HabbitTrack />} />
          <Route path="*" element={<NotFountPage />} />
        </Route>
      </Routes>
    </HashRouter>
  ); // <TestForm />;

  //return <RegForm />;
};
