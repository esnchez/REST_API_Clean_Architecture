import { Server } from "./Server";

export class BackendApp {
    server?: Server

    async start() {
        const port = process.env.PORT || '5001' 
        this.server = new Server(port)
        return this.server.listen()
    }

}