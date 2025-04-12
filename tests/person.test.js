const { expect, test, describe, beforeAll } = require('@jest/globals');
const http = require('http');
const app = require('../app.js');

const BASE_URL = 'http://localhost:1999';
const PERSON_API = '/api/person';

let server;

// jest.setTimeout(3000); // Set global timeout to 3 seconds

// beforeAll(async () => {
//   server = http.createServer(app);
//   await new Promise((resolve) => server.listen(1999, resolve));
//   // Optional delay to ensure server is fully ready
//   await new Promise((res) => setTimeout(res, 500));
// });

// afterAll(async () => {
//   await new Promise((resolve) => server.close(resolve));
// });

describe('Person API Tests (fetch)', () => {
  test('POST /api/person', async () => {
    const payload = { name: 'John Doe', age: 30 };
    const response = await fetch(`${BASE_URL}${PERSON_API}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    expect(response.status).toBe(201);
  });

  test('GET /api/person', async () => {
    const response = await fetch(`${BASE_URL}${PERSON_API}`);
    expect(response.status).toBe(200);
  });

  test('GET /api/person/0', async () => {
    const response = await fetch(`${BASE_URL}${PERSON_API}/0`);
    expect(response.status).toBe(200);
  });

  test('GET /api/person/42 should return 404', async () => {
    const response = await fetch(`${BASE_URL}${PERSON_API}/42`);
    expect(response.status).toBe(404);
  });

  test('PATCH /api/person/0', async () => {
    const payload = { name: 'John Blue', age: 18 };
    const response = await fetch(`${BASE_URL}${PERSON_API}/0`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    expect(response.status).toBe(200);
  });

  test('DELETE /api/person/0', async () => {
    const response = await fetch(`${BASE_URL}${PERSON_API}/0`, {
      method: 'DELETE'
    });

    expect(response.status).toBe(204);
  });

  test('GET /42 should return 404', async () => {
    const response = await fetch(`${BASE_URL}/42`);
    expect(response.status).toBe(404);
  });
});
