interface ProjectTypeButtonProps {
  name: string;
  type: string;
  onClick: () => void;
}

export default function ProjectTypeButton({
  name,
  type,
  onClick,
}: ProjectTypeButtonProps) {
  const className = `project-button ${type}`;

  return (
    <div>
      <button className={className} type="button" onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
