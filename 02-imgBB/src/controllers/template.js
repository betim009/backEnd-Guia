const { findAll } = require("../services/template");

async function getAll(req, res) {
    const data = await findAll();
    return res.status(200).json(data);
}



module.exports = {
    getAll
};