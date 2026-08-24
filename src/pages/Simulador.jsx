import { useState } from "react";

function Simulador() {
    const [energia, setEnergia] = useState(5);
    const [carro, setCarro] = useState(10);
    const [reciclagem, setReciclagem] = useState("sim");
    const [resultado, setResultado] = useState(null);

    const calcularImpacto = (event) => {
        event.preventDefault();

        const energiaImpacto = Number(energia) * 8;
        const transporteImpacto = Number(carro) * 2;

        const reciclagemImpacto =
            reciclagem === "sim" ? 10 : 25;

        const total =
            energiaImpacto +
            transporteImpacto +
            reciclagemImpacto;

        let classificacao = "";
        let mensagem = "";

        if (total <= 80) {
            classificacao = "Baixo impacto";
            mensagem =
                "Excelente! Seus hábitos indicam uma boa preocupação com a sustentabilidade.";
        } else if (total <= 140) {
            classificacao = "Impacto moderado";
            mensagem =
                "Você já adota algumas atitudes positivas, mas ainda existem oportunidades de melhoria.";
        } else {
            classificacao = "Impacto elevado";
            mensagem =
                "Pequenas mudanças na rotina podem ajudar a reduzir seu impacto ambiental.";
        }

        setResultado({
            total,
            classificacao,
            mensagem,
        });
    };

    return (
        <>
            <section className="pagina-hero">
                <div className="container">
                    <div className="pagina-hero-conteudo">

                        <span className="etiqueta">
                            <i className="bi bi-bar-chart me-2"></i>
                            Interatividade
                        </span>

                        <h1>Simulador de impacto</h1>

                        <p>
                            Responda algumas perguntas e veja uma estimativa
                            simples do impacto relacionado aos seus hábitos.
                        </p>

                    </div>
                </div>
            </section>

            <section className="secao">

                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-lg-8">

                            <div className="contato-form-card">

                                <div className="titulo-secao mb-4">

                                    <span className="etiqueta">
                                        Simulação educativa
                                    </span>

                                    <h2>
                                        Calcule seu impacto
                                    </h2>

                                    <p>
                                        Os valores apresentados são apenas
                                        uma estimativa educativa para demonstrar
                                        como diferentes hábitos podem influenciar
                                        o impacto ambiental.
                                    </p>

                                </div>

                                <form onSubmit={calcularImpacto}>

                                    {/* ENERGIA */}

                                    <div className="mb-4">

                                        <label
                                            htmlFor="energia"
                                            className="form-label fw-semibold"
                                        >
                                            Quantas horas por dia você utiliza
                                            equipamentos eletrônicos?
                                        </label>

                                        <input
                                            type="number"
                                            id="energia"
                                            min="0"
                                            max="24"
                                            className="form-control"
                                            value={energia}
                                            onChange={(event) =>
                                                setEnergia(event.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                    {/* TRANSPORTE */}

                                    <div className="mb-4">

                                        <label
                                            htmlFor="carro"
                                            className="form-label fw-semibold"
                                        >
                                            Quantos quilômetros por dia você
                                            percorre de carro?
                                        </label>

                                        <input
                                            type="number"
                                            id="carro"
                                            min="0"
                                            className="form-control"
                                            value={carro}
                                            onChange={(event) =>
                                                setCarro(event.target.value)
                                            }
                                            required
                                        />

                                    </div>

                                    {/* RECICLAGEM */}

                                    <div className="mb-4">

                                        <label className="form-label fw-semibold">
                                            Você realiza a separação dos resíduos?
                                        </label>

                                        <select
                                            className="form-select"
                                            value={reciclagem}
                                            onChange={(event) =>
                                                setReciclagem(event.target.value)
                                            }
                                        >

                                            <option value="sim">
                                                Sim
                                            </option>

                                            <option value="nao">
                                                Não
                                            </option>

                                        </select>

                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-success rounded-pill px-4"
                                    >
                                        <i className="bi bi-calculator me-2"></i>
                                        Calcular impacto
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                    {resultado && (
                        <div className="row justify-content-center mt-5">

                            <div className="col-lg-8">

                                <div className="ods-card text-center">

                                    <i
                                        className="bi bi-bar-chart-line"
                                        style={{ fontSize: "3rem" }}
                                    ></i>

                                    <h2 className="mt-3">
                                        {resultado.classificacao}
                                    </h2>

                                    <p>
                                        Pontuação estimada:
                                        <strong className="ms-2">
                                            {resultado.total}
                                        </strong>
                                    </p>

                                    <p>
                                        {resultado.mensagem}
                                    </p>

                                </div>

                            </div>

                        </div>
                    )}

                </div>

            </section>

            <section className="secao secao-clara">

                <div className="container text-center">

                    <h2>
                        Lembre-se
                    </h2>

                    <p className="mt-3 mb-0">
                        O objetivo desta ferramenta é incentivar a reflexão
                        sobre hábitos cotidianos e não substituir cálculos
                        oficiais de emissão de carbono.
                    </p>

                </div>

            </section>
        </>
    );
}

export default Simulador;