import { Link } from "react-router-dom";

const OBJETIVOS = [
    {
        numero: "01",
        icone: "bi-book",
        titulo: "Informar",
        texto:
            "Apresentar conteúdos acessíveis sobre mudanças climáticas e sustentabilidade.",
    },
    {
        numero: "02",
        icone: "bi-lightbulb",
        titulo: "Conscientizar",
        texto:
            "Incentivar a reflexão sobre os impactos das escolhas realizadas no cotidiano.",
    },
    {
        numero: "03",
        icone: "bi-check-circle",
        titulo: "Incentivar ações",
        texto:
            "Estimular práticas que contribuam para um futuro mais sustentável.",
    },
];

function Sobre() {
    return (
        <>
            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="sobre-hero">

                <div className="sobre-hero-circulo sobre-circulo-1"></div>
                <div className="sobre-hero-circulo sobre-circulo-2"></div>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <div className="sobre-hero-conteudo">

                                <span className="sobre-badge">
                                    <i
                                        className="bi bi-info-circle me-2"
                                        aria-hidden="true"
                                    ></i>
                                    Sobre o projeto
                                </span>

                                <span className="sobre-mini-titulo">
                                    CLIMACONSCIENTE
                                </span>

                                <h1>
                                    Informação que
                                    <span> inspira ação.</span>
                                </h1>

                                <p>
                                    Uma aplicação web criada para promover
                                    informação e conscientização sobre as
                                    mudanças climáticas e incentivar escolhas
                                    mais sustentáveis.
                                </p>

                                <div className="sobre-hero-botoes">

                                    <Link
                                        to="/ods13"
                                        className="btn sobre-btn-principal"
                                    >
                                        Conhecer o ODS 13
                                        <i
                                            className="bi bi-arrow-right ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>

                                    <Link
                                        to="/dicas"
                                        className="btn sobre-btn-secundario"
                                    >
                                        Ver dicas
                                        <i
                                            className="bi bi-check2-circle ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>

                                </div>

                            </div>

                        </div>


                        <div className="col-lg-5 d-none d-lg-block">

                            <div className="sobre-hero-visual">

                                <div className="sobre-orbita sobre-orbita-1"></div>
                                <div className="sobre-orbita sobre-orbita-2"></div>

                                <div className="sobre-planeta">

                                    <i
                                        className="bi bi-globe-americas"
                                        aria-hidden="true"
                                    ></i>

                                    <strong>
                                        13
                                    </strong>

                                    <span>
                                        AÇÃO PELO CLIMA
                                    </span>

                                </div>

                                <div className="sobre-visual-item sobre-item-1">
                                    <i className="bi bi-leaf-fill"></i>
                                </div>

                                <div className="sobre-visual-item sobre-item-2">
                                    <i className="bi bi-lightbulb-fill"></i>
                                </div>

                                <div className="sobre-visual-item sobre-item-3">
                                    <i className="bi bi-recycle"></i>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                NOSSA PROPOSTA
            ====================================================== */}

            <section className="sobre-proposta">

                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="sobre-etiqueta">
                                NOSSA PROPOSTA
                            </span>

                            <h2>
                                Informação para
                                <span> transformar atitudes.</span>
                            </h2>

                            <p>
                                O ClimaConsciente é um projeto web desenvolvido
                                com o objetivo de apresentar informações sobre
                                mudanças climáticas e incentivar práticas mais
                                sustentáveis.
                            </p>

                            <p>
                                A aplicação reúne conteúdos educativos,
                                notícias, dicas, campanhas e ferramentas
                                interativas relacionadas ao ODS 13.
                            </p>

                            <p>
                                A proposta é mostrar que a conscientização
                                pode começar com atitudes simples realizadas
                                no cotidiano.
                            </p>

                        </div>


                        <div className="col-lg-6">

                            <div className="sobre-proposta-card">

                                <div className="sobre-proposta-icone">
                                    <i className="bi bi-globe-americas"></i>
                                </div>

                                <span>
                                    NOSSO PROPÓSITO
                                </span>

                                <h3>
                                    Informação,
                                    conscientização
                                    <strong> e ação.</strong>
                                </h3>

                                <div className="sobre-proposta-linha"></div>

                                <div className="sobre-proposta-dados">

                                    <div>
                                        <strong>13</strong>
                                        <small>ODS</small>
                                    </div>

                                    <div>
                                        <strong>01</strong>
                                        <small>PROPÓSITO</small>
                                    </div>

                                    <div>
                                        <strong>∞</strong>
                                        <small>POSSIBILIDADES</small>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                OBJETIVOS
            ====================================================== */}

            <section className="sobre-objetivos">

                <div className="container">

                    <div className="sobre-titulo-secao">

                        <div>

                            <span className="sobre-etiqueta">
                                NOSSOS OBJETIVOS
                            </span>

                            <h2>
                                Conhecer é o primeiro passo
                                <span> para transformar.</span>
                            </h2>

                        </div>

                        <p>
                            O projeto busca aproximar informação e prática,
                            incentivando escolhas mais conscientes no dia a dia.
                        </p>

                    </div>


                    <div className="row g-4">

                        {OBJETIVOS.map(function (objetivo) {

                            return (
                                <div
                                    className="col-md-4"
                                    key={objetivo.numero}
                                >

                                    <article className="sobre-objetivo-card">

                                        <div className="sobre-objetivo-topo">

                                            <div className="sobre-objetivo-icone">

                                                <i
                                                    className={
                                                        "bi " + objetivo.icone
                                                    }
                                                    aria-hidden="true"
                                                ></i>

                                            </div>

                                            <span>
                                                {objetivo.numero}
                                            </span>

                                        </div>

                                        <h3>
                                            {objetivo.titulo}
                                        </h3>

                                        <p>
                                            {objetivo.texto}
                                        </p>

                                        <div className="sobre-objetivo-linha"></div>

                                        <span className="sobre-objetivo-rodape">
                                            ClimaConsciente
                                            <i className="bi bi-arrow-up-right"></i>
                                        </span>

                                    </article>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                PÚBLICO E ODS
            ====================================================== */}

            <section className="sobre-contexto">

                <div className="container">

                    <div className="row g-4">

                        <div className="col-lg-6">

                            <article className="sobre-contexto-card">

                                <div className="sobre-contexto-icone">
                                    <i className="bi bi-people-fill"></i>
                                </div>

                                <span>
                                    PARA QUEM É?
                                </span>

                                <h3>
                                    Um projeto para
                                    <strong> todos.</strong>
                                </h3>

                                <p>
                                    O projeto é direcionado principalmente
                                    a estudantes, jovens, cidadãos e pessoas
                                    interessadas em conhecer mais sobre
                                    sustentabilidade e mudanças climáticas.
                                </p>

                                <div className="sobre-contexto-tags">

                                    <span>Estudantes</span>
                                    <span>Jovens</span>
                                    <span>Cidadãos</span>
                                    <span>Comunidades</span>

                                </div>

                            </article>

                        </div>


                        <div className="col-lg-6">

                            <article className="sobre-contexto-card sobre-contexto-ods">

                                <div className="sobre-contexto-ods-numero">
                                    13
                                </div>

                                <div className="sobre-contexto-ods-conteudo">

                                    <span>
                                        NOSSO FOCO
                                    </span>

                                    <h3>
                                        ODS 13
                                    </h3>

                                    <p>
                                        Ação Contra a Mudança Global do Clima.
                                    </p>

                                    <Link
                                        to="/ods13"
                                        className="sobre-link"
                                    >
                                        Conheça o objetivo
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>

                                </div>

                            </article>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                JORNADA
            ====================================================== */}

            <section className="sobre-jornada">

                <div className="container">

                    <div className="text-center">

                        <span className="sobre-etiqueta">
                            NOSSA JORNADA
                        </span>

                        <h2>
                            Informação que leva
                            <span> à ação.</span>
                        </h2>

                        <p className="sobre-jornada-intro">
                            O ClimaConsciente conecta diferentes recursos para
                            tornar o conhecimento sobre sustentabilidade mais
                            acessível e estimular mudanças positivas.
                        </p>

                    </div>


                    <div className="sobre-jornada-linha">

                        <div className="sobre-jornada-item">

                            <div className="sobre-jornada-numero">
                                01
                            </div>

                            <i className="bi bi-book"></i>

                            <h3>
                                Informar
                            </h3>

                            <p>
                                Conteúdos para conhecer melhor as mudanças
                                climáticas.
                            </p>

                        </div>


                        <div className="sobre-jornada-item">

                            <div className="sobre-jornada-numero">
                                02
                            </div>

                            <i className="bi bi-lightbulb"></i>

                            <h3>
                                Conscientizar
                            </h3>

                            <p>
                                Reflexão sobre nossas escolhas e seus impactos.
                            </p>

                        </div>


                        <div className="sobre-jornada-item">

                            <div className="sobre-jornada-numero">
                                03
                            </div>

                            <i className="bi bi-arrow-up-right-circle"></i>

                            <h3>
                                Agir
                            </h3>

                            <p>
                                Atitudes práticas para contribuir com o planeta.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="sobre-cta">

                <div className="sobre-cta-circulo"></div>

                <div className="container">

                    <div className="sobre-cta-conteudo">

                        <div className="sobre-cta-icone">
                            <i className="bi bi-globe-americas"></i>
                        </div>

                        <span>
                            ODS 13 • AÇÃO CONTRA O CLIMA
                        </span>

                        <h2>
                            O futuro depende das
                            <span> escolhas de hoje.</span>
                        </h2>

                        <p>
                            Entenda melhor o objetivo que orienta o
                            desenvolvimento do ClimaConsciente e descubra
                            como contribuir para a ação climática.
                        </p>

                        <Link
                            to="/ods13"
                            className="btn sobre-cta-btn"
                        >
                            Conhecer o ODS 13
                            <i
                                className="bi bi-arrow-right ms-2"
                                aria-hidden="true"
                            ></i>
                        </Link>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Sobre;