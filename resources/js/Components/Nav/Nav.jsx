const Nav = () => {
    return (
        <>
            <nav id="navmenu" className="navmenu">
                <ul>
                    <li>
                        <a href="#" className="active">
                            Início
                            <br />
                        </a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Como funciona</a>
                    </li>
                    <li>
                        <a href="#">Cursos</a>
                    </li>
                    <li>
                        <a href="#">Sou Aluno</a>
                    </li>
                    <li>
                        <a href="#">Sou Empresa</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
                <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
            <a className="btn-getstarted" href="#">Entrar</a>
        </>
    );
};

export default Nav;
