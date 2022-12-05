import request from "supertest"; 
import {App} from "../src/main/App";

let server : App

describe('Testing on API REST', () => {

    beforeAll(async () => {
        const server = new App()
        await server.start()

    })
    afterAll(async () => {
    });

    describe('GET /nomination', () => {

        it('Route call is working and returns 200 status code', async () => {
            const response = await request(server).get('/nomination');
            expect(response.statusCode).toBe(200);
            expect(response.headers['content-type']).toContain('json');
        });

        it('Request returns an array, with no nominations', async () => {
            const response = await request(server).get('/nomination');
            expect(response.body).toBeInstanceOf(Array);
            expect(response.body).toEqual(Array);

        });

    });

})


