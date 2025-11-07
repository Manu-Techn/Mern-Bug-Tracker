// Import supertest
const request = require('supertest');
const app = require('../server');

// Test the bug API
describe('Bug API', () => {
    it('should return an array of bugs', async () => {
        const res = await request(app).get('/api/bugs');
        expect(res.statusCode).toBe(200); // Expected 200 'Ok' response
        expect(Array.isArray(res.body)).toBe(true); // Expected array response
    });
});