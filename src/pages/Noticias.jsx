import { useState } from "react";
import { Link } from "react-router-dom";
import ClimaAtual from "../components/ClimaAtual";

const NOTICIAS = [
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
        imagem: "/assets/img/acao-comunitaria.jpg",
        categoria: "Comunidade",
        titulo: "Ação comunitária",
        texto:
            "A participação da comunidade pode fortalecer ações de sustentabilidade.",
        conteudo:
            "Projetos comunitários podem incentivar a educação ambiental, a reciclagem, o plantio de árvores e outras práticas que promovem melhorias no ambiente local.",
    },
    {
        imagem: "/assets/img/consumo-consciente.jpg",
        categoria: "Recursos naturais",
        titulo: "Consumo responsável",
        texto:
            "Utilizar os recursos naturais de forma consciente é responsabilidade de todos.",
        conteudo:
            "Reduzir desperdícios e repensar os hábitos de consumo são atitudes importantes para preservar os recursos naturais para as próximas gerações.",
    },
    {
        imagem: "/assets/img/reducao-residuos.jpg",
        categoria: "Resíduos",
        titulo: "Redução de resíduos",
        texto:
            "A redução da geração de resíduos começa com escolhas conscientes.",
        conteudo:
            "Reutilizar materiais, evitar produtos descartáveis e realizar a separação adequada dos resíduos são práticas que podem reduzir impactos ambientais.",
    },
];

