function Footer() {
    return (
        <footer className="rodape">

            <div className="container">

                <div className="row gy-4">

                    <div className="col-lg-5">

                        <div className="logo-marca mb-3">
                            <span className="logo-icone">
                                <i className="bi bi-globe-americas"></i>
                            </span>

                            <span>ClimaConsciente</span>
                        </div>

                        <p className="mb-0">
                            Informação e conscientização para transformar
                            pequenas atitudes em grandes ações contra as
                            mudanças climáticas.
                        </p>

                    </div>

                    <div className="col-lg-3">

                        <h5>Navegação</h5>

                        <ul className="lista-rodape">
                            <li>
                                <a href="/">Início</a>
                            </li>

                            <li>
                                <a href="/ods13">ODS 13</a>
                            </li>

                            <li>
                                <a href="/noticias">Notícias</a>
                            </li>

                            <li>
                                <a href="/dicas">Dicas</a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-lg-4">

                        <h5>ODS 13</h5>

                        <p className="mb-0">
                            Ação Contra a Mudança Global do Clima.
                            Faça parte da transformação por um futuro
                            mais sustentável.
                        </p>

                    </div>

                </div>

                <hr />

                <div className="text-center">

                    <p className="mb-0">
                        © 2026 ClimaConsciente. Projeto acadêmico
                        relacionado ao ODS 13.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;