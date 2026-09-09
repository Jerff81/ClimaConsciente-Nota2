import { Link } from "react-router-dom";

const DICAS = [
    {
        numero: "01",
        icone: "bi-lightbulb",
        titulo: "Economize energia",
        texto:
            "Apague as luzes ao sair dos ambientes e desligue equipamentos que não estão sendo utilizados.",
    },
    {
        numero: "02",
        icone: "bi-droplet",
        titulo: "Economize água",
        texto:
            "Evite desperdícios e adote hábitos conscientes durante o banho, limpeza e demais atividades.",
    },
    {
        numero: "03",
        icone: "bi-recycle",
        titulo: "Reduza os resíduos",
        texto:
            "Evite o desperdício, reutilize materiais e faça a separação adequada dos resíduos.",
    },
    {
        numero: "04",
        icone: "bi-bicycle",
        titulo: "Escolha transportes sustentáveis",
        texto:
            "Sempre que possível, caminhe, utilize bicicleta ou transporte coletivo.",
    },
    {
        numero: "05",
        icone: "bi-tree",
        titulo: "Preserve áreas verdes",
        texto:
            "Valorize árvores, parques e áreas naturais, contribuindo para a preservação dos ecossistemas.",
    },
    {
        numero: "06",
        icone: "bi-bag-heart",
        titulo: "Consuma com consciência",
        texto:
            "Antes de comprar, avalie se realmente precisa do produto e prefira opções duráveis.",
    },
    {
        numero: "07",
        icone: "bi-sun",
        titulo: "Aproveite a luz natural",
        texto:
            "Utilize a iluminação natural sempre que possível para reduzir o consumo de energia.",
    },
    {
        numero: "08",
        icone: "bi-cup-hot",
        titulo: "Evite descartáveis",
        texto:
            "Prefira objetos reutilizáveis para reduzir a geração de resíduos.",
    },
    {
        numero: "09",
        icone: "bi-megaphone",
        titulo: "Compartilhe conhecimento",
        texto:
            "Converse com familiares e amigos sobre sustentabilidade e mudanças climáticas.",
    },
];

