import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {barRangeData, typeDataForChart, typeItem} from './mockData'
import {
	drawCircle,
	drawXAxis,
	drawYAxis,
	getXAxisData,
	getYAxisData,
	sortDefault, verticalLine
} from "./canvasFunctions";

const CanvasChart = (props: any) => {
	const [xPointToDrawData, setXPointsToDrawData] = useState(null)
	const [yPointToDrawData, setYPointsToDrawData] = useState(null)

	const xStepsData = getXAxisData(barRangeData, 'day')//from data
	const yStepsData = sortDefault(getYAxisData(barRangeData, 'time'))

	const canvasRef = useRef(null)
	const canvasCtxRef = useRef(null)
	const [startX, setStartX] = useState(0)
	const [startY, setStartY] = useState(0)
	const [xAxisPoints, setXAxisPoints] = useState([])
	const [yAxisPoints, setYAxisPoints] = useState([])
	const drawBar = (xCoord: number, yCoords: number[]) => {
		drawCircle(canvasCtxRef.current, xCoord, yCoords[0], 2)
		drawCircle(canvasCtxRef.current, xCoord, yCoords[1], 2)
		verticalLine(canvasCtxRef.current, xCoord, yCoords[0], yCoords[1])
	}
	const drawXAxisData = () => {
		const xData = new Map()
		xAxisPoints.forEach((p, i) => {
			canvasCtxRef.current.moveTo(startX + p, startY)
			canvasCtxRef.current.lineTo(startX + p, startY - 10)
			canvasCtxRef.current.stroke();
			canvasCtxRef.current.fillStyle = 'gray';//text
			canvasCtxRef.current.fillText(xStepsData[i], startX + p, startY + 20)
			xData.set(xStepsData[i], startX + p)
		})
		setXPointsToDrawData(xData)
	}
	const drawYAxisData = () => {
		const reverseSteps = yAxisPoints.slice().reverse()
		const topYOffset = canvasRef.current.height * 0.1
		const yData = new Map()
		reverseSteps.forEach((p, i) => {
			canvasCtxRef.current.moveTo(startX, p + topYOffset)
			canvasCtxRef.current.lineTo(startX + 10, p + topYOffset)
			canvasCtxRef.current.stroke();
			canvasCtxRef.current.fillStyle = 'gray';//text
			canvasCtxRef.current.fillText('' + yStepsData[i], startX - 20, p + topYOffset)
			yData.set(yStepsData[i], p + topYOffset)
		})
		setYPointsToDrawData(yData)
	}
	const getXCoord = (data: string) => xPointToDrawData?.get(data)
	const getYCoord = (data: number) => yPointToDrawData?.get(data)
	const axis = (ctx: CanvasRenderingContext2D) => {
		drawXAxis(canvasCtxRef.current, canvasCtxRef.current.canvas.width, canvasCtxRef.current.canvas.height)
		drawYAxis(canvasCtxRef.current, canvasCtxRef.current.canvas.width, canvasCtxRef.current.canvas.height)
	}
	const [isShowBars,setShowBars]=useState(false)
	const showBars=()=>setShowBars(prev=>!prev)
	useEffect(()=>{
		if(isShowBars) {
			drawDataOnCanvas(barRangeData, 'day', 'time')
		}else{
			draw(canvasCtxRef.current)
			drawXAxisData()
			drawYAxisData()
		}
	},[isShowBars])

	const [isShowAreas,setShowAreas]=useState(false)
	const showAreas=()=>setShowAreas(prev=>!prev)
	useEffect(()=>{
		if(isShowAreas) {
			drawAreasOnCanvas(barRangeData)
			//-------drawDataOnCanvas(barRangeData, 'day', 'time')
		}else{
			draw(canvasCtxRef.current)
			drawXAxisData()
			drawYAxisData()
		}
	},[isShowAreas])


	const drawAreasOnCanvas=(data: typeDataForChart)=>{
		canvasCtxRef.current.beginPath()
		canvasCtxRef.current.moveTo(startX,getYCoord(data[0].time[0]))
		canvasCtxRef.current.lineTo(getXCoord(data[0].day),getYCoord(data[0].time[0]))
		for(let i=1;i<data.length;i++){
			//canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[0]))
		//	if(data[i+1])
				// canvasCtxRef.current.bezierCurveTo(
				// getXCoord(data[i].day),getYCoord(data[i].time[0]),
				// getXCoord(data[i].day), getYCoord(data[i+1].time[0]),
				// getXCoord(data[i+1].day),getYCoord(data[i+1].time[0]));
				//canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[0]))
			//else
				canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[0]))
			}
		canvasCtxRef.current.lineTo(getXCoord(data[data.length-1].day),getYCoord(data[data.length-1].time[1]))
		for(let i=data.length-1;i>=0;i--){
			canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[1]))
		}
		canvasCtxRef.current.lineTo(startX,getYCoord(data[0].time[1]))
		canvasCtxRef.current.stroke()
		canvasCtxRef.current.closePath();
		canvasCtxRef.current.lineWidth = 2;
		canvasCtxRef.current.fillStyle = 'rgba(93,221,157,0.74)';
		canvasCtxRef.current.fill();
		canvasCtxRef.current.strokeStyle = 'red';
		canvasCtxRef.current.stroke();
	}
	const drawDataOnCanvas =
		<U extends keyof typeItem>
		(data: typeDataForChart, xKey: U, yKey: U) => {
			data.forEach(d => {
				const xCoord = getXCoord(d[xKey] as string)
				const yCoords = (d[yKey] as number[]).map(d => {
					return getYCoord(d)
				})
				drawBar(xCoord, yCoords)
			})
		}

	const draw = (ctx: CanvasRenderingContext2D) => {
		if (!ctx) return
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		ctx.fillStyle = '#98d2c0'
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		axis(ctx)
	}
	// useEffect(() => {
	// 	drawDataOnCanvas(barRangeData, 'day', 'time')
	// }, [yPointToDrawData])
	useEffect(() => {
		drawXAxisData()
		drawYAxisData()
	}, [xAxisPoints])
	useEffect(() => {
		draw(canvasCtxRef.current)
		if (startX && startY) {
			const stepsXPoints: number[] = []
			const stepsYPoints: number[] = []
			const xStep = (canvasRef.current.width * 0.8) / xStepsData.length
			const yStep = (canvasRef.current.height * 0.8) / yStepsData.length
			for (let i = 1; i <= xStepsData.length; i++) {
				stepsXPoints.push(i * xStep)
			}
			for (let i = 1; i <= yStepsData.length; i++) {
				stepsYPoints.push(i * yStep)
			}
			setXAxisPoints(stepsXPoints)
			setYAxisPoints(stepsYPoints)
		}
	}, [startX])
	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		canvasCtxRef.current = context
		setStartX(context.canvas.width * 0.1)
		setStartY(context.canvas.height * 0.9)
	}, [])

	return (
		<div>
			<div>
				<button onClick={showBars}>Show Bar</button>
				<button onClick={showAreas}>Show Areas</button>
				<button>ShowLines</button>
			</div>
			<div>
				<canvas width={500} height={500} ref={canvasRef} {...props}/>
			</div>
		</div>

	)
}
export default CanvasChart