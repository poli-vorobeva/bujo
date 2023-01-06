import { IResponseUserData } from "../dto";

export async function requestReg(
  email: string,
  name: string,
  password: string
): Promise<IResponseUserData> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "reg",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      }
    );
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
