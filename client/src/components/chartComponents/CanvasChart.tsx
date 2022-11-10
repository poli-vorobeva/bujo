import * as React from "react";
import {useEffect, useRef, useState} from "react";
import {barRangeData, typeDataForChart, typeItem} from './mockData'
import {
	drawCircle,
	drawXAxis,
	drawYAxis,
	getXAxisData,
	getYAxisData, horizontalLine,
	sortDefault, text, verticalLine
} from "./canvasFunctions";
import ChooseDateComponent, {chooseDateComponent} from "../ui/chooseDateComponent";

const CanvasChart = (props: any) => {
	const [xPointToDrawData, setXPointsToDrawData] = useState(null)
	const [yPointToDrawData, setYPointsToDrawData] = useState(null)

	const xStepsData = getXAxisData(barRangeData, 'day')//from data
	const yStepsData = [18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse()//sortDefault(getYAxisData(barRangeData, 'time'))
	const canvasRef = useRef(null)
	const canvasCtxRef = useRef(null)
	const [startX, setStartX] = useState(0)
	const [startY, setStartY] = useState(0)
	const [xAxisPoints, setXAxisPoints] = useState([])
	const [yAxisPoints, setYAxisPoints] = useState([])
	const [newDayData,setNewDayData]=useState(null)
	const [addDateData, setAddData] = useState(false)
	const [addDataDates, setAddDataDates] = useState([])
	const [editDateDates, setEditDataDates] = useState([])
	const [editDateData, setEditData] = useState(false)
	const drawBar = (xCoord: number, yCoords: number[]) => {
		drawCircle(canvasCtxRef.current, xCoord, yCoords[0], 2)
		drawCircle(canvasCtxRef.current, xCoord, yCoords[1], 2)
		verticalLine(canvasCtxRef.current, xCoord, yCoords[0], yCoords[1])
	}
	const drawXAxisData = () => {
		const xData = new Map()
		xAxisPoints.forEach((p, i) => {
			verticalLine(canvasCtxRef.current, startX + p, startY, startY - 5)
			text(canvasCtxRef.current, xStepsData[i], startX + p, startY + 20)
			xData.set(xStepsData[i], startX + p)
		})
		setXPointsToDrawData(xData)
	}

	const drawYAxisData = () => {
		const reverseSteps = yAxisPoints.slice().reverse()
		const topYOffset = canvasRef.current.height * 0.1
		const yData = new Map()
		reverseSteps.forEach((p, i) => {
			horizontalLine(canvasCtxRef.current, startX, startX + 5, p + topYOffset)
			text(canvasCtxRef.current, '' + yStepsData[i], startX - 20, p + topYOffset)
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
	const getOneBarCoords = <U extends keyof typeItem>(day: typeItem, xKey: U, yKey: U) => {
		return {
			x: getXCoord(day[xKey] as string),
			y: (day[yKey] as number[]).map(d => getYCoord(d))
		}
	}
	const drawOneBarOnCanvas = <U extends keyof typeItem>(day: typeItem, xKey: U, yKey: U) => {
		const {x, y} = getOneBarCoords(day, xKey, yKey)
		console.log('x,y,',x,y)
		console.log(barRangeData,'RR')
		drawBar(x, y)
	}
	//todo draw Cells yline is connect with day, and on hover on dayLine we define time
	const drawBarsOnCanvas = <U extends keyof typeItem>(data: typeDataForChart, xKey: U, yKey: U) => {
		if (!xPointToDrawData || !xPointToDrawData.size ||
			!yPointToDrawData || !yPointToDrawData.size) return
		data.forEach(d => drawOneBarOnCanvas(d, xKey, yKey))
	}
	const draw = (ctx: CanvasRenderingContext2D) => {
		if (!ctx) return
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		ctx.fillStyle = '#98d2c0'
		ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		axis(ctx)
	}
	const deleteBarFromCanvas=<U extends keyof typeItem>(day: typeItem, xKey: U, yKey: U)=>{
		const coords = getOneBarCoords(day,'day','time')
		canvasCtxRef.current.clearRect(coords.x-5, coords.y[1]-5, 10, (coords.y[0]-coords.y[1])+10)
		canvasCtxRef.current.fillStyle ='#ffc'//'#98d2c0'
		canvasCtxRef.current.fillRect(coords.x-5, coords.y[1]-5, 10, (coords.y[0]-coords.y[1])+10)
	}

	useEffect(() => drawBarsOnCanvas(barRangeData, 'day', 'time'), [yPointToDrawData])
	useEffect(() => {
		drawXAxisData()
		drawYAxisData()
	}, [xAxisPoints])
	const getPoints = (canvasWidth: number, array: any[]) => {
		const steps: number[] = []
		const stepSize = canvasWidth / array.length
		for (let i = 1; i <= array.length; i++) {
			steps.push(i * stepSize)
		}
		return steps
	}
	const addBarToDataObject = (data: chooseDateComponent) => {
		const el = barRangeData.find(e => +e.day == data.data)
		el.time = [data.from, data.to]
		return el
	}
	useEffect(() => {
		draw(canvasCtxRef.current)
		if (startX && startY) {
			const cnv = canvasRef.current
			setXAxisPoints(getPoints(cnv.width * 0.8, xStepsData))
			setYAxisPoints(getPoints(cnv.height * 0.8, yStepsData))
		}
	}, [startX])
	useEffect(() => {
		const canvas = canvasRef.current
		const context = canvas.getContext('2d')
		canvasCtxRef.current = context
		setStartX(context.canvas.width * 0.1)
		setStartY(context.canvas.height * 0.9)
	}, [])
	useEffect(()=>{
		if(!newDayData)return
		const newEl=addBarToDataObject(newDayData)
		console.log(newEl,'newEl')
			drawOneBarOnCanvas(newEl, 'day', 'time')
	},[newDayData])
	return <>
		<button onClick={() => {
			setAddDataDates(barRangeData.filter(e => !e.time.length))
			setAddData(true)
		}}>Add Data
		</button>
		<button onClick={() => {
			setEditDataDates(barRangeData.filter(e => e.time.length))
			setEditData(true)
		}}>Change Data
		</button>
		{
			addDateData && <ChooseDateComponent dateArray={addDataDates} handler={(data) => {
				drawOneBarOnCanvas(addBarToDataObject(data), 'day', 'time')
				setAddData(false)
			}}/>
		}
		{
			editDateData && <ChooseDateComponent
				dateArray={editDateDates}
				handler={(data) => {
				deleteBarFromCanvas(barRangeData.find(e=>+e.day==data.data),'day','time')
					setNewDayData(data)
					setEditData(false)
					}}/>
		}

		<canvas width={800} height={500} ref={canvasRef}/>
	</>
}
export default CanvasChart