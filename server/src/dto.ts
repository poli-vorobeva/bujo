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