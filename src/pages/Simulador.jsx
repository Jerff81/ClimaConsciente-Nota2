import { useState } from "react";

function Simulador() {
    const [energia, setEnergia] = useState(5);
    const [carro, setCarro] = useState(10);
    const [reciclagem, setReciclagem] = useState("sim");
    const [resultado, setResultado] = useState(null);

    function calcularImpacto(event) {
        event.preventDefault();

        const valEnergia = Math.max(0, Number(energia) || 0);
        const valCarro = Math.max(0, Number(carro) || 0);

        const energiaImpacto = valEnergia * 8;
        const transporteImpacto = valCarro * 2;
        const reciclagemImpacto = reciclagem === "sim" ? 10 : 25;

        const total =
            energiaImpacto +
            transporteImpacto +
            reciclagemImpacto;

        const pctEnergia = Math.round(
            (energiaImpacto / total) * 100
        );

        const pctTransporte = Math.round(
            (transporteImpacto / total) * 100
        );

        const pctReciclagem =
            100 - (pctEnergia + pctTransporte);

        let classificacao = "";
        let mensagem = "";
        let recomendacao = "";
        let classeResultado = "";
        let iconeResultado = "";

        if (total <= 80) {
            classificacao = "Baixo impacto";
            mensagem =
                "Excelente! Seus hábitos indicam uma boa preocupação com a sustentabilidade.";
            recomendacao =
                "Continue mantendo essas atitudes e incentive outras pessoas a adotarem hábitos sustentáveis.";
            classeResultado = "baixo";
            iconeResultado = "bi-emoji-smile";
        } else if (total <= 140) {
            classificacao = "Impacto moderado";
            mensagem =
                "Você já adota algumas atitudes positivas, mas ainda existem oportunidades de melhoria.";
            recomendacao =
                "Experimente reduzir o uso do carro, economizar energia e manter a separação correta dos resíduos.";
            classeResultado = "moderado";
            iconeResultado = "bi-emoji-neutral";
        } else {
            classificacao = "Impacto elevado";
            mensagem =
                "Pequenas mudanças na rotina podem ajudar a reduzir seu impacto ambiental.";
            recomendacao =
                "Comece reduzindo o consumo de energia, diminuindo o uso do carro e separando corretamente os resíduos.";
            classeResultado = "elevado";
            iconeResultado = "bi-emoji-frown";
        }

        const categorias = [
            {
                nome: "Energia",
                valor: pctEnergia,
                impacto: energiaImpacto,
                icone: "bi-lightning-charge-fill",
                classe: "energia",
            },
            {
                nome: "Transporte",
                valor: pctTransporte,
                impacto: transporteImpacto,
                icone: "bi-car-front-fill",
                classe: "transporte",
            },
            {
                nome: "Resíduos",
                valor: pctReciclagem,
                impacto: reciclagemImpacto,
                icone: "bi-recycle",
                classe: "residuos",
            },
        ];

        const maiorCategoria = categorias.reduce(
            function (maior, categoria) {
                return categoria.impacto > maior.impacto
                    ? categoria
                    : maior;
            }
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
    }

    function reiniciarSimulador() {
        setEnergia(5);
        setCarro(10);
        setReciclagem("sim");
        setResultado(null);
    }

    return (
        <>
            {/* HERO */}
            <section className="simulador-hero">
                <div className="simulador-hero-circulo simulador-circulo-1"></div>
                <div className="simulador-hero-circulo simulador-circulo-2"></div>

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            <div className="simulador-hero-conteudo">

                                <span className="simulador-badge">
                                    <i
                                        className="bi bi-bar-chart-line-fill me-2"
                                        aria-hidden="true"
                                    ></i>
                                    Ferramenta interativa
                                </span>

                                <span className="simulador-mini-titulo">
                                    CLIMACONSCIENTE • ODS 13
                                </span>

                                <h1>
                                    Descubra o impacto
                                    <span> dos seus hábitos.</span>
                                </h1>

                                <p>
                                    Responda algumas perguntas sobre sua
                                    rotina e veja uma estimativa educativa
                                    do impacto associado às suas escolhas.
                                </p>

                                <div className="simulador-hero-destaques">
                                    <div>
                                        <i className="bi bi-lightning-charge-fill"></i>
                                        <span>Energia</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-car-front-fill"></i>
                                        <span>Transporte</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-recycle"></i>
                                        <span>Resíduos</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 d-none d-lg-block">
                            <div className="simulador-hero-visual">

                                <div className="simulador-visual-orbita"></div>

                                <div className="simulador-visual-centro">
                                    <i className="bi bi-globe-americas"></i>
                                    <strong>13</strong>
                                    <span>ODS</span>
                                </div>

                                <div className="simulador-flutuante simulador-flutuante-1">
                                    <i className="bi bi-graph-up-arrow"></i>
                                    <span>ANALISE</span>
                                </div>

                                <div className="simulador-flutuante simulador-flutuante-2">
                                    <i className="bi bi-leaf"></i>
                                    <span>CONSCIÊNCIA</span>
                                </div>

                                <div className="simulador-flutuante simulador-flutuante-3">
                                    <i className="bi bi-arrow-repeat"></i>
                                    <span>MUDANÇA</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORMULÁRIO */}
            <section className="simulador-area">
                <div className="container">

                    <div className="simulador-introducao">
                        <div>
                            <span className="simulador-etiqueta">
                                SIMULAÇÃO EDUCATIVA
                            </span>

                            <h2>
                                Como são os seus
                                <span> hábitos?</span>
                            </h2>
                        </div>

                        <p>
                            Informe alguns hábitos do seu dia a dia.
                            O simulador utilizará essas informações para
                            apresentar uma estimativa educativa.
                        </p>
                    </div>

                    <div className="row g-4 align-items-stretch">

                        <div className="col-lg-8">
                            <div className="simulador-form-card">

                                <div className="simulador-form-topo">
                                    <div className="simulador-form-icone">
                                        <i className="bi bi-calculator"></i>
                                    </div>

                                    <div>
                                        <span>SEU PERFIL</span>
                                        <h3>Preencha os dados</h3>
                                    </div>
                                </div>

                                <div className="simulador-aviso">
                                    <i className="bi bi-info-circle-fill"></i>

                                    <div>
                                        <strong>Importante</strong>
                                        <p>
                                            Os valores são uma estimativa
                                            educativa e não representam um
                                            cálculo oficial de emissão de
                                            carbono.
                                        </p>
                                    </div>
                                </div>

                                <form onSubmit={calcularImpacto}>

                                    {/* ENERGIA */}
                                    <div className="simulador-campo">

                                        <div className="simulador-campo-cabecalho">
                                            <div className="simulador-campo-icone energia">
                                                <i className="bi bi-lightning-charge-fill"></i>
                                            </div>

                                            <div>
                                                <span>01 • ENERGIA</span>

                                                <label htmlFor="energia">
                                                    Horas de uso de eletrônicos
                                                </label>
                                            </div>
                                        </div>

                                        <p className="simulador-campo-descricao">
                                            Quantas horas por dia você utiliza
                                            equipamentos eletrônicos?
                                        </p>

                                        <div className="simulador-input-wrapper">
                                            <input
                                                type="number"
                                                id="energia"
                                                min="0"
                                                max="24"
                                                value={energia}
                                                onChange={function (e) {
                                                    setEnergia(e.target.value);
                                                }}
                                                required
                                            />

                                            <span>
                                                horas / dia
                                            </span>
                                        </div>

                                        <small>
                                            Informe uma média diária aproximada.
                                        </small>
                                    </div>

                                    {/* TRANSPORTE */}
                                    <div className="simulador-campo">

                                        <div className="simulador-campo-cabecalho">
                                            <div className="simulador-campo-icone transporte">
                                                <i className="bi bi-car-front-fill"></i>
                                            </div>

                                            <div>
                                                <span>02 • TRANSPORTE</span>

                                                <label htmlFor="carro">
                                                    Deslocamento diário
                                                </label>
                                            </div>
                                        </div>

                                        <p className="simulador-campo-descricao">
                                            Quantos quilômetros por dia você
                                            percorre de carro?
                                        </p>

                                        <div className="simulador-input-wrapper">
                                            <input
                                                type="number"
                                                id="carro"
                                                min="0"
                                                value={carro}
                                                onChange={function (e) {
                                                    setCarro(e.target.value);
                                                }}
                                                required
                                            />

                                            <span>
                                                km / dia
                                            </span>
                                        </div>

                                        <small>
                                            Considere a distância média
                                            percorrida diariamente.
                                        </small>
                                    </div>

                                    {/* RECICLAGEM */}
                                    <div className="simulador-campo">

                                        <div className="simulador-campo-cabecalho">
                                            <div className="simulador-campo-icone residuos">
                                                <i className="bi bi-recycle"></i>
                                            </div>

                                            <div>
                                                <span>03 • RESÍDUOS</span>

                                                <label htmlFor="reciclagem">
                                                    Separação dos resíduos
                                                </label>
                                            </div>
                                        </div>

                                        <p className="simulador-campo-descricao">
                                            Você realiza a separação dos
                                            resíduos recicláveis?
                                        </p>

                                        <div className="simulador-opcoes">

                                            <label
                                                className={
                                                    reciclagem === "sim"
                                                        ? "simulador-opcao ativa"
                                                        : "simulador-opcao"
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name="reciclagem"
                                                    value="sim"
                                                    checked={
                                                        reciclagem === "sim"
                                                    }
                                                    onChange={function (e) {
                                                        setReciclagem(
                                                            e.target.value
                                                        );
                                                    }}
                                                />

                                                <i className="bi bi-check-circle-fill"></i>

                                                <div>
                                                    <strong>Sim</strong>
                                                    <span>Eu separo</span>
                                                </div>
                                            </label>

                                            <label
                                                className={
                                                    reciclagem === "nao"
                                                        ? "simulador-opcao ativa negativa"
                                                        : "simulador-opcao"
                                                }
                                            >
                                                <input
                                                    type="radio"
                                                    name="reciclagem"
                                                    value="nao"
                                                    checked={
                                                        reciclagem === "nao"
                                                    }
                                                    onChange={function (e) {
                                                        setReciclagem(
                                                            e.target.value
                                                        );
                                                    }}
                                                />

                                                <i className="bi bi-x-circle-fill"></i>

                                                <div>
                                                    <strong>Não</strong>
                                                    <span>Ainda não</span>
                                                </div>
                                            </label>

                                        </div>
                                    </div>

                                    {/* BOTÕES */}
                                    <div className="simulador-form-acoes">

                                        <button
                                            type="submit"
                                            className="simulador-btn-calcular"
                                        >
                                            <i className="bi bi-calculator-fill"></i>
                                            Calcular meu impacto
                                            <i className="bi bi-arrow-right"></i>
                                        </button>

                                        {resultado && (
                                            <button
                                                type="button"
                                                onClick={reiniciarSimulador}
                                                className="simulador-btn-refazer"
                                            >
                                                <i className="bi bi-arrow-counterclockwise"></i>
                                                Refazer
                                            </button>
                                        )}

                                    </div>

                                </form>
                            </div>
                        </div>

                        {/* LADO DIREITO */}
                        <div className="col-lg-4">
                            <div className="simulador-lateral">

                                <div className="simulador-lateral-numero">
                                    <span>03</span>
                                    <strong>perguntas</strong>
                                </div>

                                <div className="simulador-lateral-linha"></div>

                                <h3>
                                    Pequenas escolhas
                                    <span> fazem diferença.</span>
                                </h3>

                                <p>
                                    O objetivo desta ferramenta é estimular
                                    a reflexão sobre hábitos cotidianos e
                                    mostrar que mudanças simples podem
                                    contribuir para um futuro mais sustentável.
                                </p>

                                <div className="simulador-lateral-item">
                                    <i className="bi bi-lightbulb"></i>
                                    <div>
                                        <strong>Reflita</strong>
                                        <span>
                                            Observe seus hábitos.
                                        </span>
                                    </div>
                                </div>

                                <div className="simulador-lateral-item">
                                    <i className="bi bi-arrow-down-circle"></i>
                                    <div>
                                        <strong>Reduza</strong>
                                        <span>
                                            Diminua desperdícios.
                                        </span>
                                    </div>
                                </div>

                                <div className="simulador-lateral-item">
                                    <i className="bi bi-tree"></i>
                                    <div>
                                        <strong>Transforme</strong>
                                        <span>
                                            Adote práticas sustentáveis.
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* RESULTADO */}
                    {resultado && (
                        <section className="simulador-resultado-area">

                            <div className="simulador-resultado-cabecalho">
                                <span className="simulador-etiqueta">
                                    RESULTADO DA SIMULAÇÃO
                                </span>

                                <h2>
                                    Seu perfil de
                                    <span> impacto</span>
                                </h2>

                                <p>
                                    Veja como os seus hábitos foram
                                    distribuídos nesta simulação educativa.
                                </p>
                            </div>

                            <div className="simulador-resultado-card">

                                <div
                                    className={
                                        "simulador-resultado-principal " +
                                        resultado.classeResultado
                                    }
                                >
                                    <div className="simulador-resultado-icone">
                                        <i
                                            className={
                                                "bi " +
                                                resultado.iconeResultado
                                            }
                                        ></i>
                                    </div>

                                    <span>CLASSIFICAÇÃO</span>

                                    <h3>
                                        {resultado.classificacao}
                                    </h3>

                                    <div className="simulador-pontuacao">
                                        <strong>
                                            {resultado.total}
                                        </strong>

                                        <span>
                                            pontos
                                        </span>
                                    </div>

                                    <p>
                                        {resultado.mensagem}
                                    </p>
                                </div>

                                <div className="simulador-resultado-detalhes">

                                    <div className="simulador-alerta-principal">
                                        <div className="simulador-alerta-icone">
                                            <i className="bi bi-exclamation-triangle-fill"></i>
                                        </div>

                                        <div>
                                            <span>
                                                PRINCIPAL PONTO DE ATENÇÃO
                                            </span>

                                            <p>
                                                A categoria que mais
                                                contribuiu para sua
                                                pontuação foi{" "}
                                                <strong>
                                                    <i
                                                        className={
                                                            "bi " +
                                                            resultado
                                                                .maiorCategoria
                                                                .icone
                                                        }
                                                    ></i>{" "}
                                                    {resultado
                                                        .maiorCategoria
                                                        .nome}
                                                </strong>
                                                , representando{" "}
                                                <strong>
                                                    {
                                                        resultado
                                                            .maiorCategoria
                                                            .valor
                                                    }
                                                    %
                                                </strong>{" "}
                                                do resultado estimado.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="simulador-recomendacao">
                                        <div className="simulador-recomendacao-icone">
                                            <i className="bi bi-leaf-fill"></i>
                                        </div>

                                        <div>
                                            <span>
                                                SUGESTÃO PARA VOCÊ
                                            </span>

                                            <p>
                                                {resultado.recomendacao}
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* DISTRIBUIÇÃO */}
                            <div className="simulador-distribuicao">

                                <div className="simulador-distribuicao-titulo">
                                    <div>
                                        <span>
                                            ANÁLISE DO RESULTADO
                                        </span>

                                        <h3>
                                            Distribuição do impacto
                                        </h3>
                                    </div>

                                    <i className="bi bi-bar-chart-fill"></i>
                                </div>

                                <div className="simulador-grafico">

                                    <div
                                        className="simulador-barra energia"
                                        style={{
                                            width:
                                                resultado.pctEnergia + "%",
                                        }}
                                    >
                                        {resultado.pctEnergia > 8
                                            ? resultado.pctEnergia + "%"
                                            : ""}
                                    </div>

                                    <div
                                        className="simulador-barra transporte"
                                        style={{
                                            width:
                                                resultado.pctTransporte + "%",
                                        }}
                                    >
                                        {resultado.pctTransporte > 8
                                            ? resultado.pctTransporte + "%"
                                            : ""}
                                    </div>

                                    <div
                                        className="simulador-barra residuos"
                                        style={{
                                            width:
                                                resultado.pctReciclagem + "%",
                                        }}
                                    >
                                        {resultado.pctReciclagem > 8
                                            ? resultado.pctReciclagem + "%"
                                            : ""}
                                    </div>

                                </div>

                                <div className="simulador-legenda">

                                    <div className="simulador-legenda-item energia">
                                        <div>
                                            <i className="bi bi-lightning-charge-fill"></i>
                                            <span>Energia</span>
                                        </div>

                                        <strong>
                                            {resultado.pctEnergia}%
                                        </strong>
                                    </div>

                                    <div className="simulador-legenda-item transporte">
                                        <div>
                                            <i className="bi bi-car-front-fill"></i>
                                            <span>Transporte</span>
                                        </div>

                                        <strong>
                                            {resultado.pctTransporte}%
                                        </strong>
                                    </div>

                                    <div className="simulador-legenda-item residuos">
                                        <div>
                                            <i className="bi bi-recycle"></i>
                                            <span>Resíduos</span>
                                        </div>

                                        <strong>
                                            {resultado.pctReciclagem}%
                                        </strong>
                                    </div>

                                </div>

                            </div>

                        </section>
                    )}

                </div>
            </section>

            {/* FINAL */}
            <section className="simulador-final">
                <div className="simulador-final-circulo"></div>

                <div className="container">
                    <div className="simulador-final-conteudo">

                        <div className="simulador-final-icone">
                            <i className="bi bi-globe-americas"></i>
                        </div>

                        <span>
                            CLIMACONSCIENTE • ODS 13
                        </span>

                        <h2>
                            A mudança começa
                            <strong> com uma escolha.</strong>
                        </h2>

                        <p>
                            Use o resultado como um convite para refletir
                            sobre seus hábitos e buscar pequenas mudanças
                            que façam diferença.
                        </p>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Simulador;