function Dicas() {
    return (
        <>
            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="dicas-hero">

                <div className="dicas-hero-circulo dicas-circulo-1"></div>
                <div className="dicas-hero-circulo dicas-circulo-2"></div>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <div className="dicas-hero-conteudo">

                                <span className="dicas-badge">
                                    <i
                                        className="bi bi-check2-circle me-2"
                                        aria-hidden="true"
                                    ></i>
                                    Atitudes sustentáveis
                                </span>

                                <div className="dicas-numero">
                                    <span>09</span>
                                    <small>ATITUDES</small>
                                </div>

                                <h1>
                                    Pequenas atitudes.
                                    <span> Grandes mudanças.</span>
                                </h1>

                                <p>
                                    Descubra atitudes simples que podem ser
                                    incorporadas à rotina para reduzir impactos
                                    ambientais e contribuir para um futuro mais
                                    sustentável.
                                </p>

                                <div className="dicas-hero-botoes">

                                    <a
                                        href="#lista-dicas"
                                        className="btn dicas-btn-principal"
                                    >
                                        Ver dicas
                                        <i
                                            className="bi bi-arrow-down ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </a>

                                    <Link
                                        to="/simulador"
                                        className="btn dicas-btn-secundario"
                                    >
                                        Calcular meu impacto
                                        <i
                                            className="bi bi-arrow-right ms-2"
                                            aria-hidden="true"
                                        ></i>
                                    </Link>

                                </div>

                            </div>

                        </div>


                        <div className="col-lg-5 d-none d-lg-block">

                            <div className="dicas-hero-visual">

                                <div className="dicas-orbita dicas-orbita-1"></div>
                                <div className="dicas-orbita dicas-orbita-2"></div>

                                <div className="dicas-planeta">

                                    <i
                                        className="bi bi-leaf-fill"
                                        aria-hidden="true"
                                    ></i>

                                    <strong>+</strong>

                                    <span>
                                        AÇÃO
                                    </span>

                                </div>

                                <div className="dicas-folha dicas-folha-1">
                                    <i className="bi bi-tree-fill"></i>
                                </div>

                                <div className="dicas-folha dicas-folha-2">
                                    <i className="bi bi-droplet-fill"></i>
                                </div>

                                <div className="dicas-folha dicas-folha-3">
                                    <i className="bi bi-recycle"></i>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                INTRODUÇÃO
            ====================================================== */}

            <section className="dicas-introducao">

                <div className="container">

                    <div className="dicas-introducao-conteudo">

                        <div>

                            <span className="dicas-etiqueta">
                                FAÇA SUA PARTE
                            </span>

                            <h2>
                                O planeta agradece
                                <span> cada escolha consciente.</span>
                            </h2>

                        </div>

                        <p>
                            A sustentabilidade começa com escolhas que fazemos
                            diariamente. Pequenas mudanças de comportamento,
                            quando praticadas por muitas pessoas, podem
                            contribuir para a redução dos impactos ambientais.
                        </p>

                    </div>

                </div>

            </section>


            {/* =====================================================
                LISTA DE DICAS
            ====================================================== */}

            <section
                className="dicas-lista"
                id="lista-dicas"
            >

                <div className="container">

                    <div className="dicas-titulo-secao">

                        <div>

                            <span className="dicas-etiqueta">
                                GUIA PRÁTICO
                            </span>

                            <h2>
                                9 atitudes para
                                <span> começar hoje</span>
                            </h2>

                        </div>

                        <p>
                            Escolha uma atitude, coloque em prática e
                            compartilhe essa ideia.
                        </p>

                    </div>


                    <div className="row g-4">

                        {DICAS.map(function (dica) {

                            return (
                                <div
                                    className="col-md-6 col-lg-4"
                                    key={dica.numero}
                                >

                                    <article className="dicas-card">

                                        <div className="dicas-card-topo">

                                            <div className="dicas-card-icone">

                                                <i
                                                    className={
                                                        "bi " + dica.icone
                                                    }
                                                    aria-hidden="true"
                                                ></i>

                                            </div>

                                            <span className="dicas-card-numero">
                                                {dica.numero}
                                            </span>

                                        </div>

                                        <h3>
                                            {dica.titulo}
                                        </h3>

                                        <p>
                                            {dica.texto}
                                        </p>

                                        <div className="dicas-card-linha"></div>

                                        <span className="dicas-card-acao">
                                            Atitude sustentável
                                            <i className="bi bi-check-circle-fill"></i>
                                        </span>

                                    </article>

                                </div>
                            );
                        })}

                    </div>

                </div>

            </section>


            {/* =====================================================
                DESTAQUE
            ====================================================== */}

            <section className="dicas-destaque">

                <div className="container">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-7">

                            <span className="dicas-etiqueta">
                                CLIMACONSCIENTE
                            </span>

                            <h2>
                                Mais consciência,
                                <span> menos impacto.</span>
                            </h2>

                            <p>
                                Cada escolha pode representar uma oportunidade
                                de reduzir desperdícios, economizar recursos e
                                contribuir para uma relação mais equilibrada
                                com o meio ambiente.
                            </p>

                            <div className="dicas-beneficios">

                                <div className="dicas-beneficio">
                                    <i className="bi bi-lightning-charge-fill"></i>
                                    <span>Economize recursos</span>
                                </div>

                                <div className="dicas-beneficio">
                                    <i className="bi bi-arrow-repeat"></i>
                                    <span>Reutilize materiais</span>
                                </div>

                                <div className="dicas-beneficio">
                                    <i className="bi bi-tree-fill"></i>
                                    <span>Proteja a natureza</span>
                                </div>

                            </div>

                        </div>


                        <div className="col-lg-5">

                            <div className="dicas-impacto-card">

                                <div className="dicas-impacto-icone">
                                    <i className="bi bi-globe-americas"></i>
                                </div>

                                <span>
                                    SUA AÇÃO IMPORTA
                                </span>

                                <strong>
                                    01
                                </strong>

                                <p>
                                    Comece por uma mudança simples na sua
                                    rotina. Depois, incentive outras pessoas
                                    a fazerem o mesmo.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA SIMULADOR
            ====================================================== */}

            <section className="dicas-cta">

                <div className="dicas-cta-circulo"></div>

                <div className="container">

                    <div className="dicas-cta-conteudo">

                        <div className="dicas-cta-icone">
                            <i className="bi bi-speedometer2"></i>
                        </div>

                        <span>
                            DESCUBRA SEU IMPACTO
                        </span>

                        <h2>
                            Quer descobrir como
                            <span> suas escolhas impactam?</span>
                        </h2>

                        <p>
                            Utilize o simulador do ClimaConsciente para
                            conhecer melhor o impacto de algumas escolhas
                            do cotidiano.
                        </p>

                        <Link
                            to="/simulador"
                            className="btn dicas-cta-btn"
                        >
                            Abrir simulador
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

export default Dicas;