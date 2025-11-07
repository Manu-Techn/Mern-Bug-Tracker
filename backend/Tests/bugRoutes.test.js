const request = require('supertest');
const app = require('../server');
const Bug = require('../Models/Bug');

// Mock the Bug model
jest.mock('../Models/Bug');

describe('Bug API', () => {
    afterEach(() => jest.clearAllMocks());

    it('GET /api/bugs should return all bugs', async () => {
        Bug.find.mockResolvedValue([{ _id: '1', title: 'Bug 1' }]);

        const res = await request(app).get('/api/bugs');
        expect(res.statusCode).toBe(200);
        expect(res.body[0].title).toBe('Bug 1');
    });

    it('POST /api/bugs should create a new bug', async () => {
        const mockBug = { _id: '2', title: 'New bug' };
        Bug.prototype.save = jest.fn().mockResolvedValue(mockBug);

        const res = await request(app)
        .post('/api/bugs')
        .send({ title: 'New bug' });

        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe('New bug');
    });

    it('PUT /api/bugs/:id should update bug status', async() => {
        const updateBug = { _id: '3', title: 'Bug 3', status: 'resolved' };
        Bug.findByIdAndUpdate.mockResolvedValue(updateBug);

        const res = await request(app)
        .put('/api/bugs/3')
        .send({ status: 'resolved' });

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('resolved');
    });

    it('DELETE /api/bugs/:id should delete bug', async () => {
    Bug.findByIdAndDelete.mockResolvedValue({});
    const res = await request(app).delete('/api/bugs/4');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Bug deleted');
});

})