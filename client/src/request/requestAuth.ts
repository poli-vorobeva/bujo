interface IResponse {
  status: string;
  email: string;
  password: string;
  name: string;
}

export async function requestAuth(
  email: string,
  password: string
): Promise<IResponse> {
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
