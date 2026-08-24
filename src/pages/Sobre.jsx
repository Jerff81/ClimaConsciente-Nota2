import { Link } from "react-router-dom";

function Sobre() {
    return (
        <>
            <section className="pagina-hero">

                <div className="container">

                    <div className="pagina-hero-conteudo">

                        <span className="etiqueta">
                            <i className="bi bi-info-circle me-2"></i>
                            Sobre o projeto
                        </span>

                        <h1>
                            Conheça o ClimaConsciente
                        </h1>

                        <p>
                            Uma aplicação web criada para promover
                            informação e conscientização sobre as
                            mudanças climáticas.
                        </p>

                    </div>

                </div>

            </section>


            <section className="secao">

                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="etiqueta">
                                Nossa proposta
                            </span>

                            <h2 className="mt-3">
                                Informação para transformar atitudes
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

                            <div className="ods-card">

                                <div className="text-center">

                                    <i
                                        className="bi bi-globe-americas"
                                        style={{ fontSize: "4rem" }}
                                    ></i>

                                    <h3 className="mt-3">
                                        ClimaConsciente
                                    </h3>

                                    <p>
                                        Informação, conscientização
                                        e ação pelo clima.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="secao secao-clara">

                <div className="container">

                    <div className="titulo-secao mb-5">

                        <span className="etiqueta">
                            Objetivos
                        </span>

                        <h2>
                            O que o projeto busca alcançar?
                        </h2>

                    </div>


                    <div className="row g-4">

                        <div className="col-md-4">

                            <article className="dica-card h-100">

                                <div className="dica-icone">
                                    <i className="bi bi-book"></i>
                                </div>

                                <h3>
                                    Informar
                                </h3>

                                <p>
                                    Apresentar conteúdos acessíveis sobre
                                    mudanças climáticas e sustentabilidade.
                                </p>

                            </article>

                        </div>


                        <div className="col-md-4">

                            <article className="dica-card h-100">

                                <div className="dica-icone">
                                    <i className="bi bi-lightbulb"></i>
                                </div>

                                <h3>
                                    Conscientizar
                                </h3>

                                <p>
                                    Incentivar a reflexão sobre os impactos
                                    das escolhas realizadas no cotidiano.
                                </p>

                            </article>

                        </div>


                        <div className="col-md-4">

                            <article className="dica-card h-100">

                                <div className="dica-icone">
                                    <i className="bi bi-check-circle"></i>
                                </div>

                                <h3>
                                    Incentivar ações
                                </h3>

                                <p>
                                    Estimular práticas que contribuam para
                                    um futuro mais sustentável.
                                </p>

                            </article>

                        </div>

                    </div>

                </div>

            </section>


            <section className="secao">

                <div className="container">

                    <div className="row g-4">

                        <div className="col-md-6">

                            <div className="p-4 rounded-4 border h-100">

                                <h3>
                                    Público-alvo
                                </h3>

                                <p>
                                    O projeto é direcionado principalmente
                                    a estudantes, jovens, cidadãos e pessoas
                                    interessadas em conhecer mais sobre
                                    sustentabilidade e mudanças climáticas.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-6">

                            <div className="p-4 rounded-4 border h-100">

                                <h3>
                                    ODS 13
                                </h3>

                                <p>
                                    O projeto está relacionado ao Objetivo
                                    de Desenvolvimento Sustentável 13,
                                    voltado à ação contra a mudança global
                                    do clima.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            <section className="cta">

                <div className="container text-center">

                    <h2>
                        Conheça o ODS 13
                    </h2>

                    <p className="mt-3">
                        Entenda melhor o objetivo que orienta
                        o desenvolvimento do ClimaConsciente.
                    </p>

                    <Link
                        to="/ods13"
                        className="btn btn-light text-primary rounded-pill px-4 mt-2"
                    >
                        Conhecer o ODS 13
                        <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                </div>

            </section>
        </>
    );
}

export default Sobre;