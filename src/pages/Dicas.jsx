import { Link } from "react-router-dom";

function Dicas() {
    const dicas = [
        {
            icone: "bi-lightbulb",
            titulo: "Economize energia",
            texto:
                "Apague as luzes ao sair dos ambientes e desligue equipamentos que não estão sendo utilizados.",
        },
        {
            icone: "bi-droplet",
            titulo: "Economize água",
            texto:
                "Evite desperdícios e adote hábitos conscientes durante o banho, limpeza e demais atividades.",
        },
        {
            icone: "bi-recycle",
            titulo: "Reduza os resíduos",
            texto:
                "Evite o desperdício, reutilize materiais e faça a separação adequada dos resíduos.",
        },
        {
            icone: "bi-bicycle",
            titulo: "Escolha transportes sustentáveis",
            texto:
                "Sempre que possível, caminhe, utilize bicicleta ou transporte coletivo.",
        },
        {
            icone: "bi-tree",
            titulo: "Preserve áreas verdes",
            texto:
                "Valorize árvores, parques e áreas naturais, contribuindo para a preservação dos ecossistemas.",
        },
        {
            icone: "bi-bag-heart",
            titulo: "Consuma com consciência",
            texto:
                "Antes de comprar, avalie se realmente precisa do produto e prefira opções duráveis.",
        },
        {
            icone: "bi-sun",
            titulo: "Aproveite a luz natural",
            texto:
                "Utilize a iluminação natural sempre que possível para reduzir o consumo de energia.",
        },
        {
            icone: "bi-cup-hot",
            titulo: "Evite descartáveis",
            texto:
                "Prefira objetos reutilizáveis para reduzir a geração de resíduos.",
        },
        {
            icone: "bi-megaphone",
            titulo: "Compartilhe conhecimento",
            texto:
                "Converse com familiares e amigos sobre sustentabilidade e mudanças climáticas.",
        },
    ];

    return (
        <>
            <section className="pagina-hero">
                <div className="container">
                    <div className="pagina-hero-conteudo">

                        <span className="etiqueta">
                            <i className="bi bi-check2-circle me-2"></i>
                            Atitudes sustentáveis
                        </span>

                        <h1>Dicas para o dia a dia</h1>

                        <p>
                            Descubra atitudes simples que podem ajudar
                            a reduzir impactos ambientais.
                        </p>

                    </div>
                </div>
            </section>

            <section className="secao">
                <div className="container">

                    <div className="titulo-secao mb-5">
                        <span className="etiqueta">
                            Faça sua parte
                        </span>

                        <h2>
                            Pequenas atitudes, grandes mudanças
                        </h2>

                        <p>
                            A sustentabilidade começa com escolhas
                            que fazemos diariamente.
                        </p>
                    </div>

                    <div className="row g-4">

                        {dicas.map((dica) => (
                            <div
                                className="col-md-6 col-lg-4"
                                key={dica.titulo}
                            >
                                <article className="dica-card h-100">

                                    <div className="dica-icone">
                                        <i className={`bi ${dica.icone}`}></i>
                                    </div>

                                    <h3>
                                        {dica.titulo}
                                    </h3>

                                    <p>
                                        {dica.texto}
                                    </p>

                                </article>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            <section className="secao secao-verde">
                <div className="container text-center">

                    <h2>
                        Quer descobrir seu impacto?
                    </h2>

                    <p className="mt-3">
                        Utilize o simulador do ClimaConsciente para
                        conhecer melhor o impacto de algumas escolhas
                        do cotidiano.
                    </p>

                    <Link
                        to="/simulador"
                        className="btn btn-light text-success rounded-pill px-4 mt-3"
                    >
                        Abrir simulador
                        <i className="bi bi-arrow-right ms-2"></i>
                    </Link>

                </div>
            </section>
        </>
    );
}

export default Dicas;