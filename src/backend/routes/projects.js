const express = require('express');

const router = new express.Router();
const { generateProject } = require('../services/generatorApi');

router.post('/generate', async (req, res) => {
  try {
    generateProject(req.body.projectName, req.body.projectType);

    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
