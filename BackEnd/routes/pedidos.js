const express = require("express");
const router = express.Router();

const connection = require("../database/connection");

console.log("connection:", connection);
console.log("typeof connection:", typeof connection);
console.log("query:", connection.query);

router.post("/novo", (req, res) => {
    const {
        nome_cliente,
        pedido,
        valor_total
    } = req.body;

    const pontos = Math.floor(valor_total / 10);
    const status = "Recebido";

    const sql = `
        INSERT INTO pedidos
        (nome_cliente, pedido, valor_total, pontos, status)
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [nome_cliente, pedido, valor_total, pontos, status],
        (err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    erro: "Erro ao salvar pedido"
                });
            }

            res.json({
                mensagem: "Pedido criado com sucesso!",
                id: result.insertId,
                pontos: pontos
            });
        }
    );
});

module.exports = router;