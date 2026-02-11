import { Link } from "react-router";

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <Link to={"/"}>HOME</Link>
          <Link to={"/about-me/"}>SOBRE MI</Link>
          <Link to={"/my-skills/"}>MIS HABILIDADES</Link>
          <Link to={"/proyects/"}>PROYECTOS</Link>
          <Link to={"/contact/"}>CONTACTO</Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
