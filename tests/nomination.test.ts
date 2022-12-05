import request from "supertest"; 
import {App} from "../src/main/App";

let app : App

describe('Testing API REST', () => {

    beforeAll(async () => {
        app = new App()
        await app.start()

    })

    afterAll(async () => {
    });

    describe('GET /nomination', () => {

        it('Controller call returns 401 status code due to middleware', async () => {
            const response = await request(app.httpServer).get('/nomination');
            expect(response.statusCode).toBe(401);
        });

        it('Controller returns 200 status code when submitting adequate request', async () => {
            const response = await request(app.httpServer).get('/nomination').send({ 
                role: "ADMIN", 
              });
            expect(response.statusCode).toBe(200);
        });

        it('Controller returns JSON headers when request succeeds', async () => {
            const response = await request(app.httpServer).get('/nomination').send({ 
                role: "ADMIN", 
              });
            expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
        });

        it('Controller returns response body object with nominations field and array of results', async () => {
            const response = await request(app.httpServer).get('/nomination').send({ 
                role: "ADMIN", 
              });;
            
            expect(response.body).toEqual(expect.objectContaining({ nominations : expect.any(Array)}));
        });

    });

})


