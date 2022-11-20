import Control from "./controll";
import {drawXAxis, drawYAxis, getXAxisData, horizontalLine, text, verticalLine} from "./canvasFunctions";
import {barRangeData} from "./notUsed/mockData";

export class Axis {
	private xPointToDrawData: Map<string,number>;
	private yPointToDrawData: Map<number,number>;
	private xAxisPoints: any;
	private yAxisPoints: any;
	private xStepsData: string[];
	private yStepsData:number[];
	private startX: number;
	private startY: number;
	private ctx: CanvasRenderingContext2D;
	private height: number;
	private width: number;

	constructor(width:number,height:number,canvas:HTMLCanvasElement,ctx:CanvasRenderingContext2D) {
		this.ctx= ctx
		this.height=height
		this.width=width
		this.xPointToDrawData = new Map()
		this.yPointToDrawData = new Map()
		this.startX = canvas.width * 0.1
		this.startY = canvas.height * 0.9
		this.xStepsData = getXAxisData(barRangeData, 'day')
		this.yStepsData = [18, 19, 20, 21, 22, 23, 24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse()

		this.xAxisPoints = this.getPoints(width * 0.75, this.xStepsData)
		this.yAxisPoints = this.getPoints(height * 0.75, this.yStepsData)
		this.axis()
	}
	drawXAxisData(){
		const xData = new Map()
		const xStP=this.startX+1.02
		this.xAxisPoints.forEach((p:number, i:number) => {
			verticalLine(this.ctx, xStP + p, this.startY, this.startY - 5)
			text(this.ctx, this.xStepsData[i], xStP + p, this.startY + 20)
			xData.set(this.xStepsData[i], xStP + p)
		})
		this.xPointToDrawData =xData
	}

	drawYAxisData(){
		const reverseSteps = this.yAxisPoints.slice().reverse()
		const topYOffset = this.height * 0.12
		const yData = new Map()
		reverseSteps.forEach((p:number, i:number) => {
			horizontalLine(this.ctx, this.startX, this.startX + 5,
				p + topYOffset)
			text(this.ctx, '' + this.yStepsData[i], this.startX - 20, p + topYOffset)
			yData.set(this.yStepsData[i], p + topYOffset)
		})
		this.yPointToDrawData =yData
	}
	public axis(){
		drawXAxis(this.ctx, this.width, this.height)
		drawYAxis(this.ctx, this.width, this.height)
		this.drawXAxisData()
		this.drawYAxisData()
	}
	getPoints(size: number, array: any[]) {
		const steps: number[] = []
		const stepSize = size / array.length
		for (let i = 1; i <= array.length; i++) {
			steps.push(i * stepSize)
		}
		return steps
	}

	getCoordsData(ax: string) {
		if(ax==='x') return this.xPointToDrawData
		return this.yPointToDrawData
	}
}