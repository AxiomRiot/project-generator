const request = require('supertest');
const app = require('../backend/app');

test('Create Initial Project Setup', async () => {
  await request(app)
    .post('/initial-project')
    .send({
      projectName: 'Test1',
      projectType: 'node-express',
    })
    .expect(201);
});

test('Additional Packages Installation', async () => {
  const response = await request(app)
    .post('/additional-packages')
    .send({
      projectName: 'Test1',
      projectType: 'node-express',
    })
    .expect(200);

  expect(response.body.additionalPackages[0]).toBe('express');
});

test('Directory Creation Setup', async () => {
  await request(app)
    .post('/create-directories')
    .send({
      projectName: 'Test1',
      projectType: 'node-express',
    })
    .expect(201);
});
