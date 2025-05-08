const fs = require('fs');
const { exec } = require('child_process');

async function createDirectory(directoryPath) {
  try {
    const result = await fs.promises.mkdir(directoryPath, { recursive: true });

    if (!result) {
      throw new Error('Failed to create directory!');
    }
  } catch (error) {
    if (error.code === 'EEXIST') {
      throw new Error(`Folder already exists at ${directoryPath}`);
    } else {
      throw new Error(`Error creating folder: ${error.message}`);
    }
  }
}

async function copyFile(sourcePath, destinationPath) {
  try {
    await fs.promises.copyFile(
      sourcePath,
      destinationPath,
      fs.constants.COPYFILE_FICLONE,
    );
  } catch (error) {
    throw new Error(`Error copying file: ${error.message}`);
  }
}

async function runCommand(command, workingDirectory) {
  exec(command, { cwd: workingDirectory }, (error) => {
    if (error) {
      throw new Error(`Error executing command: ${error}`);
    }
  });
}

module.exports = {
  createDirectory,
  copyFile,
  runCommand,
};
