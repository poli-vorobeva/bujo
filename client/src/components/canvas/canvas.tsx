import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, IImagesArray, IIntStBgImg } from "../../dto";
import { isShape, loadImage } from "../../utils/canvas";
import {
  addImagesBgData,
  changeImagesBgData,
} from "../../reducer/canvasImgBgData";
interface IBgImgStore {
  imgBgData: IIntStBgImg;
}
interface ICanvas {
  type: "habbitImg";
}

const Canvas = ({ type }: ICanvas) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState<IImagesArray[]>([]);
  const [ctx, setCtx] = useState(null);
  const [imageId, nextImageId] = useState(0);
  const imgInState = useSelector(
    (state: IBgImgStore) => state.imgBgData.data[type]
  );

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const canvasObj = canvasRef.current;
    const context = canvasObj.getContext("2d");
    context.clearRect(0, 0, 600, 500);
    setCtx(context);
  }, []);

  useEffect(() => {
    setImages(imgInState);

    nextImageId(imgInState.length);
  }, [imgInState]);

  useEffect(() => {
    if (!ctx) {
      return;
    }
    const src = images.map((it) => loadImage(it.src));
    Promise.all(src).then((img) => {
      ctx.clearRect(0, 0, 600, 500);
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
    e.preventDefault();
    const x = e.pageX;
    const y = e.pageY;
    const name = e.dataTransfer.getData("name");
    const id = type + imageId;
    const src = e.dataTransfer.getData("src");
    const widthImg = e.dataTransfer.getData("width");
    const heightImg = e.dataTransfer.getData("height");
    dispatch(
      addImagesBgData({
        data: {
          id,
          name,
          src,
          coordinate: { x, y },
          width: +widthImg,
          height: +heightImg,
        },
        type,
      })
    );
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
        return;
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
        dispatch(changeImagesBgData({ data: it, type }));
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

export default Canvas;
