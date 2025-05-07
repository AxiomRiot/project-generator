import { useRef, useState } from "react";

import ProjectTypeButton from "./ProjectTypeButton";

import { generateProject } from "../services/generatorApi";

const SUPPORTED_PROJECTS = [
  {text: "Node (Basic)", type: "node-basic"},
  {text: "Node (Express)", type: "node-express"},
  {text: "React)", type: "react"},
  {text: "Python", type: "python"},
  {text: "Electron", type: "electron"}
]

export default function ProjectGenerator() {

  const projectNameRef = useRef(null);

  function handleProjectSelect(project: string) {
    if(projectNameRef.current){
      generateProject(projectNameRef.current, project);
    }
  }

  return (
    <div>
      <h1>Project Generator</h1>
      <div className="project-name-input">
        <label>Project Name: </label>
        <input type="text" id="name" name="name" ref={projectNameRef} required />
      </div>
      <ul>
        {
          SUPPORTED_PROJECTS.map((project, index) =>
            <li key={index}>
              <ProjectTypeButton name={project.text} onClick={() => handleProjectSelect(project.type)} />
            </li>
          )
        }
      </ul>
    </div>
  );
}
