import { Link } from "react-router-dom";

function Campanhas() {
    const campanhas = [
        {
            icone: "bi-tree",
            categoria: "Ação ambiental",
            titulo: "Plantio de árvores",
            descricao:
                "Incentive o plantio e a preservação de árvores para contribuir com a melhoria da qualidade ambiental e o equilíbrio climático.",
        },
        {
            icone: "bi-people",
            categoria: "Comunidade",
            titulo: "Comunidade sustentável",
            descricao:
                "Mobilize pessoas para desenvolver hábitos mais sustentáveis e promover ações ambientais em sua comunidade.",
        },
        {
            icone: "bi-mortarboard",
            categoria: "Educação",
            titulo: "Educação climática",
            descricao:
                "Compartilhe conhecimento sobre mudanças climáticas e incentive atitudes responsáveis em escolas e comunidades.",
        },
        {
            icone: "bi-recycle",
            categoria: "Resíduos",
            titulo: "Reciclagem consciente",
            descricao:
                "Estimule a separação correta dos resíduos e a redução do desperdício no cotidiano.",
        },
        {
            icone: "bi-lightning-charge",
            categoria: "Energia",
            titulo: "Consumo eficiente",
            descricao:
                "Incentive práticas que contribuam para o uso consciente e eficiente da energia elétrica.",
        },
        {
            icone: "bi-bicycle",
            categoria: "Mobilidade",
            titulo: "Mobilidade sustentável",
            descricao:
                "Promova alternativas de transporte que reduzam impactos ambientais e contribuam para cidades mais sustentáveis.",
        },
    ];

    return (
        <>
            <section className="pagina-hero">
                <div className="container">
                    <div className="pagina-hero-conteudo">

                        <span className="etiqueta">
                            <i className="bi bi-megaphone me-2"></i>
                            Participação e conscientização
                        </span>

                        <h1>Campanhas e ações</h1>

                        <p>
                            Conheça iniciativas que ajudam a promover
                            atitudes sustentáveis e combater as mudanças
                            climáticas.
                        </p>

                    </div>
                </div>
            </section>

            <section
                className="secao"
                aria-labelledby="titulo-campanhas"
            >
                <div className="container">

                    <div className="titulo-secao mb-5">
                        <span className="etiqueta">
                            Faça parte
                        </span>

                        <h2 id="titulo-campanhas">
                            Ações que podem transformar
                        </h2>

                        <p>
                            A participação da sociedade é fundamental
                            para construir um futuro mais sustentável.
                        </p>
                    </div>

                    <div className="row g-4">

                        {campanhas.map((campanha) => (
                            <div
                                className="col-md-6 col-lg-4"
                                key={campanha.titulo}
                            >
                                <article className="campanha-card h-100">

                                    <div className="dica-icone mb-4">
                                        <i
                                            className={`bi ${campanha.icone}`}
                                        ></i>
                                    </div>

                                    <span className="campanha-data">
                                        {campanha.categoria}
                                    </span>

                                    <h3 className="mt-2">
                                        {campanha.titulo}
                                    </h3>

                                    <p className="text-muted">
                                        {campanha.descricao}
                                    </p>

                                    <Link
                                        to="/contato"
                                        className="link-verde"
                                    >
                                        Quero participar
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>

                                </article>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="secao secao-clara">
                <div className="container text-center">

                    <div className="titulo-secao">
                        <span className="etiqueta">
                            ODS 13
                        </span>

                        <h2>
                            Toda ação conta
                        </h2>

                        <p>
                            Pequenas atitudes realizadas por muitas pessoas
                            podem contribuir para grandes mudanças.
                        </p>

                        <Link
                            to="/ods13"
                            className="btn btn-success rounded-pill px-4 mt-3"
                        >
                            Conheça o ODS 13
                            <i className="bi bi-arrow-right ms-2"></i>
                        </Link>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Campanhas;