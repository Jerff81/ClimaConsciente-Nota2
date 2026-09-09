import { Link } from "react-router-dom";

const CAMPANHAS = [
    {
        id: "plantio-de-arvores",
        icone: "bi-tree",
        categoria: "Ação ambiental",
        titulo: "Plantio de árvores",
        descricao:
            "Incentive o plantio e a preservação de árvores para contribuir com a melhoria da qualidade ambiental e o equilíbrio climático.",
    },
    {
        id: "comunidade-sustentavel",
        icone: "bi-people",
        categoria: "Comunidade",
        titulo: "Comunidade sustentável",
        descricao:
            "Mobilize pessoas para desenvolver hábitos mais sustentáveis e promover ações ambientais em sua comunidade.",
    },
    {
        id: "educacao-climatica",
        icone: "bi-mortarboard",
        categoria: "Educação",
        titulo: "Educação climática",
        descricao:
            "Compartilhe conhecimento sobre mudanças climáticas e incentive atitudes responsáveis em escolas e comunidades.",
    },
    {
        id: "reciclagem-consciente",
        icone: "bi-recycle",
        categoria: "Resíduos",
        titulo: "Reciclagem consciente",
        descricao:
            "Estimule a separação correta dos resíduos e a redução do desperdício no cotidiano.",
    },
    {
        id: "consumo-eficiente",
        icone: "bi-lightning-charge",
        categoria: "Energia",
        titulo: "Consumo eficiente",
        descricao:
            "Incentive práticas que contribuam para o uso consciente e eficiente da energia elétrica.",
    },
    {
        id: "mobilidade-sustentavel",
        icone: "bi-bicycle",
        categoria: "Mobilidade",
        titulo: "Mobilidade sustentável",
        descricao:
            "Promova alternativas de transporte que reduzam impactos ambientais e contribuam para cidades mais sustentáveis.",
    },
];

