import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* =====================================================
                HERO PRINCIPAL
            ====================================================== */}
            <section
                className="home-hero"
                aria-labelledby="titulo-principal"
            >
                <div className="home-hero-overlay"></div>

                <div className="home-hero-circulo home-circulo-1"></div>
                <div className="home-hero-circulo home-circulo-2"></div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="home-hero-conteudo">

                                <span className="home-hero-badge">
                                    <i className="bi bi-globe-americas me-2"></i>
                                    ODS 13 — Ação Contra a Mudança Global do Clima
                                </span>

                                <span className="home-hero-mini">
                                    CLIMACONSCIENTE • EDUCAÇÃO • AÇÃO • FUTURO
                                </span>

                                <h1 id="titulo-principal">
                                    Pequenas atitudes.
                                    <span> Grandes mudanças.</span>
                                </h1>

                                <p>
                                    Informação e conscientização para ajudar
                                    você a compreender as mudanças climáticas
                                    e transformar pequenas atitudes do dia a dia
                                    em ações positivas para o planeta.
                                </p>

                                <div className="home-hero-botoes">

                                    <Link
                                        to="/ods13"
                                        className="home-btn-principal"
                                    >
                                        Conheça o ODS 13
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>

                                    <Link
                                        to="/simulador"
                                        className="home-btn-outline"
                                    >
                                        Simule seu impacto
                                        <i className="bi bi-bar-chart-fill"></i>
                                    </Link>

                                </div>

                                <div className="home-hero-destaques">

                                    <div>
                                        <i className="bi bi-lightbulb-fill"></i>
                                        <span>
                                            Conscientização
                                        </span>
                                    </div>

                                    <div>
                                        <i className="bi bi-arrow-repeat"></i>
                                        <span>
                                            Sustentabilidade
                                        </span>
                                    </div>

                                    <div>
                                        <i className="bi bi-people-fill"></i>
                                        <span>
                                            Participação
                                        </span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="col-lg-4 d-none d-lg-block">
                            <div className="home-hero-visual">

                                <div className="home-ods-orbita"></div>

                                <div className="home-ods-centro">
                                    <i className="bi bi-globe-americas"></i>
                                    <strong>13</strong>
                                    <span>ODS</span>
                                </div>

                                <div className="home-ods-flutuante home-ods-1">
                                    <i className="bi bi-tree-fill"></i>
                                    <span>NATUREZA</span>
                                </div>

                                <div className="home-ods-flutuante home-ods-2">
                                    <i className="bi bi-lightning-charge-fill"></i>
                                    <span>ENERGIA</span>
                                </div>

                                <div className="home-ods-flutuante home-ods-3">
                                    <i className="bi bi-recycle"></i>
                                    <span>RESÍDUOS</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="home-hero-indicador">
                    <span>Explore o projeto</span>
                    <i className="bi bi-chevron-down"></i>
                </div>
            </section>


            {/* =====================================================
                INTRODUÇÃO ODS 13
            ====================================================== */}
            <section
                className="home-ods-secao"
                id="ods"
                aria-labelledby="titulo-ods"
            >
                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <div className="home-secao-etiqueta">
                                <span>CONHEÇA</span>
                            </div>

                            <h2
                                id="titulo-ods"
                                className="home-titulo"
                            >
                                O que é o <span>ODS 13?</span>
                            </h2>

                            <p className="home-texto">
                                O Objetivo de Desenvolvimento Sustentável
                                13 busca promover ações urgentes para
                                combater as mudanças climáticas e seus
                                impactos.
                            </p>

                            <p className="home-texto">
                                O ODS 13 faz parte da Agenda 2030 da
                                Organização das Nações Unidas e incentiva
                                governos, empresas e cidadãos a adotarem
                                medidas para enfrentar os desafios
                                relacionados ao clima.
                            </p>

                            <ul className="home-ods-lista">

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>
                                        Aumentar a conscientização sobre
                                        as mudanças climáticas.
                                    </span>
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>
                                        Incentivar ações sustentáveis.
                                    </span>
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>
                                        Reduzir impactos ambientais.
                                    </span>
                                </li>

                                <li>
                                    <i className="bi bi-check-circle-fill"></i>
                                    <span>
                                        Estimular a participação da sociedade.
                                    </span>
                                </li>

                            </ul>

                            <Link
                                to="/ods13"
                                className="home-link-botao"
                            >
                                Saiba mais sobre o ODS 13
                                <i className="bi bi-arrow-right"></i>
                            </Link>

                        </div>


                        <div className="col-lg-6">

                            <article className="home-ods-card">

                                <div className="home-ods-card-topo">
                                    <div className="home-ods-numero">
                                        13
                                    </div>

                                    <span>
                                        OBJETIVO DE DESENVOLVIMENTO
                                        SUSTENTÁVEL
                                    </span>
                                </div>

                                <h3>
                                    Ação Contra a Mudança Global do Clima
                                </h3>

                                <p>
                                    Tomar medidas urgentes para combater
                                    a mudança do clima e seus impactos.
                                </p>

                                <div className="home-ods-linhas">

                                    <div className="home-ods-item">
                                        <i className="bi bi-lightbulb-fill"></i>
                                        <div>
                                            <strong>
                                                Conscientização
                                            </strong>
                                            <small>
                                                Informação para transformar
                                                comportamentos.
                                            </small>
                                        </div>
                                    </div>

                                    <div className="home-ods-item">
                                        <i className="bi bi-person-check-fill"></i>
                                        <div>
                                            <strong>
                                                Ação
                                            </strong>
                                            <small>
                                                Atitudes sustentáveis no
                                                cotidiano.
                                            </small>
                                        </div>
                                    </div>

                                    <div className="home-ods-item">
                                        <i className="bi bi-people-fill"></i>
                                        <div>
                                            <strong>
                                                Cooperação
                                            </strong>
                                            <small>
                                                Participação da sociedade.
                                            </small>
                                        </div>
                                    </div>

                                    <div className="home-ods-item">
                                        <i className="bi bi-tree-fill"></i>
                                        <div>
                                            <strong>
                                                Futuro
                                            </strong>
                                            <small>
                                                Um planeta mais sustentável.
                                            </small>
                                        </div>
                                    </div>

                                </div>

                            </article>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                NOTÍCIAS
            ====================================================== */}
            <section
                className="home-noticias-secao"
                aria-labelledby="titulo-noticias"
            >
                <div className="container">

                    <div className="home-cabecalho-secao">

                        <div>
                            <span className="home-secao-etiqueta">
                                INFORMAÇÃO
                            </span>

                            <h2
                                id="titulo-noticias"
                                className="home-titulo"
                            >
                                Notícias e atualidades
                            </h2>
                        </div>

                        <p>
                            Acompanhe conteúdos relacionados ao clima,
                            sustentabilidade e meio ambiente.
                        </p>

                    </div>


                    <div className="row g-4">

                        <div className="col-md-6 col-lg-4">

                            <article className="home-noticia-card">

                                <div className="home-noticia-imagem">

                                    <img
                                        src="/assets/img/noticia-clima.jpg"
                                        alt="Paisagem natural representando a importância da preservação ambiental"
                                    />

                                    <span>
                                        Clima
                                    </span>

                                </div>

                                <div className="home-noticia-conteudo">

                                    <h3>
                                        Mudanças climáticas
                                    </h3>

                                    <p>
                                        Entenda como as mudanças climáticas
                                        afetam o planeta e a vida das pessoas.
                                    </p>

                                    <Link to="/noticias">
                                        Ler mais
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>

                                </div>

                            </article>

                        </div>


                        <div className="col-md-6 col-lg-4">

                            <article className="home-noticia-card">

                                <div className="home-noticia-imagem">

                                    <img
                                        src="/assets/img/noticia-energia.jpg"
                                        alt="Imagem relacionada ao consumo consciente de energia"
                                    />

                                    <span>
                                        Energia
                                    </span>

                                </div>

                                <div className="home-noticia-conteudo">

                                    <h3>
                                        Uso consciente de energia
                                    </h3>

                                    <p>
                                        Pequenas mudanças nos hábitos podem
                                        contribuir para um consumo mais eficiente.
                                    </p>

                                    <Link to="/noticias">
                                        Ler mais
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>

                                </div>

                            </article>

                        </div>


                        <div className="col-md-6 col-lg-4">

                            <article className="home-noticia-card">

                                <div className="home-noticia-imagem">

                                    <img
                                        src="/assets/img/noticia-floresta.jpg"
                                        alt="Floresta representando a importância da conservação das áreas naturais"
                                    />

                                    <span>
                                        Natureza
                                    </span>

                                </div>

                                <div className="home-noticia-conteudo">

                                    <h3>
                                        Preservação das florestas
                                    </h3>

                                    <p>
                                        A conservação das áreas naturais é
                                        fundamental para o equilíbrio climático.
                                    </p>

                                    <Link to="/noticias">
                                        Ler mais
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>

                                </div>

                            </article>

                        </div>

                    </div>


                    <div className="text-center home-ver-mais">

                        <Link
                            to="/noticias"
                            className="home-link-botao"
                        >
                            Ver todas as notícias
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>
            </section>


            {/* =====================================================
                DICAS
            ====================================================== */}
            <section
                className="home-dicas-secao"
                aria-labelledby="titulo-dicas"
            >
                <div className="container">

                    <div className="home-cabecalho-centralizado">

                        <span className="home-secao-etiqueta">
                            AÇÕES SIMPLES
                        </span>

                        <h2
                            id="titulo-dicas"
                            className="home-titulo"
                        >
                            Uma rotina mais sustentável
                        </h2>

                        <p>
                            Atitudes simples podem ajudar a reduzir
                            impactos ambientais no dia a dia.
                        </p>

                    </div>


                    <div className="row g-4">

                        <div className="col-sm-6 col-lg-4">
                            <article className="home-dica-card">

                                <div className="home-dica-icone">
                                    <i className="bi bi-lightbulb-fill"></i>
                                </div>

                                <h3>
                                    Economize energia
                                </h3>

                                <p>
                                    Apague as luzes ao sair dos ambientes
                                    e desligue equipamentos que não estão
                                    sendo utilizados.
                                </p>

                            </article>
                        </div>


                        <div className="col-sm-6 col-lg-4">
                            <article className="home-dica-card">

                                <div className="home-dica-icone">
                                    <i className="bi bi-recycle"></i>
                                </div>

                                <h3>
                                    Reduza os resíduos
                                </h3>

                                <p>
                                    Evite desperdícios, reutilize materiais
                                    e faça a separação adequada dos resíduos.
                                </p>

                            </article>
                        </div>


                        <div className="col-sm-6 col-lg-4">
                            <article className="home-dica-card">

                                <div className="home-dica-icone">
                                    <i className="bi bi-droplet-fill"></i>
                                </div>

                                <h3>
                                    Economize água
                                </h3>

                                <p>
                                    Evite desperdícios e adote hábitos
                                    conscientes durante as atividades diárias.
                                </p>

                            </article>
                        </div>


                        <div className="col-sm-6 col-lg-4">
                            <article className="home-dica-card">

                                <div className="home-dica-icone">
                                    <i className="bi bi-bicycle"></i>
                                </div>

                                <h3>
                                    Transporte sustentável
                                </h3>

                                <p>
                                    Sempre que possível, caminhe, utilize
                                    bicicleta ou transporte coletivo.
                                </p>

                            </article>
                        </div>


                        <div className="col-sm-6 col-lg-4">
                            <article className="home-dica-card">

                                <div className="home-dica-icone">
                                    <i className="bi bi-tree-fill"></i>
                                </div>

                                <h3>
                                    Preserve áreas verdes
                                </h3>

                                <p>
                                    Árvores e florestas ajudam na manutenção
                                    dos ecossistemas e na captura de carbono.
                                </p>

                            </article>
                        </div>


                        <div className="col-sm-6 col-lg-4">
                            <article className="home-dica-card">

                                <div className="home-dica-icone">
                                    <i className="bi bi-bag-heart-fill"></i>
                                </div>

                                <h3>
                                    Consuma com consciência
                                </h3>

                                <p>
                                    Antes de comprar, avalie se realmente
                                    precisa do produto e evite desperdícios.
                                </p>

                            </article>
                        </div>

                    </div>


                    <div className="text-center home-ver-mais">

                        <Link
                            to="/dicas"
                            className="home-link-botao"
                        >
                            Ver todas as dicas
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>
            </section>


            {/* =====================================================
                SIMULADOR
            ====================================================== */}
            <section
                className="home-simulador-secao"
                aria-labelledby="titulo-simulador"
            >
                <div className="container">

                    <div className="home-simulador-box">

                        <div className="row align-items-center g-5">

                            <div className="col-lg-5">

                                <span className="home-simulador-badge">
                                    <i className="bi bi-stars me-1"></i>
                                    Interatividade
                                </span>

                                <h2 id="titulo-simulador">
                                    Descubra o impacto das suas atitudes
                                </h2>

                                <p>
                                    Nosso simulador mostra como pequenas
                                    mudanças na rotina podem contribuir
                                    para a redução do impacto ambiental.
                                </p>

                                <Link
                                    to="/simulador"
                                    className="home-simulador-btn"
                                >
                                    Conhecer o simulador
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </div>


                            <div className="col-lg-7">

                                <div className="row g-3">

                                    <div className="col-sm-6">
                                        <div className="home-simulador-item">
                                            <i className="bi bi-lightning-charge-fill"></i>
                                            <div>
                                                <h3>Energia</h3>
                                                <p>
                                                    Hábitos de consumo consciente.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="home-simulador-item">
                                            <i className="bi bi-bicycle"></i>
                                            <div>
                                                <h3>Transporte</h3>
                                                <p>
                                                    Escolhas de mobilidade sustentável.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="home-simulador-item">
                                            <i className="bi bi-droplet-fill"></i>
                                            <div>
                                                <h3>Água</h3>
                                                <p>
                                                    Redução do desperdício.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="home-simulador-item">
                                            <i className="bi bi-tree-fill"></i>
                                            <div>
                                                <h3>Natureza</h3>
                                                <p>
                                                    Preservação das áreas verdes.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                CAMPANHAS
            ====================================================== */}
            <section
                className="home-campanhas-secao"
                aria-labelledby="titulo-campanhas"
            >
                <div className="container">

                    <div className="home-cabecalho-secao">

                        <div>
                            <span className="home-secao-etiqueta">
                                PARTICIPAÇÃO
                            </span>

                            <h2
                                id="titulo-campanhas"
                                className="home-titulo"
                            >
                                Campanhas e ações
                            </h2>
                        </div>

                        <p>
                            Ações locais podem transformar comunidades
                            e incentivar práticas sustentáveis.
                        </p>

                    </div>


                    <div className="row g-4">

                        <div className="col-md-4">
                            <article className="home-campanha-card">

                                <div className="home-campanha-numero">
                                    01
                                </div>

                                <span>
                                    AÇÃO AMBIENTAL
                                </span>

                                <h3>
                                    Plantio de árvores
                                </h3>

                                <p>
                                    Incentivo ao plantio e à preservação
                                    de árvores em espaços urbanos.
                                </p>

                                <Link to="/campanhas">
                                    Saiba mais
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </article>
                        </div>


                        <div className="col-md-4">
                            <article className="home-campanha-card">

                                <div className="home-campanha-numero">
                                    02
                                </div>

                                <span>
                                    EDUCAÇÃO
                                </span>

                                <h3>
                                    Educação climática
                                </h3>

                                <p>
                                    Ações educativas para incentivar
                                    conhecimento e consciência ambiental.
                                </p>

                                <Link to="/campanhas">
                                    Saiba mais
                                    <i className="bi bi-arrow-right"></i>
                                </Link>

                            </article>
                        </div>


                        <div className="col-md-4">
                            <article className="home-campanha-card">

                                <div className="home-campanha-numero">
                                    03
                                </div>

                                <span>
                                    COMUNIDADE
                                </span>

                                <h3>
                                    Comunidade sustentável
                                </h3>

                                <p>
                                    Mobilização da comunidade para
                                    promover hábitos mais sustentáveis.
                                </p>

                                <Link to="/campanhas">
                                    Saiba mais
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
            <section
                className="home-cta"
                aria-labelledby="titulo-cta"
            >
                <div className="home-cta-circulo"></div>

                <div className="container">

                    <div className="home-cta-conteudo">

                        <div className="home-cta-icone">
                            <i className="bi bi-globe-americas"></i>
                        </div>

                        <span>
                            CLIMACONSCIENTE • ODS 13
                        </span>

                        <h2 id="titulo-cta">
                            O futuro também depende
                            <strong> das nossas escolhas.</strong>
                        </h2>

                        <p>
                            Informe-se, compartilhe conhecimento e faça
                            parte da mudança por um planeta mais consciente
                            e sustentável.
                        </p>

                        <Link
                            to="/contato"
                            className="home-cta-btn"
                        >
                            Entre em contato
                            <i className="bi bi-arrow-right"></i>
                        </Link>

                    </div>

                </div>
            </section>
        </>
    );
}

export default Home;