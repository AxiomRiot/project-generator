import * as fs from 'fs';
import * as fsExtra from 'fs-extra';
import * as path from 'path';
        
const createFolder = async (folderPath: string): Promise<void> => {
  try {
    await fs.promises.mkdir(folderPath, { recursive: true });
  } catch (error: any) {
    if (error.code === 'EEXIST') {
      console.log(`Folder already exists at ${folderPath}`);
    } else {
      console.error(`Error creating folder: ${error.message}`);
    }
  }
}

const copyFile = ( file_path: string ) => {
  const command 
}