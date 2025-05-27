const Nav = ({ onLinkClick }) => {
  return (
    <>
      <nav id="navmenu" className="navmenu">
        <ul>
          <li><a href="#" className="active" onClick={onLinkClick}>Início</a></li>
          <li><a href="#" onClick={onLinkClick}>Sobre</a></li>
          <li><a href="#" onClick={onLinkClick}>Como funciona</a></li>
          <li><a href="#" onClick={onLinkClick}>Cursos</a></li>
          <li><a href="#" onClick={onLinkClick}>Sou Aluno</a></li>
          <li><a href="#" onClick={onLinkClick}>Sou Empresa</a></li>
          <li><a href="#" onClick={onLinkClick}>Contato</a></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
