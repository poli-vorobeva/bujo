import Control from "./controll";
import {barRangeData, typeItem} from "./mockData";
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

	constructor(parent: HTMLElement, width: number, height: number) {
		super(parent)
		const canvas: Control<HTMLCanvasElement> = new Control(parent, 'canvas')
		this.width = canvas.node.width = width
		this.height = canvas.node.height = height
		this.ctx = canvas.node.getContext('2d')
		this.xPointToDrawData = new Map()
		this.yPointToDrawData = new Map()
		this.draw()
		this.axis = new Axis(this.width, this.height, canvas.node, this.ctx)
		this.xPointToDrawData = this.axis.getCoordsData('x')
		this.yPointToDrawData = this.axis.getCoordsData('y')
		this.bars = new Bars(this.ctx, barRangeData, 'day', 'time', this.xPointToDrawData, this.yPointToDrawData)
	}
	draw() {
		this.ctx.clearRect(0, 0, this.width, this.height)
		this.ctx.fillStyle = '#98d2c0'
		this.ctx.fillRect(0, 0, this.width, this.height)
	}

	deleteFromCanvas(data: chooseDateComponent) {
		//console.log(barRangeData.find(e => +e.day == data.data),'Del')
		this.bars.deleteBarFromCanvas(barRangeData.find(e => +e.day == data.data), 'day', 'time')
	//	this.addBarToDataObject(data)
	}

	addBar(data: chooseDateComponent) {
		//console.log(data)
		this.addBarToDataObject(data)
		this.bars.drawOneBarOnCanvas(barRangeData.find(e => +e.day == data.data), 'day', 'time')

	}

	addBarToDataObject (data: chooseDateComponent) {
		const el = barRangeData.find(e => +e.day == data.data)
		el.time = [data.from, data.to]
		return el
	}
}