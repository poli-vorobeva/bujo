import React, { useEffect, useRef, useState } from "react";
import { isReadable } from "stream";

interface ILocation {
  x: number;
  y: number;
}

interface IImagesArray {
  id: string;
  name: string;
  src: string;
  coordinate: {
    x: number;
    y: number;
  };
  width: number;
  height: number;
  isMove: boolean;
  img: Promise<HTMLImageElement>;
}

const CanvasHabbit = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState<IImagesArray[]>([]);
  const [ctx, setCtx] = useState(null);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const context = canvasObj.getContext("2d");
    context.clearRect(0, 0, 600, 500);
    setCtx(context);
  }, []);

  useEffect(() => {
    Promise.all(images.map((it) => it.img)).then((img) => {
      ctx.clearRect(0, 0, 600, 500);
      console.log(images);
      images.forEach((item, index) => {
        ctx.drawImage(
          img[index],
          item.coordinate.x - 170,
          item.coordinate.y - 50,
          item.width,
          item.height
        );
      });
    });
  }, [images]);

  const handleDrop = (e: React.DragEvent<HTMLCanvasElement>) => {
    const x = e.pageX;
    const y = e.pageY;
    e.preventDefault();
    const name = e.dataTransfer.getData("name");
    const id = e.dataTransfer.getData("id");
    const widthImg = e.dataTransfer.getData("width");
    const heightImg = e.dataTransfer.getData("height");
    setImages((st) => [
      ...st,
      {
        id,
        name,
        src: "../../assets/png/" + name + ".png",
        coordinate: { x, y },
        width: +widthImg,
        height: +heightImg,
        isMove: false,
        img: loadImage("../../assets/png/" + name + ".png"),
      },
    ]);
    // loadImage(id).then((img) => {
    //   ctx.drawImage(img, x-120-50, y -50, 100, 100);
    // });
  };

  const handleMouseDown = (e: React.DragEvent<HTMLCanvasElement>) => {
    for (let i = images.length - 1; i >= 0; i--) {
      if (
        isShape(
          e,
          images[i].coordinate.x,
          images[i].coordinate.y,
          images[i].width,
          images[i].height
        )
      ) {
        setImages(
          images.map((item) =>
            item.id === images[i].id ? { ...item, isMove: true } : item
          )
        );
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  const handleMouseMove = (e: React.DragEvent<HTMLCanvasElement>) => {
    images.forEach((it) => {
      if (it.isMove) {
        setImages(
          images.map((item) =>
            item.id === it.id
              ? { ...item, coordinate: { x: e.pageX, y: e.pageY } }
              : item
          )
        );
      }
    });
  };

  const handleMouseUp = (e: React.DragEvent<HTMLCanvasElement>) => {
    images.forEach((it) => {
      if (it.isMove) {
        setImages(
          images.map((item) =>
            item.id === it.id ? { ...item, isMove: false } : item
          )
        );
      }
    });
  };
  return (
    <canvas
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      width={600}
      height={500}
      ref={canvasRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
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

const loadImage = (src: string): Promise<HTMLImageElement> => {
  console.log(src);
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.src = src;
  });
};

const isShape = (
  e: React.DragEvent<HTMLCanvasElement>,
  x: number,
  y: number,
  width: number,
  height: number
) => {
  console.log(e.pageY, y - height / 2);
  return (
    e.pageX > x - width / 2 &&
    e.pageX < x + width / 2 &&
    e.pageY > y - height / 2 &&
    e.pageY < y + height / 2
  );
};
