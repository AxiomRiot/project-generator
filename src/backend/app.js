const express = require('express');
const cors = require('cors');
const projectRouter = require('./routes/projects');

const app = express();

app.use(express.json());
app.use(cors());
app.use(projectRouter);

module.exports = app;
