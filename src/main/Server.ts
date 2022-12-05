import express from "express"
import helmet from "helmet"
import * as http from 'http';
import { router } from "./routes"

export class Server {

    private readonly port: string
    private readonly app: express.Express
    private httpServer?: http.Server;


    constructor(port : string) {
        this.port = port
        this.app = express()
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(helmet.xssFilter());
        this.app.use(helmet.noSniff());
        this.app.use(helmet.hidePoweredBy());
        this.app.use(helmet.frameguard({ action: 'deny' }));
        this.app.use(router)
    }

    async listen() : Promise<void> {
        return new Promise(resolve => {
            this.httpServer = this.app.listen(this.port, () => {
              console.log(
                ` Backend App is running at http://localhost:${this.port} in ${this.app.get('env')} mode`
              );
              resolve();
            });
          });
    }

    getHTTPServer() {
      return this.httpServer;
    }
  
}