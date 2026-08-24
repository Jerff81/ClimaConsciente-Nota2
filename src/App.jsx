import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Ods13 from "./pages/Ods13";
import Noticias from "./pages/Noticias";
import Dicas from "./pages/Dicas";
import Simulador from "./pages/Simulador";
import Campanhas from "./pages/Campanhas";
import Contato from "./pages/Contato";

function App() {
    return (
        <>
            <Navbar />

            <main id="conteudo-principal">
                <Routes>

                    {/* Página inicial */}
                    <Route
                        path="/"
                        element={<Home />}
                    />

                    {/* Sobre o projeto */}
                    <Route
                        path="/sobre"
                        element={<Sobre />}
                    />

                    {/* ODS 13 */}
                    <Route
                        path="/ods13"
                        element={<Ods13 />}
                    />

                    {/* Notícias */}
                    <Route
                        path="/noticias"
                        element={<Noticias />}
                    />

                    {/* Dicas */}
                    <Route
                        path="/dicas"
                        element={<Dicas />}
                    />

                    {/* Simulador */}
                    <Route
                        path="/simulador"
                        element={<Simulador />}
                    />

                    {/* Campanhas */}
                    <Route
                        path="/campanhas"
                        element={<Campanhas />}
                    />

                    {/* Contato */}
                    <Route
                        path="/contato"
                        element={<Contato />}
                    />

                    {/* Rota para páginas inexistentes */}
                    <Route
                        path="*"
                        element={
                            <section className="secao">
                                <div className="container text-center">

                                    <div className="py-5">

                                        <i
                                            className="bi bi-exclamation-circle"
                                            style={{
                                                fontSize: "4rem",
                                                color: "#2e7d32"
                                            }}
                                        ></i>

                                        <h1 className="mt-4">
                                            Página não encontrada
                                        </h1>

                                        <p className="text-muted">
                                            A página que você tentou acessar
                                            não existe ou foi removida.
                                        </p>

                                        <a
                                            href="/"
                                            className="btn btn-success rounded-pill px-4"
                                        >
                                            <i className="bi bi-house me-2"></i>
                                            Voltar para o início
                                        </a>

                                    </div>

                                </div>
                            </section>
                        }
                    />

                </Routes>
            </main>

            <Footer />
        </>
    );
}

export default App;