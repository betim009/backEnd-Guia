-- Criação do banco de dados
DROP DATABASE IF EXISTS simple_store;

CREATE DATABASE simple_store;

USE simple_store;

-- Criação da tabela users
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    address VARCHAR(255) DEFAULT NULL,
    phone VARCHAR(20) DEFAULT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seeds para a tabela users
INSERT INTO
    users (
        name,
        email,
        password,
        address,
        phone
    )
VALUES (
        'João Silva',
        'joao.silva@email.com',
        'senha123',
        'Rua A, 123',
        '1234567890'
    ),
    (
        'Maria Souza',
        'maria.souza@email.com',
        'senha123',
        'Rua B, 456',
        '9876543210'
    ),
    (
        'Carlos Oliveira',
        'carlos.oliveira@email.com',
        'senha123',
        'Av. Central, 789',
        '5432167890'
    ),
    (
        'Ana Lima',
        'ana.lima@email.com',
        'senha123',
        'Rua das Flores, 101',
        '1122334455'
    ),
    (
        'Pedro Santos',
        'pedro.santos@email.com',
        'senha123',
        'Rua Azul, 202',
        '2233445566'
    );

-- Criação da tabela products
CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seeds para a tabela products
INSERT INTO
    products (
        name,
        description,
        price,
        stock
    )
VALUES (
        'Camiseta',
        'Camiseta de algodão',
        29.90,
        100
    ),
    (
        'Calça Jeans',
        'Calça jeans com elasticidade',
        89.90,
        50
    ),
    (
        'Tênis Esportivo',
        'Tênis para corrida',
        199.90,
        30
    ),
    (
        'Relógio Digital',
        'Relógio com cronômetro',
        149.90,
        20
    ),
    (
        'Mochila Escolar',
        'Mochila com várias divisões',
        79.90,
        40
    );

-- Criação da tabela orders
CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    quantity INT NOT NULL,
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (product_id) REFERENCES products (id)
);

-- Seeds para a tabela orders
INSERT INTO
    orders (user_id, product_id, quantity)
VALUES (1, 1, 2),
    (2, 3, 1),
    (3, 2, 5),
    (4, 4, 1),
    (5, 5, 3);

-- Criação da tabela categories
CREATE TABLE categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seeds para a tabela categories
INSERT INTO
    categories (name, description)
VALUES (
        'Roupas',
        'Artigos de vestuário'
    ),
    ('Calçados', 'Sapatos e tênis'),
    (
        'Acessórios',
        'Itens complementares de moda'
    ),
    (
        'Eletrônicos',
        'Dispositivos eletrônicos e gadgets'
    ),
    (
        'Livros',
        'Materiais de leitura e aprendizado'
    );