import {drawCircle, verticalLine} from "./canvasFunctions";
import {barRangeData, typeDataForChart, typeItem} from "./notUsed/mockData";
import {chooseDateComponent} from "./editData/chooseDateComponent";

export default class Bars<U extends keyof typeItem>{
	private xCoords: Map<string, number>;
	private yCoords: Map<number, number>;
	private getXCoord: (data: string) => number;
	private getYCoord: (data: number) => number;
	private ctx: CanvasRenderingContext2D;
	constructor(ctx:CanvasRenderingContext2D,data: typeDataForChart,
							xKey: U, yKey: U,xCoords:Map<any,any>,yCoords:Map<any,any>) {
		this.xCoords=xCoords
		this.yCoords=yCoords
		this.ctx=ctx
		this.getXCoord = (data: string) => this.xCoords.get(data)
		this.getYCoord = (data: number) => this.yCoords.get(data)
		console.log(data)
		data.forEach(d => this.drawOneBarOnCanvas(d, xKey, yKey))
	}
	drawBar(xCoord: number, yCoords: number[]) {
		drawCircle(this.ctx, xCoord, yCoords[0], 2)
		drawCircle(this.ctx, xCoord, yCoords[1], 2)
		verticalLine(this.ctx, xCoord, yCoords[0], yCoords[1])
	}
	drawOneBarOnCanvas<U extends keyof typeItem>(day: typeItem, xKey: U, yKey: U) {
		const {x, y} = this.getOneBarCoords(day, xKey, yKey)
		this.drawBar(x, y)
	}
	getOneBarCoords<U extends keyof typeItem>(day: typeItem, xKey: U, yKey: U) {
		return {
			x: this.getXCoord(day[xKey] as string),
			y: (day[yKey] as number[]).map(d => this.getYCoord(d))
		}
	}
	deleteBarFromCanvas(day:typeItem){
		const coords = this.getOneBarCoords(day,'day','time')
		this.ctx.fillStyle ='#98d2c0'
		this.ctx.fillRect(coords.x-5, coords.y[0]-5, 10, Math.abs(coords.y[0]-coords.y[1])+10)
	}
}