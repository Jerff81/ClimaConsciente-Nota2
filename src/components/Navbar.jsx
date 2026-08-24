import { useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();

    useEffect(() => {
        const menu = document.getElementById("menuNavegacao");

        if (menu && menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    }, [location]);

    return (
        <>
            <a
                href="#conteudo-principal"
                className="skip-link"
            >
                Ir para o conteúdo principal
            </a>

            <header>

                <nav
                    className="navbar navbar-expand-lg navbar-clima sticky-top"
                    aria-label="Navegação principal"
                >

                    <div className="container">

                        {/* LOGO */}

                        <Link
                            className="logo-marca"
                            to="/"
                            aria-label="ClimaConsciente - página inicial"
                        >

                            <span className="logo-icone">
                                <i className="bi bi-globe-americas"></i>
                            </span>

                            <span>
                                ClimaConsciente
                            </span>

                        </Link>


                        {/* BOTÃO MOBILE */}

                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#menuNavegacao"
                            aria-controls="menuNavegacao"
                            aria-expanded="false"
                            aria-label="Abrir menu de navegação"
                        >

                            <span className="navbar-toggler-icon"></span>

                        </button>


                        {/* MENU */}

                        <div
                            className="collapse navbar-collapse"
                            id="menuNavegacao"
                        >

                            <ul className="navbar-nav ms-auto align-items-lg-center">


                                {/* INÍCIO */}

                                <li className="nav-item">

                                    <NavLink
                                        to="/"
                                        end
                                        className={({ isActive }) =>
                                            `nav-link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Início
                                    </NavLink>

                                </li>


                                {/* SOBRE */}

                                <li className="nav-item">

                                    <NavLink
                                        to="/sobre"
                                        className={({ isActive }) =>
                                            `nav-link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Sobre
                                    </NavLink>

                                </li>


                                {/* ODS 13 */}

                                <li className="nav-item">

                                    <NavLink
                                        to="/ods13"
                                        className={({ isActive }) =>
                                            `nav-link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        ODS 13
                                    </NavLink>

                                </li>


                                {/* NOTÍCIAS */}

                                <li className="nav-item">

                                    <NavLink
                                        to="/noticias"
                                        className={({ isActive }) =>
                                            `nav-link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Notícias
                                    </NavLink>

                                </li>


                                {/* DICAS */}

                                <li className="nav-item">

                                    <NavLink
                                        to="/dicas"
                                        className={({ isActive }) =>
                                            `nav-link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Dicas
                                    </NavLink>

                                </li>


                                {/* SIMULADOR */}

                                <li className="nav-item">

                                    <NavLink
                                        to="/simulador"
                                        className={({ isActive }) =>
                                            `nav-link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Simulador
                                    </NavLink>

                                </li>


                                {/* CAMPANHAS */}

                                <li className="nav-item">

                                    <NavLink
                                        to="/campanhas"
                                        className={({ isActive }) =>
                                            `nav-link ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Campanhas
                                    </NavLink>

                                </li>


                                {/* CONTATO */}

                                <li className="nav-item ms-lg-2">

                                    <NavLink
                                        to="/contato"
                                        className={({ isActive }) =>
                                            `nav-link btn-nav ${
                                                isActive ? "active" : ""
                                            }`
                                        }
                                    >
                                        Contato
                                    </NavLink>

                                </li>

                            </ul>

                        </div>

                    </div>

                </nav>

            </header>
        </>
    );
}

export default Navbar;