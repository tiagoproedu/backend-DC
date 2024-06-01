# Projeto Node.js com Express

## Descrição

Este é um projeto básico em Node.js com Express, que implementa um sistema de autenticação de usuários, gerenciamento de tarefas e envio de emails. As tarefas podem ser priorizadas, e os usuários podem redefinir suas senhas.

## Funcionalidades

- **Autenticação de Usuários**
  - Registro de usuários
  - Login de usuários
  - Reset de senha
- **Gerenciamento de Tarefas**
  - Criação de tarefas com prioridade
  - Listagem de todas as tarefas
  - Atualização de tarefas
  - Exclusão de tarefas
- **Envio de Emails**
  - Notificação por email ao registrar um usuário
  - Notificação por email ao redefinir senha

## Estrutura do Projeto

```
projeto/
├── controllers/
│   ├── AuthController.js
│   ├── TaskController.js
│   └── UserController.js
├── models/
│   ├── User.js
│   └── Task.js
├── middleware/
│   ├── authMiddleware.js
│   ├── roleMiddleware.js
│   └── errorHandlerMiddleware.js
├── repositories/
│   ├── UserRepository.js
│   └── TaskRepository.js
├── routes/
│   ├── authRoutes.js
│   ├── userRoutes.js
│   └── taskRoutes.js
├── services/
│   ├── AuthService.js
│   ├── UserService.js
│   └── TaskService.js
├── utils/
│   └── emailService.js
├── app.js
└── package.json
```

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/tiagoproedu/backend-DC.git
cd backend-DC
```

2. Instale as dependências:

```bash
npm install
```

3. Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
JWT_SECRET=your-jwt-secret
```

## Uso

1. Inicie o servidor:

```bash
npm start
```

2. O servidor estará rodando em `http://localhost:3000`.

### Endpoints

#### Autenticação

- **Registrar Usuário**
  - **Endpoint:** `POST /auth/register`
  - **Body:**
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123",
      "role": "user"
    }
    ```

- **Login**
  - **Endpoint:** `POST /auth/login`
  - **Body:**
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```

- **Reset de Senha**
  - **Endpoint:** `POST /auth/reset-password`
  - **Body:**
    ```json
    {
      "email": "john@example.com",
      "newPassword": "newpassword123"
    }
    ```

#### Tarefas

- **Criar Tarefa**
  - **Endpoint:** `POST /tasks`
  - **Body:**
    ```json
    {
      "title": "Nova Tarefa",
      "description": "Descrição da nova tarefa",
      "completed": false,
      "userId": 1,
      "priority": "high"
    }
    ```

- **Obter Todas as Tarefas**
  - **Endpoint:** `GET /tasks`

- **Atualizar Tarefa**
  - **Endpoint:** `PUT /tasks/:id`
  - **Body:**
    ```json
    {
      "title": "Tarefa Atualizada",
      "description": "Descrição atualizada da tarefa",
      "completed": true,
      "priority": "medium"
    }
    ```

- **Excluir Tarefa**
  - **Endpoint:** `DELETE /tasks/:id`

## Testes

Para testar as funcionalidades, você pode usar um cliente HTTP como Postman ou cURL. Além disso, você pode escrever testes automatizados utilizando frameworks como Mocha e Chai.