const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost', // Seu host do MySQL
    user: 'root', // Seu usuário do MySQL
    password: '1234', // Sua senha do MySQL
    database: 'sakila', // nome do BD Sakila
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Testando a connection 
//console.log(connection);

module.exports = connection;