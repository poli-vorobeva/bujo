import {IResponseUserData} from '../dto';

export async function requestAuth(
  email: string,
  password: string
): Promise<IResponseUserData> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "auth",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}
