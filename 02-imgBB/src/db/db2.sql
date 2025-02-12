DROP DATABASE IF EXISTS todo_list;

CREATE DATABASE todo_list;

USE todo_list;

-- Tabela básica para tarefas
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seeds para a tabela tasks
INSERT INTO
    tasks (title)
VALUES ('Comprar leite'),
    ('Estudar SQL'),
    ('Ir ao supermercado'),
    ('Fazer exercício'),
    (
        'Enviar e-mail para o cliente'
    );