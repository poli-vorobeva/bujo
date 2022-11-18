import { IResponseCanvasChart } from "../dto";

export async function requestCanvasChart(email: string): Promise<IResponseCanvasChart> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "canvaschart",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}

export interface IDataChange {
  day: string;
  timeFrom: number;
  timeTo: number;
}

export async function requestCanvasChartChange(
  data: IDataChange
): Promise<IResponseCanvasChart> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "canvaschart/change",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
