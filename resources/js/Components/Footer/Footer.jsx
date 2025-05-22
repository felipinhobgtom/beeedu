export function Footer() {
    return (
        <>
            <footer
                id="footer"
                className="footer position-relative light-background"
            >
                <div className="container footer-top">
                    <div className="row gy-4">
                        <div className="col-lg-4 col-md-6 footer-about">
                            <a
                                href="index.html"
                                className="logo d-flex align-items-center"
                            >
                                <span className="sitename">Beeedu</span>
                            </a>
                            <div className="footer-contact pt-3">
                                <p>
                                    <strong>Email:</strong>
                                    <span>info@beeedu.edu.br</span>
                                </p>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Páginas</h4>
                            <ul>
                                <li>
                                    <a href="#">Início</a>
                                </li>
                                <li>
                                    <a href="#">Sobre</a>
                                </li>
                                <li>
                                    <a href="#">Cursos</a>
                                </li>
                                <li>
                                    <a href="#">Projeto</a>
                                </li>
                                <li>
                                    <a href="#">Patrocinadores</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container copyright text-center mt-4">
                    <p>
                        © <span>Copyright</span>{" "}
                        <strong className="px-1 sitename">Beeedu</strong>{" "}
                        <span>Todos os direitos reservados.</span>
                    </p>
                </div>
            </footer>
        </>
    );
}
