import { useState } from "react";

import {
    buscarDadosClimaticos,
    obterDescricaoClima
} from "../services/api";


function ClimaAtual() {

    const [cidade, setCidade] = useState("São Paulo");

    const [dados, setDados] = useState(null);

    const [carregando, setCarregando] = useState(false);

    const [erro, setErro] = useState("");


    const consultarClima = async (event) => {

        event.preventDefault();

        setCarregando(true);

        setErro("");

        setDados(null);


        try {

            const resultado =
                await buscarDadosClimaticos(cidade);

            setDados(resultado);

        } catch (error) {

            setErro(
                error.message ||
                "Não foi possível consultar os dados."
            );

        } finally {

            setCarregando(false);

        }
    };


    return (
        <section
            className="secao"
            aria-labelledby="titulo-clima-atual"
        >

            <div className="container">

                <div className="titulo-secao text-center mb-5">

                    <span className="etiqueta">

                        <i className="bi bi-cloud-sun me-2"></i>

                        Dados climáticos

                    </span>

                    <h2 id="titulo-clima-atual">

                        Consulte o clima da sua cidade

                    </h2>

                    <p>

                        Os dados são obtidos por meio de uma
                        API externa e apresentados em tempo real.

                    </p>

                </div>


                <div className="row justify-content-center">

                    <div className="col-lg-8">

                        <div className="contato-form-card">


                            <form onSubmit={consultarClima}>

                                <label
                                    htmlFor="cidade-clima"
                                    className="form-label fw-semibold"
                                >

                                    Informe uma cidade

                                </label>


                                <div className="input-group mb-3">

                                    <input
                                        type="text"
                                        id="cidade-clima"
                                        className="form-control"
                                        value={cidade}
                                        onChange={(event) =>
                                            setCidade(event.target.value)
                                        }
                                        placeholder="Ex.: São Paulo"
                                        required
                                    />


                                    <button
                                        type="submit"
                                        className="btn btn-success"
                                        disabled={carregando}
                                    >

                                        {carregando ? (
                                            <>
                                                <span
                                                    className="spinner-border spinner-border-sm me-2"
                                                    aria-hidden="true"
                                                ></span>

                                                Consultando...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-search me-2"></i>

                                                Consultar
                                            </>
                                        )}

                                    </button>

                                </div>

                            </form>


                            {erro && (

                                <div
                                    className="alert alert-danger mt-4"
                                    role="alert"
                                >

                                    <i className="bi bi-exclamation-triangle me-2"></i>

                                    {erro}

                                </div>

                            )}


                            {dados && (

                                <div className="mt-4">

                                    <div className="text-center mb-4">

                                        <span className="badge bg-success">

                                            {dados.localizacao.name}

                                        </span>


                                        <h3 className="mt-3">

                                            {dados.localizacao.name}

                                        </h3>


                                        <p className="text-muted">

                                            {dados.localizacao.admin1
                                                ? `${dados.localizacao.admin1} - `
                                                : ""
                                            }

                                            {dados.localizacao.country}

                                        </p>

                                    </div>


                                    <div className="row g-3">


                                        {/* TEMPERATURA */}

                                        <div className="col-md-6">

                                            <div className="p-4 rounded-4 border h-100 text-center">

                                                <i
                                                    className="bi bi-thermometer-half text-success"
                                                    style={{
                                                        fontSize: "2rem"
                                                    }}
                                                ></i>

                                                <h4 className="mt-3">

                                                    Temperatura

                                                </h4>

                                                <strong
                                                    style={{
                                                        fontSize: "2rem"
                                                    }}
                                                >

                                                    {
                                                        dados.clima.current
                                                            .temperature_2m
                                                    }

                                                    °C

                                                </strong>

                                            </div>

                                        </div>


                                        {/* SENSAÇÃO */}

                                        <div className="col-md-6">

                                            <div className="p-4 rounded-4 border h-100 text-center">

                                                <i
                                                    className="bi bi-person-standing text-success"
                                                    style={{
                                                        fontSize: "2rem"
                                                    }}
                                                ></i>

                                                <h4 className="mt-3">

                                                    Sensação

                                                </h4>

                                                <strong
                                                    style={{
                                                        fontSize: "2rem"
                                                    }}
                                                >

                                                    {
                                                        dados.clima.current
                                                            .apparent_temperature
                                                    }

                                                    °C

                                                </strong>

                                            </div>

                                        </div>


                                        {/* UMIDADE */}

                                        <div className="col-md-4">

                                            <div className="p-4 rounded-4 border h-100 text-center">

                                                <i
                                                    className="bi bi-droplet text-success"
                                                    style={{
                                                        fontSize: "1.8rem"
                                                    }}
                                                ></i>

                                                <h5 className="mt-3">

                                                    Umidade

                                                </h5>

                                                <strong>

                                                    {
                                                        dados.clima.current
                                                            .relative_humidity_2m
                                                    }

                                                    %

                                                </strong>

                                            </div>

                                        </div>


                                        {/* VENTO */}

                                        <div className="col-md-4">

                                            <div className="p-4 rounded-4 border h-100 text-center">

                                                <i
                                                    className="bi bi-wind text-success"
                                                    style={{
                                                        fontSize: "1.8rem"
                                                    }}
                                                ></i>

                                                <h5 className="mt-3">

                                                    Vento

                                                </h5>

                                                <strong>

                                                    {
                                                        dados.clima.current
                                                            .wind_speed_10m
                                                    }

                                                    km/h

                                                </strong>

                                            </div>

                                        </div>


                                        {/* PRECIPITAÇÃO */}

                                        <div className="col-md-4">

                                            <div className="p-4 rounded-4 border h-100 text-center">

                                                <i
                                                    className="bi bi-cloud-rain text-success"
                                                    style={{
                                                        fontSize: "1.8rem"
                                                    }}
                                                ></i>

                                                <h5 className="mt-3">

                                                    Precipitação

                                                </h5>

                                                <strong>

                                                    {
                                                        dados.clima.current
                                                            .precipitation
                                                    }

                                                    mm

                                                </strong>

                                            </div>

                                        </div>

                                    </div>


                                    <div className="alert alert-success mt-4 text-center">

                                        <i className="bi bi-cloud-sun me-2"></i>

                                        <strong>

                                            {
                                                obterDescricaoClima(
                                                    dados.clima.current
                                                        .weather_code
                                                )
                                            }

                                        </strong>

                                    </div>

                                </div>

                            )}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}


export default ClimaAtual;