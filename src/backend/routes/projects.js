const express = require('express');

const router = new express.Router();
const {
  createInitialProject,
  installAdditionalPackages,
  createProjectDirectories,
} = require('../services/generatorService');

router.post('/initial-project', async (req, res) => {
  console.log('Received POST Request');
  try {
    await createInitialProject(req.body.projectName, req.body.projectType);

    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/additional-packages', async (req, res) => {
  try {
    const additionalPackages = await installAdditionalPackages(
      req.body.projectName,
      req.body.projectType,
    );

    res.status(200).send({ additionalPackages });
  } catch (e) {
    res.status(400).send(e);
  }
});

router.post('/create-directories', async (req, res) => {
  try {
    await createProjectDirectories(req.body.projectName, req.body.projectType);

    res.status(201).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
