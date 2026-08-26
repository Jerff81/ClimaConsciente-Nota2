import { useState } from "react";

function Simulador() {
    const [energia, setEnergia] = useState(5);
    const [carro, setCarro] = useState(10);
    const [reciclagem, setReciclagem] = useState("sim");
    const [resultado, setResultado] = useState(null);

    const calcularImpacto = (event) => {
        event.preventDefault();

        const valEnergia = Math.max(0, Number(energia) || 0);
        const valCarro = Math.max(0, Number(carro) || 0);

        const energiaImpacto = valEnergia * 8;
        const transporteImpacto = valCarro * 2;
        const reciclagemImpacto = reciclagem === "sim" ? 10 : 25;

        const total = energiaImpacto + transporteImpacto + reciclagemImpacto;

        const pctEnergia = Math.round((energiaImpacto / total) * 100);
        const pctTransporte = Math.round((transporteImpacto / total) * 100);
        const pctReciclagem = 100 - (pctEnergia + pctTransporte);

        let classificacao = "";
        let mensagem = "";
        let recomendacao = "";
        let classeResultado = "";
        let iconeResultado = "";

        if (total <= 80) {
            classificacao = "Baixo impacto";
            mensagem = "Excelente! Seus hábitos indicam uma boa preocupação com a sustentabilidade.";
            recomendacao = "Continue mantendo essas atitudes e incentive outras pessoas a adotarem hábitos sustentáveis.";
            classeResultado = "baixo";
            iconeResultado = "bi-emoji-smile";
        } else if (total <= 140) {
            classificacao = "Impacto moderado";
            mensagem = "Você já adota algumas atitudes positivas, mas ainda existem oportunidades de melhoria.";
            recomendacao = "Experimente reduzir o uso do carro, economizar energia e manter a separação correta dos resíduos.";
            classeResultado = "moderado";
            iconeResultado = "bi-emoji-neutral";
        } else {
            classificacao = "Impacto elevado";
            mensagem = "Pequenas mudanças na rotina podem ajudar a reduzir seu impacto ambiental.";
            recomendacao = "Comece reduzindo o consumo de energia, diminuindo o uso do carro e separando corretamente os resíduos.";
            classeResultado = "elevado";
            iconeResultado = "bi-emoji-frown";
        }

        const categorias = [
            {
                nome: "Energia",
                valor: pctEnergia,
                impacto: energiaImpacto,
                icone: "bi-lightning-charge-fill",
            },
            {
                nome: "Transporte",
                valor: pctTransporte,
                impacto: transporteImpacto,
                icone: "bi-car-front-fill",
            },
            {
                nome: "Resíduos/Reciclagem",
                valor: pctReciclagem,
                impacto: reciclagemImpacto,
                icone: "bi-recycle",
            },
        ];

        const maiorCategoria = categorias.reduce((maior, categoria) =>
            categoria.impacto > maior.impacto ? categoria : maior
        );

        setResultado({
            total,
            classificacao,
            mensagem,
            recomendacao,
            pctEnergia,
            pctTransporte,
            pctReciclagem,
            classeResultado,
            iconeResultado,
            maiorCategoria,
        });
    };

    const reiniciarSimulador = () => {
        setEnergia(5);
        setCarro(10);
        setReciclagem("sim");
        setResultado(null);
    };

    return (
        <>
            {/* HERO */}
            <section className="pagina-hero">
                <div className="container">
                    <div className="pagina-hero-conteudo">
                        <span className="etiqueta">
                            <i className="bi bi-bar-chart me-2"></i>
                            Interatividade
                        </span>
                        <h1>Simulador de impacto</h1>
                        <p>
                            Responda algumas perguntas e descubra uma estimativa educativa do impacto relacionado aos seus hábitos.
                        </p>
                    </div>
                </div>
            </section>

            {/* FORMULÁRIO */}
            <section className="secao">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contato-form-card">
                                <div className="titulo-secao mb-4">
                                    <span className="etiqueta">Simulação educativa</span>
                                    <h2>
                                        <i className="bi bi-calculator me-2"></i>
                                        Calcule seu impacto
                                    </h2>
                                    <p>
                                        Informe alguns hábitos do seu dia a dia para gerar uma estimativa de impacto ambiental.
                                    </p>
                                    <div className="alert alert-info mt-3">
                                        <i className="bi bi-info-circle me-2"></i>
                                        Os valores apresentados são apenas uma estimativa educativa e não representam um cálculo oficial de emissão de carbono.
                                    </div>
                                </div>

                                <form onSubmit={calcularImpacto}>
                                    {/* ENERGIA */}
                                    <div className="mb-4">
                                        <label htmlFor="energia" className="form-label fw-semibold">
                                            <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
                                            Quantas horas por dia você utiliza equipamentos eletrônicos?
                                        </label>
                                        <input
                                            type="number"
                                            id="energia"
                                            min="0"
                                            max="24"
                                            className="form-control form-control-lg"
                                            value={energia}
                                            onChange={(e) => setEnergia(e.target.value)}
                                            required
                                        />
                                        <small className="text-muted">Informe uma média diária aproximada.</small>
                                    </div>

                                    {/* TRANSPORTE */}
                                    <div className="mb-4">
                                        <label htmlFor="carro" className="form-label fw-semibold">
                                            <i className="bi bi-car-front-fill text-danger me-2"></i>
                                            Quantos quilômetros por dia você percorre de carro?
                                        </label>
                                        <input
                                            type="number"
                                            id="carro"
                                            min="0"
                                            className="form-control form-control-lg"
                                            value={carro}
                                            onChange={(e) => setCarro(e.target.value)}
                                            required
                                        />
                                        <small className="text-muted">Considere a distância média percorrida diariamente.</small>
                                    </div>

                                    {/* RECICLAGEM */}
                                    <div className="mb-4">
                                        <label htmlFor="reciclagem" className="form-label fw-semibold">
                                            <i className="bi bi-recycle text-success me-2"></i>
                                            Você realiza a separação dos resíduos?
                                        </label>
                                        <select
                                            id="reciclagem"
                                            className="form-select form-select-lg"
                                            value={reciclagem}
                                            onChange={(e) => setReciclagem(e.target.value)}
                                        >
                                            <option value="sim">Sim</option>
                                            <option value="nao">Não</option>
                                        </select>
                                    </div>

                                    {/* BOTÕES */}
                                    <div className="d-flex gap-2 flex-wrap">
                                        <button type="submit" className="btn btn-success rounded-pill px-4">
                                            <i className="bi bi-calculator me-2"></i>
                                            Calcular impacto
                                        </button>
                                        {resultado && (
                                            <button
                                                type="button"
                                                onClick={reiniciarSimulador}
                                                className="btn btn-outline-secondary rounded-pill px-4"
                                            >
                                                <i className="bi bi-arrow-counterclockwise me-2"></i>
                                                Refazer
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* RESULTADO */}
                    {resultado && (
                        <div className="row justify-content-center mt-5">
                            <div className="col-lg-9">
                                <div className="ods-card text-center p-4">
                                    <div className="mb-3">
                                        <i
                                            className={`bi ${resultado.iconeResultado}`}
                                            style={{ fontSize: "4rem" }}
                                        ></i>
                                    </div>

                                    <span className="etiqueta">Resultado da simulação</span>

                                    <h2 className="mt-3">{resultado.classificacao}</h2>

                                    {/* PONTUAÇÃO */}
                                    <div className="my-4">
                                        <div
                                            className="mx-auto d-flex align-items-center justify-content-center rounded-circle"
                                            style={{
                                                width: "130px",
                                                height: "130px",
                                                background: "var(--cor-verde-suave)",
                                                border: "5px solid var(--cor-verde)",
                                            }}
                                        >
                                            <div>
                                                <strong
                                                    style={{
                                                        fontSize: "2.5rem",
                                                        color: "var(--cor-verde-escuro)",
                                                    }}
                                                >
                                                    {resultado.total}
                                                </strong>
                                                <div className="small text-muted">pontos</div>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="fs-5">{resultado.mensagem}</p>

                                    {/* MAIOR IMPACTO */}
                                    <div className="alert alert-warning text-start mt-4">
                                        <h5 className="fw-bold">
                                            <i className="bi bi-exclamation-circle me-2"></i>
                                            Principal ponto de atenção
                                        </h5>
                                        <p className="mb-0">
                                            A categoria que mais contribuiu para sua pontuação foi{" "}
                                            <strong>
                                                <i className={`bi ${resultado.maiorCategoria.icone} me-1`}></i>
                                                {resultado.maiorCategoria.nome}
                                            </strong>
                                            , representando <strong>{resultado.maiorCategoria.valor}%</strong> do resultado estimado.
                                        </p>
                                    </div>

                                    {/* RECOMENDAÇÃO */}
                                    <div className="alert alert-success text-start mt-3">
                                        <h5 className="fw-bold">
                                            <i className="bi bi-leaf me-2"></i>
                                            Sugestão para você
                                        </h5>
                                        <p className="mb-0">{resultado.recomendacao}</p>
                                    </div>

                                    {/* GRÁFICO DE BARRAS */}
                                    <div className="mt-5 text-start">
                                        <h5 className="mb-3 text-center fw-bold">
                                            <i className="bi bi-bar-chart-fill me-2"></i>
                                            Distribuição do impacto
                                        </h5>

                                        <div className="progress" style={{ height: "35px" }}>
                                            <div
                                                className="progress-bar bg-warning text-dark fw-bold"
                                                role="progressbar"
                                                style={{ width: `${resultado.pctEnergia}%` }}
                                                aria-valuenow={resultado.pctEnergia}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {resultado.pctEnergia > 8 && `${resultado.pctEnergia}%`}
                                            </div>
                                            <div
                                                className="progress-bar bg-danger fw-bold"
                                                role="progressbar"
                                                style={{ width: `${resultado.pctTransporte}%` }}
                                                aria-valuenow={resultado.pctTransporte}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {resultado.pctTransporte > 8 && `${resultado.pctTransporte}%`}
                                            </div>
                                            <div
                                                className="progress-bar bg-info text-dark fw-bold"
                                                role="progressbar"
                                                style={{ width: `${resultado.pctReciclagem}%` }}
                                                aria-valuenow={resultado.pctReciclagem}
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                            >
                                                {resultado.pctReciclagem > 8 && `${resultado.pctReciclagem}%`}
                                            </div>
                                        </div>

                                        {/* LEGENDA */}
                                        <div className="row mt-4 g-3">
                                            <div className="col-md-4">
                                                <div className="border rounded p-3 text-center">
                                                    <div className="fw-bold">
                                                        <i className="bi bi-lightning-charge-fill text-warning me-2"></i>
                                                        Energia
                                                    </div>
                                                    <div className="fs-5 text-muted">{resultado.pctEnergia}%</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="border rounded p-3 text-center">
                                                    <div className="fw-bold">
                                                        <i className="bi bi-car-front-fill text-danger me-2"></i>
                                                        Transporte
                                                    </div>
                                                    <div className="fs-5 text-muted">{resultado.pctTransporte}%</div>
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="border rounded p-3 text-center">
                                                    <div className="fw-bold">
                                                        <i className="bi bi-recycle text-info me-2"></i>
                                                        Resíduos
                                                    </div>
                                                    <div className="fs-5 text-muted">{resultado.pctReciclagem}%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Simulador;