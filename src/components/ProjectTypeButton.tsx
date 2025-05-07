export default function ProjectTypeButton({ name, onClick }) {
  return (
    <div>
      <button className="project-button" type="button" onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
