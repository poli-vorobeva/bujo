import { typeDataForChart } from "../components/chartComponents/mockData";

interface IResponse {
  status: string;
  data: typeDataForChart;
}

interface IDataChart {
  data: typeDataForChart;
}
export async function requestCanvasChart(email: string): Promise<IResponse> {
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
