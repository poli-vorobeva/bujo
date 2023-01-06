//import { AxiosResponse } from "axios";
//import axios from "axios";

export async function test(): Promise<any> {
  try {
    const response = await fetch(
      //'http://localhost:5000/'
      "api/photos",
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ dd: "req - someData from client" }),
      }
    );
    return response;
  } catch (e) {
    console.log(e.message);
  }
}
//
// export function requestToServer(){
// 	fetch('http://localhost:3000/', {
// 		method: 'POST',
// 		body: JSON.stringify({
// 			type:'start'
// 		}),
// 		mode:"no-cors",
// 		headers: {
// 			'Access-Control-Allow-Origin':'*',
// 			'Content-type': 'application/json; charset=UTF-8',
// 		},
//
// 	})
// 		.then((response) => {
// 			const res=response.json()
// 			console.log("RES",res)
// 			return res
// 		})
// 		.then((data) => {
// 			console.log(data);
// 			// Handle data
// 		})
// 		.catch((err) => {
// 			return err;
// 		});
// }
