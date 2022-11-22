import React, { useEffect, useRef } from "react";

interface ILocation {
  x: number;
  y: number;
}
const CanvasHabbit = () => {
  const canvasRef = useRef(null);
  const handleCanvasClick = (
    e: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    // console.log(ctx)
    draw(ctx, { x: e.clientX - 50, y: e.clientY - 50 });
  };
  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext("2d");
    ctx.clearRect(0, 0, 800, 500);

    const coordinates = [
      { x: 100, y: 100 },
      { x: 200, y: 200 },
    ];
    //coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
  }, []);

  return (
    <canvas
      onClick={handleCanvasClick}
      width={800}
      height={500}
      ref={canvasRef}
    />
  );
};

export default CanvasHabbit;

// const coordinates = [{x:50,y:100},{x:100,y:200}];
//         coordinates.forEach((coordinate)=>{draw(ctx, coordinate)});
function draw(ctx: CanvasRenderingContext2D, location: ILocation) {
  const heartSVG =
    "M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z";
  const SVG_PATH = new Path2D(heartSVG);

  // Scaling Constants for Canvas
  const SCALE = 0.1;
  const OFFSET = 80;
  ctx.fillStyle = "red";
  ctx.shadowColor = "blue";
  ctx.shadowBlur = 15;
  ctx.save();
  ctx.scale(SCALE, SCALE);
  ctx.translate(location.x / SCALE - OFFSET, location.y / SCALE - OFFSET);
  ctx.rotate((225 * Math.PI) / 180);
  ctx.fill(SVG_PATH);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();
}
