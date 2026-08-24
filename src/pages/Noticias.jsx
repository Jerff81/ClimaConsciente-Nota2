import { useState } from "react";
import { Link } from "react-router-dom";
import ClimaAtual from "../components/ClimaAtual";

function Noticias() {
    const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);

    const noticias = [
        {
            imagem: "/assets/img/noticia-clima.jpg",
            categoria: "Clima",
            titulo: "Mudanças climáticas",
            texto:
                "As mudanças climáticas representam um dos principais desafios ambientais da atualidade.",
            conteudo:
                "A mudança do clima está relacionada ao aumento da concentração de gases de efeito estufa na atmosfera. A redução das emissões e a adoção de práticas sustentáveis são fundamentais para enfrentar esse desafio.",
        },
        {
            imagem: "/assets/img/noticia-energia.jpg",
            categoria: "Energia",
            titulo: "Uso consciente de energia",
            texto:
                "Hábitos simples podem ajudar a reduzir o consumo de energia no cotidiano.",
            conteudo:
                "Desligar equipamentos quando não estão sendo utilizados, aproveitar a iluminação natural e escolher equipamentos eficientes são atitudes que podem contribuir para um consumo mais consciente.",
        },
        {
            imagem: "/assets/img/noticia-floresta.jpg",
            categoria: "Natureza",
            titulo: "Preservação das florestas",
            texto:
                "As florestas desempenham papel fundamental no equilíbrio ambiental.",
            conteudo:
                "A conservação das florestas contribui para a biodiversidade, proteção dos recursos hídricos e manutenção dos ecossistemas, além de colaborar para o equilíbrio climático.",
        },
        {
            imagem: "/assets/img/noticia-clima.jpg",
            categoria: "Comunidade",
            titulo: "Ação comunitária",
            texto:
                "A participação da comunidade pode fortalecer ações de sustentabilidade.",
            conteudo:
                "Projetos comunitários podem incentivar a educação ambiental, a reciclagem, o plantio de árvores e outras práticas que promovem melhorias no ambiente local.",
        },
        {
            imagem: "/assets/img/noticia-energia.jpg",
            categoria: "Recursos naturais",
            titulo: "Consumo responsável",
            texto:
                "Utilizar os recursos naturais de forma consciente é responsabilidade de todos.",
            conteudo:
                "Reduzir desperdícios e repensar os hábitos de consumo são atitudes importantes para preservar os recursos naturais para as próximas gerações.",
        },
        {
            imagem: "/assets/img/noticia-floresta.jpg",
            categoria: "Resíduos",
            titulo: "Redução de resíduos",
            texto:
                "A redução da geração de resíduos começa com escolhas conscientes.",
            conteudo:
                "Reutilizar materiais, evitar produtos descartáveis e realizar a separação adequada dos resíduos são práticas que podem reduzir impactos ambientais.",
        },
    ];

    return (
        <>
            <section className="pagina-hero">
                <div className="container">
                    <div className="pagina-hero-conteudo">

                        <span className="etiqueta">
                            <i className="bi bi-newspaper me-2"></i>
                            Informação ambiental
                        </span>

                        <h1>Notícias e atualidades</h1>

                        <p>
                            Conteúdos para ajudar você a compreender
                            questões relacionadas ao clima e à sustentabilidade.
                        </p>

                    </div>
                </div>
            </section>

            <section className="secao">
                <div className="container">

                    <div className="titulo-secao mb-5">
                        <span className="etiqueta">
                            Informação
                        </span>

                        <h2>
                            Conteúdos em destaque
                        </h2>

                        <p>
                            Conheça temas importantes relacionados ao
                            meio ambiente e às mudanças climáticas.
                        </p>
                    </div>

                    <div className="row g-4">

                        {noticias.map((noticia, index) => (
                            <div
                                className="col-md-6 col-lg-4"
                                key={`${noticia.titulo}-${index}`}
                            >
                                <article className="card-clima h-100">

                                    <div className="card-clima-imagem">

                                        <img
                                            src={noticia.imagem}
                                            alt={noticia.titulo}
                                            className="img-fluid"
                                        />

                                    </div>

                                    <div className="card-clima-conteudo">

                                        <span className="card-categoria">
                                            {noticia.categoria}
                                        </span>

                                        <h3>
                                            {noticia.titulo}
                                        </h3>

                                        <p>
                                            {noticia.texto}
                                        </p>

                                        <button
                                            type="button"
                                            className="btn btn-link p-0 text-success text-decoration-none"
                                            onClick={() =>
                                                setNoticiaSelecionada(noticia)
                                            }
                                        >
                                            Ler mais
                                            <i className="bi bi-arrow-right ms-2"></i>
                                        </button>

                                    </div>

                                </article>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {noticiaSelecionada && (
                <div
                    className="modal fade show d-block"
                    tabIndex="-1"
                    role="dialog"
                    aria-modal="true"
                    onClick={() => setNoticiaSelecionada(null)}
                    style={{
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                    }}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="modal-content">

                            <div className="modal-header">

                                <h2 className="modal-title fs-5">
                                    {noticiaSelecionada.titulo}
                                </h2>

                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Fechar"
                                    onClick={() =>
                                        setNoticiaSelecionada(null)
                                    }
                                ></button>

                            </div>

                            <div className="modal-body">

                                <span className="badge bg-success mb-3">
                                    {noticiaSelecionada.categoria}
                                </span>

                                <p>
                                    {noticiaSelecionada.conteudo}
                                </p>

                            </div>

                            <div className="modal-footer">

                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={() =>
                                        setNoticiaSelecionada(null)
                                    }
                                >
                                    Fechar
                                </button>

                            </div>

                        </div>
                    </div>
                </div>
            )}
<ClimaAtual />
            <section className="cta">
                <div className="container text-center">

                    <h2>
                        Informação também é uma forma de ação.
                    </h2>

                    <p className="mt-3">
                        Conheça o ODS 13 e descubra como contribuir.
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

export default Noticias;