import React, {useEffect} from "react";
import {test} from "./requestToServer";
import AreaChartComponent from './components/chartComponents/AreaChart.tsx'
import CanvasChart from "./components/chartComponents/CanvasChart";
export const App=()=>{
useEffect(()=>{
	//test()
},[])
	return (
		<div>
			{/*<h1>При вет, GfffGG</h1>*/}
			{/*<AreaChartComponent/>*/}
			<CanvasChart/>
		</div>
	)
}