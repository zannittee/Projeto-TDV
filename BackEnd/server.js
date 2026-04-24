const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("API Tempero da Vó funcionando!");
});

app.get("/pedidos/novo", (req, res) => {
    res.send("Rota de pedidos funcionando!");
});

app.post("/pedidos/novo", (req, res) => {
    const {
        nome_cliente,
        pedido,
        valor_total
    } = req.body;

    // Programa simples de pontos
    const pontos = Math.floor(valor_total / 10);

    // Status inicial do pedido
    const status = "Recebido";

    // Simulação de resposta
    // (depois podemos conectar com MySQL)
    res.json({
        mensagem: "Pedido criado com sucesso",
        cliente: nome_cliente,
        pedido: pedido,
        valor_total: valor_total,
        pontos: pontos,
        status: status
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta dos infernos...");
});