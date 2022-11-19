import React, {useEffect, useRef} from "react";
import {test} from "./requestToServer";
import AreaChartComponent from './components/chartComponents/archive/AreaChart.js'
import CanvasChart from "./components/chartComponents/CanvasChart";
import CanvasC from "./components/chartComponents/canv";

export const App=()=>{
	const refEl=useRef(null)

	return (
			<CanvasChart/>
	)
}