import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {chooseDateComponent} from "./editData/chooseDateComponent";
import CanvasComponent from "./canv";
import EditDataComponent from "./editData/editDataComponent";
import {useDispatch, useSelector} from "react-redux";
import {stateType} from "../../store";
import {AppDispatch} from "../../dto";
import {editCanvasData, getCanvasData} from "../../reducer/canvasChartData";
import {useNavigate} from "react-router-dom";

const CanvasChart = (props: any) => {
	const canvasWrapperRef = useRef(null)
	const [canvasElement, setCanvasElement] = useState(null)
	const barsData = useSelector((state: stateType) => state.canvasDataChart.data)
	const email = useSelector((state: stateType) => state.userData.email)
	const dispatch = useDispatch<AppDispatch>();
	const nav = useNavigate()

	useEffect(() => {
		if (!barsData.length) return
		if(canvasElement){
			canvasWrapperRef.current.innerHTML=null
			setCanvasElement(null)
		}
		setCanvasElement(new CanvasComponent(canvasWrapperRef.current, 700, 500, barsData))
	}, [barsData])

	useEffect(() => {
		!email
			? nav('/')
			: dispatch(getCanvasData({email}))
	}, [])

	const editDataHandler = (data: chooseDateComponent, action: string) => {
	if (action === 'edit') {
			canvasElement.deleteFromCanvas(data)//1
		}
		dispatch(editCanvasData({email, data}))
	}
	return (
		<>
			<EditDataComponent editDataHandler={editDataHandler}/>
			<div ref={canvasWrapperRef}/>
		</>
	)
}
export default CanvasChart