const BASE_URL = 'http://localhost:3000';

async function sendPostReq(
  projectName: string,
  projectType: string,
  endpoint: string,
) {
  const url = `${BASE_URL}/${endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({ projectName, projectType }),
  });

  if (response.ok) {
    return '';
  }

  return response.statusText;
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
