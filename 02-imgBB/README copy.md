# backend-simpleUser

### Rota de buscar todos os usuários:
GET: http://localhost:3001/users

GET: http://localhost:3001/users?page=${2}

### Rota de fazer login:
POST: http://localhost:3001/users/login

Exemplo de JSON:
{
    "email": "joao.silva@email.com",
    "password": "senha123"
}

se retornar 1: error de email

se retornar 2: error de password


### Rota de criar um novo usuário:
POST: http://localhost:3001/users

Exemplo de JSON:
{
    "name": "João Silva",
    "email": "joao.silva@email.com",
    "password": "senha123",
}

### Rota para alterar o usuário por id:
ROTA: http://localhost:3001/users/${id}

JSON de exemplo:
{
    "address": "Avenida, 123",
    "phone": "1134567890"
}


### Deletar um usário pelo id
ROTA: http://localhost:3001/users/${id}
