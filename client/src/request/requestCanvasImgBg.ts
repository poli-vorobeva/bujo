import { IImagesArray, IImgBgResponse } from "../dto";

export async function requestGetImagesData(
  email: string,
  type: string
): Promise<IImgBgResponse> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "canvasimgbg",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, type }),
      }
    );
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
export async function requestAddImagesData(
  data: IImagesArray,
  type: string
): Promise<IImgBgResponse> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "canvasimgbg/add",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, type }),
      }
    );
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
export async function requestChangeImagesData(
  data: IImagesArray,
  type: string
): Promise<IImgBgResponse> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "canvasimgbg/change",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data, type }),
      }
    );
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
