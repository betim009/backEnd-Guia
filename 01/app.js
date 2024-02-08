const connection = require("./connection");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', async (_req, res) => {
    const result = {
        status: 200,
        message: 'Bem vindo ao BD SAKILA',
        rotas: {
            city: true,
            country: true,
        }
    };

    res.status(200).json(result);
});

app.get('/city', async (req, res) => {
    const [result] = await connection.execute('SELECT * FROM city');

    const city = result.map((e) => ({
        cityId: e.city_id,
        city: e.city,
    }));

    const data = {
        totalCities: result.length,
        city,
    }

    res.status(200).json(data);
});

app.get('/city/page/:page?', async (req, res) => {
    // Obtém o número da página a partir dos parâmetros da rota
    const page = req.params.page || 1;

    // Define o número de resultados por página
    const resultsPerPage = 20;

    // Calcula o deslocamento com base na página atual
    const offset = (page - 1) * resultsPerPage;

    // Executa a consulta SQL com LIMIT e OFFSET
    const [result] = await connection.execute(`SELECT * FROM city LIMIT ${resultsPerPage} OFFSET ${offset}`);
    
    const city = result.map((e) => ({
        cityId: e.city_id,
        city: e.city,
    }));

    const data = {
        page,
        totalCities: result.length,
        city
    };

    res.status(200).json(data);
});

app.get('/country', async (req, res) => {
    const [result] = await connection.execute('SELECT * FROM country');
    res.json(result);
});

module.exports = app;