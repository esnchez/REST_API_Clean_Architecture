import request from "supertest"; 
import {App} from "../src/main/App";
import {MemberNominationRequest} from "../src/context/Members/domain/entities/MemberNomination" 

let app : App

const nomination : MemberNominationRequest = {
    emailRef: "testRef@test.com",
    emailNom: "test2Nom@test.com",
    description: "test_description",
    communityScore: 5,
    talentScore: 5
}




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

    describe('POST /nomination', () => {

        it('Controller call returns 500 status code on empty request', async () => {
            const response = await request(app.httpServer).post('/nomination').send({});
            expect(response.statusCode).toBe(500);
        });

        it('Controller returns 201 status code when submitting adequate request', async () => {
            const response = await request(app.httpServer).post('/nomination').send(nomination);
            expect(response.statusCode).toBe(201);
        });

    });

})