function Noticias() {
    const [noticiaSelecionada, setNoticiaSelecionada] = useState(null);

    function abrirNoticia(noticia) {
        setNoticiaSelecionada(noticia);
    }

    function fecharNoticia() {
        setNoticiaSelecionada(null);
    }

    return (
        <>
            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="noticias-hero">

                <div className="noticias-hero-circulo noticias-circulo-1"></div>
                <div className="noticias-hero-circulo noticias-circulo-2"></div>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <div className="noticias-hero-conteudo">

                                <span className="noticias-badge">
                                    <i
                                        className="bi bi-newspaper me-2"
                                        aria-hidden="true"
                                    ></i>
                                    Informação ambiental
                                </span>

                                <span className="noticias-mini-titulo">
                                    CLIMACONSCIENTE
                                </span>

                                <h1>
                                    Informação que
                                    <span> desperta consciência.</span>
                                </h1>

                                <p>
                                    Acompanhe conteúdos sobre clima,
                                    sustentabilidade, energia, natureza e
                                    atitudes que podem contribuir para um
                                    futuro mais sustentável.
                                </p>

                                <div className="noticias-hero-indicadores">

                                    <div>
                                        <strong>06</strong>
                                        <span>CONTEÚDOS</span>
                                    </div>

                                    <div>
                                        <strong>05</strong>
                                        <span>ÁREAS</span>
                                    </div>

                                    <div>
                                        <strong>01</strong>
                                        <span>PROPÓSITO</span>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-lg-5 d-none d-lg-block">

                            <div className="noticias-hero-visual">

                                <div className="noticias-visual-card noticias-visual-card-1">
                                    <i className="bi bi-cloud-sun"></i>
                                    <span>CLIMA</span>
                                </div>

                                <div className="noticias-visual-card noticias-visual-card-2">
                                    <i className="bi bi-tree"></i>
                                    <span>NATUREZA</span>
                                </div>

                                <div className="noticias-visual-card noticias-visual-card-3">
                                    <i className="bi bi-lightning-charge"></i>
                                    <span>ENERGIA</span>
                                </div>

                                <div className="noticias-visual-centro">
                                    <i className="bi bi-globe-americas"></i>
                                    <strong>13</strong>
                                    <span>ODS</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                NOTÍCIAS
            ====================================================== */}

            <section className="noticias-lista">

                <div className="container">

                    <div className="noticias-titulo-secao">

                        <div>

                            <span className="noticias-etiqueta">
                                CONTEÚDOS EM DESTAQUE
                            </span>

                            <h2>
                                Conhecimento que
                                <span> gera ação.</span>
                            </h2>

                        </div>

                        <p>
                            Conheça temas importantes relacionados ao meio
                            ambiente e às mudanças climáticas.
                        </p>

                    </div>


                    <div className="row g-4">

                        {NOTICIAS.map(function (noticia, index) {

                            return (
                                <div
                                    className="col-md-6 col-lg-4"
                                    key={noticia.titulo + index}
                                >

                                    <article className="noticia-moderna-card">

                                        <div className="noticia-moderna-imagem">

                                            <img
                                                src={noticia.imagem}
                                                alt={noticia.titulo}
                                                className="img-fluid w-100"
                                            />

                                            <span className="noticia-moderna-categoria">
                                                {noticia.categoria}
                                            </span>

                                            <div className="noticia-moderna-numero">
                                                {String(index + 1).padStart(2, "0")}
                                            </div>

                                        </div>


                                        <div className="noticia-moderna-conteudo">

                                            <span className="noticia-moderna-tipo">
                                                CLIMACONSCIENTE
                                            </span>

                                            <h3>
                                                {noticia.titulo}
                                            </h3>

                                            <p>
                                                {noticia.texto}
                                            </p>

                                            <button
                                                type="button"
                                                className="noticia-moderna-link"
                                                onClick={function () {
                                                    abrirNoticia(noticia);
                                                }}
                                                aria-label={
                                                    "Ler mais sobre " +
                                                    noticia.titulo
                                                }
                                            >
                                                Ler conteúdo
                                                <i
                                                    className="bi bi-arrow-up-right"
                                                    aria-hidden="true"
                                                ></i>
                                            </button>

                                        </div>

                                    </article>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                MODAL
            ====================================================== */}

            {noticiaSelecionada !== null && (

                <div
                    className="noticias-modal-overlay"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="titulo-noticia-modal"
                    onClick={fecharNoticia}
                >

                    <div
                        className="noticias-modal"
                        onClick={function (evento) {
                            evento.stopPropagation();
                        }}
                    >

                        <button
                            type="button"
                            className="noticias-modal-fechar"
                            aria-label="Fechar notícia"
                            onClick={fecharNoticia}
                        >
                            <i className="bi bi-x-lg"></i>
                        </button>


                        <img
                            src={noticiaSelecionada.imagem}
                            alt={noticiaSelecionada.titulo}
                            className="noticias-modal-imagem"
                        />


                        <div className="noticias-modal-conteudo">

                            <span className="noticias-modal-categoria">
                                {noticiaSelecionada.categoria}
                            </span>

                            <h2 id="titulo-noticia-modal">
                                {noticiaSelecionada.titulo}
                            </h2>

                            <p>
                                {noticiaSelecionada.conteudo}
                            </p>

                            <button
                                type="button"
                                className="noticias-modal-botao"
                                onClick={fecharNoticia}
                            >
                                Fechar
                                <i className="bi bi-check2 ms-2"></i>
                            </button>

                        </div>

                    </div>

                </div>

            )}


            {/* =====================================================
                CLIMA ATUAL
            ====================================================== */}

            <ClimaAtual />


            {/* =====================================================
                CTA
            ====================================================== */}

            <section className="noticias-cta">

                <div className="noticias-cta-circulo"></div>

                <div className="container">

                    <div className="noticias-cta-conteudo">

                        <div className="noticias-cta-icone">
                            <i className="bi bi-globe-americas"></i>
                        </div>

                        <span>
                            ODS 13 • AÇÃO CONTRA O CLIMA
                        </span>

                        <h2>
                            Informação também
                            <span> é uma forma de ação.</span>
                        </h2>

                        <p>
                            Conheça o ODS 13 e entenda como a conscientização
                            pode contribuir para enfrentar os desafios das
                            mudanças climáticas.
                        </p>

                        <Link
                            to="/ods13"
                            className="btn noticias-cta-btn"
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

export default Noticias;