import { Server } from "http";
import { connection, IUtf8Message, request } from "websocket";
import {IConnection, IServerRequestMessage, IServerResponseMessage} from "./dto";
const websocket = require("websocket");

class Session {
	private _connection: IConnection;
	private id:string;

	constructor(msg: IServerRequestMessage, connection:IConnection) {
		this.id = msg.sessionID;
	}
	get connection() { return this._connection; }
	sendUTF(r:string ):void {
		return this.connection.sendUTF(r);
	}
}

export class ServerSocket {
	connections: Map<string, Session> = new Map();
	constructor(server: Server) {
		const wsServer = new websocket.server({
			httpServer: server,
		});

		wsServer.on("request", (request: request) => {
			const _connection = request.accept(undefined, request.origin);

			_connection.on("message", (_message) => {
				if (_message.type === "utf8") {
					const message = _message as IUtf8Message;
					const msg: IServerRequestMessage = JSON.parse(message.utf8Data);
					console.log(msg.type, msg.sessionID);
					//if (msg.type === 'createMap'){...}
				}
			});
		});
	}
	response(response: IServerResponseMessage) {
		//this.connections.get(response.sessionID).sendUTF(JSON.stringify(response));
	}
}

export { Session };
