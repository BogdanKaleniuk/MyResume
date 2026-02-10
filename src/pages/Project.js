import { useParams, useNavigate } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import { IoMdArrowRoundBack } from "react-icons/io";
const Project = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects[id];
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <div>
            <h1 className="title-1 btnAndTitle">
              <IoMdArrowRoundBack
                className="btn-back-icon"
                onClick={() => navigate("/projects")}
              />
              {project.title}
            </h1>
          </div>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          <a
            href={project.gitHubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-demo"
          >
            Live Demo
          </a>
          {project.gitHubLink && <BtnGitHub gitHubLink={project.gitHubLink} />}
        </div>
      </div>
    </main>
  );
};
// s
export default Project;
