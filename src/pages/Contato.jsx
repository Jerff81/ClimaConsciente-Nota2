import { useState } from "react";

function Contato() {
    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    const [enviado, setEnviado] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormulario(function (dadosAtuais) {
            return {
                ...dadosAtuais,
                [name]: value,
            };
        });

        if (enviado) {
            setEnviado(false);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        setEnviado(true);

        setFormulario({
            nome: "",
            email: "",
            assunto: "",
            mensagem: "",
        });
    }

    return (
        <>
            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="contato-hero">

                <div className="contato-hero-circulo contato-circulo-1"></div>
                <div className="contato-hero-circulo contato-circulo-2"></div>

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-7">

                            <div className="contato-hero-conteudo">

                                <span className="contato-badge">
                                    <i
                                        className="bi bi-envelope-heart-fill me-2"
                                        aria-hidden="true"
                                    ></i>
                                    Fale conosco
                                </span>

                                <span className="contato-mini-titulo">
                                    CLIMACONSCIENTE • CONEXÃO
                                </span>

                                <h1>
                                    Sua voz também
                                    <span> faz diferença.</span>
                                </h1>

                                <p>
                                    Envie sua dúvida, sugestão ou mensagem
                                    sobre o projeto ClimaConsciente.
                                    Sua participação ajuda a fortalecer a
                                    conscientização ambiental.
                                </p>

                                <div className="contato-hero-destaques">

                                    <div>
                                        <i className="bi bi-chat-dots-fill"></i>
                                        <span>Converse</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-lightbulb-fill"></i>
                                        <span>Compartilhe</span>
                                    </div>

                                    <div>
                                        <i className="bi bi-people-fill"></i>
                                        <span>Participe</span>
                                    </div>

                                </div>

                            </div>

                        </div>


                        <div className="col-lg-5 d-none d-lg-block">

                            <div className="contato-hero-visual">

                                <div className="contato-visual-orbita"></div>

                                <div className="contato-visual-centro">

                                    <i className="bi bi-globe-americas"></i>

                                    <strong>13</strong>

                                    <span>ODS</span>

                                </div>

                                <div className="contato-flutuante contato-flutuante-1">
                                    <i className="bi bi-envelope"></i>
                                    <span>MENSAGEM</span>
                                </div>

                                <div className="contato-flutuante contato-flutuante-2">
                                    <i className="bi bi-chat-heart"></i>
                                    <span>DIÁLOGO</span>
                                </div>

                                <div className="contato-flutuante contato-flutuante-3">
                                    <i className="bi bi-people"></i>
                                    <span>PARTICIPAÇÃO</span>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                ÁREA PRINCIPAL
            ====================================================== */}
            <section
                className="contato-area"
                aria-labelledby="titulo-contato"
            >

                <div className="container">

                    <div className="contato-introducao">

                        <div>

                            <span className="contato-etiqueta">
                                CLIMACONSCIENTE
                            </span>

                            <h2 id="titulo-contato">
                                Vamos conversar sobre
                                <span> sustentabilidade?</span>
                            </h2>

                        </div>

                        <p>
                            Entre em contato para compartilhar ideias,
                            dúvidas ou sugestões relacionadas ao projeto
                            e ao ODS 13.
                        </p>

                    </div>


                    <div className="row g-4 align-items-stretch">

                        {/* =================================================
                            INFORMAÇÕES
                        ================================================== */}
                        <div className="col-lg-5">

                            <div className="contato-info-card">

                                <div className="contato-info-topo">

                                    <span>
                                        FALE COM A GENTE
                                    </span>

                                    <h3>
                                        Toda conversa pode
                                        <strong> gerar uma ação.</strong>
                                    </h3>

                                    <p>
                                        O ClimaConsciente busca aproximar
                                        informação e participação. Use este
                                        espaço para fazer parte dessa ideia.
                                    </p>

                                </div>


                                <div className="contato-info-item">

                                    <div className="contato-info-icone">
                                        <i className="bi bi-envelope-fill"></i>
                                    </div>

                                    <div>
                                        <span>CONTATO</span>
                                        <strong>E-mail</strong>
                                        <p>
                                            Envie sua mensagem pelo formulário
                                            ao lado.
                                        </p>
                                    </div>

                                </div>


                                <div className="contato-info-item">

                                    <div className="contato-info-icone">
                                        <i className="bi bi-globe2"></i>
                                    </div>

                                    <div>
                                        <span>OBJETIVO</span>
                                        <strong>ODS 13</strong>
                                        <p>
                                            Ação Contra a Mudança Global
                                            do Clima.
                                        </p>
                                    </div>

                                </div>


                                <div className="contato-info-item">

                                    <div className="contato-info-icone">
                                        <i className="bi bi-people-fill"></i>
                                    </div>

                                    <div>
                                        <span>PARTICIPAÇÃO</span>
                                        <strong>Faça parte</strong>
                                        <p>
                                            Compartilhe ideias e ajude a
                                            promover atitudes sustentáveis.
                                        </p>
                                    </div>

                                </div>


                                <div className="contato-info-frase">

                                    <i className="bi bi-quote"></i>

                                    <p>
                                        A mudança começa quando
                                        transformamos informação em atitude.
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            FORMULÁRIO
                        ================================================== */}
                        <div className="col-lg-7">

                            <div className="contato-form-card">

                                <div className="contato-form-cabecalho">

                                    <div className="contato-form-icone">
                                        <i className="bi bi-send-fill"></i>
                                    </div>

                                    <div>

                                        <span>
                                            ENVIE UMA MENSAGEM
                                        </span>

                                        <h3>
                                            Como podemos ajudar?
                                        </h3>

                                    </div>

                                </div>


                                <div className="contato-form-intro">
                                    Preencha os campos abaixo. Todos os
                                    campos são importantes para facilitar
                                    o entendimento da sua mensagem.
                                </div>


                                {/* MENSAGEM DE SUCESSO */}
                                {enviado && (
                                    <div
                                        className="contato-sucesso"
                                        role="alert"
                                    >

                                        <div className="contato-sucesso-icone">
                                            <i className="bi bi-check-lg"></i>
                                        </div>

                                        <div>

                                            <strong>
                                                Mensagem enviada!
                                            </strong>

                                            <p>
                                                Obrigado pela participação.
                                                Sua mensagem foi registrada
                                                com sucesso.
                                            </p>

                                        </div>

                                    </div>
                                )}


                                <form onSubmit={handleSubmit}>

                                    <div className="row g-3">

                                        {/* NOME */}
                                        <div className="col-md-6">

                                            <div className="contato-campo">

                                                <label
                                                    htmlFor="nome"
                                                >
                                                    <i className="bi bi-person-fill"></i>
                                                    Nome
                                                </label>

                                                <input
                                                    type="text"
                                                    id="nome"
                                                    name="nome"
                                                    placeholder="Digite seu nome"
                                                    value={formulario.nome}
                                                    onChange={handleChange}
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* E-MAIL */}
                                        <div className="col-md-6">

                                            <div className="contato-campo">

                                                <label
                                                    htmlFor="email"
                                                >
                                                    <i className="bi bi-envelope-fill"></i>
                                                    E-mail
                                                </label>

                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    placeholder="Digite seu e-mail"
                                                    value={formulario.email}
                                                    onChange={handleChange}
                                                    required
                                                />

                                            </div>

                                        </div>


                                        {/* ASSUNTO */}
                                        <div className="col-12">

                                            <div className="contato-campo">

                                                <label
                                                    htmlFor="assunto"
                                                >
                                                    <i className="bi bi-chat-left-text-fill"></i>
                                                    Assunto
                                                </label>

                                                <select
                                                    id="assunto"
                                                    name="assunto"
                                                    value={formulario.assunto}
                                                    onChange={handleChange}
                                                    required
                                                >

                                                    <option value="">
                                                        Selecione um assunto
                                                    </option>

                                                    <option value="duvida">
                                                        Dúvida
                                                    </option>

                                                    <option value="sugestao">
                                                        Sugestão
                                                    </option>

                                                    <option value="projeto">
                                                        Sobre o projeto
                                                    </option>

                                                    <option value="ods13">
                                                        ODS 13
                                                    </option>

                                                    <option value="outro">
                                                        Outro
                                                    </option>

                                                </select>

                                            </div>

                                        </div>


                                        {/* MENSAGEM */}
                                        <div className="col-12">

                                            <div className="contato-campo">

                                                <label
                                                    htmlFor="mensagem"
                                                >
                                                    <i className="bi bi-pencil-square"></i>
                                                    Mensagem
                                                </label>

                                                <textarea
                                                    id="mensagem"
                                                    name="mensagem"
                                                    rows="6"
                                                    placeholder="Escreva sua mensagem..."
                                                    value={formulario.mensagem}
                                                    onChange={handleChange}
                                                    required
                                                ></textarea>

                                                <small>
                                                    Compartilhe sua dúvida,
                                                    ideia ou sugestão.
                                                </small>

                                            </div>

                                        </div>

                                    </div>


                                    {/* BOTÃO */}
                                    <div className="contato-form-rodape">

                                        <span>
                                            <i className="bi bi-shield-check me-1"></i>
                                            Sua mensagem será utilizada
                                            apenas para fins do projeto.
                                        </span>

                                        <button
                                            type="submit"
                                            className="contato-btn-enviar"
                                        >

                                            Enviar mensagem

                                            <i className="bi bi-arrow-right"></i>

                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CTA FINAL
            ====================================================== */}
            <section className="contato-final">

                <div className="contato-final-circulo"></div>

                <div className="container">

                    <div className="contato-final-conteudo">

                        <div className="contato-final-icone">
                            <i className="bi bi-globe-americas"></i>
                        </div>

                        <span>
                            CLIMACONSCIENTE • ODS 13
                        </span>

                        <h2>
                            Uma ideia pode começar
                            <strong> com uma mensagem.</strong>
                        </h2>

                        <p>
                            Informação, diálogo e participação são
                            importantes para construir uma sociedade
                            mais consciente e sustentável.
                        </p>

                    </div>

                </div>

            </section>
        </>
    );
}

export default Contato;