import { Server } from "./Server";
import { dbConnect } from "../context/Members/infrastructure/mongo/db/mongo";

export class BackendApp {
    server?: Server

    async start() {
        const port = process.env.PORT || '5001' 
        this.server = new Server(port)
        dbConnect().then()
        return this.server.listen()
    }

}