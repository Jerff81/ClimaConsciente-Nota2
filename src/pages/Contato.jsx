import { useState } from "react";

function Contato() {
    const [formulario, setFormulario] = useState({
        nome: "",
        email: "",
        assunto: "",
        mensagem: "",
    });

    const [enviado, setEnviado] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormulario((dadosAtuais) => ({
            ...dadosAtuais,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        setEnviado(true);

        setFormulario({
            nome: "",
            email: "",
            assunto: "",
            mensagem: "",
        });
    };

    return (
        <>
            {/* =====================================================
                CABEÇALHO DA PÁGINA
            ====================================================== */}
            <section className="pagina-hero">
                <div className="container">

                    <div className="pagina-hero-conteudo">

                        <span className="etiqueta">
                            <i className="bi bi-envelope me-2"></i>
                            Fale conosco
                        </span>

                        <h1>
                            Entre em contato
                        </h1>

                        <p>
                            Envie sua mensagem, dúvida ou sugestão
                            sobre o projeto ClimaConsciente.
                        </p>

                    </div>

                </div>
            </section>


            {/* =====================================================
                ÁREA DE CONTATO
            ====================================================== */}
            <section
                className="secao"
                aria-labelledby="titulo-contato"
            >
                <div className="container">

                    <div className="row g-5 align-items-start">

                        {/* =================================================
                            INFORMAÇÕES
                        ================================================== */}
                        <div className="col-lg-5">

                            <div className="titulo-secao mb-4">

                                <span className="etiqueta">
                                    ClimaConsciente
                                </span>

                                <h2 id="titulo-contato">
                                    Como podemos ajudar?
                                </h2>

                                <p>
                                    Sua participação é importante para
                                    fortalecer a conscientização sobre
                                    as mudanças climáticas.
                                </p>

                            </div>


                            {/* E-MAIL */}

                            <div className="contato-info">

                                <div className="contato-info-icone">
                                    <i className="bi bi-envelope"></i>
                                </div>

                                <div>
                                    <h3>
                                        E-mail
                                    </h3>

                                    <p>
                                        Entre em contato por meio do
                                        formulário ao lado.
                                    </p>
                                </div>

                            </div>


                            {/* ODS */}

                            <div className="contato-info">

                                <div className="contato-info-icone">
                                    <i className="bi bi-globe2"></i>
                                </div>

                                <div>
                                    <h3>
                                        ODS 13
                                    </h3>

                                    <p>
                                        Ação Contra a Mudança Global
                                        do Clima.
                                    </p>
                                </div>

                            </div>


                            {/* PARTICIPAÇÃO */}

                            <div className="contato-info">

                                <div className="contato-info-icone">
                                    <i className="bi bi-people"></i>
                                </div>

                                <div>
                                    <h3>
                                        Participe
                                    </h3>

                                    <p>
                                        Compartilhe ideias e ajude a
                                        promover atitudes sustentáveis.
                                    </p>
                                </div>

                            </div>

                        </div>


                        {/* =================================================
                            FORMULÁRIO
                        ================================================== */}
                        <div className="col-lg-7">

                            <div className="contato-form-card">

                                <h2>
                                    Envie sua mensagem
                                </h2>

                                <p className="text-muted mb-4">
                                    Preencha os campos abaixo.
                                </p>


                                {/* MENSAGEM DE SUCESSO */}

                                {enviado && (
                                    <div
                                        className="alert alert-success d-flex align-items-center"
                                        role="alert"
                                    >

                                        <i className="bi bi-check-circle-fill me-2"></i>

                                        <div>
                                            Mensagem enviada com sucesso!
                                        </div>

                                    </div>
                                )}


                                <form onSubmit={handleSubmit}>

                                    {/* NOME */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="nome"
                                            className="form-label"
                                        >
                                            Nome
                                        </label>

                                        <input
                                            type="text"
                                            id="nome"
                                            name="nome"
                                            className="form-control"
                                            placeholder="Digite seu nome"
                                            value={formulario.nome}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* E-MAIL */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="email"
                                            className="form-label"
                                        >
                                            E-mail
                                        </label>

                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Digite seu e-mail"
                                            value={formulario.email}
                                            onChange={handleChange}
                                            required
                                        />

                                    </div>


                                    {/* ASSUNTO */}

                                    <div className="mb-3">

                                        <label
                                            htmlFor="assunto"
                                            className="form-label"
                                        >
                                            Assunto
                                        </label>

                                        <select
                                            id="assunto"
                                            name="assunto"
                                            className="form-select"
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


                                    {/* MENSAGEM */}

                                    <div className="mb-4">

                                        <label
                                            htmlFor="mensagem"
                                            className="form-label"
                                        >
                                            Mensagem
                                        </label>

                                        <textarea
                                            id="mensagem"
                                            name="mensagem"
                                            className="form-control"
                                            rows="6"
                                            placeholder="Digite sua mensagem"
                                            value={formulario.mensagem}
                                            onChange={handleChange}
                                            required
                                        ></textarea>

                                    </div>


                                    {/* BOTÃO */}

                                    <button
                                        type="submit"
                                        className="btn btn-success rounded-pill px-4"
                                    >

                                        <i className="bi bi-send me-2"></i>

                                        Enviar mensagem

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================================
                CTA
            ====================================================== */}
            <section className="cta">

                <div className="container text-center">

                    <i
                        className="bi bi-globe-americas"
                        style={{ fontSize: "3rem" }}
                    ></i>

                    <h2 className="mt-3">
                        Juntos podemos fazer a diferença
                    </h2>

                    <p className="mt-3 mb-0">
                        A mudança começa com informação,
                        conscientização e pequenas atitudes.
                    </p>

                </div>

            </section>
        </>
    );
}

export default Contato;