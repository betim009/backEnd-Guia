const connection = require("./connection");

const selectAll = async () => {
    const [result] = await connection.query(
        'SELECT * FROM nome_tabela'
    );
    return result;
};

module.exports = {
    selectAll
};