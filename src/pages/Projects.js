import Project from "../components/project/Project";
import { projects } from "./../helpers/projectsList";
import gitHubIcon from "../components/btnGitHub/gitHub-black.svg";
import { CgArrowRightR } from "react-icons/cg";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                img={project.img}
                index={index}
              />
            );
          })}
          <li className="other-projects">
            <a
              href="https://github.com/BogdanKaleniuk"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <img src={gitHubIcon} alt="" />
              Other project
              <CgArrowRightR />
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Projects;
