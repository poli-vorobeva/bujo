import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  AppDispatch,
  IImagesArray,
  IStateDataBgCanvas,
  ISettingImg,
} from "../../dto";
import { isShape, loadImage } from "../../utils/canvas";
import {
  addImagesToBg,
  changeImagesInBg,
  deleteImagesInBg,
  addImagesBgData,
} from "../../reducer/canvasImgBgData";

interface IBgImgStore {
  imgBgData: IStateDataBgCanvas;
}
interface ICanvas {
  type: "habbitImg";
  width: number;
  height: number;
  isDelete: boolean;
}

const CanvasComponent = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Canvas = ({ type, width, height, isDelete }: ICanvas) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState<IImagesArray[]>([]);
  const [setting, setSetting] = useState<ISettingImg>({
    opacity: 1,
    color: "#000000",
  });
  const [ctx, setCtx] = useState(null);
  const [imageId, nextImageId] = useState(0);
  const imgInState = useSelector(
    (state: IBgImgStore) => state.imgBgData.data[type]
  );
  const dispatch = useDispatch<AppDispatch>();
  window.onbeforeunload = function () {
    dispatch(addImagesBgData({ type, data: imgInState }));
  };

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const context = canvasObj.getContext("2d");
    context.clearRect(0, 0, width, height);
    setCtx(context);
  }, []);

  useEffect(() => {
    setImages(imgInState.pictures);
    setSetting(imgInState.setting);
    if (!imgInState.pictures) {
      return;
    }
    const lastId = imgInState.pictures[imgInState.pictures.length - 1];
    //id буде на сервері формуватись
    if (lastId) {
      nextImageId(+lastId.id + 1);
      return;
    }
    nextImageId(imgInState.pictures.length);
  }, [imgInState]);

  useEffect(() => {
    if (!ctx) {
      return;
    }
    ctx.globalAlpha = setting.opacity;
    const src = images.map((it) => loadImage(it.src));
    Promise.all(src).then((img) => {
      ctx.clearRect(0, 0, width, height);
      images.forEach((item, index) => {
        ctx.drawImage(
          img[index],
          item.coordinate.x,
          item.coordinate.y,
          item.width,
          item.height
        );
      });
    });
  }, [images, setting]);

  const handleDrop = (e: React.DragEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const x = e.nativeEvent.offsetX;
    const y = e.nativeEvent.offsetY;
    const name = e.dataTransfer.getData("name");
    const id = String(imageId);
    const src = e.dataTransfer.getData("src");
    const widthImg = e.dataTransfer.getData("width");
    const heightImg = e.dataTransfer.getData("height");
    dispatch(
      addImagesToBg({
        data: {
          id,
          name,
          src,
          coordinate: { x: x - +widthImg / 2, y: y - +heightImg / 2 },
          width: +widthImg,
          height: +heightImg,
        },
        type,
      })
    );
  };

  const handleMouseDown = (e: React.DragEvent<HTMLCanvasElement>) => {
    for (let i = images.length - 1; i > 0; i--) {
      if (
        isShape(
          e,
          images[i].coordinate.x,
          images[i].coordinate.y,
          images[i].width,
          images[i].height
        )
      ) {
        if (isDelete) {
          dispatch(deleteImagesInBg({ type, data: images[i] }));
          return;
        }
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
              ? {
                  ...item,
                  coordinate: {
                    x: e.nativeEvent.offsetX - item.width / 2,
                    y: e.nativeEvent.offsetY - item.height / 2,
                  },
                }
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
        dispatch(changeImagesInBg({ data: it, type }));
      }
    });
  };

  return (
    <CanvasComponent
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      width={width}
      height={height}
      ref={canvasRef}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    />
  );
};

export default Canvas;
