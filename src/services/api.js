const GEOCODING_URL =
    "https://geocoding-api.open-meteo.com/v1/search";

const WEATHER_URL =
    "https://api.open-meteo.com/v1/forecast";


/**
 * Busca uma cidade e retorna seus dados de localização.
 */
export async function buscarCidade(cidade) {
    const url = new URL(GEOCODING_URL);

    url.searchParams.set("name", cidade);
    url.searchParams.set("count", "1");
    url.searchParams.set("language", "pt");
    url.searchParams.set("format", "json");
    url.searchParams.set("countryCode", "BR");

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(
            "Não foi possível consultar a localização."
        );
    }

    const dados = await resposta.json();

    if (!dados.results || dados.results.length === 0) {
        throw new Error(
            "Cidade não encontrada."
        );
    }

    return dados.results[0];
}


/**
 * Busca as condições climáticas atuais
 * de uma determinada localização.
 */
export async function buscarClima(latitude, longitude) {
    const url = new URL(WEATHER_URL);

    url.searchParams.set("latitude", latitude);
    url.searchParams.set("longitude", longitude);

    url.searchParams.set(
        "current",
        [
            "temperature_2m",
            "relative_humidity_2m",
            "apparent_temperature",
            "precipitation",
            "wind_speed_10m",
            "weather_code"
        ].join(",")
    );

    url.searchParams.set(
        "timezone",
        "auto"
    );

    url.searchParams.set(
        "temperature_unit",
        "celsius"
    );

    url.searchParams.set(
        "wind_speed_unit",
        "kmh"
    );

    url.searchParams.set(
        "precipitation_unit",
        "mm"
    );

    const resposta = await fetch(url);

    if (!resposta.ok) {
        throw new Error(
            "Não foi possível consultar os dados climáticos."
        );
    }

    const dados = await resposta.json();

    return dados;
}


/**
 * Busca a localização e o clima em uma única função.
 */
export async function buscarDadosClimaticos(cidade) {
    const localizacao = await buscarCidade(cidade);

    const clima = await buscarClima(
        localizacao.latitude,
        localizacao.longitude
    );

    return {
        localizacao,
        clima
    };
}


/**
 * Converte o código meteorológico da Open-Meteo
 * em uma descrição simples para o usuário.
 */
export function obterDescricaoClima(codigo) {
    const descricoes = {
        0: "Céu limpo",
        1: "Principalmente limpo",
        2: "Parcialmente nublado",
        3: "Nublado",

        45: "Neblina",
        48: "Neblina com geada",

        51: "Garoa leve",
        53: "Garoa moderada",
        55: "Garoa intensa",

        56: "Garoa congelante leve",
        57: "Garoa congelante intensa",

        61: "Chuva leve",
        63: "Chuva moderada",
        65: "Chuva intensa",

        66: "Chuva congelante leve",
        67: "Chuva congelante intensa",

        71: "Neve leve",
        73: "Neve moderada",
        75: "Neve intensa",

        77: "Granizo de neve",

        80: "Pancadas de chuva leves",
        81: "Pancadas de chuva moderadas",
        82: "Pancadas de chuva intensas",

        85: "Pancadas de neve leves",
        86: "Pancadas de neve intensas",

        95: "Trovoada",
        96: "Trovoada com granizo leve",
        99: "Trovoada com granizo intenso"
    };

    return (
        descricoes[codigo] ||
        "Condição climática não informada"
    );
}