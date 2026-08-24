import { Link } from "react-router-dom";

function Ods13() {
    const metas = [
        {
            numero: "13.1",
            titulo: "Resiliência",
            texto:
                "Fortalecer a resiliência e a capacidade de adaptação a riscos relacionados ao clima.",
            icone: "bi-shield-check",
        },
        {
            numero: "13.2",
            titulo: "Políticas climáticas",
            texto:
                "Integrar medidas relacionadas às mudanças climáticas nas políticas e planejamentos.",
            icone: "bi-bank",
        },
        {
            numero: "13.3",
            titulo: "Educação e conscientização",
            texto:
                "Melhorar a educação, a conscientização e a capacidade das pessoas para enfrentar as mudanças climáticas.",
            icone: "bi-mortarboard",
        },
    ];

    return (
        <>
            <section className="pagina-hero">
                <div className="container">
                    <div className="pagina-hero-conteudo">

                        <span className="etiqueta">
                            <i className="bi bi-globe-americas me-2"></i>
                            Objetivo de Desenvolvimento Sustentável
                        </span>

                        <h1>ODS 13</h1>

                        <p>
                            Ação Contra a Mudança Global do Clima.
                        </p>

                    </div>
                </div>
            </section>

            <section className="secao">
                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="etiqueta">
                                ODS 13
                            </span>

                            <h2 className="mt-3">
                                Ação Contra a Mudança Global do Clima
                            </h2>

                            <p>
                                O ODS 13 faz parte dos Objetivos de
                                Desenvolvimento Sustentável da Agenda 2030
                                e busca fortalecer ações para enfrentar as
                                mudanças climáticas.
                            </p>

                            <p>
                                O objetivo envolve ações de conscientização,
                                adaptação, redução de impactos e participação
                                de governos, organizações, empresas e sociedade.
                            </p>

                            <Link
                                to="/dicas"
                                className="btn btn-success rounded-pill px-4 mt-2"
                            >
                                Ver dicas sustentáveis
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>

                        </div>

                        <div className="col-lg-6">

                            <div className="ods-card">

                                <div className="ods-numero">
                                    13
                                </div>

                                <h3>
                                    Ação Contra a Mudança Global do Clima
                                </h3>

                                <p>
                                    Tomar medidas urgentes para combater
                                    a mudança do clima e seus impactos.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>

            <section className="secao secao-clara">

                <div className="container">

                    <div className="titulo-secao mb-5">

                        <span className="etiqueta">
                            Principais metas
                        </span>

                        <h2>
                            Como o ODS 13 pode ser colocado em prática?
                        </h2>

                        <p>
                            O enfrentamento das mudanças climáticas
                            depende de ações em diferentes áreas.
                        </p>

                    </div>

                    <div className="row g-4">

                        {metas.map((meta) => (
                            <div
                                className="col-md-4"
                                key={meta.numero}
                            >
                                <article className="dica-card h-100">

                                    <div className="dica-icone">
                                        <i className={`bi ${meta.icone}`}></i>
                                    </div>

                                    <span className="badge bg-success mb-3">
                                        {meta.numero}
                                    </span>

                                    <h3>
                                        {meta.titulo}
                                    </h3>

                                    <p>
                                        {meta.texto}
                                    </p>

                                </article>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            <section className="secao">

                <div className="container">

                    <div className="row g-4">

                        <div className="col-md-6">

                            <div className="p-4 h-100 rounded-4 border">

                                <i
                                    className="bi bi-person-check text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="mt-3">
                                    O que cada pessoa pode fazer?
                                </h3>

                                <p>
                                    Economizar energia e água, reduzir
                                    desperdícios, escolher meios de transporte
                                    mais sustentáveis e compartilhar informações
                                    são exemplos de atitudes possíveis.
                                </p>

                            </div>

                        </div>

                        <div className="col-md-6">

                            <div className="p-4 h-100 rounded-4 border">

                                <i
                                    className="bi bi-people text-success"
                                    style={{ fontSize: "2.5rem" }}
                                ></i>

                                <h3 className="mt-3">
                                    A importância da participação
                                </h3>

                                <p>
                                    A mudança depende da participação coletiva.
                                    Comunidades, instituições e organizações
                                    podem desenvolver ações para reduzir impactos
                                    e ampliar a conscientização.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="cta">

                <div className="container text-center">

                    <h2>
                        Conhecimento gera transformação.
                    </h2>

                    <p className="mt-3">
                        Comece conhecendo atitudes que podem ser aplicadas
                        no seu cotidiano.
                    </p>

                    <Link
                        to="/dicas"
                        className="btn btn-light text-primary rounded-pill px-4 mt-2"
                    >
                        Ver dicas
                        <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                </div>

            </section>
        </>
    );
}

export default Ods13;