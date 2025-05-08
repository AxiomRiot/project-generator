const fs = require('fs');

const CONFIG = '../config/config.json';
const BUILD_DIR = '../build/';

const COMMAND_KEY = 'command';
const ADDITIONAL_PACKAGES_KEY = 'additional-packages';

const { createDirectory, copyFile, runCommand } = require('../lib/commands');

function loadConfig(projectType) {
  const configPath = `${__dirname}/${CONFIG}`;
  const configData = fs.readFileSync(configPath, 'utf-8');
  const projectObject = JSON.parse(configData)[projectType];

  if (!projectObject) {
    throw new Error(`Project Type [${projectType}] not supported!`);
  }

  return projectObject;
}

export function createInitialProject(projectName, projectType) {
  const projectDir = `${BUILD_DIR}/${projectName}/src`;
  createDirectory(projectDir);

  const projectObject = loadConfig(projectType);
  const initialProjectCommand = projectObject[COMMAND_KEY];

  runCommand(initialProjectCommand, projectDir);
}

export function installAdditionalPackages(projectType) {
  const configJSON = loadConfig();

  const projectObject = loadConfig(projectType);
  if (!projectObject) {
    throw new Error(`Project Type [${projectType}] not supported!`);
  }

  const additionalPackages = projectObject[ADDITIONAL_PACKAGES_KEY];

  try {

  } catch (error) {

  }
}

export function generateProject(projectName, projectType) {


  // Create Root Project Directory
  const projectDir = `${BUILD_DIR}/${projectName}/src`;
  createDirectory(projectDir);




  // Create Project Directories
  const directories = projectObject['directories'];
  directories.forEach(directory => {
    const directoryPath = `${projectDir}/${directory}`;
    createDirectory(directoryPath);
  });
}
