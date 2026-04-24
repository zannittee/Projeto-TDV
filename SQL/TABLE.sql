CREATE TABLE pedidos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_cliente VARCHAR(100),
    pedido TEXT,
    valor_total DECIMAL(10, 2),
    pontos INT,
    status VARCHAR(50)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

