interface ProjectInputProps {
  label: string;
  inputRef: React.RefObject<HTMLInputElement>;
}

export default function ProjectInput({ label, inputRef }: ProjectInputProps) {
  return (
    <div className="project-input">
      <label>{label}</label>
      <input type="text" id="name" name="name" ref={inputRef} required />
    </div>
  );
}
