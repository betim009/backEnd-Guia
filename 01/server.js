const connection = require('./connection');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, async () => {
    console.log(`A conexão está sendo executada na porta ${PORT}`);

    // O código abaixo é para testarmos a comunicação com o MySQL
    const [result] = await connection.execute('SELECT 1');
    if (result) {
        console.log('Conexão ao BD feita com sucesso!');
    }
});