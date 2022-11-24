export interface IConnection {
	sendUTF: (data: string) => void;
	onMessage?:(message:string)=>void;
}
export interface IServerRequestMessage {
	sessionID: string;
	type: string;
	content: string;
	requestId: string;
}
export interface IServerResponseMessage {
	type: string;
	content: string;
}

interface ILocation {
	x: number;
	y: number;
  }

export interface IImagesArray {
	id: string;
	name: string;
	src: string;
	coordinate:ILocation;
	width: number;
	height: number;
  }
  