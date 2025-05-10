const fs = require('fs');

const CONFIG = '../config/config.json';
const BUILD_DIR = 'C:/Users/Zack/Projects/project-generator/src/build';

const COMMAND_KEY = 'command';
const ADDITIONAL_PACKAGES_KEY = 'additional-packages';
const DIRECTORIES_KEY = 'directories';

const { createDirectory, runCommand } = require('../lib/commands');

function loadConfig(projectType) {
  const configPath = `${__dirname}/${CONFIG}`;
  const configData = fs.readFileSync(configPath, 'utf-8');
  const projectObject = JSON.parse(configData)[projectType];

  if (!projectObject) {
    throw new Error(`Project Type [${projectType}] not supported!`);
  }

  return projectObject;
}

async function createInitialProject(projectName, projectType) {
  const projectDir = `${BUILD_DIR}/${projectName}/src`;

  await createDirectory(projectDir);

  const projectObject = loadConfig(projectType);
  const initialProjectCommand = projectObject[COMMAND_KEY];

  await runCommand(initialProjectCommand, projectDir);
}

async function installAdditionalPackages(projectName, projectType) {
  const projectDir = `${BUILD_DIR}/${projectName}/src`;

  const projectObject = loadConfig(projectType);
  if (!projectObject) {
    throw new Error(`Project Type [${projectType}] not supported!`);
  }

  const additionalPackages = projectObject[ADDITIONAL_PACKAGES_KEY];

  await Promise.all(
    additionalPackages.map(async (additionalPackage) => {
      const installCommand = `npm install ${additionalPackage}`;
      runCommand(installCommand, projectDir);
    }),
  );

  return additionalPackages;
}

async function createProjectDirectories(projectName, projectType) {
  const projectDir = `${BUILD_DIR}/${projectName}/src`;

  const projectObject = loadConfig(projectType);
  const directories = projectObject[DIRECTORIES_KEY];

  await Promise.all(
    directories.map(async (directory) => {
      const directoryPath = `${projectDir}/${directory}`;
      await createDirectory(directoryPath);
    }),
  );
}

module.exports = {
  createInitialProject,
  installAdditionalPackages,
  createProjectDirectories,
};
