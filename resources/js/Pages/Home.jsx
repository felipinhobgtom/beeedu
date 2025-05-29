import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";

import "../styles/home.css";

export default function Home() {

    return (
        <>
            <Header />
            <main className="main">
                <section id="hero" className="hero section dark-background">
                    <img
                        src="assets/img/hero-bg.jpg"
                        alt=""
                        data-aos="fade-in"
                        className="aos-init aos-animate"
                    />

                    <div className="container">
                        <h2
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className="aos-init aos-animate"
                        >
                            Hoje é aprendizado,
                            <br />
                            amanhã é oportunidade!{" "}
                            <span
                                style={{
                                    fontSize: "3rem",
                                    animation: "flyBee 3s ease-in-out infinite",
                                    userSelect: "none",
                                }}
                                aria-label="Abelha voando"
                                role="img"
                            >
                                🐝
                            </span>
                        </h2>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className="aos-init aos-animate"
                        >
                            Plataforma de conexão entre alunos da rede pública e
                            o mercado de trabalho. Aprenda, conquiste reputação
                            e aproveite oportunidades reais.
                        </p>
                        <p
                            style={{
                                marginTop: "1rem",
                                fontStyle: "italic",
                                color: "#666",
                            }}
                        >
                            Desenvolvido para o Edu Hackathon 2025.
                        </p>
                        <div
                            className="d-flex mt-4 aos-init aos-animate"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <a href="#" className="btn-get-started">
                                Voar
                            </a>
                        </div>
                    </div>
                </section>

                <section id="about" className="about section">
                    <div className="container">
                        <div className="row gy-4">
                            <div
                                className="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <img
                                    src="assets/img/about.jpg"
                                    className="img-fluid"
                                    alt=""
                                />
                            </div>

                            <div
                                className="col-lg-6 order-2 order-lg-1 content aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <h3>
                                    Na BeeEdu, acreditamos que educação é ponte
                                    para o futuro.
                                </h3>
                                <p className="fst-italic">
                                    Nossa missão é conectar estudantes da rede
                                    pública ao mercado de trabalho por meio de
                                    uma plataforma intuitiva, gamificada e
                                    inclusiva.
                                </p>
                                <p>
                                    Somos uma equipe apaixonada por inovação
                                    social e tecnologia, formada por
                                    universitários comprometidos com o impacto
                                    real. Criamos experiências que despertam o
                                    protagonismo jovem, oferecendo metas,
                                    desafios, mentorias e oportunidades de
                                    carreira.
                                </p>
                                <p>
                                    Nosso nome vem da ideia de colmeia: cada
                                    aluno é parte essencial de uma comunidade
                                    que aprende, cresce e constrói em conjunto.
                                </p>
                                <em>
                                    Juntos, formamos a nova geração de
                                    profissionais conscientes, preparados e
                                    engajados.
                                </em>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    id="counts"
                    className="section counts light-background"
                >
                    <div
                        className="container aos-init aos-animate"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="row gy-4">
                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="1232"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        1232
                                    </span>
                                    <p>Alunos</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="64"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        64
                                    </span>
                                    <p>Cursos</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="42"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        42
                                    </span>
                                    <p>Empresas</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span
                                        data-purecounter-start="0"
                                        data-purecounter-end="24"
                                        data-purecounter-duration="0"
                                        className="purecounter"
                                    >
                                        24
                                    </span>
                                    <p>Projetos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="why-us" className="section why-us">
                    <div className="container">
                        <div className="row gy-4">
                            <div
                                className="col-lg-4 aos-init aos-animate"
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                <div className="why-box">
                                    <h3>Por que escolher a BeeEdu?</h3>
                                    <p>
                                        Conectamos a educação ao mercado de
                                        trabalho. A BeeEdu aproxima os alunos do
                                        mundo real, ajudando-os a descobrir
                                        caminhos que combinam com seus talentos
                                        e interesses.
                                    </p>
                                    <div className="text-center">
                                        <a href="#" className="more-btn">
                                            <span>Como funciona?</span>
                                            <i className="bi bi-chevron-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div
                                    className="row gy-4 aos-init aos-animate"
                                    data-aos="fade-up"
                                    data-aos-delay="200"
                                >
                                    <div className="col-xl-4">
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i class="bi bi-controller"></i>
                                            <h4>
                                                Aprendizado personalizado e
                                                gamificado.
                                            </h4>
                                            <p>
                                                Nossa plataforma usa metas
                                                inteligentes, desafios e
                                                recompensas para manter os
                                                alunos engajados e motivados na
                                                própria jornada de
                                                desenvolvimento.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="col-xl-4 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i class="bi bi-door-open-fill"></i>
                                            <h4>Parcerias que abrem portas.</h4>
                                            <p>
                                                Trabalhamos com escolas,
                                                empresas e profissionais para
                                                oferecer mentorias, estágios e
                                                experiências reais que vão além
                                                da sala de aula.
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className="col-xl-4 aos-init aos-animate"
                                        data-aos="fade-up"
                                        data-aos-delay="400"
                                    >
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i class="bi bi-book"></i>
                                            <h4>Acreditamos em impacto.</h4>
                                            <p>
                                                Tudo o que construímos tem um
                                                propósito: empoderar os alunos
                                                para que alcancem seu potencial
                                                máximo e construam um futuro
                                                melhor.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="courses" className="courses section">
                    <div
                        className="container section-title aos-init"
                        data-aos="fade-up"
                    >
                        <h2>Cursos</h2>
                        <p>Cursos em Alta</p>
                    </div>

                    <div className="container">
                        <div className="row">
                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch aos-init"
                                data-aos="zoom-in"
                                data-aos-delay="100"
                            >
                                <div className="course-item">
                                    <img
                                        src="assets/img/course-1.jpg"
                                        className="img-fluid"
                                        alt="..."
                                    />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">
                                                Desenvolvimento Web
                                            </p>
                                        </div>

                                        <h3>
                                            <a href="#">Design de Sites</a>
                                        </h3>
                                        <p className="description">
                                            Aprenda a criar páginas modernas,
                                            responsivas e acessíveis com foco na
                                            experiência do usuário. Explore
                                            HTML, CSS e boas práticas de layout.
                                        </p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img
                                                    src="assets/img/trainers/trainer-1-2.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <a
                                                    href="#"
                                                    className="trainer-link"
                                                >
                                                    Instituto CodeTech
                                                </a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon"></i>
                                                &nbsp;50 &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon"></i>
                                                &nbsp;65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0 aos-init"
                                data-aos="zoom-in"
                                data-aos-delay="200"
                            >
                                <div className="course-item">
                                    <img
                                        src="assets/img/course-2.jpg"
                                        className="img-fluid"
                                        alt="..."
                                    />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">
                                                Análise de Dados
                                            </p>
                                        </div>

                                        <h3>
                                            <a href="#">
                                                Introdução ao Power BI
                                            </a>
                                        </h3>
                                        <p className="description">
                                            Aprenda a transformar dados em
                                            insights com dashboards interativos
                                            no Power BI. Ideal para quem deseja
                                            iniciar no mundo da análise de
                                            dados.
                                        </p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img
                                                    src="assets/img/trainers/trainer-2-2.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <a
                                                    href="#"
                                                    className="trainer-link"
                                                >
                                                    Fundação Analytica
                                                </a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon"></i>
                                                &nbsp;35 &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon"></i>
                                                &nbsp;42
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0 aos-init"
                                data-aos="zoom-in"
                                data-aos-delay="300"
                            >
                                <div className="course-item">
                                    <img
                                        src="assets/img/course-3.jpg"
                                        className="img-fluid"
                                        alt="..."
                                    />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">
                                                Desenvolvimento Mobile
                                            </p>
                                        </div>

                                        <h3>
                                            <a href="#">
                                                Aplicativos com React Native
                                            </a>
                                        </h3>
                                        <p className="description">
                                            Descubra como criar aplicativos
                                            móveis para Android e iOS usando a
                                            tecnologia React Native. Curso
                                            prático com projetos reais.
                                        </p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img
                                                    src="assets/img/trainers/trainer-3-2.jpg"
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                                <a
                                                    href="#"
                                                    className="trainer-link"
                                                >
                                                    Instituto CodeTech
                                                </a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon"></i>
                                                &nbsp;20 &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon"></i>
                                                &nbsp;85
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
