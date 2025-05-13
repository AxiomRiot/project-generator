const BASE_URL = 'http://localhost:3000';

export default async function sendPostReq(
  projectName: string,
  projectType: string,
  endpoint: string,
) {
  const url = `${BASE_URL}/${endpoint}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ projectName, projectType }),
  });

  if (response.ok) {
    return '';
  }

  return response.statusText;
}
