const request = require('supertest')
const app = require('./app.js')

test("return 200 for a valid stats request", async () => {
    const response = await request(app).get('/api/stats');
    expect(response.statusCode).toBe(200);
});

test("return 200 for a valid surprise request", async () => {
    let url = '/api/surprise?name=Damon_Albarn&birth_year=1968';
    const response = await request(app).get(url);
    expect(response.statusCode).toBe(200);
});

test("return 400 for an invalid surprise request", async () => {
    let url = '/api/surprise?name=Alex_Turner';
    const response = await request(app).get(url);
    expect(response.statusCode).toBe(400);
});