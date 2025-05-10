interface ProjectTypeButtonProps {
  name: string;
  onClick: () => void;
}

export default function ProjectTypeButton({
  name,
  onClick,
}: ProjectTypeButtonProps) {
  return (
    <div>
      <button className="project-button" type="button" onClick={onClick}>
        {name}
      </button>
    </div>
  );
}
