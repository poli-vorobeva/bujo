interface IResponse {
  status: string;
  name: string;
  password: string;
  email: string;
}

export async function requestReg(
  email: string,
  name: string,
  password: string
): Promise<IResponse> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/" + "reg",
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
