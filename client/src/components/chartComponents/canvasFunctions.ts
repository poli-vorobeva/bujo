import { typeDataForChart } from "./notUsed/mockData";

export const drawXAxis = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  horizontalLine(ctx, width * 0.1, width * 0.9, height * 0.9);
  ctx.lineTo(width * 0.89, height * 0.89);
  ctx.moveTo(width * 0.9, height * 0.9);
  ctx.lineTo(width * 0.89, height * 0.91);
  ctx.strokeStyle = "black";
  ctx.stroke();
};
export const drawYAxis = (
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number
) => {
  verticalLine(ctx, width * 0.1, height * 0.9, height * 0.1, false);
  ctx.moveTo(width * 0.1, height * 0.1);
  ctx.lineTo(width * 0.11, height * 0.11);
  ctx.moveTo(width * 0.1, height * 0.1);
  ctx.lineTo(width * 0.09, height * 0.11);
  ctx.strokeStyle = "black";
  ctx.stroke();
};
export const getXAxisData = <T extends object, U extends keyof T>(
  data: T[],
  key: U
) => data.map((el) => el[key]);
export const getYAxisData = <T extends object, U extends keyof T>(
  data: T[],
  key: U
) => {
  const set: number[] = [];
  data.forEach((d) => set.push(...(d[key] as Array<number>)));
  return Array.from(new Set([...set]));
};
export const sortDefault = (data: number[]) => {
  const cAr = data.slice();
  return cAr.sort((a, b) => a - b);
};

export const drawCircle = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  r: number
) => {
  ctx?.moveTo(x, y);
  ctx?.beginPath();
  ctx?.arc(x, y, r, 0, 2 * Math.PI);
  ctx?.stroke();
};

export const verticalLine = (
  ctx: CanvasRenderingContext2D,
  x: number,
  y1: number,
  y2: number,
  animate = false
) => {
  let currentY = y1 < y2 ? y1 : y2;
  const finishY = y1 < y2 ? y2 : y1;
  if (animate) {
    if (!x || !y1 || !y2) return;
    const stepY = currentY + 5;
    const t = setInterval(() => {
      if (currentY >= finishY) clearInterval(t);
      ctx?.moveTo(x, currentY);
      ctx?.lineTo(x, stepY);
      ctx?.stroke();
      currentY = currentY + 15 <= finishY ? currentY + 15 : finishY;
    }, 50);
  } else {
    ctx?.moveTo(x, currentY);
    ctx?.lineTo(x, finishY);
    ctx?.stroke();
  }
};
export const horizontalLine = (
  ctx: CanvasRenderingContext2D,
  x1: number,
  x2: number,
  y: number
) => {
  ctx?.moveTo(x1, y);
  ctx?.lineTo(x2, y);
  ctx?.stroke();
};
export const text = (
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  color = "gray"
) => {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};
export const getMonthsLength = (month: number) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    default:
      return 30;
  }
};
// export 	const drawAreasOnCanvas=(data: typeDataForChart)=>{
// 	canvasCtxRef.current.beginPath()
// 	canvasCtxRef.current.moveTo(startX,getYCoord(data[0].time[0]))
// 	canvasCtxRef.current.lineTo(getXCoord(data[0].day),getYCoord(data[0].time[0]))
// 	for(let i=1;i<data.length;i++){
// 		//canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[0]))
// 		//	if(data[i+1])
// 		// canvasCtxRef.current.bezierCurveTo(
// 		// getXCoord(data[i].day),getYCoord(data[i].time[0]),
// 		// getXCoord(data[i].day), getYCoord(data[i+1].time[0]),
// 		// getXCoord(data[i+1].day),getYCoord(data[i+1].time[0]));
// 		//canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[0]))
// 		//else
// 		canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[0]))
// 	}
// 	canvasCtxRef.current.lineTo(getXCoord(data[data.length-1].day),getYCoord(data[data.length-1].time[1]))
// 	for(let i=data.length-1;i>=0;i--){
// 		canvasCtxRef.current.lineTo(getXCoord(data[i].day),getYCoord(data[i].time[1]))
// 	}
// 	canvasCtxRef.current.lineTo(startX,getYCoord(data[0].time[1]))
// 	canvasCtxRef.current.stroke()
// 	canvasCtxRef.current.closePath();
// 	canvasCtxRef.current.lineWidth = 2;
// 	canvasCtxRef.current.fillStyle = 'rgba(93,221,157,0.74)';
// 	canvasCtxRef.current.fill();
// 	canvasCtxRef.current.strokeStyle = 'red';
// 	canvasCtxRef.current.stroke();
// }
