export const loadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => {
      resolve(image);
    };
    image.src = src;
  });
};

export const isShape = (
  e: React.DragEvent<HTMLCanvasElement>,
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return (
    e.pageX > x - width / 2 &&
    e.pageX < x + width / 2 &&
    e.pageY > y - height / 2 &&
    e.pageY < y + height / 2
  );
};
