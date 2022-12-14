import { IResponseHabbits, IHabbitsData } from "../dto";

export async function requestHabbits(email: string): Promise<IResponseHabbits> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "habbits",
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

interface IDataChange {
  idHabbit: string;
  value: string;
}

export async function requestHabbitsChange(
  data: IHabbitsData
): Promise<IResponseHabbits> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "http://localhost:5000/api/" + "habbits/changeHabbits",
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
// interface IInputChange {
//   idHabbit: string;
//   idEl: string;
//   value: boolean;
// }

// export async function requestHabbitsChangeInput(
//   data: IInputChange
// ): Promise<IResponseHabbits> {
//   try {
//     const response = await fetch(
//       //'http://localhost:5000/'
//       "http://localhost:5000/api/" + "habbits/changeinput",
//       {
//         method: "POST",
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       }
//     );
//     return response.json();
//   } catch (e) {
//     throw new Error(e);
//   }
// }
// export async function requestHabbitAddNew(): Promise<IResponseHabbits> {
//   try {
//     const response = await fetch(
//       //'http://localhost:5000/'
//       "http://localhost:5000/api/" + "habbits/addnewhabbit",
//       {
//         method: "POST",
//         headers: {
//           "Access-Control-Allow-Origin": "*",
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.json();
//   } catch (e) {
//     throw new Error(e);
//   }
// }
