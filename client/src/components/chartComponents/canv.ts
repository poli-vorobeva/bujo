import Control from "./controll";
import {typeItem} from "./notUsed/mockData";
import {Axis} from "./Axis";
import Bars from "../chartComponents/Bar";
import {chooseDateComponent} from "./editData/chooseDateComponent";

export default class CanvasComponent extends Control {
	private ctx: CanvasRenderingContext2D;
	private width: number;
	private height: number;
	private xPointToDrawData: Map<string, number> | Map<number, number>;
	private yPointToDrawData: Map<string, number> | Map<number, number>;
	private axis: Axis;
	// @ts-ignore
	private bars: Bars;
	private dataToDraw: typeItem[];

	constructor(parent: HTMLElement, width: number, height: number,data:typeItem[]) {
		super(parent)
		const canvas: Control<HTMLCanvasElement> = new Control(parent, 'canvas')
		this.width = canvas.node.width = width
		this.height = canvas.node.height = height
		this.ctx = canvas.node.getContext('2d')
		this.xPointToDrawData = new Map()
		this.yPointToDrawData = new Map()
		this.dataToDraw=data
		this.draw()
		this.axis = new Axis(this.width, this.height, canvas.node, this.ctx)
		this.xPointToDrawData = this.axis.getCoordsData('x')
		this.yPointToDrawData = this.axis.getCoordsData('y')
		this.bars = new Bars(this.ctx, this.dataToDraw, 'day', 'time', this.xPointToDrawData, this.yPointToDrawData)
	}
	draw() {
		this.ctx.clearRect(0, 0, this.width, this.height)
		this.ctx.fillStyle = '#98d2c0'
		this.ctx.fillRect(0, 0, this.width, this.height)
	}

	// deleteFromCanvas(data: chooseDateComponent) {
	// 	//console.log(barRangeData.find(e => +e.day == data.data),'Del')
	// 	this.bars.deleteBarFromCanvas(this.dataToDraw.find(e => +e.day == data.data), 'day', 'time')
	// 	//	this.addBarToDataObject(data)
	// }

	// addBar(data: chooseDateComponent) {
	// 	//console.log(data)
	// 	this.addBarToDataObject(data)
	// 	this.bars.drawOneBarOnCanvas(this.dataToDraw.find(e => +e.day == data.data), 'day', 'time')
	//
	// }

// 	addBarToDataObject (data: chooseDateComponent) {
// 		const el = this.dataToDraw.find(e => +e.day == data.data)
// //todo
// 		el.time = [data.from, data.to]
// 		return el
// 	}
}