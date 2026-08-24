import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            {/* =====================================================
                HERO
            ====================================================== */}
            <section
                className="hero"
                aria-labelledby="titulo-principal"
            >
                <div className="container">
                    <div className="hero-conteudo">

                        <span className="hero-etiqueta">
                            <i className="bi bi-globe2"></i>
                            ODS 13 — Ação Contra a Mudança Global do Clima
                        </span>

                        <h1 id="titulo-principal">
                            Pequenas atitudes.
                            <span>Grandes mudanças.</span>
                        </h1>

                        <p>
                            Informação e conscientização para ajudar
                            você a compreender as mudanças climáticas
                            e transformar pequenas atitudes do dia a dia
                            em ações positivas para o planeta.
                        </p>

                        <div className="d-flex flex-wrap gap-2">

                            <Link
                                to="/ods13"
                                className="btn-principal"
                            >
                                Conheça o ODS 13
                                <i className="bi bi-arrow-right ms-2"></i>
                            </Link>

                            <Link
                                to="/simulador"
                                className="btn-outline-clima"
                            >
                                Simule seu impacto
                                <i className="bi bi-bar-chart ms-2"></i>
                            </Link>

                        </div>

                    </div>
                </div>
            </section>


            {/* =====================================================
                ODS 13
            ====================================================== */}
            <section
                className="secao"
                id="ods"
                aria-labelledby="titulo-ods"
            >
                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <div className="titulo-secao mb-4">

                                <span className="etiqueta">
                                    Conheça
                                </span>

                                <h2 id="titulo-ods">
                                    O que é o ODS 13?
                                </h2>

                            </div>

                            <p>
                                O Objetivo de Desenvolvimento Sustentável
                                13 busca promover ações urgentes para
                                combater as mudanças climáticas e seus
                                impactos.
                            </p>

                            <p>
                                O ODS 13 faz parte da Agenda 2030 da
                                Organização das Nações Unidas e incentiva
                                governos, empresas e cidadãos a adotarem
                                medidas para enfrentar os desafios
                                relacionados ao clima.
                            </p>

                            <ul className="ods-lista">

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
                                className="btn btn-success rounded-pill px-4"
                            >
                                Saiba mais sobre o ODS 13
                                <i className="bi bi-arrow-right ms-1"></i>
                            </Link>

                        </div>


                        <div className="col-lg-6">

                            <article className="ods-card">

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

                                <hr />

                                <div className="row g-3">

                                    <div className="col-sm-6">

                                        <strong className="d-block fs-5">
                                            Conscientização
                                        </strong>

                                        <small className="text-muted">
                                            Informação para transformar
                                            comportamentos.
                                        </small>

                                    </div>

                                    <div className="col-sm-6">

                                        <strong className="d-block fs-5">
                                            Ação
                                        </strong>

                                        <small className="text-muted">
                                            Atitudes sustentáveis no
                                            cotidiano.
                                        </small>

                                    </div>

                                    <div className="col-sm-6">

                                        <strong className="d-block fs-5">
                                            Cooperação
                                        </strong>

                                        <small className="text-muted">
                                            Participação da sociedade.
                                        </small>

                                    </div>

                                    <div className="col-sm-6">

                                        <strong className="d-block fs-5">
                                            Futuro
                                        </strong>

                                        <small className="text-muted">
                                            Um planeta mais sustentável.
                                        </small>

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
                className="secao secao-clara"
                aria-labelledby="titulo-noticias"
            >
                <div className="container">

                    <div className="titulo-secao">

                        <span className="etiqueta">
                            Informação
                        </span>

                        <h2 id="titulo-noticias">
                            Notícias e atualidades
                        </h2>

                        <p>
                            Acompanhe conteúdos relacionados ao clima,
                            sustentabilidade e meio ambiente.
                        </p>

                    </div>


                    <div className="row g-4">

                        {/* NOTÍCIA 1 */}
                        <div className="col-md-6 col-lg-4">

                            <article className="card-clima">

                                <div className="card-clima-imagem">

                                    <img
                                        src="/assets/img/noticia-clima.jpg"
                                        alt="Paisagem natural representando a importância da preservação ambiental"
                                    />

                                </div>

                                <div className="card-clima-conteudo">

                                    <span className="card-categoria">
                                        Clima
                                    </span>

                                    <h3>
                                        Mudanças climáticas
                                    </h3>

                                    <p>
                                        Entenda como as mudanças climáticas
                                        afetam o planeta e a vida das pessoas.
                                    </p>

                                    <Link to="/noticias">
                                        Ler mais
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>

                                </div>

                            </article>

                        </div>


                        {/* NOTÍCIA 2 */}
                        <div className="col-md-6 col-lg-4">

                            <article className="card-clima">

                                <div className="card-clima-imagem">

                                    <img
                                        src="/assets/img/noticia-energia.jpg"
                                        alt="Imagem relacionada ao consumo consciente de energia"
                                    />

                                </div>

                                <div className="card-clima-conteudo">

                                    <span className="card-categoria">
                                        Energia
                                    </span>

                                    <h3>
                                        Uso consciente de energia
                                    </h3>

                                    <p>
                                        Pequenas mudanças nos hábitos podem
                                        contribuir para um consumo mais eficiente.
                                    </p>

                                    <Link to="/noticias">
                                        Ler mais
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>

                                </div>

                            </article>

                        </div>


                        {/* NOTÍCIA 3 */}
                        <div className="col-md-6 col-lg-4">

                            <article className="card-clima">

                                <div className="card-clima-imagem">

                                    <img
                                        src="/assets/img/noticia-floresta.jpg"
                                        alt="Floresta representando a importância da conservação das áreas naturais"
                                    />

                                </div>

                                <div className="card-clima-conteudo">

                                    <span className="card-categoria">
                                        Natureza
                                    </span>

                                    <h3>
                                        Preservação das florestas
                                    </h3>

                                    <p>
                                        A conservação das áreas naturais é
                                        fundamental para o equilíbrio climático.
                                    </p>

                                    <Link to="/noticias">
                                        Ler mais
                                        <i className="bi bi-arrow-right ms-2"></i>
                                    </Link>

                                </div>

                            </article>

                        </div>

                    </div>


                    <div className="text-center mt-5">

                        <Link
                            to="/noticias"
                            className="btn btn-success rounded-pill px-4"
                        >
                            Ver todas as notícias
                            <i className="bi bi-arrow-right ms-1"></i>
                        </Link>

                    </div>

                </div>
            </section>


            {/* =====================================================
                DICAS
            ====================================================== */}
            <section
                className="secao"
                aria-labelledby="titulo-dicas"
            >
                <div className="container">

                    <div className="titulo-secao">

                        <span className="etiqueta">
                            Ações simples
                        </span>

                        <h2 id="titulo-dicas">
                            Dicas para uma rotina mais sustentável
                        </h2>

                        <p>
                            Atitudes simples podem ajudar a reduzir
                            impactos ambientais no dia a dia.
                        </p>

                    </div>


                    <div className="row g-4">

                        <div className="col-sm-6 col-lg-4">

                            <article className="dica-card">

                                <div className="dica-icone">
                                    <i className="bi bi-lightbulb"></i>
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

                            <article className="dica-card">

                                <div className="dica-icone">
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

                            <article className="dica-card">

                                <div className="dica-icone">
                                    <i className="bi bi-droplet"></i>
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

                            <article className="dica-card">

                                <div className="dica-icone">
                                    <i className="bi bi-bicycle"></i>
                                </div>

                                <h3>
                                    Escolha transportes sustentáveis
                                </h3>

                                <p>
                                    Sempre que possível, caminhe, utilize
                                    bicicleta ou transporte coletivo.
                                </p>

                            </article>

                        </div>


                        <div className="col-sm-6 col-lg-4">

                            <article className="dica-card">

                                <div className="dica-icone">
                                    <i className="bi bi-tree"></i>
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

                            <article className="dica-card">

                                <div className="dica-icone">
                                    <i className="bi bi-bag-heart"></i>
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


                    <div className="text-center mt-5">

                        <Link
                            to="/dicas"
                            className="btn btn-success rounded-pill px-4"
                        >
                            Ver todas as dicas
                            <i className="bi bi-arrow-right ms-1"></i>
                        </Link>

                    </div>

                </div>
            </section>


            {/* =====================================================
                SIMULADOR
            ====================================================== */}
            <section
                className="secao secao-verde"
                aria-labelledby="titulo-simulador"
            >
                <div className="container">

                    <div className="simulador-box">

                        <div className="row align-items-center g-5">

                            <div className="col-lg-5">

                                <span className="badge bg-light text-success mb-3">
                                    Em desenvolvimento
                                </span>

                                <h2 id="titulo-simulador">
                                    Descubra o impacto das suas atitudes
                                </h2>

                                <p>
                                    Nosso simulador foi pensado para mostrar
                                    como pequenas mudanças na rotina podem
                                    contribuir para a redução do impacto
                                    ambiental.
                                </p>

                                <Link
                                    to="/simulador"
                                    className="btn btn-light text-success rounded-pill px-4 mt-2"
                                >
                                    Conhecer o simulador
                                    <i className="bi bi-arrow-right ms-1"></i>
                                </Link>

                            </div>


                            <div className="col-lg-7">

                                <div className="row g-3">

                                    <div className="col-sm-6">

                                        <div className="simulador-item">

                                            <i className="bi bi-lightning-charge"></i>

                                            <h3>
                                                Energia
                                            </h3>

                                            <p>
                                                Hábitos de consumo consciente.
                                            </p>

                                        </div>

                                    </div>


                                    <div className="col-sm-6">

                                        <div className="simulador-item">

                                            <i className="bi bi-bicycle"></i>

                                            <h3>
                                                Transporte
                                            </h3>

                                            <p>
                                                Escolhas de mobilidade sustentável.
                                            </p>

                                        </div>

                                    </div>


                                    <div className="col-sm-6">

                                        <div className="simulador-item">

                                            <i className="bi bi-droplet"></i>

                                            <h3>
                                                Água
                                            </h3>

                                            <p>
                                                Redução do desperdício.
                                            </p>

                                        </div>

                                    </div>


                                    <div className="col-sm-6">

                                        <div className="simulador-item">

                                            <i className="bi bi-tree"></i>

                                            <h3>
                                                Natureza
                                            </h3>

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
            </section>


            {/* =====================================================
                CAMPANHAS
            ====================================================== */}
            <section
                className="secao"
                aria-labelledby="titulo-campanhas"
            >
                <div className="container">

                    <div className="titulo-secao">

                        <span className="etiqueta">
                            Participação
                        </span>

                        <h2 id="titulo-campanhas">
                            Campanhas e ações
                        </h2>

                        <p>
                            Ações locais podem transformar comunidades
                            e incentivar práticas sustentáveis.
                        </p>

                    </div>


                    <div className="row g-4">

                        <div className="col-md-4">

                            <article className="campanha-card">

                                <span className="campanha-data">
                                    Ação ambiental
                                </span>

                                <h3>
                                    Plantio de árvores
                                </h3>

                                <p className="text-muted">
                                    Incentivo ao plantio e à preservação
                                    de árvores em espaços urbanos.
                                </p>

                                <Link
                                    to="/campanhas"
                                    className="link-verde"
                                >
                                    Saiba mais
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>

                            </article>

                        </div>


                        <div className="col-md-4">

                            <article className="campanha-card">

                                <span className="campanha-data">
                                    Educação
                                </span>

                                <h3>
                                    Educação climática
                                </h3>

                                <p className="text-muted">
                                    Ações educativas para incentivar
                                    conhecimento e consciência ambiental.
                                </p>

                                <Link
                                    to="/campanhas"
                                    className="link-verde"
                                >
                                    Saiba mais
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </Link>

                            </article>

                        </div>


                        <div className="col-md-4">

                            <article className="campanha-card">

                                <span className="campanha-data">
                                    Comunidade
                                </span>

                                <h3>
                                    Comunidade sustentável
                                </h3>

                                <p className="text-muted">
                                    Mobilização da comunidade para
                                    promover hábitos mais sustentáveis.
                                </p>

                                <Link
                                    to="/campanhas"
                                    className="link-verde"
                                >
                                    Saiba mais
                                    <i className="bi bi-arrow-right ms-2"></i>
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
                className="cta"
                aria-labelledby="titulo-cta"
            >
                <div className="container text-center">

                    <h2 id="titulo-cta">
                        O futuro também depende das nossas escolhas.
                    </h2>

                    <p className="mt-3 mb-4">
                        Informe-se, compartilhe conhecimento e faça
                        parte da mudança.
                    </p>

                    <Link
                        to="/contato"
                        className="btn btn-light text-primary rounded-pill px-4"
                    >
                        Entre em contato
                        <i className="bi bi-arrow-right ms-1"></i>
                    </Link>

                </div>
            </section>

        </>
    );
}

export default Home;