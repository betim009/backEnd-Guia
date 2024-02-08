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

    const data = result.map((e) => ({
        cityId: e.city_id,
        city: e.city,
    }));

    res.status(200).json(data);
});

app.get('/country', async (req, res) => {
    const [result] = await connection.execute('SELECT * FROM country');
    res.json(result);
});

module.exports = app;