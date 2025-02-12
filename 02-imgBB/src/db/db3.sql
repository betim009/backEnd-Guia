DROP DATABASE IF EXISTS todo_list_detailed;

CREATE DATABASE todo_list_detailed;

USE todo_list_detailed;

-- Tabela detalhada para tarefas
CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    status ENUM(
        'pendente',
        'em andamento',
        'concluída'
    ) DEFAULT 'pendente',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Seeds para a tabela tasks
INSERT INTO
    tasks (title, description, status)
VALUES (
        'Comprar leite',
        'Comprar um litro de leite integral',
        'pendente'
    ),
    (
        'Estudar SQL',
        'Revisar comandos básicos e avançados',
        'em andamento'
    ),
    (
        'Ir ao supermercado',
        'Comprar itens da lista',
        'pendente'
    ),
    (
        'Fazer exercício',
        'Caminhar 30 minutos no parque',
        'concluída'
    ),
    (
        'Enviar e-mail para o cliente',
        'Atualizar o cliente sobre o projeto',
        'pendente'
    );