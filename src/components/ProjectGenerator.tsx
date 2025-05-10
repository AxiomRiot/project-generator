import { useRef } from 'react';

import ProjectTypeButton from './ProjectTypeButton';

import { sendCreateInitialProjectReq } from '../services/projectAPI';
import '../styles/App.css';

const SUPPORTED_PROJECTS = [
  { text: 'Node (Basic)', type: 'node-basic' },
  { text: 'Python', type: 'python' },
  { text: 'Node (Express)', type: 'node-express' },
  { text: 'React', type: 'react' },
  { text: 'Electron', type: 'electron' },
]

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
        {SUPPORTED_PROJECTS.map((project, index) => (
          <ProjectTypeButton
            key={index}
            name={project.text}
            onClick={() => handleProjectSelect(project.type)}
          />
        ))}
      </div>
    </div>
  );
}
