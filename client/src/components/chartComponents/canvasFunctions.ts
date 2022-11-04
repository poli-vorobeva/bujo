export const drawXAxis=(ctx:CanvasRenderingContext2D,width:number,height:number)=>{
	ctx.beginPath(); //x axis
	ctx.moveTo(width * 0.1, height * 0.9);
	ctx.lineTo(width * 0.9, height * 0.9);

	ctx.lineTo(width * 0.89, height * 0.89)
	ctx.moveTo(width * 0.9, height * 0.9)
	ctx.lineTo(width * 0.89, height * 0.91)
	ctx.strokeStyle = 'black';
	ctx.stroke();
}
export const drawYAxis=(ctx:CanvasRenderingContext2D,width:number,height:number)=>{
	ctx.beginPath();       // y axis
	ctx.moveTo(height * 0.1, width * 0.9);
	ctx.lineTo(height * 0.1, width * 0.1);
	ctx.lineTo(height * 0.11, width * 0.11)
	ctx.moveTo(height * 0.1, width * 0.1)
	ctx.lineTo(height * 0.09, width * 0.11)
	ctx.strokeStyle = 'black';
	ctx.stroke();
}
export const getXAxisData =<T extends object,U extends keyof T>(data:T[],key:U)=>data.map(el=> el[key])
export const getYAxisData=<T extends object,U extends keyof T>(data:T[],key:U)=>{
	const set:number[]=[]
	data.forEach(d=>set.push(...d[key] as Array<number>))
	return Array.from(new Set([...set]))
}

export const sortDefault=(data:number[])=>{
	const cAr=data.slice()
	return cAr.sort((a,b)=>a-b)
}

export const drawCircle=(ctx:CanvasRenderingContext2D,x:number,y:number,r:number)=>{
	ctx?.moveTo(x, y)
	ctx?.arc(x, y, r, 0, 2 * Math.PI);
	ctx?.stroke();
}

export const verticalLine=(ctx:CanvasRenderingContext2D,x:number,y1:number,y2:number)=>{
	ctx?.moveTo(x, y1)
	ctx?.lineTo(x, y2)
	ctx?.stroke();
}