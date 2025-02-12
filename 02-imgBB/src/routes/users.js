const express = require('express');
const multer = require("multer");


const router = express.Router();


const upload = multer({ dest: "uploads/" }); // Pasta onde os arquivos serão salvos

router.post("/", upload.single("file"), (req, res) => {
    const name = req.body.name;
    const file = req.file;

    console.log("Nome:", name);
    console.log("Arquivo recebido:", file);

    res.json({ message: "Usuário criado com sucesso!", name, file });
});
// router.post('/login',);
// router.put('/:id',);
// router.delete('/:id',);

module.exports = router;