const fs = require('fs');

const CONFIG = '../config/config.json';
const BUILD_DIR = '../build/';

const { createDirectory, copyFile, runCommand } = require('../lib/commands')

function loadConfig() {
  const configPath = `${__dirname}/${CONFIG}`;
  try {
    const configData = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(configData);
  } catch (error) {
    console.error('Error loading config.json:', error);
    throw error;
  }
}

export function createInitialProject(projectName) {
  const projectDir = `${BUILD_DIR}/${projectName}/src`;
  return createDirectory(projectDir);
}

export function installAdditionalPackages(projectType) {
  const configJSON = loadConfig();

  const projectObject = configJSON[projectType];
  if (!projectObject) {
    throw new Error(`Project Type [${projectType}] not supported!`);
  }

  try {}

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
