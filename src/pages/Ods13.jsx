import { Link } from "react-router-dom";

const METAS = [
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

function Ods13() {
    return (
        <>
            {/* =====================================================
                HERO ODS 13
            ====================================================== */}

            <section className="ods13-hero">

                <div className="ods13-hero-circulo ods13-circulo-1"></div>
                <div className="ods13-hero-circulo ods13-circulo-2"></div>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <div className="ods13-hero-conteudo">

                                <span className="ods13-badge">
                                    <i
                                        className="bi bi-globe-americas me-2"
                                        aria-hidden="true"
                                    ></i>
                                    Objetivo de Desenvolvimento Sustentável
                                </span>

                                <div className="ods13-identificacao">
                                    <span>ODS</span>
                                    <strong>13</strong>
                                </div>

                                <h1>
                                    Ação contra a mudança
                                    <span> global do clima</span>
                                </h1>

                                <p>
                                    Tomar medidas urgentes para combater a
                                    mudança do clima e seus impactos.
                                </p>

                                <div className="ods13-hero-botoes">

                                    <a
                                        href="#sobre-ods13"
                                        className="btn ods13-btn-principal"
                                    >
                                        Conheça o ODS 13
                                        <i
                                            className="bi bi-arrow-down ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </a>

                                    <Link
                                        to="/dicas"
                                        className="btn ods13-btn-secundario"
                                    >
                                        Ver dicas sustentáveis
                                        <i
                                            className="bi bi-arrow-right ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>

                                </div>

                            </div>

                        </div>

                        <div className="col-lg-5 d-none d-lg-block">

                            <div className="ods13-planeta">

                                <div className="ods13-orbita ods13-orbita-1"></div>
                                <div className="ods13-orbita ods13-orbita-2"></div>

                                <div className="ods13-planeta-circulo">

                                    <i
                                        className="bi bi-globe-americas"
                                        aria-hidden="true"
                                    ></i>

                                    <strong>13</strong>

                                    <span>CLIMA</span>

                                </div>

                                <div className="ods13-folha ods13-folha-a">
                                    <i className="bi bi-leaf-fill"></i>
                                </div>

                                <div className="ods13-folha ods13-folha-b">
                                    <i className="bi bi-tree-fill"></i>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRODUÇÃO
            ====================================================== */}

            <section
                className="ods13-introducao"
                id="sobre-ods13"
            >

                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-7">

                            <span className="ods13-etiqueta">
                                SOBRE O ODS 13
                            </span>

                            <h2>
                                Um objetivo global para
                                <span> proteger o clima</span>
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
                                className="btn ods13-btn-verde"
                            >
                                Descobrir atitudes sustentáveis
                                <i
                                    className="bi bi-arrow-right ms-2"
                                    aria-hidden="true"
                                ></i>
                            </Link>

                        </div>

                        <div className="col-lg-5">

                            <div className="ods13-frase-card">

                                <div className="ods13-frase-icone">
                                    <i className="bi bi-cloud-sun-fill"></i>
                                </div>

                                <span>ODS 13</span>

                                <h3>
                                    O clima precisa de ação.
                                </h3>

                                <p>
                                    Conhecimento, planejamento e participação
                                    são fundamentais para enfrentar os
                                    desafios climáticos.
                                </p>

                                <div className="ods13-frase-linha"></div>

                                <small>
                                    ClimaConsciente
                                </small>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                METAS
            ====================================================== */}

            <section className="ods13-metas">

                <div className="container">

                    <div className="ods13-titulo-secao">

                        <span className="ods13-etiqueta">
                            PRINCIPAIS METAS
                        </span>

                        <h2>
                            Como o ODS 13 pode ser
                            <span> colocado em prática?</span>
                        </h2>

                        <p>
                            O enfrentamento das mudanças climáticas depende
                            de ações em diferentes áreas.
                        </p>

                    </div>


                    <div className="row g-4">

                        {METAS.map(function (meta, index) {

                            return (
                                <div
                                    className="col-md-4"
                                    key={meta.numero + index}
                                >

                                    <article className="ods13-meta-card">

                                        <div className="ods13-meta-topo">

                                            <div className="ods13-meta-icone">

                                                <i
                                                    className={
                                                        "bi " + meta.icone
                                                    }
                                                    aria-hidden="true"
                                                ></i>

                                            </div>

                                            <span>
                                                {meta.numero}
                                            </span>

                                        </div>

                                        <h3>
                                            {meta.titulo}
                                        </h3>

                                        <p>
                                            {meta.texto}
                                        </p>

                                        <div className="ods13-meta-linha"></div>

                                        <span className="ods13-meta-link">
                                            Meta do ODS 13
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
                AÇÕES INDIVIDUAIS E COLETIVAS
            ====================================================== */}

            <section className="ods13-acoes">

                <div className="container">

                    <div className="ods13-titulo-secao ods13-titulo-esquerda">

                        <span className="ods13-etiqueta">
                            TODOS PODEM CONTRIBUIR
                        </span>

                        <h2>
                            A mudança começa
                            <span> com a participação.</span>
                        </h2>

                    </div>


                    <div className="row g-4">

                        <div className="col-lg-6">

                            <article className="ods13-acao-card">

                                <div className="ods13-acao-numero">
                                    01
                                </div>

                                <div className="ods13-acao-icone">
                                    <i className="bi bi-person-check-fill"></i>
                                </div>

                                <h3>
                                    O que cada pessoa pode fazer?
                                </h3>

                                <p>
                                    Economizar energia e água, reduzir
                                    desperdícios, escolher meios de transporte
                                    mais sustentáveis e compartilhar informações
                                    são exemplos de atitudes possíveis.
                                </p>

                                <Link
                                    to="/dicas"
                                    className="ods13-acao-link"
                                >
                                    Ver dicas
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </article>

                        </div>


                        <div className="col-lg-6">

                            <article className="ods13-acao-card ods13-acao-card-destaque">

                                <div className="ods13-acao-numero">
                                    02
                                </div>

                                <div className="ods13-acao-icone">
                                    <i className="bi bi-people-fill"></i>
                                </div>

                                <h3>
                                    A importância da participação
                                </h3>

                                <p>
                                    A mudança depende da participação coletiva.
                                    Comunidades, instituições e organizações
                                    podem desenvolver ações para reduzir impactos
                                    e ampliar a conscientização.
                                </p>

                                <Link
                                    to="/campanhas"
                                    className="ods13-acao-link"
                                >
                                    Participar de campanhas
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </article>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA FINAL
            ====================================================== */}

            <section className="ods13-cta">

                <div className="ods13-cta-circulo"></div>

                <div className="container">

                    <div className="ods13-cta-conteudo">

                        <div className="ods13-cta-icone">
                            <i className="bi bi-globe-americas"></i>
                        </div>

                        <span>
                            CLIMACONSCIENTE • ODS 13
                        </span>

                        <h2>
                            Conhecimento gera
                            <span> transformação.</span>
                        </h2>

                        <p>
                            Comece conhecendo atitudes que podem ser aplicadas
                            no seu cotidiano.
                        </p>

                        <Link
                            to="/dicas"
                            className="btn ods13-cta-btn"
                        >
                            Começar agora
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

export default Ods13;