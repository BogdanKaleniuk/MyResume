import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>
            Hi, my name is <em>Bogdan</em>
          </strong>
          <br />I am a Front-End Developer
        </h1>

        <a
          href="https://drive.google.com/file/d/1f2QJQqpyxbzgelKMd5oaainBO_b--dL9/view"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          View CV
        </a>
      </div>
    </header>
  );
};

export default Header;
