
const SUPPORTED_PROJECTS = [
  "Node",
  "React",
  
]

export default function ProjectGenerator() {
  return(
    <div>
      <h1>Project Generator</h1>
      <div className="project-name-input">
        <label>Project Name: </label>
        <input type="text" id="name" name="name" required />
      </div>
    </div>
  );
}