function Campanhas() {
    return (
        <>
            {/* HERO */}
            <section className="campanhas-hero">
                <div className="campanhas-hero-folha campanhas-folha-1"></div>
                <div className="campanhas-hero-folha campanhas-folha-2"></div>

                <div className="container">
                    <div className="row align-items-center">

                        <div className="col-lg-8">
                            <div className="campanhas-hero-conteudo">

                                <span className="campanhas-badge">
                                    <i
                                        className="bi bi-megaphone-fill me-2"
                                        aria-hidden="true"
                                    ></i>
                                    Participação e conscientização
                                </span>

                                <h1>
                                    Campanhas que
                                    <span> transformam</span>
                                </h1>

                                <p>
                                    Pequenas atitudes podem gerar grandes
                                    mudanças. Participe de ações que ajudam
                                    a proteger o clima e construir um futuro
                                    mais sustentável.
                                </p>

                                <div className="campanhas-hero-botoes">

                                    <a
                                        href="#campanhas"
                                        className="btn campanhas-btn-principal"
                                    >
                                        Conheça as campanhas
                                        <i
                                            className="bi bi-arrow-down ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </a>

                                    <Link
                                        to="/ods13"
                                        className="btn campanhas-btn-secundario"
                                    >
                                        <i
                                            className="bi bi-globe-americas me-2"
                                            aria-hidden="true"
                                        ></i>
                                        ODS 13
                                    </Link>

                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="campanhas-hero-ilustracao">

                                <div className="campanhas-planeta">
                                    <i
                                        className="bi bi-globe-americas"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div className="campanhas-folha-central">
                                    <i
                                        className="bi bi-leaf-fill"
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div className="campanhas-eco-frase">
                                    <strong>ODS 13</strong>
                                    <span>Ação contra a mudança climática</span>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* DESTAQUES */}
            <section className="campanhas-impacto">
                <div className="container">

                    <div className="campanhas-impacto-grid">

                        <div className="campanhas-impacto-item">
                            <div className="campanhas-impacto-icone">
                                <i className="bi bi-tree-fill"></i>
                            </div>

                            <div>
                                <strong>Mais natureza</strong>
                                <span>Preservação ambiental</span>
                            </div>
                        </div>

                        <div className="campanhas-impacto-item">
                            <div className="campanhas-impacto-icone">
                                <i className="bi bi-people-fill"></i>
                            </div>

                            <div>
                                <strong>Comunidades fortes</strong>
                                <span>Participação coletiva</span>
                            </div>
                        </div>

                        <div className="campanhas-impacto-item">
                            <div className="campanhas-impacto-icone">
                                <i className="bi bi-cloud-check-fill"></i>
                            </div>

                            <div>
                                <strong>Menos impactos</strong>
                                <span>Ações pelo clima</span>
                            </div>
                        </div>

                        <div className="campanhas-impacto-item">
                            <div className="campanhas-impacto-icone">
                                <i className="bi bi-recycle"></i>
                            </div>

                            <div>
                                <strong>Consumo consciente</strong>
                                <span>Uso responsável</span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>

            {/* CAMPANHAS */}
            <section
                className="campanhas-lista"
                id="campanhas"
                aria-labelledby="titulo-campanhas"
            >
                <div className="container">

                    <div className="campanhas-titulo">

                        <span className="campanhas-etiqueta">
                            FAÇA PARTE
                        </span>

                        <h2 id="titulo-campanhas">
                            Ações que podem
                            <span> transformar</span>
                        </h2>

                        <p>
                            Escolha uma iniciativa e descubra como você pode
                            contribuir para um planeta mais sustentável.
                        </p>

                    </div>

                    <div className="row g-4">

                        {CAMPANHAS.map(function (campanha, index) {
                            return (
                                <div
                                    className="col-md-6 col-lg-4"
                                    key={campanha.id + index}
                                >
                                    <article className="campanha-moderna-card">

                                        <div className="campanha-card-topo">

                                            <div className="campanha-icone">
                                                <i
                                                    className={
                                                        "bi " + campanha.icone
                                                    }
                                                    aria-hidden="true"
                                                ></i>
                                            </div>

                                            <span className="campanha-numero">
                                                0{index + 1}
                                            </span>

                                        </div>

                                        <span className="campanha-categoria">
                                            {campanha.categoria}
                                        </span>

                                        <h3>
                                            {campanha.titulo}
                                        </h3>

                                        <p>
                                            {campanha.descricao}
                                        </p>

                                        <div className="campanha-card-footer">

                                            <Link
                                                to={
                                                    "/contato?campanha=" +
                                                    campanha.id
                                                }
                                                className="campanha-link"
                                                aria-label={
                                                    "Quero participar da campanha: " +
                                                    campanha.titulo
                                                }
                                            >
                                                Quero participar
                                                <i
                                                    className="bi bi-arrow-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </Link>

                                        </div>

                                    </article>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>

            {/* MENSAGEM ODS 13 */}
            <section className="campanhas-ods">

                <div className="campanhas-ods-forma"></div>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <span className="campanhas-ods-tag">
                                <i className="bi bi-globe-americas me-2"></i>
                                ODS 13 — AÇÃO CONTRA A MUDANÇA GLOBAL DO CLIMA
                            </span>

                            <h2>
                                Toda ação
                                <span> conta.</span>
                            </h2>

                            <p>
                                Quando muitas pessoas adotam pequenas atitudes
                                sustentáveis, o impacto coletivo pode ser enorme.
                                Faça parte dessa transformação.
                            </p>

                            <Link
                                to="/ods13"
                                className="btn campanhas-ods-btn"
                            >
                                Conheça o ODS 13
                                <i
                                    className="bi bi-arrow-right ms-2"
                                    aria-hidden="true"
                                ></i>
                            </Link>

                        </div>

                        <div className="col-lg-5">

                            <div className="campanhas-ods-simbolo">
                                <div>
                                    <i className="bi bi-globe-americas"></i>
                                    <strong>13</strong>
                                    <span>CLIMA</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Campanhas;