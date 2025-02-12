const { selectAll } = require("../models/template");

async function findAll() {
    const results = await selectAll();
    return results;
};

module.exports = {
    findAll
};