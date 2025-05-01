import * as fs from 'fs';
        
export async function createDirectory (directoryPath: string): Promise<boolean> {
  try {
    const result = await fs.promises.mkdir(directoryPath, { recursive: true });
    return result != "" ? true : false;
    
  } catch (error: any) {
    if (error.code === 'EEXIST') {
      console.log(`Folder already exists at ${directoryPath}`);
    } else {
      console.error(`Error creating folder: ${error.message}`);
    }

    return false;
  }
}

export async function copyFile(sourcePath: string, destinationPath: string): Promise<boolean> {
  try {
    await fs.promises.copyFile(sourcePath, destinationPath, fs.constants.COPYFILE_FICLONE);

    return true;
  } catch (error: any) {
    console.error(`Error copying file: ${error.message}`);

    return false;
  }
}