import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

const BtnGitHub = ({ gitHubLink }) => {
  return (
    <a
      href={gitHubLink}
      target="_blank"
      rel="noreferrer"
      className="btn-outline"
    >
      <img src={gitHubIcon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
