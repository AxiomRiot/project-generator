import { useEffect, useRef, useState } from 'react';

import ProjectTypeButton from './ProjectTypeButton';

import sendPostReq from '../services/projectAPI';
import '../styles/App.css';

const API_CALLS = [
  {
    id: 1,
    text: 'Executed Initial Project Setup',
    endpoint: 'initial-project',
  },
  {
    id: 2,
    text: 'Installed Additional Packages',
    endpoint: 'additional-packages',
  },
  {
    id: 3,
    text: 'Created Project Directories',
    endpoint: 'create-directories',
  },
];

const SUPPORTED_PROJECTS = [
  { text: 'Node (Basic)', type: 'node-basic' },
  { text: 'Python', type: 'python' },
  { text: 'Node (Express)', type: 'node-express' },
  { text: 'React', type: 'react' },
  { text: 'Electron', type: 'electron' },
];

export default function ProjectGenerator() {
  const projectNameRef = useRef<HTMLInputElement>(null);
  const [statuses, setStatuses] = useState(
    API_CALLS.map((api) => ({ ...api, status: 'pending' })),
  );

  function handleSetStatuses(id: number, status: string) {
    setStatuses((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status } : item)),
    );
  }

  async function handleProjectSelect(project: string) {
    const projectName = projectNameRef.current
      ? projectNameRef.current.value
      : '';

    if (projectName) {
      // eslint-disable-next-line no-restricted-syntax
      for (const apiCall of API_CALLS) {
        try {
          const response = await sendPostReq(
            projectName,
            project,
            apiCall.endpoint
          );

          if (response !== '') {
            handleSetStatuses(apiCall.id, 'failed');
          } else {
            handleSetStatuses(apiCall.id, 'succeeded');
          }
        } catch (error) {
          handleSetStatuses(apiCall.id, 'failed');
        }
      }
    }
  }

  return (
    <div>
      <h1>Project Generator</h1>
      <div className="project-name-input">
        <label>Project Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          ref={projectNameRef}
          required
        />
      </div>
      <div className="button-grid">
        {SUPPORTED_PROJECTS.map((project) => (
          <ProjectTypeButton
            key={project.type}
            name={project.text}
            type={project.type}
            onClick={() => handleProjectSelect(project.type)}
          />
        ))}
      </div>
      <div className="api-calls">
        <ul className="api-list">
          {statuses.map((call) => (
            <li key={call.endpoint} className={call.status}>
              <p className="api-text">
                {call.status !== '' ? call.text : call.status}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
