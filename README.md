# 📌 API de Gerenciamento de Tarefas

API REST desenvolvida para gerenciamento de tarefas com autenticação de usuários, criada com foco em boas práticas de backend e ideal para portfólio de desenvolvedor iniciante.

## 🚀 Tecnologias
- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Bcrypt
- Dotenv

## 📂 Funcionalidades
- Cadastro de usuário
- Login com autenticação JWT
- CRUD de tarefas
- Proteção de rotas
- Usuário acessa apenas suas próprias tarefas

## 🔗 Endpoints

### Auth
- POST `/auth/register`
- POST `/auth/login`

### Tasks (JWT necessário)
- POST `/tasks`
- GET `/tasks`
- PUT `/tasks/:id`
- DELETE `/tasks/:id`

## ▶️ Como executar
```bash
npm install
npm run dev
