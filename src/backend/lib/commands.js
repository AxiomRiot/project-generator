const fs = require('fs');

async function createDirectory (directoryPath) {
  try {
    const result = await fs.promises.mkdir(directoryPath, { recursive: true });

    if (!result) {
      throw new Error('Failed to create directory!');
    }

    return result != "" ? true : false;

  } catch (error) {
    if (error.code === 'EEXIST') {
      console.log(`Folder already exists at ${directoryPath}`);
    } else {
      console.error(`Error creating folder: ${error.message}`);
    }

    return false;
  }
}

async function copyFile(sourcePath, destinationPath) {
  try {
    await fs.promises.copyFile(sourcePath, destinationPath, fs.constants.COPYFILE_FICLONE);

    return true;
  } catch (error) {
    console.error(`Error copying file: ${error.message}`);

    return false;
  }
}

async function runCommand(command) {

}

module.exports = {
  createDirectory,
  copyFile,
  runCommand,
}
