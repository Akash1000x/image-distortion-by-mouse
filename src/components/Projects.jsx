import { projects } from "./data";

export default function Projects({ setActiveProject }) {
  return (
    <div className="relative mix-blend-difference text-white z-10 h-screen w-full">
      <ul
        onMouseLeave={() => {
          setActiveProject(null);
        }}
        className="border-b"
      >
        {projects.map((project, i) => {
          return (
            <li
              onMouseOver={() => {
                setActiveProject(i);
              }}
              key={i}
              className="text-[4vw] p-5 border-t"
            >
              <p>{project.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
