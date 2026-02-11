import { Link } from "react-router";

function Header({ visible, animated = false }) {
  return (
    <header className={`header ${animated ? "header--animated" : ""} ${visible ? "header--visible" : ""}`}>
      <nav className="nav">
        <ul className="nav__list">
          <Link to={"/"} className="nav__item">HOME</Link>
          <Link to={"/about-me/"} className="nav__item">SOBRE MI</Link>
          <Link to={"/my-skills/"} className="nav__item">MIS HABILIDADES</Link>
          <Link to={"/projects/"} className="nav__item">PROYECTOS</Link>
          <Link to={"/contact/"} className="nav__item">CONTACTO</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;