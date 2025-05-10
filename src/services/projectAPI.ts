import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

async function sendPostReq(
  projectName: string,
  projectType: string,
  endpoint: string,
) {
  try {
    await axios.post(`${BASE_URL}/${endpoint}`, {
      projectName,
      projectType,
    });

    return undefined;
  } catch (error) {
    return error;
  }
}

export async function sendCreateInitialProjectReq(
  projectName: string,
  projectType: string,
) {
  return sendPostReq(projectName, projectType, 'initial-project');
}

export async function sendInstallAdditionalPackagesReq(
  projectName: string,
  projectType: string,
) {
  return sendPostReq(projectName, projectType, 'additional-packages');
}

export async function sendCreateDirectoriesReq(
  projectName: string,
  projectType: string,
) {
  return sendPostReq(projectName, projectType, 'create-directories');
}
