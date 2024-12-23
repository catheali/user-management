# Teste prático: Gerenciamento de Usuários

## Objetivo
Avaliar suas habilidades em **Vue 3 (Composition API)**, **TypeScript**, **POO**, consumo de APIs REST, e utilização do **Vuetify** para criar interfaces modernas e responsivas. O objetivo é criar uma aplicação funcional com funcionalidades completas de gerenciamento de usuários.

---

## Descrição do Teste
Você deve criar uma aplicação de **Gerenciamento de Usuários** com as seguintes funcionalidades:

### Funcionalidades

1. **Tela de Login**
   - Crie uma rota de login onde o usuário pode se autenticar utilizando:
     - **Usuário e Senha:** Validar com base no arquivo `db.json` da API fake.
     - **Tipo de Usuário:**
       - Tipo 1: Admin (permissão para cadastrar, editar e excluir usuários).
       - Tipo 2: Comum (permissão apenas para visualizar a tabela de usuários).
   - Armazene os dados do usuário logado utilizando a **store do Pinia**.

2. **Tela de Criação de Usuários** (Apenas para Admins)
   - Formulário para cadastrar um usuário com os seguintes campos:
     - **Nome** (obrigatório).
     - **Matrícula** (obrigatória e única).
     - **Idade** (entre 18 e 60).
     - **Cargo** (dropdown com opções predefinidas como: "Analista", "Gerente", "Desenvolvedor", etc.).
     - **Tipo de Usuário:** Se é admin (tipo 1) ou comum (tipo 2).
   - Após o cadastro:
     - Instanciar o usuário utilizando a classe `Usuario`.
     - Utilizar os **getters e setters** para manipulação dos dados.
     - Chamar o método `Service.createUsuario()` para fazer o **POST** na API fake e salvar o usuário.

3. **Tela de Listagem de Usuários**
   - Exibir uma tabela de usuários utilizando o **Vuetify**, com as colunas:
     - Nome.
     - Matrícula.
     - Idade.
     - Cargo.
     - Tipo de Usuário (Admin ou Comum).
   - Permitir filtrar os usuários por qualquer um dos campos acima.
   - Implementar paginação na tabela.
   - Para carregar os dados, chamar o método `Service.getUsuarios()` que faz o **GET** na API fake.
   - Usuários do tipo comum podem apenas visualizar esta tabela.

4. **Modal de Edição e Exclusão de Usuários** (Apenas para Admins)
   - **Editar:**
     - Abrir um modal com o formulário preenchido para alterar os dados do usuário.
     - Após confirmação, chamar o método `Service.updateUsuario(id, dadosAtualizados)` para fazer o **PUT** na API.
   - **Excluir:**
     - Abrir um modal para confirmação antes de excluir o usuário.
     - Chamar o método `Service.deleteUsuario(id)` para fazer o **DELETE** na API.

---

## Requisitos Técnicos

1. **Classe `Usuario`**
   - Implementar uma classe que represente um usuário, contendo:
     ```typescript
     class Usuario {
       private nome: string;
       private matricula: string;
       private idade: number;
       private cargo: string;
       private tipo: number; // 1 para admin, 2 para comum
     }
     ```

2. **Classe `Service`**
   - Implementar uma classe com os métodos para consumir a API fake:
     ```typescript
     class Service {
       static async getUsuarios() { /* Implementar GET */ }
       static async createUsuario(usuario: Usuario) { /* Implementar POST */ }
       static async updateUsuario(id: string, dados: Partial<Usuario>) { /* Implementar PUT */ }
       static async deleteUsuario(id: string) { /* Implementar DELETE */ }
     }
     ```

3. **API Fake**
   - Utilize o [JSON Server](https://github.com/typicode/json-server) para simular a API.
   - Configure os seguintes endpoints:
     - `/usuarios`: Para armazenar os dados dos usuários.
     - `/login`: Para validação fake de login.

4. **Estilização**
   - Utilize **Vuetify** para criar uma interface responsiva.
   - Adicione estilos personalizados para melhorar a experiência do usuário.

---

## Instruções para Rodar

### Configuração da API Fake

1. Instale o JSON Server:
   ```bash
   npm install -g json-server
   ```
2. Crie um arquivo `db.json` com o seguinte conteúdo inicial:
   ```json
   {
     "usuarios": [],
     "login": [
       { "id": 1, "usuario": "admin", "senha": "1234", "tipo": 1 },
       { "id": 2, "usuario": "comum", "senha": "5678", "tipo": 2 }
     ]
   }
   ```
3. Inicie o servidor:
   ```bash
   json-server --watch db.json --port 3000
   ```
4. Endereços da API:
   - Usuários: `http://localhost:3000/usuarios`
   - Login: `http://localhost:3000/login`

### Configuração do Projeto Vue

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a aplicação:
   ```bash
   npm run dev
   ```

---

## O que Avaliaremos

1. **Qualidade do Código**
   - Uso correto de TypeScript.
   - Implementação das classes `Usuario` e `Service`.
   - Organização e boas práticas.

2. **Integração com API**
   - Consumo correto da API fake com os métodos (GET, POST, PUT, DELETE).

3. **Interface e Usabilidade**
   - Uso do Vuetify e responsividade.
   - Funcionalidades de filtro, paginação e modal.

4. **Extras (Diferenciais):**
   - Testes unitários para a classe `Service`.
   - Feedback visual (ex.: mensagens de sucesso ou erro).

---

## Prazo de Entrega
O teste deve ser entregue até **terça-feira (24/12), ao meio dia**.

---

## Entrega
Envie o projeto em um repositório público no GitHub para o email contato@goatsd.com contendo:
- O código-fonte completo.
- Um arquivo `README.md` com instruções para execução.
