import { useRef } from 'react';

import ProjectTypeButton from './ProjectTypeButton';

import { sendCreateInitialProjectReq } from '../services/projectAPI';
import '../styles/App.css';

const API_CALLS = [
  {
    text: 'Executing Initial Project Setup',
    endpoint: '/initial-project',
    status: 'pending',
  },
  {
    text: 'Installing Additional Packages',
    endpoint: '/additional-packages',
    status: 'pending',
  },
  {
    text: 'Creating Project Directories',
    endpoint: '/create-directories',
    status: 'pending',
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

  const projectNameRef = useRef(null);

  function handleProjectSelect(project: string) {
    const projectName = projectNameRef.current.value;

    if (projectName) {
      sendCreateInitialProjectReq(projectName, project);
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
          {API_CALLS.map((call) => (
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
