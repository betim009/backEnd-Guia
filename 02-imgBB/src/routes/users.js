const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() }); // Salva na memória

const IMGBB_API_KEY = ""; // Substitua pela sua chave da API

router.post("/", upload.single("file_img"), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: "Nenhum arquivo enviado" });
        }

        // Converte o buffer da imagem para Base64
        const base64Image = req.file.buffer.toString("base64");

        // Envia a imagem para o ImgBB
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({ image: base64Image }),
        });

        const result = await response.json();

        if (result.success) {
            return res.json({ message: "Upload bem-sucedido!", imageUrl: result.data.url });
        } else {
            return res.status(500).json({ error: "Erro ao enviar para ImgBB", details: result });
        }
    } catch (error) {
        return res.status(500).json({ error: "Erro no servidor", details: error.message });
    }
});

module.exports = router;
